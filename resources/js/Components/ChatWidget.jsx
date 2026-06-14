import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

export default function ChatWidget({ welcomeMessage, suggestions = [] }) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'assistant', content: welcomeMessage },
    ]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async (messageText) => {
        const content = messageText.trim();

        if (!content || loading) {
            return;
        }

        setMessages((current) => [...current, { role: 'user', content }]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: content,
                    history: messages,
                }),
            });

            const payload = await response.json();

            setMessages((current) => [
                ...current,
                {
                    role: 'assistant',
                    content: payload.reply || 'I could not generate a response right now.',
                },
            ]);
        } catch (error) {
            setMessages((current) => [
                ...current,
                {
                    role: 'assistant',
                    content: 'The chat endpoint is currently unavailable. Please try again shortly.',
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-[60]">
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/90 px-4 py-3 text-left text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:border-emerald-400/40 hover:bg-slate-900"
            >
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30">
                    <Bot className="h-5 w-5" />
                    <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/25" />
                </span>
                <span className="hidden pr-2 sm:block">
                    <span className="block text-xs uppercase tracking-[0.3em] text-slate-400">AI Chat</span>
                    <span className="block text-sm text-white/90">Ask about this portfolio</span>
                </span>
            </button>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/50 backdrop-blur-2xl"
                    >
                        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                            <div>
                                <p className="text-sm font-semibold text-white">Portfolio assistant</p>
                                <p className="text-xs text-slate-400">Powered by Laravel API</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
                                aria-label="Close chat"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="max-h-[420px] space-y-4 overflow-y-auto px-4 py-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'assistant' ? 'bg-white/6 text-slate-100' : 'ml-auto bg-gradient-to-br from-indigo-500 to-violet-500 text-white'}`}
                                >
                                    {message.content}
                                </motion.div>
                            ))}
                            {loading ? (
                                <div className="max-w-[85%] rounded-2xl bg-white/6 px-4 py-3 text-sm text-slate-300">
                                    Thinking...
                                </div>
                            ) : null}
                        </div>

                        <div className="space-y-3 border-t border-white/10 px-4 py-4">
                            <div className="flex flex-wrap gap-2">
                                {suggestions.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        type="button"
                                        onClick={() => sendMessage(suggestion)}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 transition hover:border-indigo-400/40 hover:bg-white/10"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>

                            <form
                                className="flex items-center gap-2"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    sendMessage(input);
                                }}
                            >
                                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                    <input
                                        value={input}
                                        onChange={(event) => setInput(event.target.value)}
                                        placeholder="Type a message..."
                                        className="w-full border-0 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-0"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                    disabled={loading}
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}