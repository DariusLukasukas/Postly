interface HoverCardProps {
  label: string;
}
export default function HoverCard({ label }: HoverCardProps) {
  return (
    <span className="pointer-events-none absolute left-full z-[999] ml-1 hidden whitespace-nowrap rounded-lg bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:invert md:block">
      {label}
    </span>
  );
}
