import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-base font-black tracking-[0.15em] text-white sm:text-lg">
              Will<span className="text-brand">Tech</span>
            </p>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Desenvolvimento de sites, landing pages e sistemas sob medida com foco em performance, organização e conversão.
            </p>
          </div>

          <div className="space-y-3 text-sm text-slate-400">
            <p className="break-words">Email: williansilva99112@williamdev.com</p>
            <p>WhatsApp: (83) 99682-3375</p>
            <div className="flex flex-wrap gap-4 pt-1 text-slate-300">
              <Link href="/orcamento">Orçamento</Link>
              <Link href="/agendamento">Agendamento</Link>
              <Link href="/contato">Contato</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
