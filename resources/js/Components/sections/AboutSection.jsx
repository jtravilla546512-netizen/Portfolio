import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';

function StatCard({ label, value }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-xl">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
    );
}

export default function AboutSection({ about }) {
    return (
        <RevealSection id="about" className="px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="About"
                    title="I build practical products with a strong visual point of view."
                    description="A concise summary of how I approach product work, collaboration, and shipping software that feels polished instead of generic."
                />

                <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl">
                        <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{about.bio}</p>
                        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </span>
                            {about.learning}
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        <StatCard label="Years Coding" value={about.yearsCoding} />
                        <StatCard label="Projects Built" value={about.projectsBuilt} />
                        <StatCard label="Certifications" value={about.certificationsEarned} />
                    </div>
                </div>
            </div>
        </RevealSection>
    );
}