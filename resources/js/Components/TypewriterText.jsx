import { useEffect, useState } from 'react';

export default function TypewriterText({ words = [] }) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!words.length) {
            return undefined;
        }

        const currentWord = words[index % words.length];
        let timeoutId;

        if (!deleting && text.length < currentWord.length) {
            timeoutId = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), 65);
        } else if (!deleting && text.length === currentWord.length) {
            timeoutId = setTimeout(() => setDeleting(true), 1400);
        } else if (deleting && text.length > 0) {
            timeoutId = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), 35);
        } else if (deleting && text.length === 0) {
            setDeleting(false);
            setIndex((current) => (current + 1) % words.length);
        }

        return () => clearTimeout(timeoutId);
    }, [deleting, index, text, words]);

    return (
        <span className="inline-flex items-center gap-1 text-3xl font-semibold text-white md:text-5xl">
            <span>{text}</span>
            <span className="inline-block h-8 w-[2px] animate-pulse bg-indigo-400 align-middle md:h-12" />
        </span>
    );
}