import {
  LayoutDashboard,
  Layers,
  BookOpen,
  GraduationCap,
  BookMarked,
  FileText,
  type LucideIcon,
} from 'lucide-react';

export interface PrimaryNavItem {
  name: string;
  shortName: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export const PRIMARY_NAV: PrimaryNavItem[] = [
  { name: 'Tổng quan', shortName: 'Tổng quan', href: '/', icon: LayoutDashboard },
  { name: 'Từ vựng', shortName: 'Từ vựng', href: '/vocabulary', icon: Layers, badge: '165' },
  { name: 'Ngữ pháp', shortName: 'Ngữ pháp', href: '/grammar', icon: BookOpen, badge: '12' },
  { name: 'Luyện đề', shortName: 'Luyện đề', href: '/quizzes', icon: GraduationCap, badge: '200' },
  { name: 'Wordlist', shortName: 'Wordlist', href: '/wordlist', icon: BookMarked, badge: 'PDF' },
  { name: 'Đọc hiểu', shortName: 'Đọc hiểu', href: '/reading', icon: FileText, badge: '9' },
];

export const UNIT_NAV = [
  { num: 5, name: 'Art', desc: 'Mỹ thuật & Biểu diễn', count: 28 },
  { num: 6, name: "Where I'm from", desc: 'Đô thị & Nơi chốn', count: 29 },
  { num: 7, name: 'Balance', desc: 'Cân bằng & Tài chính', count: 29 },
  { num: 8, name: 'Essentials', desc: 'Đồ thiết yếu & Vị giác', count: 34 },
  { num: 9, name: 'Taking a break', desc: 'Du lịch & Kỳ nghỉ', count: 23 },
  { num: 10, name: 'The senses', desc: 'Giác quan & Công nghệ', count: 22 },
];
