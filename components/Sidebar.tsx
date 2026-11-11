'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PRIMARY_NAV, UNIT_NAV } from './navigation';
import { X, ChevronRight, BookMarked } from 'lucide-react';

interface SidebarProps {
  onNavigate?: () => void;
  onClose?: () => void;
}

export default function Sidebar({ onNavigate, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col border-r border-line bg-[#fbf8f1]">
      {/* Brand */}
      <div className="flex items-center justify-between gap-3 px-5 pb-5 pt-6">
        <Link href="/" onClick={onNavigate} className="group flex items-center gap-3">
          <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-brand text-paper shadow-[0_10px_20px_-10px_rgba(22,74,50,0.7)] transition group-hover:bg-brand-deep">
            <span className="font-display text-xl font-semibold leading-none">V</span>
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-[#fbf8f1]" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-[19px] font-semibold leading-tight tracking-tight text-ink">
              Voices B1
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Study companion
            </span>
          </span>
        </Link>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng menu"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-line-strong hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Primary navigation */}
      <nav className="px-3" aria-label="Điều hướng chính">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Không gian học
        </p>
        <div className="space-y-1">
          {PRIMARY_NAV.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                aria-current={isActive ? 'page' : undefined}
                className={`group flex items-center gap-3 rounded-xl px-2.5 py-2 text-[13px] font-medium transition ${
                  isActive
                    ? 'bg-brand text-paper shadow-[0_10px_24px_-14px_rgba(22,74,50,0.8)]'
                    : 'text-ink-soft hover:bg-white hover:text-ink'
                }`}
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition ${
                    isActive
                      ? 'bg-white/12 text-paper'
                      : 'bg-paper-deep/70 text-ink-soft group-hover:bg-brand-soft group-hover:text-brand'
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={isActive ? 2.2 : 1.8} />
                </span>
                <span className="flex-1 truncate">{item.name}</span>
                {item.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${
                      isActive
                        ? 'bg-white/15 text-paper/85'
                        : 'border border-line bg-white text-ink-muted'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Units */}
      <div className="mt-6 flex min-h-0 flex-1 flex-col px-3">
        <div className="flex items-center justify-between px-3 pb-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Lộ trình Unit
          </p>
          <span className="font-mono text-[10px] text-ink-muted">05–10</span>
        </div>
        <div className="min-h-0 flex-1 space-y-1 overflow-y-auto pb-4 pr-0.5">
          {UNIT_NAV.map((unit) => {
            const isActive = pathname === `/unit/${unit.num}`;
            return (
              <Link
                key={unit.num}
                href={`/unit/${unit.num}`}
                onClick={onNavigate}
                aria-current={isActive ? 'page' : undefined}
                className={`group flex items-center gap-3 rounded-xl border px-2.5 py-2 transition ${
                  isActive
                    ? 'border-line bg-white shadow-card'
                    : 'border-transparent hover:border-line hover:bg-white/70'
                }`}
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-[11px] font-bold transition ${
                    isActive
                      ? 'bg-brand text-paper'
                      : 'bg-paper-deep text-ink-soft group-hover:bg-brand-soft group-hover:text-brand'
                  }`}
                >
                  {unit.num}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[12.5px] font-semibold text-ink">
                    {unit.name}
                  </span>
                  <span className="block truncate text-[10.5px] text-ink-muted">{unit.desc}</span>
                </span>
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-muted opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer card */}
      <div className="mt-auto border-t border-line p-4">
        <div className="relative overflow-hidden rounded-2xl bg-brand p-4 text-paper">
          <span className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full border border-white/10" />
          <span className="pointer-events-none absolute -bottom-12 -left-8 h-24 w-24 rounded-full bg-white/5" />
          <p className="relative flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-paper/55">
            <BookMarked className="h-3 w-3" /> Bộ tài liệu hoàn chỉnh
          </p>
          <p className="relative mt-1.5 font-display text-lg leading-snug">
            Sẵn sàng cho kỳ thi B1
          </p>
          <div className="relative mt-3 grid grid-cols-3 gap-1 border-t border-white/10 pt-3 text-center">
            <div>
              <p className="font-display text-base font-semibold leading-none">165</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-paper/50">Từ vựng</p>
            </div>
            <div>
              <p className="font-display text-base font-semibold leading-none">12</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-paper/50">Ngữ pháp</p>
            </div>
            <div>
              <p className="font-display text-base font-semibold leading-none">200</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-paper/50">Câu hỏi</p>
            </div>
          </div>
        </div>
        <p className="mt-3 px-1 text-[10px] leading-4 text-ink-muted">
          Voices Intermediate B1 · National Geographic Learning
        </p>
      </div>
    </div>
  );
}
