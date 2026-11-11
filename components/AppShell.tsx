'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import { PRIMARY_NAV } from './navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const onDesktop = () => {
      if (desktopQuery.matches) setIsOpen(false);
    };
    desktopQuery.addEventListener('change', onDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      desktopQuery.removeEventListener('change', onDesktop);
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Bỏ qua điều hướng
      </a>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[300px] lg:block">
        <Sidebar />
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 border-b border-line bg-[#f6f3eb]/90 backdrop-blur-xl lg:hidden">
        <div className="flex h-16 items-center justify-between gap-3 px-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-paper">
              <span className="font-display text-lg font-semibold leading-none">V</span>
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold ring-2 ring-[#f6f3eb]" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[17px] font-semibold leading-none tracking-tight text-ink">
                Voices B1
              </span>
              <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Study companion
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Mở menu điều hướng"
            aria-expanded={isOpen}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white text-ink shadow-card transition active:scale-95"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? '' : 'pointer-events-none'}`}>
        <div
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          className={`absolute inset-0 bg-brand-deep/45 backdrop-blur-[2px] transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu điều hướng"
          className={`absolute inset-y-0 left-0 w-[86%] max-w-[340px] shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar onNavigate={() => setIsOpen(false)} onClose={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Page content */}
      <div className="lg:pl-[300px]">
        <main id="main-content" className="min-h-screen pb-24 lg:pb-0">
          {children}
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <nav
        aria-label="Điều hướng nhanh"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-[#fbf8f1]/95 backdrop-blur-xl lg:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="mx-auto grid max-w-xl grid-cols-6 px-1">
          {PRIMARY_NAV.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className="flex flex-col items-center gap-1 pb-2 pt-2.5"
              >
                <span
                  className={`flex h-8 w-12 items-center justify-center rounded-full transition ${
                    isActive ? 'bg-brand text-paper' : 'text-ink-muted'
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={isActive ? 2.2 : 1.8} />
                </span>
                <span
                  className={`text-[10px] font-semibold leading-none ${
                    isActive ? 'text-brand' : 'text-ink-muted'
                  }`}
                >
                  {item.shortName}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
