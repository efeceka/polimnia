export default function Icon({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
      fill="currentColor"
    >
      {children}
    </svg>
  );
}

