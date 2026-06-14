import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ name, navItems, visible, theme, onThemeToggle }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const handleNavigate = (sectionId) => {
        setMobileOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            className={`fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-transform duration-300 md:px-6 ${visible ? 'translate-y-0' : '-translate-y-28'}`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl md:px-6">
                <button
                    type="button"
                    onClick={() => handleNavigate('hero')}
                    className="flex items-center gap-3 text-left"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30">
                        {name
                            .split(' ')
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join('')}
                    </span>
                    <span>
                        <span className="block text-sm font-semibold text-white">{name}</span>
                        <span className="block text-xs text-slate-400">Portfolio</span>
                    </span>
                </button>

                <nav className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => handleNavigate(item.id)}
                            className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                    <button
                        type="button"
                        onClick={() => setMobileOpen(true)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-indigo-400/40 hover:bg-white/10 hover:text-white lg:hidden"
                        aria-label="Open navigation menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen ? (
                    <motion.div
                        className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileOpen(false)}
                    >
                        <motion.div
                            className="absolute right-0 top-0 h-full w-[85vw] max-w-sm border-l border-white/10 bg-slate-950 p-5 shadow-2xl"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-white">Navigation</span>
                                <button
                                    type="button"
                                    onClick={() => setMobileOpen(false)}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
                                    aria-label="Close navigation menu"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-8 space-y-3">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => handleNavigate(item.id)}
                                        className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-base font-medium text-white transition hover:border-indigo-400/40 hover:bg-white/10"
                                    >
                                        <span>{item.label}</span>
                                        <span className="text-xs text-slate-400">0{item.index + 1}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </motion.header>
    );
}