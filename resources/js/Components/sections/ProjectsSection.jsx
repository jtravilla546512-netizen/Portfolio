import { ExternalLink, Code2 } from 'lucide-react';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur-xl ${project.featured ? 'lg:col-span-2' : ''}`}
        >
            <div className="relative overflow-hidden border-b border-white/10">
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                {project.featured ? (
                    <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30">
                        Featured
                    </span>
                ) : null}
            </div>

            <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90">
                        Live Link <ExternalLink className="h-4 w-4" />
                    </a>
                    <a href={project.githubUrl} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-400/40 hover:bg-white/10">
                        GitHub <Code2 className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

export default function ProjectsSection({ projects }) {
    return (
        <RevealSection id="projects" className="px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Projects"
                    title="Selected work with a polished product focus."
                    description="A featured project sits first, then the supporting cards fill out the rest of the grid. Each card keeps live and source links visible."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </RevealSection>
    );
}