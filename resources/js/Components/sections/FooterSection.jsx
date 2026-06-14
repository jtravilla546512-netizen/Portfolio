import { BriefcaseBusiness, Camera, Code2, Mail } from 'lucide-react';

const iconMap = {
    github: Code2,
    linkedin: BriefcaseBusiness,
    instagram: Camera,
    mail: Mail,
};

export default function FooterSection({ socials, name }) {
    return (
        <footer className="border-t border-white/10 px-4 py-10 md:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-slate-400">© {new Date().getFullYear()} {name}. Crafted with Laravel, React, and Tailwind.</p>
                <div className="flex flex-wrap gap-3">
                    {socials.map((social) => {
                        const Icon = iconMap[social.icon] || Mail;

                        return (
                            <a key={social.name} href={social.url} className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-indigo-400/40 hover:text-white" aria-label={social.name}>
                                <Icon size={16} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}