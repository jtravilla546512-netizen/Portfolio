export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
    return (
        <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
            {eyebrow ? (
                <p className="font-code text-xs uppercase tracking-[0.3em] text-indigo-300/80">{eyebrow}</p>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
            {description ? <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{description}</p> : null}
        </div>
    );
}