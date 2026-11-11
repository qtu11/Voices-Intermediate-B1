'use client';

import { useState } from 'react';
import Link from 'next/link';
import { READING_PASSAGES } from '../../data/readingData';
import { EXTRA_READING_PASSAGES } from '../../data/readingData_extra';
import { OptionKey } from '../../data/questionsData_part1';
import { useSpeech } from '../../hooks/useSpeech';
import {
  FileText,
  Volume2,
  VolumeX,
  CheckCircle2,
  XCircle,
  BookOpen,
  Sparkles,
  RotateCcw,
  ArrowRight,
} from 'lucide-react';

const ALL_READING_PASSAGES = [...READING_PASSAGES, ...EXTRA_READING_PASSAGES];

export default function ReadingPage() {
  const [selectedPassageId, setSelectedPassageId] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, OptionKey>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [mobilePane, setMobilePane] = useState<'TEXT' | 'QUESTIONS'>('TEXT');

  const { speak, stop, isSpeaking } = useSpeech();

  const passage = ALL_READING_PASSAGES.find((item) => item.id === selectedPassageId) || ALL_READING_PASSAGES[0];

  const handleSelectAnswer = (questionId: number, key: OptionKey) => {
    setAnswers((prev) => ({ ...prev, [questionId]: key }));
    setShowExplanation((prev) => ({ ...prev, [questionId]: true }));
  };

  const score = (() => {
    let correct = 0;
    passage.questions.forEach((question) => {
      if (answers[question.id] === question.answer) correct++;
    });
    return { correct, total: passage.questions.length };
  })();

  const scale10 = ((score.correct / score.total) * 10).toFixed(1);
  const wordCount = passage.paragraphs.reduce((total, paragraph) => total + paragraph.text.split(/\s+/).length, 0);
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 180));

  const resetPassage = () => {
    const ids = new Set(passage.questions.map((question) => question.id));
    setAnswers((prev) => {
      const next = { ...prev };
      ids.forEach((id) => delete next[id]);
      return next;
    });
    setShowExplanation((prev) => {
      const next = { ...prev };
      ids.forEach((id) => delete next[id]);
      return next;
    });
  };

  return (
    <div className="page-shell">
      {/* Header */}
      <header>
        <span className="eyebrow">
          <Sparkles className="h-3 w-3 text-clay" />
          9 bài đọc hiểu · 45 câu hỏi luyện tập
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Luyện đọc hiểu song ngữ B1
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
          Văn bản gốc kèm phát âm chuẩn bên trái, bộ câu hỏi trắc nghiệm và giải thích chi tiết bên phải.
        </p>

        {/* Passage tabs */}
        <div className="-mx-5 mt-6 flex gap-3 overflow-x-auto px-5 pb-1 no-scrollbar sm:mx-0 sm:px-0">
          {ALL_READING_PASSAGES.map((item) => {
            const isActive = selectedPassageId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedPassageId(item.id);
                  setMobilePane('TEXT');
                  stop();
                }}
                aria-pressed={isActive}
                className={`w-[250px] shrink-0 rounded-2xl border p-4 text-left transition duration-300 sm:w-[280px] ${
                  isActive
                    ? 'border-brand bg-brand text-paper shadow-lift'
                    : 'border-line bg-white text-ink shadow-card hover:-translate-y-0.5 hover:border-line-strong'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`tag ${
                      isActive ? 'bg-white/10 text-gold' : 'bg-clay-soft text-clay'
                    }`}
                  >
                    PASSAGE {String(item.id).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? 'text-paper/50' : 'text-ink-muted'
                    }`}
                  >
                    {item.questions.length} câu
                  </span>
                </div>
                <p className="mt-2.5 line-clamp-2 text-[13px] font-semibold leading-snug">
                  {item.title}
                </p>
                <p
                  className={`mt-1.5 truncate text-[10px] ${
                    isActive ? 'text-paper/55' : 'text-ink-muted'
                  }`}
                >
                  {item.units}
                </p>
              </button>
            );
          })}
        </div>
      </header>

      {/* Mobile pane switch */}
      <div className="mt-6 grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-1 shadow-card lg:hidden">
        <button
          type="button"
          onClick={() => setMobilePane('TEXT')}
          aria-pressed={mobilePane === 'TEXT'}
          className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[11px] font-semibold transition ${
            mobilePane === 'TEXT' ? 'bg-brand text-paper' : 'text-ink-soft hover:bg-paper'
          }`}
        >
          <BookOpen className="h-3.5 w-3.5" />
          Bài đọc
        </button>
        <button
          type="button"
          onClick={() => setMobilePane('QUESTIONS')}
          aria-pressed={mobilePane === 'QUESTIONS'}
          className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[11px] font-semibold transition ${
            mobilePane === 'QUESTIONS' ? 'bg-brand text-paper' : 'text-ink-soft hover:bg-paper'
          }`}
        >
          <FileText className="h-3.5 w-3.5" />
          Câu hỏi · {score.correct}/{score.total}
        </button>
      </div>

      {/* Body */}
      <div className="mt-5 grid grid-cols-1 items-start gap-5 lg:mt-6 lg:grid-cols-12">
        {/* Reader */}
        <div
          className={`${mobilePane === 'TEXT' ? 'block' : 'hidden'} lg:col-span-6 lg:block`}
        >
          <div className="rounded-3xl border border-line bg-white shadow-card lg:sticky lg:top-6">
            <div className="border-b border-line px-5 pb-5 pt-5 sm:px-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="tag bg-clay-soft text-clay">{passage.genre}</span>
                  <h2 className="mt-2.5 font-display text-2xl font-semibold leading-tight tracking-tight text-ink">
                    {passage.title}
                  </h2>
                  <p className="mt-1.5 text-[10px] font-medium text-ink-muted">
                    {passage.units} · {wordCount} từ · ~{readingMinutes} phút đọc
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (isSpeaking) {
                      stop();
                    } else {
                      speak(passage.paragraphs.map((paragraph) => paragraph.text).join(' '));
                    }
                  }}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold transition ${
                    isSpeaking
                      ? 'border-rose-200 bg-rose-50 text-rose-700'
                      : 'border-line bg-paper text-ink-soft hover:border-brand/30 hover:text-brand'
                  }`}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="h-3.5 w-3.5 animate-pulse" />
                      Dừng
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-3.5 w-3.5" />
                      Nghe bài
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="px-5 py-5 sm:px-6">
              <div className="space-y-4 lg:max-h-[44vh] lg:overflow-y-auto lg:pr-2">
                {passage.paragraphs.map((paragraph) => (
                  <div key={String(paragraph.index)} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-8 shrink-0 place-items-center rounded-md bg-paper-deep/70 font-mono text-[9px] font-bold text-ink-muted">
                      {paragraph.index}
                    </span>
                    <p className="text-[13px] leading-7 text-ink-soft" lang="en">
                      {paragraph.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-line bg-paper/60 p-4">
                <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  <BookOpen className="h-3 w-3 text-clay" />
                  Từ vựng trong bài
                </p>
                <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {passage.vocabularyHighlights.map((vocab) => (
                    <div
                      key={vocab.word}
                      className="rounded-xl border border-line bg-white px-3 py-2 text-[11px]"
                    >
                      <strong className="font-semibold text-sky">{vocab.word}</strong>
                      <span className="text-ink-soft"> — {vocab.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div
          className={`${mobilePane === 'QUESTIONS' ? 'block' : 'hidden'} space-y-4 lg:col-span-6 lg:block`}
        >
          {/* Score */}
          <div className="flex items-center justify-between gap-4 rounded-3xl border border-line bg-white p-5 shadow-card">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Kết quả bài đọc này
              </p>
              <p className="mt-1 font-display text-2xl font-semibold leading-none text-ink">
                {score.correct}
                <span className="text-sm font-normal text-ink-muted"> / {score.total} câu đúng</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-2xl bg-brand-soft px-3.5 py-2 text-center">
                <p className="font-display text-xl font-semibold leading-none text-brand">{scale10}</p>
                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-brand/60">/ 10 điểm</p>
              </div>
              <button
                type="button"
                onClick={resetPassage}
                aria-label="Làm lại bài đọc này"
                title="Làm lại bài đọc này"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted transition hover:border-brand/30 hover:text-brand"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Question cards */}
          <div className="space-y-4">
            {passage.questions.map((question, index) => {
              const selected = answers[question.id];
              const isRevealed = showExplanation[question.id];
              const isCorrect = selected === question.answer;

              return (
                <article
                  key={question.id}
                  className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="tag bg-brand text-paper">{question.questionNumber}</span>
                    <span className="tag bg-clay-soft text-clay">{question.questionType}</span>
                  </div>

                  <h3 className="mt-3 text-[13px] font-semibold leading-6 text-ink sm:text-sm">
                    <span className="mr-1.5 font-mono text-[10px] text-ink-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {question.prompt}
                  </h3>

                  <div className="mt-3 space-y-2">
                    {question.options.map((option) => {
                      const isThisSelected = selected === option.key;
                      const isThisAnswer = question.answer === option.key;

                      let optionStyle =
                        'border-line bg-white text-ink-soft hover:border-line-strong hover:bg-paper';
                      let markerStyle = 'border-line bg-white text-ink-muted';

                      if (isRevealed) {
                        if (isThisAnswer) {
                          optionStyle = 'border-emerald-400 bg-emerald-50 text-emerald-950';
                          markerStyle = 'border-emerald-500 bg-emerald-600 text-white';
                        } else if (isThisSelected) {
                          optionStyle = 'border-rose-300 bg-rose-50 text-rose-950';
                          markerStyle = 'border-rose-400 bg-rose-500 text-white';
                        }
                      } else if (isThisSelected) {
                        optionStyle = 'border-brand bg-brand-soft text-ink';
                        markerStyle = 'border-brand bg-brand text-paper';
                      }

                      return (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() => handleSelectAnswer(question.id, option.key)}
                          className={`flex w-full items-center gap-2.5 rounded-xl border p-2.5 text-left text-[11.5px] transition ${optionStyle}`}
                        >
                          <span
                            className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg border font-mono text-[10px] font-bold ${markerStyle}`}
                          >
                            {option.key.toUpperCase()}
                          </span>
                          <span className="font-medium leading-5">{option.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {isRevealed && (
                    <div
                      className={`mt-3.5 rounded-2xl border p-3.5 ${
                        isCorrect
                          ? 'border-emerald-200 bg-emerald-50/70'
                          : 'border-amber-200 bg-amber-50/70'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="text-emerald-800">Đáp án chính xác: ({question.answer.toUpperCase()})</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-3.5 w-3.5 text-rose-500" />
                            <span className="text-amber-900">
                              Chưa chính xác — đáp án chuẩn: ({question.answer.toUpperCase()})
                            </span>
                          </>
                        )}
                      </div>
                      <p className="mt-1.5 text-[11px] leading-5 text-ink-soft">{question.explanation}</p>
                      <p className="mt-2 inline-flex rounded-full bg-white/70 px-2 py-1 font-mono text-[9px] text-ink-muted">
                        {question.location}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-line bg-[#fbf8f1] px-4 py-3.5 sm:flex-row">
            <p className="text-[10px] leading-5 text-ink-muted">
              Đã làm xong 5 câu? Tiếp tục với 185 câu từ vựng và ngữ pháp trong phòng luyện đề.
            </p>
            <Link
              href="/quizzes"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[10px] font-semibold text-paper transition hover:bg-brand-deep"
            >
              Vào phòng luyện đề <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
