import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import AppShell from '../components/AppShell';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-fraunces',
  display: 'swap',
});

const description =
  'Bộ công cụ ôn luyện Voices Intermediate B1 (Units 5–10): 165 từ vựng có phát âm bản xứ, 12 chủ điểm ngữ pháp, 200 câu trắc nghiệm có giải thích và 3 bài đọc hiểu song ngữ.';

export const metadata: Metadata = {
  title: {
    default: 'Voices B1 — Study Companion',
    template: '%s · Voices B1',
  },
  description,
  openGraph: {
    title: 'Voices B1 — Study Companion',
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voices B1 — Study Companion',
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#f6f3eb',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${fraunces.variable}`}>
      <body suppressHydrationWarning className="font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
