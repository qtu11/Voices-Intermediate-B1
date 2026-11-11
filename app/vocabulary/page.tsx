'use client';

import { useState, useMemo, useEffect } from 'react';
import { VOCABULARY_LIST, VocabWord } from '../../data/vocabularyData';
import { useSpeech } from '../../hooks/useSpeech';
import {
  Volume2,
  Search,
  X,
  CheckCircle2,
  RotateCw,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Layers,
  List,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

const UNITS = ['ALL', 5, 6, 7, 8, 9, 10] as const;

export default function VocabularyPage() {
  const [selectedUnit, setSelectedUnit] = useState<number | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'LIST' | 'FLASHCARD'>('FLASHCARD');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownWords, setKnownWords] = useState<Record<number, boolean>>({});

  const { speak, isSpeaking } = useSpeech();

  const filteredWords = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return VOCABULARY_LIST.filter((item) => {
      const matchUnit = selectedUnit === 'ALL' || item.unit === selectedUnit;
      const matchSearch =
        !query ||
        item.word.toLowerCase().includes(query) ||
        item.vietnamese.toLowerCase().includes(query) ||
        item.collocation.toLowerCase().includes(query);
      return matchUnit && matchSearch;
    });
  }, [selectedUnit, searchTerm]);

  const safeIndex = filteredWords.length
    ? Math.min(currentCardIndex, filteredWords.length - 1)
    : 0;

  const currentCard: VocabWord | undefined = filteredWords[safeIndex];

  const knownCount = Object.values(knownWords).filter(Boolean).length;
  const deckProgress = filteredWords.length ? ((safeIndex + 1) / filteredWords.length) * 100 : 0;

  const goNext = () => {
    setIsFlipped(false);
    if (!filteredWords.length) return;
    setCurrentCardIndex((prev) => (Math.min(prev, filteredWords.length - 1) + 1) % filteredWords.length);
  };

  const goPrev = () => {
    setIsFlipped(false);
    if (!filteredWords.length) return;
    setCurrentCardIndex(
      (prev) => (Math.min(prev, filteredWords.length - 1) - 1 + filteredWords.length) % filteredWords.length
    );
  };

  const shuffleCard = () => {
    setIsFlipped(false);
    if (!filteredWords.length) return;
    setCurrentCardIndex(Math.floor(Math.random() * filteredWords.length));
  };

  const toggleKnown = (id: number) => {
    setKnownWords((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Keyboard shortcuts for the flashcard deck.
  useEffect(() => {
    if (viewMode !== 'FLASHCARD') return;

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      } else if (event.key === ' ' || event.key === 'Enter') {
        if (target?.closest('button, a')) return;
        event.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const resetDeckPosition = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="page-shell">
      {/* Header */}
      <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="eyebrow">
            <Layers className="h-3 w-3 text-sky" />
            165 từ vựng · 141 gốc + 24 mở rộng
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Kho từ vựng &amp; luyện phát âm
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Voices Intermediate B1 (Units 5–10) · Phát âm bản xứ, ngữ cảnh gợi nhớ và câu ví dụ chuẩn B1 cho từng
            từ.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 rounded-full border border-line bg-white p-1 shadow-card sm:w-auto sm:self-start lg:self-auto">
          <button
            type="button"
            onClick={() => {
              setViewMode('FLASHCARD');
              setIsFlipped(false);
            }}
            aria-pressed={viewMode === 'FLASHCARD'}
            className={`flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
              viewMode === 'FLASHCARD' ? 'bg-brand text-paper shadow-sm' : 'text-ink-soft hover:text-ink'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Flashcard
          </button>
          <button
            type="button"
            onClick={() => setViewMode('LIST')}
            aria-pressed={viewMode === 'LIST'}
            className={`flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
              viewMode === 'LIST' ? 'bg-brand text-paper shadow-sm' : 'text-ink-soft hover:text-ink'
            }`}
          >
            <List className="h-3.5 w-3.5" />
            Danh sách
          </button>
        </div>
      </header>

      {/* Search & filters */}
      <div className="mt-7 rounded-3xl border border-line bg-white p-3 shadow-card sm:p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <div className="relative xl:w-[360px] xl:shrink-0">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            <input
              type="search"
              placeholder="Tìm từ, nghĩa hoặc cụm từ..."
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                resetDeckPosition();
              }}
              className="h-11 w-full rounded-2xl border border-line bg-paper/60 pl-10 pr-10 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  resetDeckPosition();
                }}
                aria-label="Xóa tìm kiếm"
                className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-ink-muted transition hover:bg-paper hover:text-ink"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1 no-scrollbar xl:pb-0">
            {UNITS.map((unit) => {
              const isActive = selectedUnit === unit;
              return (
                <button
                  key={String(unit)}
                  type="button"
                  onClick={() => {
                    setSelectedUnit(unit);
                    resetDeckPosition();
                  }}
                  aria-pressed={isActive}
                  className={`chip ${isActive ? 'chip-active' : ''}`}
                >
                  {unit === 'ALL' ? 'Tất cả' : `Unit ${unit}`}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-line pt-3 text-[11px] text-ink-muted xl:ml-auto xl:border-0 xl:pt-0">
            <span>
              <strong className="font-semibold text-ink">{filteredWords.length}</strong> kết quả
            </span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Đã thuộc <strong className="font-semibold text-ink">{knownCount}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* FLASHCARD MODE */}
      {viewMode === 'FLASHCARD' && (
        <section className="mx-auto mt-8 max-w-3xl" aria-label="Luyện flashcard">
          {currentCard ? (
            <>
              <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-ink-muted">
                <span>
                  Thẻ <strong className="font-semibold text-ink">{safeIndex + 1}</strong> / {filteredWords.length}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Đã thuộc {knownCount} từ
                </span>
              </div>
              <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
                <div
                  className="h-full rounded-full bg-brand transition-all duration-300"
                  style={{ width: `${deckProgress}%` }}
                />
              </div>

              <div className="flip-scene h-[470px] sm:h-[490px]">
                <div className="flip-inner" data-flipped={isFlipped}>
                  {/* FRONT */}
                  <div className="flip-face rounded-[28px] border border-line bg-white shadow-lift">
                    <div className="flex h-full flex-col p-5 sm:p-7">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="tag bg-paper-deep/80 text-ink-soft">{currentCard.code}</span>
                          <span className="tag bg-sky-soft text-sky">
                            Unit {currentCard.unit} · {currentCard.unitName}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleKnown(currentCard.id)}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-semibold transition ${
                            knownWords[currentCard.id]
                              ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                              : 'border-line bg-white text-ink-muted hover:border-line-strong hover:text-ink'
                          }`}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {knownWords[currentCard.id] ? 'Đã nhớ' : 'Chưa nhớ'}
                        </button>
                      </div>

                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setIsFlipped(true)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setIsFlipped(true);
                          }
                        }}
                        aria-label="Lật thẻ để xem nghĩa tiếng Việt"
                        className="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-2xl px-2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                      >
                        <h2 className="font-display text-5xl font-semibold leading-none tracking-tight text-ink sm:text-6xl">
                          {currentCard.word}
                        </h2>
                        <p className="mt-3 font-mono text-sm text-ink-muted sm:text-base">
                          {currentCard.phonetic}
                        </p>

                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            speak(currentCard.word);
                          }}
                          className={`mt-7 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-semibold transition ${
                            isSpeaking
                              ? 'border-brand bg-brand text-paper'
                              : 'border-line bg-paper text-ink-soft hover:border-brand/30 hover:bg-brand-soft hover:text-brand'
                          }`}
                        >
                          <Volume2 className="h-4 w-4" />
                          Nghe phát âm
                        </button>

                        <span className="mt-8 inline-flex items-center gap-1.5 text-[10px] font-medium text-ink-muted">
                          <RotateCw className="h-3 w-3" />
                          Nhấn vào thẻ để xem nghĩa &amp; ví dụ
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-t border-line pt-3 text-[10px] text-ink-muted">
                        <span>
                          Nguồn: <strong className="font-semibold text-ink-soft">{currentCard.source}</strong>
                        </span>
                        <span className="hidden font-mono uppercase tracking-[0.12em] sm:block">
                          Voices Intermediate B1
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-face flip-back rounded-[28px] border border-line bg-white shadow-lift">
                    <div className="flex h-full flex-col p-5 sm:p-7">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="tag bg-paper-deep/80 text-ink-soft">{currentCard.code}</span>
                          <span className="tag bg-sky-soft text-sky">
                            Unit {currentCard.unit} · {currentCard.unitName}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleKnown(currentCard.id)}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-semibold transition ${
                            knownWords[currentCard.id]
                              ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                              : 'border-line bg-white text-ink-muted hover:border-line-strong hover:text-ink'
                          }`}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {knownWords[currentCard.id] ? 'Đã nhớ' : 'Chưa nhớ'}
                        </button>
                      </div>

                      <div className="flex flex-1 flex-col justify-center overflow-y-auto py-4">
                        <div className="text-center">
                          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                            Nghĩa tiếng Việt
                          </span>
                          <p className="mt-1 font-display text-3xl font-semibold leading-snug text-brand sm:text-[2rem]">
                            {currentCard.vietnamese}
                          </p>
                        </div>

                        <div className="mt-5 space-y-3 rounded-2xl border border-line bg-paper/60 p-4">
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                              Cụm thường dùng
                            </span>
                            <p className="mt-0.5 text-sm font-semibold text-ink">{currentCard.collocation}</p>
                          </div>

                          <div className="border-t border-line pt-3">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                                Ví dụ B1
                              </span>
                              <button
                                type="button"
                                onClick={() => speak(currentCard.example)}
                                className="inline-flex items-center gap-1 text-[10px] font-semibold text-sky transition hover:text-ink"
                              >
                                <Volume2 className="h-3 w-3" /> Nghe câu
                              </button>
                            </div>
                            <p className="mt-1 text-sm italic leading-6 text-ink-soft">
                              &ldquo;{currentCard.example}&rdquo;
                            </p>
                          </div>

                          <div className="border-t border-line pt-3">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                              Gợi nhớ ngữ cảnh
                            </span>
                            <p className="mt-0.5 text-[11px] leading-5 text-ink-soft">{currentCard.contextHint}</p>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsFlipped(false)}
                        className="flex items-center justify-center gap-1.5 border-t border-line pt-3 text-[10px] font-medium text-ink-muted transition hover:text-ink"
                      >
                        <RotateCw className="h-3 w-3" />
                        Nhấn để lật lại mặt trước
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2.5 sm:gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex h-12 items-center justify-center gap-1.5 rounded-2xl border border-line bg-white px-3 text-xs font-semibold text-ink-soft shadow-card transition hover:border-line-strong hover:text-ink active:scale-[0.98] sm:justify-start sm:px-5"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Từ trước</span>
                  <span className="sm:hidden">Trước</span>
                </button>

                <button
                  type="button"
                  onClick={shuffleCard}
                  title="Xáo trộn ngẫu nhiên"
                  aria-label="Xáo trộn thẻ ngẫu nhiên"
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white text-ink-soft shadow-card transition hover:border-brand/30 hover:text-brand active:scale-95"
                >
                  <Shuffle className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex h-12 items-center justify-center gap-1.5 rounded-2xl bg-brand px-3 text-xs font-semibold text-paper shadow-card transition hover:bg-brand-deep active:scale-[0.98] sm:justify-end sm:px-5"
                >
                  <span className="hidden sm:inline">Từ tiếp theo</span>
                  <span className="sm:hidden">Tiếp</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-4 hidden items-center justify-center gap-3 text-[10px] text-ink-muted sm:flex">
                <span className="inline-flex items-center gap-1">
                  <kbd className="rounded border border-line bg-white px-1.5 py-0.5 font-mono text-[9px]">←</kbd>
                  <kbd className="rounded border border-line bg-white px-1.5 py-0.5 font-mono text-[9px]">→</kbd>
                  chuyển thẻ
                </span>
                <span className="h-3 w-px bg-line" />
                <span className="inline-flex items-center gap-1">
                  <kbd className="rounded border border-line bg-white px-2 py-0.5 font-mono text-[9px]">Space</kbd>
                  lật thẻ
                </span>
              </p>
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-line-strong bg-white/60 px-6 py-20 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-paper-deep text-ink-muted">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">Không tìm thấy từ phù hợp</h3>
              <p className="mt-1 text-xs text-ink-soft">Thử từ khóa khác hoặc chọn lại Unit.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedUnit('ALL');
                  resetDeckPosition();
                }}
                className="btn-secondary mt-5 !px-4 !py-2 text-xs"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </section>
      )}

      {/* LIST MODE */}
      {viewMode === 'LIST' && (
        <section className="mt-8" aria-label="Danh sách từ vựng">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs text-ink-muted">
              Hiển thị <strong className="font-semibold text-ink">{filteredWords.length}</strong> từ vựng
            </p>
            <span className="hidden items-center gap-1.5 text-[10px] text-ink-muted sm:flex">
              <Sparkles className="h-3 w-3 text-gold" />
              Nhấn vào loa để nghe phát âm
            </span>
          </div>

          {filteredWords.length ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredWords.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col rounded-3xl border border-line bg-white p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="tag bg-paper-deep/80 text-ink-soft">{item.code}</span>
                    <span className="tag bg-sky-soft text-sky">Unit {item.unit}</span>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink">
                        {item.word}
                      </h2>
                      <p className="mt-0.5 font-mono text-[11px] text-ink-muted">{item.phonetic}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => speak(item.word)}
                      aria-label={`Nghe phát âm từ ${item.word}`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink-soft transition hover:border-brand/30 hover:bg-brand hover:text-paper"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-2 text-sm font-semibold text-brand">{item.vietnamese}</p>

                  <div className="mt-3 space-y-1.5 rounded-2xl border border-line bg-paper/60 p-3 text-[11px] leading-5">
                    <p className="text-ink-soft">
                      <span className="text-ink-muted">Cụm từ: </span>
                      <span className="font-semibold text-ink">{item.collocation}</span>
                    </p>
                    <p className="italic text-ink-soft">&ldquo;{item.example}&rdquo;</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-line pt-3 text-[10px]">
                    <span className="truncate text-ink-muted">{item.source}</span>
                    <button
                      type="button"
                      onClick={() => toggleKnown(item.id)}
                      className={`inline-flex shrink-0 items-center gap-1 font-semibold transition ${
                        knownWords[item.id] ? 'text-emerald-600' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {knownWords[item.id] ? 'Đã nhớ' : 'Chưa nhớ'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-line-strong bg-white/60 px-6 py-16 text-center">
              <h3 className="font-display text-xl font-semibold text-ink">Không có kết quả</h3>
              <p className="mt-1 text-xs text-ink-soft">Hãy thử một từ khóa hoặc Unit khác.</p>
            </div>
          )}
        </section>
      )}

      {/* Bottom hint */}
      <div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-3xl border border-line bg-[#fbf8f1] px-5 py-4 sm:flex-row">
        <p className="text-xs text-ink-soft">
          Mẹo: học 15–20 từ mỗi phiên và quay lại vào ngày hôm sau để ghi nhớ lâu hơn.
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode('FLASHCARD')}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-[10px] font-semibold text-ink-soft transition hover:border-brand/30 hover:text-brand"
          >
            <ArrowLeft className="h-3 w-3" /> Flashcard
          </button>
          <button
            type="button"
            onClick={() => setViewMode('LIST')}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-[10px] font-semibold text-ink-soft transition hover:border-brand/30 hover:text-brand"
          >
            Danh sách <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
