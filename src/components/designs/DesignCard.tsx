"use client";

import Link from "next/link";
import PreviewShell from "./PreviewShell";
import { DesignProject } from "./projects";

interface DesignCardProps {
  project: DesignProject;
}

export default function DesignCard({ project }: DesignCardProps) {
  const DemoComponent = project.component;

  const badgeStyles = {
    base: "bg-white text-slate-950",
    professional: "bg-cyan-400 text-slate-950",
    premium: "bg-fuchsia-500 text-white",
  };

  const levelLabel = {
    base: "Base",
    professional: "Profissional",
    premium: "Premium",
  };

  return (
    <article className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl transition hover:-translate-y-1 hover:border-cyan-400/30">
      <PreviewShell>
        <DemoComponent />
      </PreviewShell>

      <div className="mt-5">
        <span
          className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] ${badgeStyles[project.level]}`}
        >
          {levelLabel[project.level]}
        </span>

        <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex gap-3">
          <Link
            href={`/designs/${project.slug}`}
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-cyan-400 px-5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Analisar projeto
          </Link>

          <button className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-bold text-white transition hover:bg-white/10">
            Escolher este modelo
          </button>
        </div>
      </div>
    </article>
  );
}