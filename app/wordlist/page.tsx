'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  WORDLIST,
  WORDLIST_UNITS,
  type WordlistEntry,
  type WordlistUnit,
} from '../../data/wordlistData';
import { useSpeech } from '../../hooks/useSpeech';
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Download,
  Eye,
  FileText,
  Layers,
  Lightbulb,
  Link2,
  List,
  RotateCcw,
  RotateCw,
  Search,
  SearchX,
  Shuffle,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react';

const PDF_PATH = '/wordlists/intermediate-wordlists-units-5-8.pdf';
const STORAGE_KEY = 'englishb1-wordlist-learned-v1';

const UNIT_STYLES: Record<
  WordlistUnit['accent'],
  { badge: string; bar: string; soft: string; text: string }
> = {
  sky: {
    badge: 'bg-sky-soft text-sky',
    bar: 'bg-sky',
    soft: 'bg-sky-soft/50',
    text: 'text-sky',
  },
  violet: {
    badge: 'bg-violet-soft text-violet',
    bar: 'bg-violet',
    soft: 'bg-violet-soft/50',
    text: 'text-violet',
  },
  teal: {
    badge: 'bg-teal-soft text-teal',
    bar: 'bg-teal',
    soft: 'bg-teal-soft/50',
    text: 'text-teal',
  },
  clay: {
    badge: 'bg-clay-soft text-clay',
    bar: 'bg-clay',
    soft: 'bg-clay-soft/50',
    text: 'text-clay',
  },
};

const UNIT_TOTALS = WORDLIST_UNITS.map((unit) => ({
  ...unit,
  count: WORDLIST.filter((entry) => entry.unit === unit.num).length,
}));

const VALID_IDS = new Set(WORDLIST.map((entry) => entry.id));

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

function seededShuffle<T>(items: T[], seed: number) {
  const result = [...items];
  let state = seed >>> 0;
  const random = () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

interface WordCardProps {
  entry: WordlistEntry;
  accent: WordlistUnit['accent'];
  learned: boolean;
  hidden: boolean;
  revealed: boolean;
  expanded: boolean;
  onReveal: () => void;
  onToggleLearned: () => void;
  onToggleExpanded: () => void;
  onSpeak: () => void;
}

function WordCard({
  entry,
  accent,
  learned,
  hidden,
  revealed,
  expanded,
  onReveal,
  onToggleLearned,
  onToggleExpanded,
  onSpeak,
}: WordCardProps) {
  const style = UNIT_STYLES[accent];
  const meaningHidden = hidden && !revealed;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-card transition duration-200 hover:border-line-strong hover:shadow-lift">
      <span className={`absolute inset-x-0 top-0 h-0.5 ${style.bar} opacity-60`} aria-hidden="true" />

      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-[10px] font-bold ${style.badge}`}
        >
          {String(entry.id).padStart(2, '0')}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="font-display text-[1.35rem] font-semibold leading-tight text-ink">
              {entry.word}
            </h3>
            <span className="font-mono text-[10px] text-ink-muted">{entry.phonetic}</span>
            <span className="tag bg-paper-deep/70 text-ink-soft">{entry.partOfSpeech}</span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
            {meaningHidden ? (
              <button
                type="button"
                onClick={onReveal}
                className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-line-strong bg-paper/60 px-2 py-1 text-[11px] font-medium text-ink-muted transition hover:border-brand/40 hover:text-brand"
              >
                <Eye className="h-3 w-3" />
                Hiện nghĩa
              </button>
            ) : (
              <p className="text-[12px] font-semibold text-brand">{entry.vietnamese}</p>
            )}

            <span className="inline-flex max-w-full items-center gap-1 rounded-lg bg-gold-soft/60 px-2 py-1 text-[10px] font-medium text-ink-soft">
              <Link2 className="h-2.5 w-2.5 shrink-0 text-gold" />
              <span className="truncate">{entry.collocation}</span>
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onSpeak}
            aria-label={`Nghe phát âm ${entry.word}`}
            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-brand/30 hover:text-brand"
          >
            <Volume2 className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={onToggleLearned}
            aria-label={learned ? `Bỏ đánh dấu đã thuộc ${entry.word}` : `Đánh dấu đã thuộc ${entry.word}`}
            aria-pressed={learned}
            className={`grid h-8 w-8 place-items-center rounded-full border transition ${
              learned
                ? 'border-brand/20 bg-brand-soft text-brand'
                : 'border-line bg-white text-ink-muted hover:border-brand/30 hover:text-brand'
            }`}
          >
            {learned ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 border-t border-dashed border-line pt-2.5">
        <button
          type="button"
          onClick={onToggleExpanded}
          aria-expanded={expanded}
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-ink-muted transition hover:text-brand"
        >
          <BookOpen className="h-3 w-3" />
          {expanded ? 'Thu gọn' : 'Định nghĩa & ví dụ'}
          <ChevronDown
            className={`h-3 w-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-muted">
          Unit {entry.unit}
        </span>
      </div>

      {expanded && (
        <div className="mt-3 animate-fade-in rounded-xl bg-paper/70 p-3.5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Định nghĩa B1
          </p>
          <p className="mt-1 text-[12px] leading-5 text-ink-soft">{entry.definition}</p>

          <div className="mt-3 border-l-2 border-gold/50 pl-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Ví dụ trong sách
            </p>
            <p className="mt-1 text-[12px] italic leading-5 text-ink">“{entry.example}”</p>
          </div>
        </div>
      )}
    </article>
  );
}

