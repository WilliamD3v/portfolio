import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const highlights = [
  "Projetos responsivos e com visual profissional",
  "Experiência com catálogos, sistemas e páginas comerciais",
  "Foco em performance, usabilidade e clareza comercial",
  "Atendimento direto, sem burocracia excessiva",
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mim"
        title="Desenvolvo soluções digitais que ajudam você a apresentar melhor seu negócio e atender com mais eficiência"
        description="Crio sites e sistemas com foco em organização, clareza e experiência do usuário, facilitando o contato com o cliente e transmitindo mais profissionalismo desde o primeiro acesso."
      />

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Quem é você para o cliente?
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
                <p>
                  Sou desenvolvedor focado em criar sites, sistemas e soluções
                  digitais que ajudam negócios a se apresentarem melhor,
                  organizarem seus processos e atenderem com mais eficiência.
                </p>
                <p>
                  Meu objetivo é entregar mais do que apenas um site: criar uma
                  estrutura digital clara, profissional e pensada para facilitar
                  o contato, melhorar a comunicação e gerar mais resultados para
                  o cliente.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 sm:p-7">
              <h3 className="text-2xl font-semibold text-white">
                Diferenciais
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/orcamento" className="w-full sm:w-auto">
                  Solicitar orçamento
                </Button>
                <Button
                  href="/agendamento"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Agendar conversa
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
