export default function SocialIcon({ href, label, children, className = "" }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`grid h-7 w-7 place-items-center rounded bg-[color:var(--brand-olive)] text-white transition-colors hover:bg-[color:var(--brand-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-gold)] ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

