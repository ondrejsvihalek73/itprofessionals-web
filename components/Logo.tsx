export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`group flex flex-col leading-none ${className}`}>
      <span className="font-display text-lg font-bold tracking-tight text-fg">
        IT Professionals
      </span>
      <span className="mt-0.5 text-[11px] font-medium tracking-wide text-muted-dim">
        digital transformation
      </span>
    </a>
  );
}
