import { MoonStar, SunMedium } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-indigo-400/40 hover:bg-white/10 hover:text-white"
            aria-label="Toggle color theme"
        >
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
        </button>
    );
}