import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { services } from "@/data/content";
import { Button } from "@/components/ui/button";

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Serviços digitais para quem quer apresentar melhor sua empresa e vender com mais organização"
        description="Estruturei esta página para mostrar com clareza o que você faz, para quem faz e como isso pode ajudar o cliente de forma prática."
      />

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                  <span className="inline-flex w-fit rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-semibold text-brand-light">
                    {service.priceFrom}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">{service.description}</p>
                <ul className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                    Prazo médio: {service.deadline}
                  </p>
                  <Button href="/orcamento" variant="secondary" className="w-full sm:w-auto">
                    Pedir orçamento
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
