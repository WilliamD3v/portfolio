import { faqs } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="FAQs para ajudar na sua decisão"
          description="Tire dúvidas comuns sobre os serviços e entenda melhor como funciona o processo de desenvolvimento."
        />

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
