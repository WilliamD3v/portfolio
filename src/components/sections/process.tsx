import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Briefing e objetivo",
    description: "Você me explica sua necessidade, o público do projeto e o resultado esperado.",
  },
  {
    number: "02",
    title: "Orçamento e estratégia",
    description: "Defino a solução ideal, escopo, prazo e investimento com clareza.",
  },
  {
    number: "03",
    title: "Design e desenvolvimento",
    description: "Monto uma interface moderna, responsiva e programo tudo com foco em performance.",
  },
  {
    number: "04",
    title: "Entrega e suporte",
    description: "Projeto publicado, ajustes finais e suporte para continuidade e evolução.",
  },
];

export function Process() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Como funciona"
          title="Um processo simples para você sair da ideia e chegar na entrega"
          description="Seu cliente precisa sentir organização e profissionalismo. Seu site também deve comunicar isso logo na primeira visita."
        />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <span className="text-3xl font-black text-brand/40 sm:text-4xl">{step.number}</span>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
