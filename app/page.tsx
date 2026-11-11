import Link from 'next/link';
import {
  Layers,
  BookOpen,
  GraduationCap,
  FileText,
  BookMarked,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Volume2,
  Sparkles,
} from 'lucide-react';
import { VOCABULARY_LIST } from '../data/vocabularyData';

const modules = [
  {
    href: '/vocabulary',
    label: 'Từ vựng',
    count: '165',
    unitLabel: 'từ',
    description: 'Flashcard lật 3D, phát âm bản xứ và ngữ cảnh ghi nhớ.',
    cta: 'Mở kho từ vựng',
    icon: Layers,
    iconClass: 'bg-sky-soft text-sky',
    accentClass: 'text-sky',
    hoverClass: 'hover:border-sky/30',
  },
  {
    href: '/grammar',
    label: 'Ngữ pháp',
    count: '12',
    unitLabel: 'chủ điểm',
    description: 'Công thức, quy tắc và cảnh báo bẫy đề thi thường gặp.',
    cta: 'Xem hệ thống ngữ pháp',
    icon: BookOpen,
    iconClass: 'bg-violet-soft text-violet',
    accentClass: 'text-violet',
    hoverClass: 'hover:border-violet/30',
  },
  {
    href: '/quizzes',
    label: 'Luyện đề',
    count: '200',
    unitLabel: 'câu hỏi',
    description: 'Ba chế độ học, thi thử 50 phút và chấm điểm thang 10.',
    cta: 'Vào phòng luyện thi',
    icon: GraduationCap,
    iconClass: 'bg-teal-soft text-teal',
    accentClass: 'text-teal',
    hoverClass: 'hover:border-teal/30',
  },
  {
    href: '/reading',
    label: 'Đọc hiểu',
    count: '09',
    unitLabel: 'bài đọc',
    description: 'Văn bản song ngữ, audio chuẩn và giải thích từng câu.',
    cta: 'Luyện đọc song ngữ',
    icon: FileText,
    iconClass: 'bg-clay-soft text-clay',
    accentClass: 'text-clay',
    hoverClass: 'hover:border-clay/30',
  },
];

const units = [
  { num: 5, name: 'Art', desc: 'Mỹ thuật, biểu diễn, cảm xúc', vocabCount: 28, grammarTopics: 'Second Conditional · Adj -ed/-ing' },
  { num: 6, name: "Where I'm from", desc: 'Đô thị, khu phố, chuyển động', vocabCount: 29, grammarTopics: 'Present Perfect Continuous · Movement' },
  { num: 7, name: 'Balance', desc: 'Cân bằng, tài chính, thói quen', vocabCount: 29, grammarTopics: 'Future Forms · Verb Patterns' },
  { num: 8, name: 'Essentials', desc: 'Đồ thiết yếu, vị giác, tái chế', vocabCount: 34, grammarTopics: 'Relative Clauses · Comparatives' },
  { num: 9, name: 'Taking a break', desc: 'Kỳ nghỉ, đặt phòng, hành lý', vocabCount: 23, grammarTopics: 'Third Conditional · Giving Advice' },
  { num: 10, name: 'The senses', desc: 'Giác quan, khoa học, thực tế ảo', vocabCount: 22, grammarTopics: 'Passives · Making Predictions' },
];

const studySteps = [
  {
    num: '01',
    title: 'Lật thẻ & nghe',
    desc: 'Bật phát âm, luyện nói theo collocation và đánh dấu những từ đã nhớ.',
  },
  {
    num: '02',
    title: 'Tránh bẫy ngữ pháp',
    desc: 'Đọc kỹ phần cảnh báo bẫy đề thi trước khi làm bài để không mất điểm oan.',
  },
  {
    num: '03',
    title: 'Thi thử bấm giờ',
    desc: 'Làm đề trong chế độ 50 phút, xem giải thích D2 ở mọi câu làm sai.',
  },
];

const quickFacts = [
  { value: '165', label: 'Từ vựng chuẩn B1' },
  { value: '12', label: 'Chủ điểm ngữ pháp' },
  { value: '200', label: 'Câu hỏi có giải thích' },
  { value: '09', label: 'Bài đọc song ngữ' },
];

