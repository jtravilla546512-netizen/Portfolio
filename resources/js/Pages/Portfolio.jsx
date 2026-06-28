import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, ExternalLink, Code2, MapPin, Link } from 'lucide-react';

const { hero, socials, about, skills, projects, experience, certifications, contact } = portfolioData;

const socialIconMap = { mail: Mail };

export default function Portfolio() {
    const [showAllCerts, setShowAllCerts] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 4);
    const reversedExperience = [...experience].reverse();

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">

            {/* CERT IMAGE MODAL */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="relative max-h-[90vh] max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute right-3 top-3 z-10 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white hover:bg-black/70"
                        >
                            ✕ Close
                        </button>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.name}
                            className="w-full object-contain bg-white"
                        />
                        <div className="bg-white px-4 py-3">
                            <p className="text-sm font-semibold text-gray-900">{selectedCert.name}</p>
                            <p className="text-xs text-gray-500">{selectedCert.issuer} · {selectedCert.date}</p>
                        </div>
                    </div>
                </div>
            )}
            <div className="mx-auto max-w-5xl px-6 py-12">

                {/* ── HERO ── */}
                <header className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <img
                        src={hero.profileImage}
                        alt={hero.name}
                        className="h-32 w-32 flex-shrink-0 rounded-xl object-cover"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{hero.name}</h1>
                        <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                            <MapPin className="h-3.5 w-3.5" /> {hero.location}
                        </p>
                        <p className="mt-1.5 text-sm text-gray-500">
                            Full Stack Developer &nbsp;·&nbsp; Web Developer &nbsp;·&nbsp; BS Computer Science Student
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {socials.map((social) => {
                                const Icon = socialIconMap[social.icon] || Link;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100"
                                    >
                                        <Icon className="h-3.5 w-3.5" />
                                        {social.name}
                                    </a>
                                );
                            })}
                            <a
                                href={hero.resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-900 bg-gray-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-gray-700"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                </header>

                {/* ── 2-COLUMN LAYOUT ── */}
                <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">

                    {/* LEFT COLUMN */}
                    <div className="space-y-10">

                        {/* ABOUT */}
                        <section>
                            <h2 className="text-base font-bold text-gray-900">About</h2>
                            <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600">
                                {about.bio.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </section>

                        {/* CURRENTLY */}
                        <section>
                            <h2 className="text-base font-bold text-gray-900">Currently</h2>
                            <div className="mt-3 space-y-2 text-sm text-gray-600">
                                <div className="flex items-start gap-2">
                                    <span className="mt-px">🎓</span>
                                    <span>3rd Year BS Computer Science at <strong className="text-gray-900">University of Mindanao</strong></span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="mt-px">💼</span>
                                    <span>Seeking a <strong className="text-gray-900">Web Development Internship</strong> — 162 hrs OJT, available last week of June / first week of July 2026</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="mt-px">📚</span>
                                    <span>Learning: <strong className="text-gray-900">{about.learning}</strong></span>
                                </div>
                            </div>
                        </section>

                        {/* RECENT PROJECTS */}
                        <section>
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-bold text-gray-900">Recent Projects</h2>
                                <a
                                    href="https://github.com/jtravilla546512-netizen"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-xs text-gray-400 transition hover:text-gray-900"
                                >
                                    View All <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                            <div className="mt-3 divide-y divide-gray-100">
                                {projects.map((project) => (
                                    <div key={project.title} className="py-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <p className="text-sm font-semibold text-gray-900">{project.title}</p>
                                            {project.featured && (
                                                <span className="flex-shrink-0 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-500">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-1 text-xs leading-relaxed text-gray-500">{project.description}</p>
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {project.stack.map((tech) => (
                                                <span key={tech} className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 font-mono text-[10px] text-gray-500">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-4">
                                            {project.liveUrl ? (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-1 font-mono text-[11px] text-gray-500 transition hover:text-gray-900"
                                                >
                                                    <ExternalLink className="h-3 w-3" />
                                                    {project.liveUrl.replace('https://', '').replace(/\/$/, '')}
                                                </a>
                                            ) : (
                                                <a
                                                    href={project.repoUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-1 font-mono text-[11px] text-gray-500 transition hover:text-gray-900"
                                                >
                                                    <Code2 className="h-3 w-3" />
                                                    Source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CERTIFICATIONS */}
                        <section>
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-bold text-gray-900">Recent Certifications</h2>
                                {certifications.length > 4 && (
                                    <button
                                        onClick={() => setShowAllCerts((c) => !c)}
                                        className="flex items-center gap-1 text-xs text-gray-400 transition hover:text-gray-900"
                                    >
                                        {showAllCerts ? 'Show Less' : `View All ${certifications.length}`}
                                        <ExternalLink className="h-3 w-3" />
                                    </button>
                                )}
                            </div>
                            <div className="mt-3 divide-y divide-gray-100">
                                {visibleCerts.map((cert) => (
                                    <button
                                        key={cert.name}
                                        onClick={() => setSelectedCert(cert)}
                                        className="flex w-full items-center justify-between py-3 text-left transition hover:opacity-70"
                                    >
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{cert.name}</p>
                                            <p className="text-xs text-gray-500">{cert.issuer}</p>
                                        </div>
                                        <span className="text-xs text-gray-400">{cert.date}</span>
                                    </button>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-10">

                        {/* EXPERIENCE */}
                        <section>
                            <h2 className="text-base font-bold text-gray-900">Experience</h2>
                            <div className="mt-3 space-y-4">
                                {reversedExperience.map((entry) => (
                                    <div key={`${entry.year}-${entry.title}`} className="flex gap-3">
                                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-300" />
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <p className="text-sm font-semibold leading-tight text-gray-900">{entry.title}</p>
                                                <span className="flex-shrink-0 text-xs text-gray-400">{entry.year}</span>
                                            </div>
                                            <p className="mt-0.5 text-xs text-gray-500">{entry.company}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* TECH STACK */}
                        <section>
                            <h2 className="text-base font-bold text-gray-900">Tech Stack</h2>
                            <div className="mt-3 space-y-3">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category}>
                                        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                                            {category}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {items.map((skill) => (
                                                <span
                                                    key={skill.name}
                                                    className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700"
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* GET IN TOUCH */}
                        <section>
                            <h2 className="text-base font-bold text-gray-900">Get in touch</h2>
                            <div className="mt-3 space-y-2.5">
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-gray-900"
                                >
                                    <Mail className="h-4 w-4 flex-shrink-0 text-gray-400" />
                                    {contact.email}
                                </a>
                                <p className="flex items-center gap-2 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4 flex-shrink-0 text-gray-400" />
                                    {hero.location}
                                </p>
                                <p className="text-xs text-gray-400">{contact.responseTime}</p>
                            </div>
                        </section>

                    </div>
                </div>

                {/* FOOTER */}
                <footer className="mt-16 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Jomarie T. Travilla &nbsp;·&nbsp; Built with React + Vite
                </footer>

            </div>
        </div>
    );
}
