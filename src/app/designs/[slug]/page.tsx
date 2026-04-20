import { designProjects } from "@/components/designs/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

interface DesignDetailsPageProps {
  params: {
    slug: string;
  };
}

export default function DesignDetailsPage({
  params,
}: DesignDetailsPageProps) {
  const project = designProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

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
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/designs"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Voltar
            </Link>

            <span
              className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] ${badgeStyles[project.level]}`}
            >
              {levelLabel[project.level]}
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="px-0 py-0">
        <DemoComponent />
      </section>
    </main>
  );
}