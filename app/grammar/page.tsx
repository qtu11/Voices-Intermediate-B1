'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GRAMMAR_LIST } from '../../data/grammarData';
import {
  BookOpen,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ChevronDown,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

const UNITS = ['ALL', 5, 6, 7, 8, 9, 10] as const;

export default function GrammarPage() {
  const [selectedUnit, setSelectedUnit] = useState<number | 'ALL'>('ALL');
  const [openTopicId, setOpenTopicId] = useState<string>(GRAMMAR_LIST[0].id);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const filteredTopics = GRAMMAR_LIST.filter(
    (topic) => selectedUnit === 'ALL' || topic.unit === selectedUnit
  );

  const quickQuizCount = GRAMMAR_LIST.reduce((total, topic) => total + topic.quickQuiz.length, 0);

  const handleUnitChange = (unit: number | 'ALL') => {
    setSelectedUnit(unit);
    const firstTopic = GRAMMAR_LIST.find((topic) => unit === 'ALL' || topic.unit === unit);
    setOpenTopicId(firstTopic?.id ?? '');
  };

  const handleSelectQuiz = (quizKey: string, option: string) => {
    setUserAnswers((prev) => ({ ...prev, [quizKey]: option }));
    setShowExplanation((prev) => ({ ...prev, [quizKey]: true }));
  };

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="eyebrow">
            <Sparkles className="h-3 w-3 text-violet" />
            12 chủ điểm ngữ pháp · Voices B1
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Ngữ pháp trọng tâm Units 5–10
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Công thức chi tiết, cách dùng, nhận diện bẫy đề thi và các câu trắc nghiệm nhanh kiểm tra tức thì.
          </p>
        </div>

        <div className="grid w-full max-w-sm grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card lg:w-[320px] lg:shrink-0">
          {[
            { value: '12', label: 'Chủ điểm' },
            { value: String(quickQuizCount), label: 'Câu nhanh' },
            { value: '06', label: 'Unit' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-3 py-3.5 text-center">
              <p className="font-display text-2xl font-semibold leading-none text-ink">{stat.value}</p>
              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky unit filter */}
      <div className="sticky top-16 z-30 -mx-5 mt-7 border-y border-line bg-paper/90 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:top-0 lg:mx-0 lg:mt-8 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:rounded-2xl lg:border lg:px-4 lg:py-2.5 lg:shadow-card">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="mr-1 shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Chọn Unit
          </span>
          {UNITS.map((unit) => {
            const isActive = selectedUnit === unit;
            return (
              <button
                key={String(unit)}
                type="button"
                onClick={() => handleUnitChange(unit)}
                aria-pressed={isActive}
                className={`chip ${isActive ? 'chip-active' : ''}`}
              >
                {unit === 'ALL' ? 'Tất cả' : `Unit ${unit}`}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-3 text-[11px] text-ink-muted lg:mt-0 lg:border-0 lg:pt-0">
          <span>
            <strong className="font-semibold text-ink">{filteredTopics.length}</strong> chủ điểm
          </span>
          <Link href="/quizzes" className="hidden items-center gap-1 font-semibold text-brand hover:underline sm:flex">
            Luyện đề <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Topics */}
      <div className="mt-6 space-y-4">
        {filteredTopics.map((topic) => {
          const isOpen = openTopicId === topic.id;

          return (
            <article
              key={topic.id}
              className={`overflow-hidden rounded-3xl border bg-white transition duration-300 ${
                isOpen ? 'border-brand/30 shadow-lift' : 'border-line shadow-card hover:border-line-strong'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenTopicId(isOpen ? '' : topic.id)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <div className="flex min-w-0 items-start gap-3.5">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl font-mono text-[11px] font-bold transition ${
                      isOpen ? 'bg-brand text-paper' : 'bg-violet-soft text-violet'
                    }`}
                  >
                    {topic.code}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-base font-semibold leading-snug text-ink sm:text-lg">{topic.title}</h2>
                    <p className="mt-1 text-[11px] text-ink-muted">
                      Unit {topic.unit} · {topic.unitName}
                    </p>
                  </div>
                </div>

                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition ${
                    isOpen
                      ? 'border-brand bg-brand-soft text-brand'
                      : 'border-line text-ink-muted'
                  }`}
                >
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </span>
              </button>

              {isOpen && (
                <div className="animate-fade-in border-t border-line px-5 pb-6 pt-5 sm:px-6">
                  {/* Formula */}
                  <div className="relative overflow-hidden rounded-2xl bg-brand p-4 text-paper sm:p-5">
                    <span className="pointer-events-none absolute -right-10 -top-14 h-32 w-32 rounded-full border border-white/10" />
                    <div className="relative flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-paper/55">
                        <BookOpen className="h-3 w-3" /> Công thức cốt lõi
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold/80">Formula</span>
                    </div>
                    <p className="relative mt-2 font-mono text-[13px] font-semibold leading-6 text-paper sm:text-sm">
                      {topic.formula}
                    </p>
                    <div className="relative mt-3 border-t border-white/10 pt-3 text-[11px] leading-5 text-paper/65">
                      <span className="font-semibold text-paper/85">Ví dụ: </span>
                      <span className="italic">&ldquo;{topic.example}&rdquo;</span>
                    </div>
                  </div>

                  {/* Usage */}
                  <div className="mt-6">
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Cách dùng &amp; định nghĩa
                    </h3>
                    <p className="mt-2 rounded-2xl border border-line bg-paper/60 p-4 text-[13px] leading-7 text-ink-soft">
                      {topic.usage}
                    </p>
                  </div>

                  {/* Rules */}
                  <div className="mt-6">
                    <h3 className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      Các quy tắc cần ghi nhớ
                    </h3>
                    <ul className="mt-2.5 space-y-2">
                      {topic.rules.map((rule, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 rounded-xl border border-line bg-white p-3 text-[12px] leading-6 text-ink-soft"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft font-mono text-[10px] font-bold text-brand">
                            {index + 1}
                          </span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Traps */}
                  <div className="mt-6">
                    <h3 className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-700">
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                      Bẫy đề thi &amp; lỗi sai phổ biến
                    </h3>
                    <div className="mt-2.5 space-y-2">
                      {topic.traps.map((trap, index) => (
                        <div
                          key={index}
                          className="rounded-xl border border-amber-200/70 bg-amber-50/70 p-3 text-[12px] leading-6 text-amber-950"
                        >
                          {trap}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  {topic.notes.length > 0 && (
                    <div className="mt-6">
                      <h3 className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky">
                        <Lightbulb className="h-3.5 w-3.5" />
                        Ghi chú mở rộng
                      </h3>
                      <div className="mt-2.5 space-y-1.5 rounded-xl border border-sky/15 bg-sky-soft/60 p-3.5">
                        {topic.notes.map((note, index) => (
                          <p key={index} className="flex gap-2 text-[11px] leading-5 text-ink-soft">
                            <span className="text-sky">•</span>
                            {note}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick quiz */}
                  {topic.quickQuiz.length > 0 && (
                    <div className="mt-6 rounded-2xl border border-line bg-paper/50 p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet">
                          <HelpCircle className="h-3.5 w-3.5" />
                          Luyện tập tức thì
                        </h3>
                        <span className="font-mono text-[10px] text-ink-muted">
                          {topic.quickQuiz.length} câu
                        </span>
                      </div>

                      <div className="mt-4 space-y-4">
                        {topic.quickQuiz.map((quiz, questionIndex) => {
                          const quizKey = `${topic.id}-${questionIndex}`;
                          const selected = userAnswers[quizKey];
                          const isRevealed = showExplanation[quizKey];
                          const isCorrect = selected === quiz.answer;

                          return (
                            <div key={questionIndex} className="rounded-2xl border border-line bg-white p-4">
                              <p className="text-[13px] font-semibold leading-6 text-ink">
                                <span className="mr-1.5 font-mono text-[10px] text-ink-muted">
                                  {String(questionIndex + 1).padStart(2, '0')}
                                </span>
                                {quiz.prompt}
                              </p>

                              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                                {quiz.options.map((option, optionIndex) => {
                                  const isThisSelected = selected === option;
                                  const isThisCorrect = option === quiz.answer;

                                  let optionStyle =
                                    'border-line bg-white text-ink-soft hover:border-line-strong hover:bg-paper';
                                  let markerStyle = 'border-line bg-white text-ink-muted';

                                  if (isRevealed) {
                                    if (isThisCorrect) {
                                      optionStyle = 'border-emerald-400 bg-emerald-50 text-emerald-900 font-semibold';
                                      markerStyle = 'border-emerald-500 bg-emerald-600 text-white';
                                    } else if (isThisSelected) {
                                      optionStyle = 'border-rose-300 bg-rose-50 text-rose-900';
                                      markerStyle = 'border-rose-400 bg-rose-500 text-white';
                                    }
                                  }

                                  return (
                                    <button
                                      key={option}
                                      type="button"
                                      onClick={() => handleSelectQuiz(quizKey, option)}
                                      className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left text-[11.5px] font-medium transition ${optionStyle}`}
                                    >
                                      <span
                                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border font-mono text-[10px] font-bold ${markerStyle}`}
                                      >
                                        {String.fromCharCode(65 + optionIndex)}
                                      </span>
                                      {option}
                                    </button>
                                  );
                                })}
                              </div>

                              {isRevealed && (
                                <div
                                  className={`mt-3 flex gap-2.5 rounded-xl border p-3 text-[11px] leading-5 ${
                                    isCorrect
                                      ? 'border-emerald-200 bg-emerald-50/70 text-emerald-950'
                                      : 'border-rose-200 bg-rose-50/70 text-rose-950'
                                  }`}
                                >
                                  {isCorrect ? (
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                                  ) : (
                                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                                  )}
                                  <div>
                                    <strong className="font-semibold">
                                      {isCorrect ? 'Chính xác! ' : 'Chưa đúng. '}
                                    </strong>
                                    {quiz.explanation}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {!filteredTopics.length && (
        <div className="mt-6 rounded-3xl border border-dashed border-line-strong bg-white/60 px-6 py-16 text-center">
          <h2 className="font-display text-xl font-semibold text-ink">Chưa có chủ điểm cho Unit này</h2>
          <button
            type="button"
            onClick={() => handleUnitChange('ALL')}
            className="btn-secondary mt-4 !px-4 !py-2 text-xs"
          >
            Xem tất cả chủ điểm
          </button>
        </div>
      )}

      {/* Footer CTA */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-line bg-[#fbf8f1] p-5 sm:flex-row">
        <p className="text-xs leading-5 text-ink-soft">
          Đã nắm công thức? Kiểm tra ngay với 95 câu ngữ pháp có giải thích chi tiết.
        </p>
        <Link
          href="/quizzes"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-[11px] font-semibold text-paper transition hover:bg-brand-deep"
        >
          Luyện ngữ pháp <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
