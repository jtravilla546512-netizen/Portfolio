import { ArrowRight, BriefcaseBusiness, Camera, Code2, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import TypewriterText from '../TypewriterText';

const iconMap = {
    github: Code2,
    linkedin: BriefcaseBusiness,
    instagram: Camera,
    mail: Mail,
};

export default function HeroSection({ hero, socials, roles, onNavigate }) {
    return (
        <section
            id="hero"
            className="hero-grid relative flex min-h-screen items-center px-4 pb-28 pt-28 md:px-6 lg:px-8 lg:pt-32"
        >
            <div className="subtle-grid pointer-events-none absolute inset-0 opacity-20" />
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative z-10 max-w-3xl">
                    <motion.p
                        className="font-code text-sm uppercase tracking-[0.35em] text-indigo-300/80"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Building modern web experiences
                    </motion.p>

                    <motion.h1
                        className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">{hero.name}</span>
                    </motion.h1>

                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <TypewriterText words={roles} />
                    </motion.div>

                    <motion.p
                        className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        {hero.location} · {hero.tagline}
                    </motion.p>

                    <motion.div
                        className="mt-8 flex flex-col gap-4 sm:flex-row"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                    >
                        <button
                            onClick={() => onNavigate('projects')}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02]"
                        >
                            View My Work <ArrowRight className="h-4 w-4" />
                        </button>
                        <a
                            href={hero.resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-indigo-400/40 hover:bg-white/10"
                        >
                            View Resume <Download className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        className="mt-8 flex flex-wrap items-center gap-3"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        {socials.map((social) => {
                            const Icon = iconMap[social.icon] || Mail;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                                    rel={social.url.startsWith('mailto:') ? undefined : 'noreferrer'}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-400/40 hover:bg-white/10"
                                >
                                    <span className="font-code text-xs uppercase tracking-[0.25em]">{social.name}</span>
                                    <Icon className="h-4 w-4" />
                                </a>
                            );
                        })}
                    </motion.div>
                </div>

                <motion.div
                    className="relative mx-auto flex w-full max-w-md items-center justify-center"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >
                    <div className="absolute inset-0 mx-auto h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
                    <div className="absolute inset-6 rounded-full border border-indigo-400/20 bg-indigo-500/5 animate-pulse" />
                    <div className="absolute inset-12 rounded-full border border-violet-400/20" />
                    <div className="relative z-10 flex aspect-square w-[22rem] max-w-[80vw] items-center justify-center rounded-full border border-white/10 bg-slate-900/75 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        <div className="absolute inset-6 rounded-full border border-white/10 bg-gradient-to-br from-indigo-500/20 to-violet-500/10" />
                        <img
                            src={hero.profileImage}
                            alt={`${hero.name} portrait`}
                            className="relative z-10 h-[78%] w-[78%] rounded-full object-cover shadow-[0_0_0_12px_rgba(99,102,241,0.08)]"
                            loading="lazy"
                        />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_55%)]" />
                    <div className="absolute -bottom-6 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        <p className="font-code text-xs uppercase tracking-[0.3em] text-indigo-300/80">Available</p>
                        <p className="mt-1 text-sm text-slate-200">Open to freelance and full-time roles</p>
                    </div>
                </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_24%)]" />
        </section>
    );
}