export default function WordlistPage() {
  const [viewMode, setViewMode] = useState<'LIST' | 'FLASHCARD'>('LIST');
  const [selectedUnit, setSelectedUnit] = useState<number | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [hideMeaning, setHideMeaning] = useState(false);
  const [onlyUnlearned, setOnlyUnlearned] = useState(false);
  const [learned, setLearned] = useState<Record<number, boolean>>({});
  const [hydrated, setHydrated] = useState(false);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [collapsedUnits, setCollapsedUnits] = useState<Record<number, boolean>>({});
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffleNonce, setShuffleNonce] = useState(0);

  const { speak } = useSpeech();

  const scrollCardIntoView = () => {
    window.requestAnimationFrame(() => {
      document.querySelector('.flip-scene')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  };

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const next: Record<number, boolean> = {};
          parsed.forEach((id) => {
            if (typeof id === 'number' && VALID_IDS.has(id)) next[id] = true;
          });
          setLearned(next);
        }
      }
    } catch {
      // Ignore malformed or unavailable storage; the page still works.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const ids = Object.keys(learned)
        .map(Number)
        .filter((id) => VALID_IDS.has(id));
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // Ignore storage failures (private mode, quota, etc.).
    }
  }, [learned, hydrated]);

  const filteredWords = useMemo(() => {
    const query = normalize(searchTerm);
    return WORDLIST.filter((entry) => {
      if (selectedUnit !== 'ALL' && entry.unit !== selectedUnit) return false;
      if (onlyUnlearned && learned[entry.id]) return false;
      if (!query) return true;

      const haystack = normalize(
        [
          entry.word,
          entry.vietnamese,
          entry.definition,
          entry.collocation,
          entry.example,
          entry.partOfSpeech,
          entry.unitName,
        ].join(' ')
      );
      return haystack.includes(query);
    });
  }, [selectedUnit, searchTerm, onlyUnlearned, learned]);

  const deck = useMemo(
    () => (shuffleNonce ? seededShuffle(filteredWords, shuffleNonce) : filteredWords),
    [filteredWords, shuffleNonce]
  );

  const safeCardIndex = deck.length ? Math.min(cardIndex, deck.length - 1) : 0;
  const currentCard = deck[safeCardIndex];

  const learnedCount = useMemo(
    () => Object.values(learned).filter(Boolean).length,
    [learned]
  );
  const filteredLearnedCount = filteredWords.filter((entry) => learned[entry.id]).length;
  const progress = Math.round((learnedCount / WORDLIST.length) * 100);

  const groupedWords = useMemo(
    () =>
      WORDLIST_UNITS.map((unit) => ({
        ...unit,
        entries: filteredWords.filter((entry) => entry.unit === unit.num),
      })).filter((unit) => unit.entries.length > 0),
    [filteredWords]
  );

  useEffect(() => {
    setCardIndex(0);
    setIsFlipped(false);
  }, [selectedUnit, searchTerm, onlyUnlearned]);

  useEffect(() => {
    if (!deck.length && cardIndex !== 0) {
      setCardIndex(0);
    } else if (deck.length && cardIndex > deck.length - 1) {
      setCardIndex(deck.length - 1);
    }
  }, [deck.length, cardIndex]);

  useEffect(() => {
    if (viewMode !== 'FLASHCARD') return;
    scrollCardIntoView();
  }, [viewMode]);

  useEffect(() => {
    if (viewMode !== 'FLASHCARD') return;

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setIsFlipped(false);
        setCardIndex((index) =>
          deck.length ? (Math.min(index, deck.length - 1) + 1) % deck.length : 0
        );
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setIsFlipped(false);
        setCardIndex((index) =>
          deck.length
            ? (Math.min(index, deck.length - 1) - 1 + deck.length) % deck.length
            : 0
        );
      } else if (event.key === ' ' || event.key === 'Enter') {
        if (target?.closest('button, a')) return;
        event.preventDefault();
        setIsFlipped((value) => !value);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [viewMode, deck.length]);

  const toggleLearned = (id: number) => {
    const wasLearned = Boolean(learned[id]);
    setLearned((previous) => {
      const next = { ...previous };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      return next;
    });
    if (!wasLearned && onlyUnlearned) {
      setIsFlipped(false);
    }
  };

  const goNext = () => {
    setIsFlipped(false);
    if (!deck.length) return;
    setCardIndex((index) => (Math.min(index, deck.length - 1) + 1) % deck.length);
  };

  const goPrev = () => {
    setIsFlipped(false);
    if (!deck.length) return;
    setCardIndex(
      (index) => (Math.min(index, deck.length - 1) - 1 + deck.length) % deck.length
    );
  };

  const resetFilters = () => {
    setSelectedUnit('ALL');
    setSearchTerm('');
    setOnlyUnlearned(false);
    setHideMeaning(false);
    setRevealed({});
  };

  const toggleHideMeaning = () => {
    if (!hideMeaning) setRevealed({});
    setHideMeaning((value) => !value);
  };

  const startReview = () => {
    const alreadyInFlashcardMode = viewMode === 'FLASHCARD';
    setViewMode('FLASHCARD');
    setOnlyUnlearned(learnedCount < WORDLIST.length);
    setCardIndex(0);
    setIsFlipped(false);
    setShuffleNonce(0);
    if (alreadyInFlashcardMode) scrollCardIntoView();
  };

  const resetProgress = () => {
    if (!learnedCount) return;
    if (window.confirm('Đặt lại toàn bộ tiến độ đã thuộc của Wordlist?')) {
      setLearned({});
    }
  };

  return (
    <div className="page-shell">
      {/* Header */}
      <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <BookMarked className="h-3 w-3 text-gold" />
            101 từ · 4 Unit · Wordlist gốc
          </span>

          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Wordlist <span className="whitespace-nowrap">Units 5–8,</span>
            <br className="hidden sm:block" />{' '}
            <span className="italic text-brand">học để nhớ lâu.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-soft">
            Toàn bộ 101 từ trong file Wordlist gốc đã được biên soạn lại thành thẻ học: nghĩa
            tiếng Việt, cụm từ vàng, định nghĩa B1 và câu ví dụ. Chuyển giữa danh sách và
            flashcard để học theo cách hợp với bạn.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={startReview} className="btn-primary group">
              Bắt đầu ôn từ chưa thuộc
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <FileText className="h-4 w-4 text-ink-soft" />
              Mở PDF gốc
            </a>
            <a
              href={PDF_PATH}
              download
              className="inline-flex items-center justify-center gap-2 self-start rounded-full px-2 py-3 text-xs font-semibold text-ink-muted transition hover:text-brand sm:self-auto"
            >
              <Download className="h-3.5 w-3.5" />
              Tải PDF
            </a>
          </div>
        </div>

        {/* Progress */}
        <aside className="relative overflow-hidden rounded-3xl bg-brand p-5 text-paper shadow-card">
          <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-gold/25 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex items-center gap-4">
            <div className="relative grid h-20 w-20 shrink-0 place-items-center">
              <svg
                className="absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 36 36"
                aria-hidden="true"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-paper/15"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap={progress > 0 ? 'round' : 'butt'}
                  pathLength={100}
                  strokeDasharray={`${progress} 100`}
                  className="text-gold transition-all duration-500"
                />
              </svg>
              <span className="font-display text-xl font-semibold">{progress}%</span>
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-paper/60">
                Tiến độ ghi nhớ
              </p>
              <p className="mt-1 font-display text-2xl font-semibold leading-none">
                {learnedCount}
                <span className="ml-1 text-sm font-normal text-paper/60">/ 101 từ</span>
              </p>
              <p className="mt-1.5 text-[10px] text-paper/65">
                {hydrated ? `${WORDLIST.length - learnedCount} từ còn lại` : 'Đang tải tiến độ...'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={startReview}
            className="relative mt-4 flex w-full items-center justify-between gap-2 rounded-full bg-paper/10 px-4 py-2.5 text-[11px] font-semibold text-paper ring-1 ring-paper/15 transition hover:bg-paper/15"
          >
            Ôn từ chưa thuộc
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </aside>
      </header>

      {/* Study method */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-gold/20 bg-gold-soft/40 px-4 py-3">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a651f]">
          <Lightbulb className="h-3.5 w-3.5" />
          Cách nhớ
        </span>
        {['Đọc to từ + IPA', 'Ghép với cụm từ vàng', 'Lật thẻ kiểm tra'].map((step, index) => (
          <span key={step} className="flex items-center gap-1.5 text-[11px] text-ink-soft">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-white/80 font-mono text-[9px] font-bold text-gold">
              {index + 1}
            </span>
            {step}
          </span>
        ))}
        <span className="ml-auto hidden text-[10px] text-ink-muted sm:block">
          Học theo cụm sẽ nhớ nhanh hơn học từng từ đơn.
        </span>
      </div>

      {/* Study area */}
      <section id="wordlist-study" className="mt-7 scroll-mt-24" aria-label="Khu vực học Wordlist">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-2 rounded-full border border-line bg-white p-1 shadow-card sm:w-auto">
            <button
              type="button"
              onClick={() => setViewMode('LIST')}
              aria-pressed={viewMode === 'LIST'}
              className={`flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                viewMode === 'LIST'
                  ? 'bg-brand text-paper shadow-sm'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              <List className="h-3.5 w-3.5" />
              Danh sách
            </button>
            <button
              type="button"
              onClick={() => setViewMode('FLASHCARD')}
              aria-pressed={viewMode === 'FLASHCARD'}
              className={`flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                viewMode === 'FLASHCARD'
                  ? 'bg-brand text-paper shadow-sm'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              Flashcard
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setOnlyUnlearned((value) => !value)}
              aria-pressed={onlyUnlearned}
              className={`chip ${onlyUnlearned ? 'chip-active' : ''}`}
            >
              <Circle className="h-3 w-3" />
              Chỉ từ chưa thuộc
            </button>
            {viewMode === 'LIST' && (
              <button
                type="button"
                onClick={toggleHideMeaning}
                aria-pressed={hideMeaning}
                className={`chip ${hideMeaning ? 'chip-active' : ''}`}
              >
                <Eye className="h-3 w-3" />
                {hideMeaning ? 'Đang ẩn nghĩa' : 'Ẩn nghĩa để tự kiểm tra'}
              </button>
            )}
          </div>
        </div>

        {/* Search & filters */}
        <div className="mt-4 rounded-3xl border border-line bg-white p-3 shadow-card sm:p-4">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
            <div className="relative xl:w-[380px] xl:shrink-0">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Tìm từ, nghĩa hoặc cụm từ..."
                aria-label="Tìm từ trong Wordlist"
                className="h-11 w-full rounded-2xl border border-line bg-paper/60 pl-10 pr-10 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Xóa tìm kiếm"
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-ink-muted transition hover:bg-paper hover:text-ink"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="-mx-1 flex flex-1 items-center gap-2 overflow-x-auto px-1 pb-1 no-scrollbar xl:pb-0">
              <button
                type="button"
                onClick={() => setSelectedUnit('ALL')}
                aria-pressed={selectedUnit === 'ALL'}
                className={`chip ${selectedUnit === 'ALL' ? 'chip-active' : ''}`}
              >
                Tất cả
                <span className="font-mono text-[9px] opacity-70">{WORDLIST.length}</span>
              </button>
              {UNIT_TOTALS.map((unit) => (
                <button
                  key={unit.num}
                  type="button"
                  onClick={() => setSelectedUnit(unit.num)}
                  aria-pressed={selectedUnit === unit.num}
                  className={`chip ${selectedUnit === unit.num ? 'chip-active' : ''}`}
                >
                  Unit {unit.num} · {unit.name}
                  <span className="font-mono text-[9px] opacity-70">{unit.count}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-line pt-3 text-[11px] text-ink-muted xl:ml-auto xl:border-0 xl:pt-0">
              <span aria-live="polite">
                <strong className="font-semibold text-ink">{filteredWords.length}</strong> từ
              </span>
              <span className="h-3 w-px bg-line" />
              <span>
                <strong className="font-semibold text-ink">{filteredLearnedCount}</strong> đã thuộc
              </span>
            </div>
          </div>
        </div>

        {/* LIST MODE */}
        {viewMode === 'LIST' && (
          <div className="mt-6">
            {groupedWords.length ? (
              groupedWords.map((unit) => {
                const style = UNIT_STYLES[unit.accent];
                const hiddenByCollapse =
                  collapsedUnits[unit.num] && !searchTerm && !onlyUnlearned;
                const unitLearned = unit.entries.filter((entry) => learned[entry.id]).length;

                return (
                  <section
                    key={unit.num}
                    className="mt-7 first:mt-0"
                    aria-labelledby={`unit-${unit.num}-title`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold ${style.badge}`}
                      >
                        {unit.num}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h2
                          id={`unit-${unit.num}-title`}
                          className="font-display text-2xl font-semibold tracking-tight text-ink"
                        >
                          {unit.name}{' '}
                          <span className="text-base font-normal text-ink-muted">
                            · {unit.vietnamese}
                          </span>
                        </h2>
                        <p className="text-[11px] text-ink-muted">{unit.description}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="tag bg-white text-ink-soft shadow-card">
                          {unitLearned}/{unit.entries.length} đã thuộc
                        </span>
                        {!searchTerm && !onlyUnlearned && (
                          <button
                            type="button"
                            onClick={() =>
                              setCollapsedUnits((previous) => ({
                                ...previous,
                                [unit.num]: !previous[unit.num],
                              }))
                            }
                            aria-expanded={!hiddenByCollapse}
                            aria-controls={`unit-${unit.num}-words`}
                            aria-label={hiddenByCollapse ? `Mở ${unit.name}` : `Thu gọn ${unit.name}`}
                            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-ink-muted transition hover:border-brand/30 hover:text-brand"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                hiddenByCollapse ? '-rotate-90' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </div>

                    {!hiddenByCollapse && (
                      <div
                        id={`unit-${unit.num}-words`}
                        className="mt-4 grid items-start gap-3 lg:grid-cols-2"
                      >
                        {unit.entries.map((entry) => (
                          <WordCard
                            key={entry.id}
                            entry={entry}
                            accent={unit.accent}
                            learned={Boolean(learned[entry.id])}
                            hidden={hideMeaning}
                            revealed={Boolean(revealed[entry.id])}
                            expanded={Boolean(expanded[entry.id])}
                            onReveal={() =>
                              setRevealed((previous) => ({ ...previous, [entry.id]: true }))
                            }
                            onToggleLearned={() => toggleLearned(entry.id)}
                            onToggleExpanded={() =>
                              setExpanded((previous) => ({
                                ...previous,
                                [entry.id]: !previous[entry.id],
                              }))
                            }
                            onSpeak={() => speak(entry.word)}
                          />
                        ))}
                      </div>
                    )}
                  </section>
                );
              })
            ) : (
              <div className="rounded-3xl border border-line bg-white p-10 text-center shadow-card">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-paper-deep/70 text-ink-muted">
                  <SearchX className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                  Không tìm thấy từ phù hợp
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink-soft">
                  Thử một từ khóa khác, chọn Unit khác hoặc bỏ bộ lọc “Chỉ từ chưa thuộc”.
                </p>
                <button type="button" onClick={resetFilters} className="btn-primary mt-5">
                  Xóa bộ lọc
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* FLASHCARD MODE */}
        {viewMode === 'FLASHCARD' && (
          <div className="mx-auto mt-6 max-w-3xl">
            {currentCard ? (
              <>
                <div className="mb-2 flex items-center justify-between gap-3 text-[11px] font-medium text-ink-muted">
                  <span>
                    Thẻ <strong className="font-semibold text-ink">{safeCardIndex + 1}</strong> /{' '}
                    {deck.length}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    Đã thuộc {learnedCount} từ
                  </span>
                </div>
                <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
                  <div
                    className="h-full rounded-full bg-brand transition-all duration-300"
                    style={{ width: `${((safeCardIndex + 1) / deck.length) * 100}%` }}
                  />
                </div>

                <div className="flip-scene h-[500px] sm:h-[520px]">
                  <div className="flip-inner" data-flipped={isFlipped}>
                    {/* FRONT */}
                    <div className="flip-face rounded-[28px] border border-line bg-white shadow-lift">
                      <div className="relative flex h-full flex-col overflow-hidden p-5 sm:p-7">
                        <span
                          className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-[10rem] leading-none text-paper-deep/45"
                          aria-hidden="true"
                        >
                          {currentCard.word.charAt(0).toUpperCase()}
                        </span>

                        <div className="relative flex items-start justify-between gap-3">
                          <span
                            className={`tag ${UNIT_STYLES[WORDLIST_UNITS.find((unit) => unit.num === currentCard.unit)?.accent ?? 'sky'].badge}`}
                          >
                            Unit {currentCard.unit} · {currentCard.unitName}
                          </span>
                          <button
                            type="button"
                            onClick={() => speak(currentCard.word)}
                            aria-label={`Nghe phát âm ${currentCard.word}`}
                            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white/80 text-ink-soft backdrop-blur transition hover:border-brand/30 hover:text-brand"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="relative flex flex-1 flex-col items-center justify-center px-2 text-center">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                            Từ cần nhớ
                          </p>
                          <h2 className="mt-4 max-w-full break-words font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                            {currentCard.word}
                          </h2>
                          <p className="mt-3 font-mono text-xs text-ink-muted sm:text-sm">
                            {currentCard.phonetic}
                          </p>
                          <span className="mt-4 tag bg-paper-deep/70 text-ink-soft">
                            {currentCard.partOfSpeech}
                          </span>
                        </div>

                        <div className="relative text-center">
                          <button
                            type="button"
                            onClick={() => setIsFlipped(true)}
                            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/60 px-4 py-2.5 text-[11px] font-semibold text-ink-soft transition hover:border-brand/30 hover:bg-brand-soft/50 hover:text-brand"
                          >
                            <RotateCw className="h-3.5 w-3.5" />
                            Nhấn để xem nghĩa
                          </button>
                          <p className="mt-2 text-[9px] text-ink-muted">
                            hoặc nhấn Space / Enter
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="flip-face flip-back rounded-[28px] border border-line bg-[#fbf8f1] shadow-lift">
                      <div className="flex h-full flex-col overflow-y-auto p-5 sm:p-7">
                        <div className="flex items-start justify-between gap-3">
                          <span
                            className={`tag ${UNIT_STYLES[WORDLIST_UNITS.find((unit) => unit.num === currentCard.unit)?.accent ?? 'sky'].badge}`}
                          >
                            Unit {currentCard.unit} · {currentCard.unitName}
                          </span>
                          <button
                            type="button"
                            onClick={() => speak(currentCard.word)}
                            aria-label={`Nghe phát âm ${currentCard.word}`}
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-brand/30 hover:text-brand"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <h2 className="font-display text-2xl font-semibold leading-tight text-ink">
                            {currentCard.word}
                          </h2>
                          <span className="font-mono text-[10px] text-ink-muted">
                            {currentCard.phonetic}
                          </span>
                        </div>

                        <div className="mt-3">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                            Nghĩa tiếng Việt
                          </p>
                          <h3 className="mt-1.5 font-display text-2xl font-semibold leading-tight text-brand sm:text-3xl">
                            {currentCard.vietnamese}
                          </h3>

                          <div className="mt-4 rounded-2xl border border-gold/20 bg-gold-soft/55 p-3.5">
                            <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8a651f]">
                              <Link2 className="h-3 w-3" />
                              Cụm từ vàng
                            </p>
                            <p className="mt-1 text-sm font-semibold leading-5 text-ink">
                              {currentCard.collocation}
                            </p>
                          </div>

                          <div className="mt-4">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                              Định nghĩa B1
                            </p>
                            <p className="mt-1 text-sm leading-6 text-ink-soft">
                              {currentCard.definition}
                            </p>
                          </div>

                          <div className="mt-4 border-l-2 border-brand/30 pl-3">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                              Ví dụ trong sách
                            </p>
                            <p className="mt-1 text-sm italic leading-6 text-ink">
                              “{currentCard.example}”
                            </p>
                          </div>
                        </div>

                        <div className="sticky bottom-0 mt-auto bg-gradient-to-t from-[#fbf8f1] via-[#fbf8f1] to-transparent pt-4">
                          <button
                            type="button"
                            onClick={() => toggleLearned(currentCard.id)}
                            aria-pressed={Boolean(learned[currentCard.id])}
                            className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[11px] font-semibold transition ${
                              learned[currentCard.id]
                                ? 'border-brand bg-brand text-paper'
                                : 'border-line-strong bg-white text-ink-soft hover:border-brand/40 hover:text-brand'
                            }`}
                          >
                            {learned[currentCard.id] ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            {learned[currentCard.id] ? 'Đã thuộc từ này' : 'Đánh dấu đã thuộc'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Thẻ trước"
                    className="btn-secondary px-3 text-xs sm:px-5"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Trước</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFlipped((value) => !value)}
                    className="btn-primary px-5 text-xs sm:px-6"
                  >
                    <RotateCw className="h-4 w-4" />
                    Lật thẻ
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Thẻ sau"
                    className="btn-secondary px-3 text-xs sm:px-5"
                  >
                    <span className="hidden sm:inline">Sau</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShuffleNonce(shuffleNonce ? 0 : Date.now());
                      setCardIndex(0);
                      setIsFlipped(false);
                    }}
                    className="chip"
                  >
                    <Shuffle className="h-3 w-3" />
                    {shuffleNonce ? 'Về thứ tự gốc' : 'Xáo trộn thẻ'}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleLearned(currentCard.id)}
                    aria-pressed={Boolean(learned[currentCard.id])}
                    className={`chip ${learned[currentCard.id] ? 'chip-active' : ''}`}
                  >
                    {learned[currentCard.id] ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : (
                      <Circle className="h-3 w-3" />
                    )}
                    {learned[currentCard.id] ? 'Đã thuộc' : 'Chưa thuộc'}
                  </button>
                  <span className="hidden text-[10px] text-ink-muted sm:inline">
                    ← → chuyển thẻ · Space lật thẻ
                  </span>
                </div>
              </>
            ) : (
              <div className="rounded-3xl border border-line bg-white p-10 text-center shadow-card">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand">
                  {onlyUnlearned && learnedCount === WORDLIST.length ? (
                    <Sparkles className="h-6 w-6" />
                  ) : (
                    <SearchX className="h-6 w-6" />
                  )}
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {onlyUnlearned && learnedCount === WORDLIST.length
                    ? 'Bạn đã thuộc toàn bộ 101 từ!'
                    : 'Không có thẻ nào phù hợp'}
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink-soft">
                  {onlyUnlearned && learnedCount === WORDLIST.length
                    ? 'Tuyệt vời! Bạn có thể xem lại toàn bộ danh sách hoặc chuyển sang phần Từ vựng để mở rộng thêm.'
                    : 'Thử xóa từ khóa, chọn Unit khác hoặc tắt bộ lọc “Chỉ từ chưa thuộc”.'}
                </p>
                <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
                  <button type="button" onClick={resetFilters} className="btn-primary">
                    Xem lại tất cả
                    <RotateCcw className="h-4 w-4" />
                  </button>
                  <Link href="/vocabulary" className="btn-secondary">
                    Kho từ vựng 165 từ
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Source & tips */}
      <footer className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-soft text-gold">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Tài liệu gốc</h2>
              <p className="mt-1 text-[11px] leading-5 text-ink-soft">
                Nội dung được biên soạn từ “Intermediate_WordLists_Units 5-8.pdf” của bộ sách
                Voices Intermediate B1. Mở PDF để đối chiếu bản gốc bất cứ lúc nào.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a href={PDF_PATH} target="_blank" rel="noreferrer" className="btn-primary">
              <FileText className="h-4 w-4" />
              Mở PDF gốc
            </a>
            <a href={PDF_PATH} download className="btn-secondary">
              <Download className="h-4 w-4 text-ink-soft" />
              Tải xuống
            </a>
            <Link
              href="/vocabulary"
              className="inline-flex items-center gap-1.5 px-2 text-[11px] font-semibold text-brand transition hover:text-brand-deep"
            >
              Luyện thêm 165 từ
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-[#fbf8f1] p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Lightbulb className="h-4 w-4 text-gold" />
            Mẹo dùng Wordlist
          </h2>
          <ul className="mt-3.5 space-y-2.5">
            {[
              'Bật “Ẩn nghĩa” và tự nhớ nghĩa trước khi bấm Hiện — đây là cách kiểm tra chủ động.',
              'Học theo cụm từ vàng thay vì từ đơn để dùng được ngay khi nói và viết.',
              'Đánh dấu “Đã thuộc” để lần sau chỉ ôn những từ còn yếu.',
            ].map((tip) => (
              <li key={tip} className="flex gap-2 text-[11px] leading-5 text-ink-soft">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                {tip}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3">
            <span className="text-[10px] text-ink-muted">
              {learnedCount}/{WORDLIST.length} từ đã đánh dấu
            </span>
            <button
              type="button"
              onClick={resetProgress}
              disabled={!learnedCount}
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-ink-muted transition hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
            >
              <RotateCcw className="h-3 w-3" />
              Đặt lại tiến độ
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