export default function Home() {
  const featuredWord = VOCABULARY_LIST.find((item) => item.word === 'canvas') ?? VOCABULARY_LIST[0];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(192,146,47,0.22),transparent_65%)]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(22,74,50,0.10),transparent_65%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12 lg:pb-20 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* Copy */}
            <div className="animate-fade-up">
              <span className="eyebrow">
                <Sparkles className="h-3 w-3 text-gold" />
                National Geographic Learning · Voices B1
              </span>

              <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl lg:text-[4.25rem]">
                Chinh phục B1,
                <br />
                <span className="italic text-brand">từng ngày một.</span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base">
                Trọn bộ ôn luyện <strong className="font-semibold text-ink">Units 5–10</strong> với{' '}
                <strong className="font-semibold text-ink">165 từ vựng</strong> có phát âm bản xứ,{' '}
                <strong className="font-semibold text-ink">12 chủ điểm ngữ pháp</strong>,{' '}
                <strong className="font-semibold text-ink">200 câu trắc nghiệm</strong> và 9 bài đọc hiểu song ngữ.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/vocabulary" className="btn-primary group">
                  Bắt đầu với từ vựng
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link href="/quizzes" className="btn-secondary">
                  <GraduationCap className="h-4 w-4 text-ink-soft" />
                  Thi thử 200 câu
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[11px] font-medium text-ink-soft">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  Phát âm bản xứ
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  Giải thích tiếng Việt
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  Chấm điểm thang 10
                </span>
              </div>
            </div>

            {/* Preview composition */}
            <div className="relative mx-auto w-full max-w-[420px] animate-fade-up delay-2 lg:max-w-none">
              <div className="relative px-3 py-5 sm:px-6 sm:py-8">
                <div className="absolute inset-x-10 top-8 bottom-8 rotate-[4deg] rounded-[30px] border border-line bg-paper-deep" />
                <div className="absolute inset-x-8 top-6 bottom-10 -rotate-[2deg] rounded-[30px] border border-line bg-[#f0ebde]" />

                <div className="relative -rotate-[1.5deg] rounded-[28px] border border-line bg-white p-5 shadow-lift transition duration-500 hover:rotate-0 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="tag bg-brand-soft text-brand">TỪ VỰNG · UNIT {featuredWord.unit}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-paper text-ink-soft">
                      <Volume2 className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="py-7 text-center sm:py-9">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                      {featuredWord.unitName} · {featuredWord.code}
                    </p>
                    <h2 className="mt-2 font-display text-5xl font-semibold leading-none tracking-tight text-ink sm:text-6xl">
                      {featuredWord.word}
                    </h2>
                    <p className="mt-2.5 font-mono text-sm text-ink-muted">{featuredWord.phonetic}</p>
                  </div>

                  <div className="h-px bg-line" />

                  <div className="pt-5 text-center">
                    <p className="text-sm font-semibold text-brand">{featuredWord.vietnamese}</p>
                    <p className="mt-2 text-xs italic leading-5 text-ink-soft">
                      &ldquo;{featuredWord.example}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl bg-paper px-4 py-3">
                    <span className="text-[11px] font-medium text-ink-soft">
                      Nhấn để xem ngữ cảnh
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                      Lật thẻ <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>

                {/* Floating chips */}
                <div className="absolute -left-2 bottom-16 hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:flex">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-soft font-display text-sm font-semibold text-teal">
                    8.5
                  </span>
                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                      Điểm thi thử
                    </span>
                    <span className="block text-xs font-semibold text-ink">Trên thang 10</span>
                  </span>
                </div>

                <div className="animate-float absolute -right-1 top-24 hidden items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 shadow-card sm:flex">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-semibold text-ink-soft">200 câu đã sẵn sàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section aria-label="Số liệu bộ tài liệu" className="border-b border-line bg-[#fbf8f1]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-px bg-line md:grid-cols-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="bg-[#fbf8f1] px-5 py-5 sm:px-8 sm:py-6">
              <p className="font-display text-3xl font-semibold leading-none tracking-tight text-ink sm:text-4xl">
                {fact.value}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        {/* MODULES */}
        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">Bộ công cụ học tập</span>
              <h2 className="section-title mt-2">Bốn cách để tiến bộ mỗi ngày</h2>
            </div>
            <p className="max-w-sm text-xs leading-5 text-ink-muted sm:text-right">
              Mỗi phần được thiết kế bám sát nội dung sách Voices Intermediate B1, học đến đâu chắc đến đó.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {modules.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex flex-col rounded-3xl border border-line bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift ${item.hoverClass}`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`grid h-11 w-11 place-items-center rounded-2xl ${item.iconClass}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-muted transition duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-paper">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="mt-8 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-semibold leading-none tracking-tight text-ink">
                      {item.count}
                    </span>
                    <span className="text-[11px] font-medium text-ink-muted">{item.unitLabel}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-ink">{item.label}</h3>
                  <p className="mt-1.5 flex-1 text-xs leading-5 text-ink-soft">{item.description}</p>

                  <span className={`mt-5 inline-flex items-center gap-1 text-[11px] font-semibold ${item.accentClass}`}>
                    {item.cta}
                    <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/wordlist"
            className="group mt-4 flex flex-col gap-4 rounded-3xl border border-line bg-white p-5 shadow-card transition duration-300 hover:border-gold/40 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold-soft text-gold">
                <BookMarked className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  Tài liệu kèm theo
                </p>
                <h3 className="mt-0.5 font-display text-xl font-semibold tracking-tight text-ink">
                  Wordlist Units 5–8
                </h3>
                <p className="mt-1 max-w-xl text-xs leading-5 text-ink-soft">
                  Danh sách từ vựng gốc từ sách Voices Intermediate B1 — mở PDF ngay trên trình duyệt
                  hoặc tải về để ôn ngoại tuyến.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-[11px] font-semibold text-paper transition group-hover:bg-brand-deep">
              Mở Wordlist
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        </section>

        {/* UNITS */}
        <section className="mt-16 sm:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">Lộ trình ôn tập</span>
              <h2 className="section-title mt-2">Sáu Unit, một mạch kiến thức</h2>
            </div>
            <p className="max-w-sm text-xs leading-5 text-ink-muted sm:text-right">
              Mỗi Unit gồm danh mục từ vựng, tóm tắt ngữ pháp và bộ câu hỏi luyện tập tương ứng.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {units.map((unit) => (
              <Link
                key={unit.num}
                href={`/unit/${unit.num}`}
                className="group relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lift"
              >
                <span className="pointer-events-none absolute -right-2 -top-7 select-none font-display text-[104px] font-semibold leading-none text-paper-deep/80 transition duration-500 group-hover:text-brand-soft">
                  {String(unit.num).padStart(2, '0')}
                </span>

                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <span className="tag bg-brand-soft text-brand">UNIT {unit.num}</span>
                    <span className="text-[11px] font-medium text-ink-muted">{unit.vocabCount} từ vựng</span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                    {unit.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-ink-soft">{unit.desc}</p>

                  <div className="mt-5 rounded-xl border border-line bg-paper/60 p-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Ngữ pháp trọng tâm
                    </p>
                    <p className="mt-1 text-[11px] font-semibold leading-4 text-ink-soft">
                      {unit.grammarTopics}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-line pt-3.5 text-[11px] font-semibold text-brand">
                    <span>Xem chi tiết Unit {unit.num}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* METHOD */}
        <section className="relative mt-16 overflow-hidden rounded-[32px] bg-brand p-6 text-paper shadow-lift sm:mt-20 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-20 h-64 w-64 rounded-full bg-white/[0.04]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-gold/10 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/50">
                Phương pháp ôn luyện
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Biến 200 câu hỏi
                <br />
                thành phản xạ.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-paper/70">
                Học theo vòng lặp: gặp từ mới, hiểu ngữ cảnh, vận dụng vào đề và xem lại lỗi sai. Ba bước dưới đây
                giúp bạn duy trì nhịp học đều đặn mỗi ngày.
              </p>
              <Link
                href="/unit/5"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-gold transition hover:text-[#e0b65b]"
              >
                Bắt đầu từ Unit 5
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <ol className="grid gap-3">
              {studySteps.map((step) => (
                <li
                  key={step.num}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5"
                >
                  <span className="font-display text-2xl font-semibold leading-none text-gold/90">{step.num}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-paper">{step.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-paper/60">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-[11px] text-ink-muted sm:mt-16 sm:flex-row">
          <p>Voices Intermediate B1 · Study Companion</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em]">Units 05 — 10</p>
        </footer>
      </div>
    </div>
  );
}
