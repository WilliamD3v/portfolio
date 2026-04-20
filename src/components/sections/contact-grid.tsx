import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/container";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Atendimento rápido para tirar dúvidas e alinhar o projeto.",
    value: "(83) 99682-3375",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Ideal para propostas, briefing e detalhes mais completos.",
    value: "williansilva99112@gmail.com",
  },
  {
    icon: PhoneCall,
    title: "Atendimento agendado",
    description: "Escolha o melhor horário para conversar com calma sobre seu projeto.",
    value: "Disponível de segunda a sexta",
  },
];

export function ContactGrid() {
  return (
    <section className="pb-12 sm:pb-14 lg:pb-16">
      <Container>
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <card.icon className="mb-4 h-8 w-8 text-brand-light" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
              <p className="mt-5 break-words text-sm font-semibold text-white">{card.value}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
