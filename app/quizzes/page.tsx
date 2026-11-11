'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { ALL_QUESTIONS } from '../../data/questionsData';
import { OptionKey } from '../../data/questionsData_part1';
import { useSpeech } from '../../hooks/useSpeech';
import {
  GraduationCap,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Award,
  Volume2,
  BookOpen,
  Timer,
  Zap,
  Shuffle,
  RefreshCw,
} from 'lucide-react';

type QuizMode = 'PRACTICE' | 'EXAM' | 'TRUEFALSE';
type Category = 'ALL' | 'VOCAB' | 'GRAMMAR' | 'READING';

/** Deterministic Fisher–Yates shuffle so the order stays stable between renders. */
function shuffleWithSeed<T>(items: T[], seed: number): T[] {
  const result = [...items];
  let state = seed;

  const random = () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

const CATEGORY_TABS: { id: Category; label: string; count: number }[] = [
  { id: 'ALL', label: 'Tất cả', count: ALL_QUESTIONS.length },
  { id: 'VOCAB', label: 'Từ vựng', count: ALL_QUESTIONS.filter((q) => q.category === 'VOCAB').length },
  { id: 'GRAMMAR', label: 'Ngữ pháp', count: ALL_QUESTIONS.filter((q) => q.category === 'GRAMMAR').length },
  { id: 'READING', label: 'Đọc hiểu', count: ALL_QUESTIONS.filter((q) => q.category === 'READING').length },
];

const MODES: { id: QuizMode; label: string; shortLabel: string; icon: typeof BookOpen }[] = [
  { id: 'PRACTICE', label: 'Chế độ học', shortLabel: 'Học', icon: BookOpen },
  { id: 'EXAM', label: 'Thi thử 50 phút', shortLabel: 'Thi thử', icon: Timer },
  { id: 'TRUEFALSE', label: 'Đúng / Sai tốc độ', shortLabel: 'Đúng/Sai', icon: Zap },
];

const UNITS = ['ALL', 5, 6, 7, 8, 9, 10] as const;

export default function QuizzesPage() {
  const [mode, setMode] = useState<QuizMode>('PRACTICE');
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [selectedUnit, setSelectedUnit] = useState<number | 'ALL'>('ALL');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [shuffleEnabled, setShuffleEnabled] = useState(true);
  const [shuffleSeed, setShuffleSeed] = useState(2026);

  const [answers, setAnswers] = useState<Record<number, OptionKey>>({});
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);

  const [tfIdx, setTfIdx] = useState(0);
  const [tfScore, setTfScore] = useState(0);
  const [tfAnswered, setTfAnswered] = useState(0);
  const [tfFeedback, setTfFeedback] = useState<{ type: 'correct' | 'wrong'; text: string } | null>(null);
  const feedbackTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { speak } = useSpeech();

  const filteredQuestions = useMemo(() => {
    const base = ALL_QUESTIONS.filter((q) => {
      const matchCategory = selectedCategory === 'ALL' || q.category === selectedCategory;
      const matchUnit = selectedUnit === 'ALL' || q.unit === selectedUnit;
      return matchCategory && matchUnit;
    });

    return shuffleEnabled ? shuffleWithSeed(base, shuffleSeed) : base;
  }, [selectedCategory, selectedUnit, shuffleEnabled, shuffleSeed]);

  const shuffledAllQuestions = useMemo(
    () => (shuffleEnabled ? shuffleWithSeed(ALL_QUESTIONS, shuffleSeed) : ALL_QUESTIONS),
    [shuffleEnabled, shuffleSeed]
  );

  const safeIdx = filteredQuestions.length ? Math.min(currentIdx, filteredQuestions.length - 1) : 0;
  const currentQ = filteredQuestions[safeIdx];

  const answeredCount = useMemo(
    () => filteredQuestions.filter((q) => answers[q.id] !== undefined).length,
    [filteredQuestions, answers]
  );

  const examScore = useMemo(() => {
    let correct = 0;
    filteredQuestions.forEach((q) => {
      if (answers[q.id] === q.answer) correct++;
    });
    const scale10 =
      filteredQuestions.length > 0 ? ((correct / filteredQuestions.length) * 10).toFixed(1) : '0.0';
    return { correct, total: filteredQuestions.length, scale10 };
  }, [answers, filteredQuestions]);

  const isExamOpen = mode === 'EXAM' && !isExamSubmitted;

  const ringValue = filteredQuestions.length
    ? isExamOpen
      ? answeredCount / filteredQuestions.length
      : examScore.correct / filteredQuestions.length
    : 0;
  const ringPct = Math.round(ringValue * 100);
  const ringCircumference = 2 * Math.PI * 44;

  const handleReset = () => {
    setAnswers({});
    setIsExamSubmitted(false);
    setCurrentIdx(0);
  };

  const handleFilterChange = (category: Category, unit: number | 'ALL') => {
    setSelectedCategory(category);
    setSelectedUnit(unit);
    setCurrentIdx(0);
    setIsExamSubmitted(false);
  };

  const handleSelectOption = (questionId: number, key: OptionKey) => {
    if (mode === 'EXAM' && isExamSubmitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: key }));
  };

  useEffect(() => {
    return () => {
      if (feedbackTimeout.current) clearTimeout(feedbackTimeout.current);
    };
  }, []);

  // Arrow-key navigation between questions.
  useEffect(() => {
    if (mode === 'TRUEFALSE') return;

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentIdx((index) => Math.max(0, Math.min(index, filteredQuestions.length - 1) - 1));
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setCurrentIdx((index) =>
          Math.min(filteredQuestions.length - 1, Math.min(index, filteredQuestions.length - 1) + 1)
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mode, filteredQuestions.length]);

  const resetTrueFalse = () => {
    if (feedbackTimeout.current) {
      clearTimeout(feedbackTimeout.current);
      feedbackTimeout.current = null;
    }
    setTfIdx(0);
    setTfScore(0);
    setTfAnswered(0);
    setTfFeedback(null);
  };

  const handleToggleShuffle = () => {
    setShuffleEnabled((enabled) => !enabled);
    setCurrentIdx(0);
    setIsExamSubmitted(false);
    resetTrueFalse();
  };

  const handleReshuffle = () => {
    setShuffleSeed((seed) => seed + 1);
    setCurrentIdx(0);
    setIsExamSubmitted(false);
    resetTrueFalse();
  };

  return (
    <div className="page-shell">
      {/* Header */}
      <header className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <span className="eyebrow">
            <Sparkles className="h-3 w-3 text-teal" />
            200 câu trắc nghiệm chuẩn Voices B1
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Luyện thi &amp; kiểm tra tự động
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            90 câu từ vựng · 95 câu ngữ pháp · 15 câu đọc hiểu — kèm lời giải chi tiết và thang điểm 10.
          </p>
        </div>

        <div className="grid w-full grid-cols-3 gap-1 rounded-2xl border border-line bg-white p-1 shadow-card xl:w-[420px] xl:shrink-0">
          {MODES.map((item) => {
            const isActive = mode === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                aria-pressed={isActive}
                className={`flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-[10px] font-semibold transition sm:flex-row sm:gap-1.5 sm:text-[11px] ${
                  isActive
                    ? 'bg-brand text-paper shadow-sm'
                    : 'text-ink-soft hover:bg-paper hover:text-ink'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="sm:hidden">{item.shortLabel}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Filters */}
      {mode !== 'TRUEFALSE' && (
        <div className="mt-7 rounded-3xl border border-line bg-white p-3.5 shadow-card sm:p-4">
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="mr-1 shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Phần thi
                </span>
                {CATEGORY_TABS.map((category) => {
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleFilterChange(category.id, selectedUnit)}
                      aria-pressed={isActive}
                      className={`chip ${isActive ? 'chip-active' : ''}`}
                    >
                      {category.label}
                      <span
                        className={`font-mono text-[9px] ${
                          isActive ? 'text-paper/60' : 'text-ink-muted'
                        }`}
                      >
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-line pt-3 lg:justify-end lg:border-0 lg:pt-0">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Thứ tự câu
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleToggleShuffle}
                    aria-pressed={shuffleEnabled}
                    title={shuffleEnabled ? 'Tắt đảo câu, trở về thứ tự gốc' : 'Bật đảo ngẫu nhiên 200 câu'}
                    className={`inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-[10px] font-semibold transition ${
                      shuffleEnabled
                        ? 'border-brand bg-brand text-paper shadow-sm'
                        : 'border-line bg-white text-ink-soft hover:border-line-strong hover:text-ink'
                    }`}
                  >
                    <Shuffle className="h-3 w-3" />
                    Đảo câu
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide ${
                        shuffleEnabled ? 'bg-white/15 text-paper/85' : 'bg-paper-deep text-ink-muted'
                      }`}
                    >
                      {shuffleEnabled ? 'Bật' : 'Tắt'}
                    </span>
                  </button>
                  {shuffleEnabled && (
                    <button
                      type="button"
                      onClick={handleReshuffle}
                      aria-label="Đảo lại thứ tự câu hỏi"
                      title="Đảo lại thứ tự"
                      className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-brand/30 hover:text-brand"
                    >
                      <RefreshCw className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto border-t border-line pt-3 no-scrollbar">
              <span className="mr-1 shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Unit
              </span>
              {UNITS.map((unit) => {
                const isActive = selectedUnit === unit;
                return (
                  <button
                    key={String(unit)}
                    type="button"
                    onClick={() => handleFilterChange(selectedCategory, unit)}
                    aria-pressed={isActive}
                    className={`grid h-7 min-w-8 shrink-0 place-items-center rounded-full border px-2 font-mono text-[10px] font-semibold transition ${
                      isActive
                        ? 'border-brand bg-brand text-paper'
                        : 'border-line bg-white text-ink-soft hover:border-line-strong hover:text-ink'
                    }`}
                  >
                    {unit === 'ALL' ? 'ALL' : `U${unit}`}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TRUE / FALSE SPEED MODE */}
      {mode === 'TRUEFALSE' && (
        <section className="mx-auto mt-8 max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-violet-soft/50 px-5 py-3.5">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet">
                <Zap className="h-3.5 w-3.5" />
                Luyện phản xạ Đúng / Sai
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-semibold text-ink-soft">
                  {tfScore} / {tfAnswered}
                </span>
                <button
                  type="button"
                  onClick={resetTrueFalse}
                  className="grid h-7 w-7 place-items-center rounded-full border border-line bg-white text-ink-muted transition hover:text-ink"
                  aria-label="Làm lại luyện đúng sai"
                >
                  <RotateCcw className="h-3 w-3" />
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              {(() => {
                const q = shuffledAllQuestions[tfIdx % shuffledAllQuestions.length];
                const isTruth = tfIdx % 2 === 0;
                const shownOptionKey = isTruth
                  ? q.answer
                  : q.options.find((option) => option.key !== q.answer)?.key || 'a';
                const shownOption = q.options.find((option) => option.key === shownOptionKey)?.text || '';

                const handleChoice = (userSaysTrue: boolean) => {
                  if (tfFeedback) return;

                  const isUserCorrect = userSaysTrue === isTruth;
                  if (isUserCorrect) setTfScore((score) => score + 1);
                  setTfAnswered((count) => count + 1);
                  setTfFeedback(
                    isUserCorrect
                      ? { type: 'correct', text: 'Chính xác! ' + q.vietnameseExplanation }
                      : {
                          type: 'wrong',
                          text:
                            'Chưa đúng. Đáp án chuẩn là (' +
                            q.answer.toUpperCase() +
                            ') — ' +
                            q.vietnameseExplanation,
                        }
                  );

                  feedbackTimeout.current = setTimeout(() => {
                    setTfFeedback(null);
                    setTfIdx((index) => index + 1);
                  }, 2400);
                };

                return (
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="tag bg-paper-deep/80 text-ink-soft">{q.code}</span>
                      <span className="tag bg-violet-soft text-violet">
                        Unit {q.unit} · {q.category}
                      </span>
                      <span className="ml-auto font-mono text-[10px] text-ink-muted">
                        Câu {tfIdx + 1}
                      </span>
                    </div>

                    <h2 className="mt-5 text-lg font-semibold leading-relaxed text-ink sm:text-xl">
                      {q.prompt}
                    </h2>

                    <div className="mt-5 rounded-2xl border border-line bg-paper/70 p-5 text-center">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                        Phương án điền vào chỗ trống
                      </span>
                      <p className="mt-2 font-display text-2xl font-semibold text-brand sm:text-3xl">
                        &ldquo;{shownOption}&rdquo;
                      </p>
                    </div>

                    <p className="mt-5 text-center text-xs font-medium text-ink-soft">
                      Phương án trên là <strong className="font-semibold text-ink">ĐÚNG</strong> hay{' '}
                      <strong className="font-semibold text-ink">SAI</strong>?
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => handleChoice(true)}
                        disabled={Boolean(tfFeedback)}
                        className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3.5 text-xs font-semibold text-white shadow-card transition hover:bg-emerald-700 disabled:opacity-50 active:scale-[0.99] sm:text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4" /> ĐÚNG
                      </button>
                      <button
                        type="button"
                        onClick={() => handleChoice(false)}
                        disabled={Boolean(tfFeedback)}
                        className="flex items-center justify-center gap-2 rounded-2xl bg-rose-600 px-4 py-3.5 text-xs font-semibold text-white shadow-card transition hover:bg-rose-700 disabled:opacity-50 active:scale-[0.99] sm:text-sm"
                      >
                        <XCircle className="h-4 w-4" /> SAI
                      </button>
                    </div>

                    {tfFeedback && (
                      <div
                        className={`mt-5 rounded-2xl border p-4 text-[11px] leading-5 animate-fade-in ${
                          tfFeedback.type === 'correct'
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-950'
                            : 'border-amber-200 bg-amber-50 text-amber-950'
                        }`}
                      >
                        {tfFeedback.text}
                      </div>
                    )}

                    <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-ink-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                      Trả lời càng nhanh, phản xạ càng tốt — câu tiếp theo tự động sau 2 giây.
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>
      )}

      {/* PRACTICE & EXAM MODE */}
      {mode !== 'TRUEFALSE' && currentQ && (
        <div className="mt-6 grid grid-cols-1 items-start gap-5 lg:grid-cols-12">
          {/* Main question */}
          <div className="lg:col-span-8">
            <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-paper/40 px-5 py-3.5 sm:px-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="tag bg-brand text-paper">{currentQ.code}</span>
                  <span className="tag bg-sky-soft text-sky">
                    Unit {currentQ.unit} · {currentQ.unitName}
                  </span>
                  {currentQ.topic && (
                    <span className="hidden max-w-[260px] truncate text-[10px] font-medium text-ink-muted sm:block">
                      {currentQ.topic}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => speak(currentQ.prompt)}
                  aria-label="Nghe câu hỏi"
                  className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-brand/30 hover:text-brand"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between text-[10px] font-medium text-ink-muted">
                  <span>
                    Câu <strong className="font-semibold text-ink">{safeIdx + 1}</strong> /{' '}
                    {filteredQuestions.length}
                  </span>
                  <span>{answeredCount} đã trả lời</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
                  <div
                    className="h-full rounded-full bg-brand transition-all duration-300"
                    style={{ width: `${((safeIdx + 1) / filteredQuestions.length) * 100}%` }}
                  />
                </div>

                <h2 className="mt-6 text-lg font-semibold leading-relaxed tracking-tight text-ink sm:text-[22px] sm:leading-relaxed">
                  {currentQ.prompt}
                </h2>

                <div className="mt-6 space-y-2.5">
                  {currentQ.options.map((option) => {
                    const isSelected = answers[currentQ.id] === option.key;
                    const isCorrectAnswer = currentQ.answer === option.key;

                    let optionClasses =
                      'border-line bg-white text-ink-soft hover:border-line-strong hover:bg-paper';
                    let markerClasses = 'border-line bg-white text-ink-muted';

                    if (mode === 'PRACTICE' && isSelected) {
                      if (isCorrectAnswer) {
                        optionClasses = 'border-emerald-400 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-200';
                        markerClasses = 'border-emerald-500 bg-emerald-600 text-white';
                      } else {
                        optionClasses = 'border-rose-300 bg-rose-50 text-rose-950 ring-1 ring-rose-100';
                        markerClasses = 'border-rose-400 bg-rose-500 text-white';
                      }
                    } else if (mode === 'PRACTICE' && answers[currentQ.id] && isCorrectAnswer) {
                      optionClasses = 'border-emerald-300 bg-emerald-50/60 text-emerald-900';
                      markerClasses = 'border-emerald-400 bg-emerald-100 text-emerald-800';
                    } else if (mode === 'EXAM' && isExamSubmitted) {
                      if (isCorrectAnswer) {
                        optionClasses = 'border-emerald-400 bg-emerald-50 text-emerald-950';
                        markerClasses = 'border-emerald-500 bg-emerald-600 text-white';
                      } else if (isSelected) {
                        optionClasses = 'border-rose-300 bg-rose-50 text-rose-950';
                        markerClasses = 'border-rose-400 bg-rose-500 text-white';
                      }
                    } else if (isSelected) {
                      optionClasses = 'border-brand bg-brand-soft text-ink ring-1 ring-brand/15';
                      markerClasses = 'border-brand bg-brand text-paper';
                    }

                    return (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => handleSelectOption(currentQ.id, option.key)}
                        className={`flex w-full items-center gap-3.5 rounded-2xl border p-3 text-left transition duration-150 sm:p-3.5 ${optionClasses}`}
                      >
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border font-mono text-[11px] font-bold ${markerClasses}`}
                        >
                          {option.key.toUpperCase()}
                        </span>
                        <span className="flex-1 text-[13px] font-medium leading-6 sm:text-sm">{option.text}</span>
                        {mode === 'PRACTICE' && answers[currentQ.id] && isCorrectAnswer && (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        )}
                        {mode === 'PRACTICE' && isSelected && !isCorrectAnswer && (
                          <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                        )}
                        {mode === 'EXAM' && isExamSubmitted && isCorrectAnswer && (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Practice explanation */}
                {mode === 'PRACTICE' && answers[currentQ.id] && (
                  <div
                    className={`mt-5 rounded-2xl border p-4 ${
                      answers[currentQ.id] === currentQ.answer
                        ? 'border-emerald-200 bg-emerald-50/70'
                        : 'border-amber-200 bg-amber-50/70'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      {answers[currentQ.id] === currentQ.answer ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span className="text-emerald-800">Đáp án chính xác!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-amber-600" />
                          <span className="text-amber-800">
                            Chưa chính xác — đáp án đúng là ({currentQ.answer.toUpperCase()})
                          </span>
                        </>
                      )}
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-ink-soft">{currentQ.vietnameseExplanation}</p>
                    {currentQ.vietnameseTranslation && (
                      <p className="mt-1.5 text-[11px] italic leading-5 text-ink-muted">
                        Dịch: &ldquo;{currentQ.vietnameseTranslation}&rdquo;
                      </p>
                    )}
                  </div>
                )}

                {/* Exam result explanation */}
                {mode === 'EXAM' && isExamSubmitted && (
                  <div className="mt-5 rounded-2xl border border-line bg-paper/60 p-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-ink">
                      <span>Đáp án chuẩn: ({currentQ.answer.toUpperCase()})</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] ${
                          answers[currentQ.id] === currentQ.answer
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {answers[currentQ.id] === currentQ.answer ? 'Bạn làm đúng' : 'Bạn làm sai'}
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-ink-soft">{currentQ.vietnameseExplanation}</p>
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-7 flex items-center justify-between gap-2 border-t border-line pt-4">
                  <button
                    type="button"
                    disabled={safeIdx === 0}
                    onClick={() => setCurrentIdx((index) => Math.max(0, index - 1))}
                    className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-line bg-white px-3 text-[11px] font-semibold text-ink-soft transition hover:border-line-strong hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
                  >
                    <ChevronLeft className="h-4 w-4" /> Câu trước
                  </button>

                  <span className="font-mono text-[10px] font-semibold text-ink-muted">
                    {safeIdx + 1} / {filteredQuestions.length}
                  </span>

                  <button
                    type="button"
                    disabled={safeIdx === filteredQuestions.length - 1}
                    onClick={() =>
                      setCurrentIdx((index) => Math.min(filteredQuestions.length - 1, index + 1))
                    }
                    className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-brand px-3 text-[11px] font-semibold text-paper transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
                  >
                    Câu sau <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 lg:col-span-4">
            {/* Score */}
            <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
              <div className="flex items-center justify-between gap-2">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Award className="h-4 w-4 text-gold" />
                  {mode === 'EXAM' ? 'Bảng điểm bài thi' : 'Tiến độ làm bài'}
                </h2>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[10px] font-semibold text-ink-muted transition hover:text-ink"
                >
                  <RotateCcw className="h-3 w-3" /> Làm lại
                </button>
              </div>

              <div className="mt-4 flex items-center gap-5">
                <div className="relative h-[104px] w-[104px] shrink-0">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#ece7da" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="#164a32"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={ringCircumference}
                      strokeDashoffset={ringCircumference * (1 - ringValue)}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-3xl font-semibold leading-none text-ink">
                      {isExamOpen ? answeredCount : examScore.correct}
                    </span>
                    <span className="mt-1 font-mono text-[9px] text-ink-muted">
                      / {filteredQuestions.length}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {isExamOpen ? 'Đã trả lời' : 'Câu đúng'}
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-ink">
                    {ringPct}
                    <span className="text-sm font-normal text-ink-muted">%</span>
                  </p>
                  <p className="mt-2 text-[11px] leading-5 text-ink-soft">
                    {isExamOpen
                      ? `Còn ${filteredQuestions.length - answeredCount} câu chưa trả lời.`
                      : mode === 'EXAM'
                        ? `Thang điểm 10: ${examScore.scale10} / 10.0`
                        : `${answeredCount} / ${filteredQuestions.length} câu đã làm.`}
                  </p>
                </div>
              </div>

              {mode === 'EXAM' && !isExamSubmitted && (
                <button
                  type="button"
                  onClick={() => setIsExamSubmitted(true)}
                  className="mt-4 w-full rounded-xl bg-brand py-3 text-[11px] font-semibold text-paper transition hover:bg-brand-deep"
                >
                  Nộp bài &amp; xem đáp án
                </button>
              )}

              {mode === 'EXAM' && isExamSubmitted && (
                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-3 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                    Kết quả bài thi
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-emerald-800">
                    {examScore.scale10} / 10
                  </p>
                  <p className="mt-0.5 text-[10px] text-emerald-700">
                    {examScore.correct} / {examScore.total} câu đúng
                  </p>
                </div>
              )}
            </div>

            {/* Question palette */}
            <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Bảng chọn câu hỏi
                </h2>
                <span className="font-mono text-[10px] text-ink-muted">
                  {answeredCount}/{filteredQuestions.length}
                </span>
              </div>

              <div className="mt-3 grid max-h-[320px] grid-cols-6 gap-1.5 overflow-y-auto pr-1">
                {filteredQuestions.map((question, index) => {
                  const isAnswered = answers[question.id] !== undefined;
                  const isCurrent = index === safeIdx;
                  const isCorrect = answers[question.id] === question.answer;

                  let cellStyle = 'bg-paper-deep/60 text-ink-muted hover:bg-paper-deep';
                  if (isCurrent) {
                    cellStyle = 'bg-brand text-paper ring-2 ring-brand/25 ring-offset-1';
                  } else if (mode === 'PRACTICE' && isAnswered) {
                    cellStyle = isCorrect
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-700';
                  } else if (isAnswered) {
                    cellStyle = 'bg-sky-soft text-sky';
                  }

                  return (
                    <button
                      key={question.id}
                      type="button"
                      onClick={() => setCurrentIdx(index)}
                      aria-label={`Đến câu ${index + 1}`}
                      title={question.code}
                      className={`aspect-square rounded-lg font-mono text-[10px] font-semibold transition ${cellStyle}`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-line pt-3 text-[9px] text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-sm bg-sky-soft ring-1 ring-sky/20" /> Đã làm
                </span>
                {mode === 'PRACTICE' ? (
                  <>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-sm bg-emerald-200" /> Đúng
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-sm bg-rose-200" /> Sai
                    </span>
                  </>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-brand" /> Câu hiện tại
                  </span>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-[#fbf8f1] px-4 py-3.5 text-[10px] leading-5 text-ink-muted">
              <strong className="font-semibold text-ink-soft">Mẹo:</strong> dùng phím ← → để chuyển câu nhanh,
              bấm số trong bảng chọn hoặc bật <strong className="font-semibold text-ink-soft">Đảo câu</strong> để
              xáo trộn thứ tự 200 câu.
            </div>
          </div>
        </div>
      )}

      {!currentQ && mode !== 'TRUEFALSE' && (
        <div className="mt-8 rounded-3xl border border-dashed border-line-strong bg-white/60 px-6 py-16 text-center">
          <GraduationCap className="mx-auto h-8 w-8 text-ink-muted" />
          <h2 className="mt-3 font-display text-xl font-semibold text-ink">Chưa có câu hỏi phù hợp</h2>
          <p className="mt-1 text-xs text-ink-soft">Thử chọn lại phần thi hoặc Unit khác.</p>
        </div>
      )}
    </div>
  );
}
