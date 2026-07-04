import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl space-y-3 sm:space-y-4">
        <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-light sm:text-xs">
          {eyebrow}
        </span>
        <h2 className="max-w-2xl text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      </div>

      {action ? <div className="w-full sm:w-auto">{action}</div> : null}
    </div>
  );
}
