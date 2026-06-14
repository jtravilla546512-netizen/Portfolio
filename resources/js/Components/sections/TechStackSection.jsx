import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';

function SkillBadge({ skill }) {
    return (
        <div className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.18)]">
            <img src={skill.icon} alt="" className="h-5 w-5" loading="lazy" />
            <span>{skill.name}</span>
        </div>
    );
}

export default function TechStackSection({ skills }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <RevealSection id="skills" className="px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Tech Stack"
                    title="A focused stack, grouped by the layers I use most."
                    description="Core technologies are shown first. Additional tools stay tucked behind a view toggle so the section stays readable on smaller screens."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {Object.entries(skills)
                        .filter(([category]) => category !== 'more')
                        .map(([category, list]) => (
                            <div key={category} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur-xl">
                                <p className="font-code text-xs uppercase tracking-[0.3em] text-indigo-300/80">{category}</p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {list.map((skill) => (
                                        <SkillBadge key={skill.name} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>

                <div className="mt-6">
                    <button
                        type="button"
                        onClick={() => setExpanded((current) => !current)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-indigo-400/40 hover:bg-white/10"
                    >
                        View All {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    {expanded ? (
                        <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <div className="flex flex-wrap gap-3">
                                {skills.more.map((skill) => (
                                    <SkillBadge key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </RevealSection>
    );
}