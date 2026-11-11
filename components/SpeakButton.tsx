'use client';

import { Volume2 } from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech';

interface SpeakButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export default function SpeakButton({ text, label, className }: SpeakButtonProps) {
  const { speak } = useSpeech();

  return (
    <button
      type="button"
      onClick={() => speak(text)}
      aria-label={label ?? `Nghe phát âm: ${text}`}
      title="Nghe phát âm"
      className={
        className ??
        'grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink-soft transition hover:border-brand/30 hover:bg-brand hover:text-paper'
      }
    >
      <Volume2 className="h-3.5 w-3.5" />
    </button>
  );
}
