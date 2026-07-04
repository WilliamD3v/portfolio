import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

const styles = {
  primary:
    "border border-brand/40 bg-brand text-slate-950 shadow-glow hover:bg-brand-light",
  secondary:
    "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  ghost:
    "border border-white/10 bg-transparent text-white hover:bg-white/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold transition-all duration-200 sm:px-6",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
