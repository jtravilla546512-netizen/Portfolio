import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';
import Modal from '../Modal';

function CertificationCard({ certification, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left shadow-lg shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-indigo-400/40"
        >
            <img src={certification.thumbnail} alt={certification.name} className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{certification.issuer}</p>
                <p className="mt-3 font-code text-xs uppercase tracking-[0.3em] text-indigo-300/80">{certification.date}</p>
            </div>
        </button>
    );
}

export default function CertificationsSection({ certifications }) {
    const [expanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState(null);

    const visibleCertifications = expanded ? certifications : certifications.slice(0, 4);

    return (
        <RevealSection id="certifications" className="px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Certifications"
                    title="Credentials and learning milestones."
                    description="A compact card grid that expands on demand and opens a lightbox for each certificate image."
                />

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleCertifications.map((certification) => (
                        <motion.div key={certification.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }}>
                            <CertificationCard certification={certification} onClick={() => setSelected(certification)} />
                        </motion.div>
                    ))}
                </div>

                {certifications.length > 4 && (
                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={() => setExpanded((current) => !current)}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-indigo-400/40 hover:bg-white/10"
                        >
                            {expanded ? 'Show Less' : `View All ${certifications.length}+`}
                        </button>
                    </div>
                )}

                <Modal show={Boolean(selected)} onClose={() => setSelected(null)} maxWidth="lg">
                    {selected ? (
                        <div className="bg-slate-950 text-slate-100">
                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{selected.name}</h3>
                                    <p className="text-sm text-slate-400">{selected.issuer}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelected(null)}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <img src={selected.image} alt={selected.name} className="w-full object-cover" />
                        </div>
                    ) : null}
                </Modal>
            </div>
        </RevealSection>
    );
}