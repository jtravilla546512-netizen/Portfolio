import { motion } from 'framer-motion';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';

export default function ExperienceSection({ experience }) {
    return (
        <RevealSection id="experience" className="px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Experience"
                    title="A timeline of shipping, iteration, and product work."
                    description="The timeline alternates on larger screens and collapses into a single readable column on mobile."
                />

                <div className="relative mt-12">
                    <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-500/0 via-indigo-400/50 to-violet-500/0 lg:left-1/2" />
                    <div className="space-y-10 lg:space-y-0">
                        {experience.map((entry, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={`${entry.year}-${entry.title}`} className="relative grid gap-4 pl-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:pl-0 lg:py-6">
                                    <div className={`${isLeft ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-3'} lg:pr-4`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.55, delay: index * 0.08 }}
                                            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur-xl"
                                        >
                                            <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 font-code text-xs uppercase tracking-[0.25em] text-indigo-200">{entry.year}</span>
                                            <h3 className="mt-4 text-2xl font-semibold text-white">{entry.title}</h3>
                                            <p className="mt-2 text-sm text-indigo-200/90">{entry.company}</p>
                                            <p className="mt-4 text-sm leading-7 text-slate-300">{entry.description}</p>
                                        </motion.div>
                                    </div>

                                    <div className="absolute left-0 top-8 flex h-9 w-9 items-center justify-center rounded-full border border-indigo-400/30 bg-slate-950 text-indigo-300 shadow-lg shadow-indigo-500/10 lg:static lg:mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400" />
                                    </div>

                                    <div className="hidden lg:block" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </RevealSection>
    );
}