import { ArrowRight, CalendarDays, Code2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const benefits = [
  {
    icon: Code2,
    title: "Desenvolvimento moderno",
    text: "Next.js, React e Tailwind com foco em performance e navegação rápida.",
  },
  {
    icon: FileText,
    title: "Orçamento rápido",
    text: "Simulação de preço direto pelo site para acelerar o fechamento.",
  },
  {
    icon: CalendarDays,
    title: "Agenda online",
    text: "Atendimento marcado de forma prática, sem excesso de mensagens.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-light sm:px-4 sm:py-2 sm:text-xs">
              Sites, sistemas e automações
            </span>

            <div className="space-y-4 sm:space-y-5">
              <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Transformo sua ideia em um projeto digital profissional que gera mais confiança e mais vendas.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
                Crio sites em Next.js, landing pages de alta conversão, sistemas sob medida e páginas prontas para orçamento e agendamento online.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/orcamento" className="group w-full sm:w-auto">
                Montar orçamento
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
              <Button href="/agendamento" variant="secondary" className="w-full sm:w-auto">
                Agendar atendimento
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <item.icon className="mb-4 h-7 w-7 text-brand-light sm:h-8 sm:w-8" />
                  <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-6 -top-4 -bottom-4 rounded-full bg-brand/10 blur-3xl sm:inset-x-10" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-glow backdrop-blur sm:p-6 lg:p-7">
              <div className="mb-5 flex flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                    Resumo comercial
                  </p>
                  <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                    Site + orçamento + agenda
                  </p>
                </div>
                <span className="inline-flex w-fit rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand-light">
                  Online
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  ["Projeto", "Portal profissional para captação de clientes"],
                  ["Prazo médio", "7 a 15 dias"],
                  ["Conversão", "CTAs para WhatsApp, formulário e agendamento"],
                  ["Diferencial", "Simulador de orçamento no próprio site"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-white sm:text-[15px]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
