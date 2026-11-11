import Link from 'next/link';
import { VOCABULARY_LIST } from '../../../data/vocabularyData';
import { GRAMMAR_LIST } from '../../../data/grammarData';
import { ALL_QUESTIONS } from '../../../data/questionsData';
import SpeakButton from '../../../components/SpeakButton';
import {
  BookOpen,
  Layers,
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export function generateStaticParams() {
  return [
    { unit: '5' },
    { unit: '6' },
    { unit: '7' },
    { unit: '8' },
    { unit: '9' },
    { unit: '10' },
  ];
}

const unitTitles: Record<
  number,
  { title: string; subtitle: string; focus: string[] }
> = {
  5: {
    title: 'Art',
    subtitle: 'Mỹ thuật, biểu diễn, cảm xúc và cách biểu đạt ý tưởng.',
    focus: ['Câu điều kiện loại 2', 'Tính từ -ed / -ing'],
  },
  6: {
    title: "Where I'm from",
    subtitle: 'Thành phố, khu phố, đời sống và cảm giác thuộc về một nơi.',
    focus: ['Hiện tại hoàn thành tiếp diễn', 'Mô tả chuyển động'],
  },
  7: {
    title: 'Balance',
    subtitle: 'Cân bằng cuộc sống, công việc, tài chính và thói quen.',
    focus: ['Các hình thức tương lai', 'Mẫu động từ'],
  },
  8: {
    title: 'Essentials',
    subtitle: 'Đồ thiết yếu, ăn uống, tái sử dụng và giao tiếp.',
    focus: ['Mệnh đề quan hệ', 'So sánh'],
  },
  9: {
    title: 'Taking a break',
    subtitle: 'Chuẩn bị chuyến đi, đặt phòng, hành lý và bảo hiểm.',
    focus: ['Câu điều kiện loại 3', 'Đưa ra lời khuyên'],
  },
  10: {
    title: 'The senses',
    subtitle: 'Giác quan, khoa học và sự phát triển công nghệ.',
    focus: ['Câu bị động', 'Dự đoán'],
  },
};

export default async function UnitPage({ params }: { params: Promise<{ unit: string }> }) {
  const { unit } = await params;
  const unitNumber = parseInt(unit, 10);
  const currentMeta = unitTitles[unitNumber];

  if (isNaN(unitNumber) || !currentMeta) {
    return (
      <div className="page-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-paper-deep text-ink-muted">
          <BookOpen className="h-5 w-5" />
        </span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Không tìm thấy Unit này</h1>
        <p className="mt-1 text-sm text-ink-soft">Unit hợp lệ nằm trong khoảng 5–10.</p>
        <Link href="/" className="btn-primary mt-5">
          Về trang tổng quan <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const unitVocab = VOCABULARY_LIST.filter((item) => item.unit === unitNumber);
  const unitGrammar = GRAMMAR_LIST.filter((topic) => topic.unit === unitNumber);
  const unitQuestions = ALL_QUESTIONS.filter((question) => question.unit === unitNumber);

  const vocabQuestions = unitQuestions.filter((question) => question.category === 'VOCAB').length;
  const grammarQuestions = unitQuestions.filter((question) => question.category === 'GRAMMAR').length;

  const prevUnit = unitNumber > 5 ? unitNumber - 1 : null;
  const nextUnit = unitNumber < 10 ? unitNumber + 1 : null;

  return (
    <div className="page-shell">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[32px] border border-line bg-white shadow-card">
        <span className="pointer-events-none absolute -right-4 -top-12 select-none font-display text-[200px] font-semibold leading-none text-paper-deep/60 sm:text-[260px]">
          {String(unitNumber).padStart(2, '0')}
        </span>
        <span className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(192,146,47,0.16),transparent_65%)]" />

        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div>
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted transition hover:text-brand"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Tổng quan
              </Link>

              <div className="flex items-center gap-1.5">
                {prevUnit ? (
                  <Link
                    href={`/unit/${prevUnit}`}
                    aria-label={`Unit ${prevUnit}`}
                    className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-brand/30 hover:text-brand"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-muted opacity-40">
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </span>
                )}
                {nextUnit ? (
                  <Link
                    href={`/unit/${nextUnit}`}
                    aria-label={`Unit ${nextUnit}`}
                    className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-brand/30 hover:text-brand"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-muted opacity-40">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            </div>

            <span className="eyebrow mt-6">
              <Sparkles className="h-3 w-3 text-gold" />
              Unit {unitNumber} · Voices Intermediate B1
            </span>

            <h1 className="mt-4 font-display text-5xl font-semibold leading-none tracking-tight text-ink sm:text-6xl">
              {currentMeta.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-7 text-ink-soft">{currentMeta.subtitle}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip cursor-default">{unitVocab.length} từ vựng</span>
              <span className="chip cursor-default">{unitGrammar.length} chủ điểm ngữ pháp</span>
              <span className="chip cursor-default">{unitQuestions.length} câu luyện tập</span>
            </div>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Link href="/vocabulary" className="btn-primary group !py-2.5 text-xs">
                <Layers className="h-4 w-4" />
                Học Flashcard
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
              <Link href="/quizzes" className="btn-secondary !py-2.5 text-xs">
                <GraduationCap className="h-4 w-4 text-ink-soft" />
                Làm bài trắc nghiệm
              </Link>
            </div>
          </div>

          {/* Overview card */}
          <div className="relative self-start overflow-hidden rounded-2xl bg-brand p-5 text-paper sm:p-6">
            <span className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full border border-white/10" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-paper/50">
              Tổng quan Unit
            </p>

            <div className="mt-3 grid grid-cols-3 divide-x divide-white/10 text-center">
              {[
                { value: unitVocab.length, label: 'Từ vựng' },
                { value: unitGrammar.length, label: 'Ngữ pháp' },
                { value: unitQuestions.length, label: 'Câu hỏi' },
              ].map((stat) => (
                <div key={stat.label} className="px-2">
                  <p className="font-display text-2xl font-semibold leading-none">{stat.value}</p>
                  <p className="mt-1.5 text-[8px] uppercase tracking-[0.12em] text-paper/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-paper/45">
                Trọng tâm ngữ pháp
              </p>
              <ul className="mt-2 space-y-1.5">
                {currentMeta.focus.map((focus) => (
                  <li key={focus} className="flex items-start gap-2 text-[11px] leading-5 text-paper/80">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {focus}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[9px] text-paper/45">
              <span>{vocabQuestions} câu từ vựng</span>
              <span>{grammarQuestions} câu ngữ pháp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vocabulary */}
      <section>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-kicker">Từ vựng</span>
            <h2 className="mt-1.5 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              <Layers className="h-5 w-5 text-sky" />
              Unit {unitNumber} · {unitVocab.length} từ
            </h2>
          </div>
          <Link
            href="/vocabulary"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky transition hover:gap-1.5"
          >
            Mở kho từ vựng <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {unitVocab.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl border border-line bg-white p-4 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-sky/25 hover:shadow-lift"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="tag bg-paper-deep/80 text-ink-soft">{item.code}</span>
                <SpeakButton text={item.word} />
              </div>

              <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-ink">
                {item.word}
              </h3>
              <p className="font-mono text-[10px] text-ink-muted">{item.phonetic}</p>
              <p className="mt-1.5 text-xs font-semibold text-brand">{item.vietnamese}</p>

              <div className="mt-3 flex-1 rounded-xl border border-line bg-paper/60 p-2.5 text-[10.5px] leading-5">
                <p>
                  <span className="text-ink-muted">Cụm: </span>
                  <span className="font-semibold text-ink">{item.collocation}</span>
                </p>
                <p className="mt-1 italic text-ink-soft">&ldquo;{item.example}&rdquo;</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Grammar */}
      <section>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-kicker">Ngữ pháp</span>
            <h2 className="mt-1.5 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              <BookOpen className="h-5 w-5 text-violet" />
              Unit {unitNumber} · {unitGrammar.length} chủ điểm
            </h2>
          </div>
          <Link
            href="/grammar"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-violet transition hover:gap-1.5"
          >
            Xem toàn bộ 12 chủ điểm <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {unitGrammar.map((topic) => (
            <article
              key={topic.id}
              className="flex flex-col rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6"
            >
              <div className="flex items-start gap-2.5">
                <span className="tag mt-0.5 bg-violet-soft text-violet">{topic.code}</span>
                <h3 className="text-sm font-semibold leading-6 text-ink">{topic.title}</h3>
              </div>

              <div className="mt-4 rounded-2xl bg-brand p-4 text-paper">
                <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-paper/50">
                  Công thức cốt lõi
                </p>
                <p className="mt-1.5 font-mono text-[11px] font-semibold leading-5 text-paper">
                  {topic.formula}
                </p>
              </div>

              <p className="mt-3 text-[11px] leading-5 text-ink-soft">{topic.usage}</p>

              <div className="mt-3.5 grid gap-2">
                {topic.rules.slice(0, 2).map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 rounded-xl border border-line bg-paper/50 p-2.5 text-[10.5px] leading-5 text-ink-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>{rule}</span>
                  </div>
                ))}
                {topic.traps.slice(0, 2).map((trap, index) => (
                  <div
                    key={`trap-${index}`}
                    className="flex items-start gap-2 rounded-xl border border-amber-200/70 bg-amber-50/60 p-2.5 text-[10.5px] leading-5 text-amber-950"
                  >
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
                    <span>{trap}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/grammar"
                className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold text-violet transition hover:gap-1.5"
              >
                Xem đầy đủ quy tắc &amp; bẫy đề <ArrowRight className="h-3 w-3" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-kicker">Luyện tập</span>
            <h2 className="mt-1.5 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              <GraduationCap className="h-5 w-5 text-teal" />
              {unitQuestions.length} câu hỏi ôn tập
            </h2>
          </div>
          <Link
            href="/quizzes"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal transition hover:gap-1.5"
          >
            Vào phòng thi thử <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {unitQuestions.map((question) => (
            <article
              key={question.id}
              className="flex flex-col rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="tag bg-paper-deep/80 text-ink-soft">{question.code}</span>
                <span className="tag bg-emerald-50 text-emerald-700">
                  Đáp án {question.answer.toUpperCase()}
                </span>
              </div>

              <p className="mt-2.5 text-[12px] font-semibold leading-5 text-ink">{question.prompt}</p>

              <div className="mt-2.5 space-y-0.5">
                {question.options.map((option) => {
                  const isAnswer = option.key === question.answer;
                  return (
                    <div
                      key={option.key}
                      className={`flex gap-2 rounded-lg px-2 py-1.5 text-[10.5px] leading-5 ${
                        isAnswer
                          ? 'bg-emerald-50 font-semibold text-emerald-900'
                          : 'text-ink-soft'
                      }`}
                    >
                      <span
                        className={`font-mono font-bold ${
                          isAnswer ? 'text-emerald-600' : 'text-ink-muted'
                        }`}
                      >
                        {option.key.toUpperCase()}.
                      </span>
                      <span>{option.text}</span>
                      {isAnswer && <CheckCircle2 className="ml-auto mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />}
                    </div>
                  );
                })}
              </div>

              <details className="group mt-2.5 border-t border-line pt-2">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[10px] font-semibold text-sky">
                  Giải thích chi tiết
                  <ChevronDown className="h-3.5 w-3.5 transition group-open:rotate-180" />
                </summary>
                <p className="mt-2 rounded-xl bg-paper/60 p-2.5 text-[10.5px] leading-5 text-ink-soft">
                  {question.vietnameseExplanation}
                </p>
                {question.vietnameseTranslation && (
                  <p className="mt-1.5 px-0.5 text-[10px] italic leading-5 text-ink-muted">
                    {question.vietnameseTranslation}
                  </p>
                )}
              </details>
            </article>
          ))}
        </div>
      </section>

      {/* Prev / next */}
      <nav className="mt-10 grid gap-3 sm:grid-cols-2" aria-label="Chuyển Unit">
        {prevUnit ? (
          <Link
            href={`/unit/${prevUnit}`}
            className="group rounded-2xl border border-line bg-white p-4 shadow-card transition hover:border-brand/25 hover:shadow-lift"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Unit trước
            </span>
            <span className="mt-1 flex items-center justify-between gap-2">
              <span className="font-display text-lg font-semibold text-ink">
                Unit {prevUnit} · {unitTitles[prevUnit].title}
              </span>
              <ArrowLeft className="h-4 w-4 text-ink-muted transition group-hover:-translate-x-0.5 group-hover:text-brand" />
            </span>
          </Link>
        ) : (
          <Link
            href="/"
            className="group rounded-2xl border border-line bg-white p-4 shadow-card transition hover:border-brand/25 hover:shadow-lift"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Quay lại
            </span>
            <span className="mt-1 flex items-center justify-between gap-2">
              <span className="font-display text-lg font-semibold text-ink">Trang tổng quan</span>
              <ArrowLeft className="h-4 w-4 text-ink-muted transition group-hover:-translate-x-0.5 group-hover:text-brand" />
            </span>
          </Link>
        )}

        {nextUnit ? (
          <Link
            href={`/unit/${nextUnit}`}
            className="group rounded-2xl border border-line bg-white p-4 text-right shadow-card transition hover:border-brand/25 hover:shadow-lift"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Unit tiếp theo
            </span>
            <span className="mt-1 flex items-center justify-between gap-2">
              <ArrowRight className="h-4 w-4 text-ink-muted transition group-hover:translate-x-0.5 group-hover:text-brand" />
              <span className="font-display text-lg font-semibold text-ink">
                Unit {nextUnit} · {unitTitles[nextUnit].title}
              </span>
            </span>
          </Link>
        ) : (
          <Link
            href="/quizzes"
            className="group rounded-2xl border border-line bg-brand p-4 text-right text-paper shadow-card transition hover:bg-brand-deep"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-paper/50">
              Hoàn tất lộ trình
            </span>
            <span className="mt-1 flex items-center justify-between gap-2">
              <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-0.5" />
              <span className="font-display text-lg font-semibold">Thi thử 200 câu</span>
            </span>
          </Link>
        )}
      </nav>
    </div>
  );
}
