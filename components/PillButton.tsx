import Link from "next/link";
import { ArrowUpRight } from "./icons/ArrowUpRight";

type PillButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export function PillButton({
  href = "#",
  children,
  variant = "dark",
  className = "",
}: PillButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "dark"
      ? "bg-ink text-cream hover:bg-accent hover:text-cream"
      : "bg-cream text-ink hover:bg-accent hover:text-cream";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className="h-3 w-3" />
      </span>
    </Link>
  );
}
