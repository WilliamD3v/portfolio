import { services } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções para apresentar, vender e organizar seu negócio online"
          description="Cada projeto é planejado para resolver um problema real: captar clientes, melhorar atendimento, organizar processos e valorizar sua marca."
          action={<Button href="/servicos" variant="secondary" className="w-full sm:w-auto">Ver todos</Button>}
        />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="inline-flex w-fit rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-light">
                  {service.priceFrom}
                </span>
              </div>
              <p className="text-sm leading-7 text-slate-300">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {service.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
              <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                Prazo médio: {service.deadline}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
