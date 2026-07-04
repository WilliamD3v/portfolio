import { testimonials } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Prova social"
          title="Experiência dos nossos clientes"
          description="Troque estes exemplos pelos feedbacks dos seus clientes reais para deixar o site ainda mais forte comercialmente.
          Depoimentos de clientes que mostram, na prática, a experiência de trabalhar com os projetos desenvolvidos e os resultados obtidos."
        />

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <p className="text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.company}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
