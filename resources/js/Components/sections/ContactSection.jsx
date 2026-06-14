import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, Clock3 } from 'lucide-react';
import RevealSection from '../RevealSection';
import SectionHeading from '../SectionHeading';

function FloatingInput({ label, value, onChange, name, type = 'text', as = 'input' }) {
    const hasValue = Boolean(value);
    const commonClass = 'peer w-full rounded-2xl border border-white/10 bg-white/5 px-4 pt-6 pb-3 text-slate-100 outline-none transition placeholder-transparent focus:border-indigo-400/40 focus:bg-white/10';

    return (
        <div className="relative">
            {as === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows={5}
                    placeholder={label}
                    className={`${commonClass} resize-none`}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={label}
                    className={commonClass}
                />
            )}
            <label
                htmlFor={name}
                className={`pointer-events-none absolute left-4 top-4 origin-left text-sm text-slate-400 transition-all ${hasValue ? 'scale-75 -translate-y-2 text-indigo-300' : 'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-indigo-300'}`}
            >
                {label}
            </label>
        </div>
    );
}

export default function ContactSection({ contact, socials, onNotify }) {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                contact.emailjsServiceId,
                contact.emailjsTemplateId,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                    to_email: contact.email,
                },
                contact.emailjsPublicKey,
            );

            setForm({ name: '', email: '', subject: '', message: '' });
            onNotify({
                type: 'success',
                title: 'Message sent',
                message: 'Thanks for reaching out. I will get back to you soon.',
            });
        } catch {
            onNotify({
                type: 'error',
                title: 'Message failed',
                message: 'Unable to send the message right now. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <RevealSection id="contact" className="px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Contact"
                    title="Let's talk about the next build."
                    description="Fill in the form and I'll get back to you as soon as possible."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl">
                        <div className="space-y-5 text-sm text-slate-300">
                            <div className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-5 w-5 text-indigo-300" />
                                <div>
                                    <p className="text-white">Email</p>
                                    <a className="mt-1 block text-slate-400 transition hover:text-white" href={`mailto:${contact.email}`}>
                                        {contact.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 text-indigo-300" />
                                <div>
                                    <p className="text-white">Location</p>
                                    <p className="mt-1 text-slate-400">{contact.location}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock3 className="mt-0.5 h-5 w-5 text-indigo-300" />
                                <div>
                                    <p className="text-white">Response</p>
                                    <p className="mt-1 text-slate-400">{contact.responseTime}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-400/40 hover:bg-white/10"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl">
                        <div className="grid gap-4 md:grid-cols-2">
                            <FloatingInput label="Name" name="name" value={form.name} onChange={handleChange} />
                            <FloatingInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
                        </div>
                        <div className="mt-4">
                            <FloatingInput label="Subject" name="subject" value={form.subject} onChange={handleChange} />
                        </div>
                        <div className="mt-4">
                            <FloatingInput label="Message" name="message" value={form.message} onChange={handleChange} as="textarea" />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? 'Sending…' : 'Send Message'} <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>
        </RevealSection>
    );
}
