"use client";

import DesignCard from "@/components/designs/DesignCard";
import { designProjects } from "@/components/designs/projects";

export default function DesignsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-cyan-200">
              vitrine de projetos
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Escolha entre projetos reais classificados por nível de design
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Veja o início real de cada projeto, compare estilos e entre na
              página de demonstração para navegar livremente dentro do design.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-2">
          {designProjects.map((project) => (
            <DesignCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}