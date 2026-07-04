import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaBanner() {
  return (
    <section className="pb-14 pt-2 sm:pb-16 lg:pb-20">
      <Container>
        <div className="rounded-[2rem] border border-brand/20 bg-brand/10 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-light sm:text-xs">
                Vamos tirar seu projeto do papel
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                Tenha um site que te apresente bem, organize seu atendimento e facilite seu fechamento.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
                Você pode começar agora pelo simulador de orçamento ou agendar um horário para conversar sobre sua ideia.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/orcamento" className="w-full sm:w-auto">
                Fazer orçamento
              </Button>
              <Button href="/agendamento" variant="secondary" className="w-full sm:w-auto">
                Agendar conversa
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
