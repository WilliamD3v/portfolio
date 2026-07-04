import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/content";
import { ExternalLink } from "lucide-react";

type WebsitePreviewProps = {
  url: string;
  title: string;
};

function WebsitePreview({ url, title }: WebsitePreviewProps) {
  const captureWidth = 390;
  const captureHeight = 950;
  const scale = 1.02;

  return (
    <div className="relative h-[320px] overflow-hidden rounded-[1.25rem] bg-white sm:h-[360px] lg:h-[420px]">
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <iframe
          src={url}
          title={title}
          loading="lazy"
          className="absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: `${captureWidth}px`,
            height: `${captureHeight}px`,
            transform: `scale(${scale})`,
          }}
        />
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title="Serviços disponíveis para diferentes tipos de projeto"
        description="Explore as opções de serviços, entenda o que cada um inclui e veja qual se encaixa melhor na sua necessidade."
      />

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >
                <div className="border-b border-white/10 bg-slate-950/70 p-3">
                  <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950">
                    <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <WebsitePreview url={project.url} title={project.title} />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-light sm:text-xs">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-light"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-slate-950/50 p-4 text-sm leading-7 text-slate-200">
                    <strong className="text-white">Resultado:</strong>{" "}
                    {project.result}
                  </div>

                  <div className="mt-5">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-brand px-5 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      Visitar o site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
