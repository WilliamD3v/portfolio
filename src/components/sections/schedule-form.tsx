"use client";

import { useMemo, useState } from "react";

import { CalendarCheck2, Loader2, Ticket } from "lucide-react";

import api from "@/lib/axios";
import { Container } from "@/components/ui/container";

const services = [
  "Site institucional",
  "Landing page",
  "Sistema web",
  "Catálogo online",
  "Manutenção",
  "Consultoria",
];

type ScheduleResponse = {
  success?: boolean;
  message?: string;
  data?: {
    _id: string;
    ticketNumber: string;
    name: string;
    phone: string;
    notes?: string;
    service: string;
  };
};

export function ScheduleForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedService, setSelectedService] = useState(services[0]);
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const summary = useMemo(() => `${selectedService}`, [selectedService]);

  function generateTicket() {
    const random = Math.floor(1000 + Math.random() * 9000);
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    return `ATD-${year}${random}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);
      setErrorMessage("");

      const newTicket = generateTicket();

      const response = await api.post("/schedule/create", {
        ticketNumber: newTicket,
        name,
        phone,
        notes,
        service: selectedService,
      });

      const data: ScheduleResponse = response.data;

      setTicketNumber(data?.data?.ticketNumber || newTicket);
      setSubmitted(true);

      setName("");
      setPhone("");
      setNotes("");
      setSelectedService(services[0]);
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Não foi possível enviar sua solicitação.";

      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  }
  const cardClass = "rounded-[1.35rem] border px-4 py-4 text-left transition";

  return (
    <section className="pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7"
          >
            <div className="grid gap-6">
              <div className="grid gap-5 lg:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-200">
                  Nome
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-white outline-none transition focus:border-brand"
                    required
                  />
                </label>

                <label className="grid gap-2 text-sm text-slate-200">
                  WhatsApp
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-white outline-none transition focus:border-brand"
                    required
                  />
                </label>
              </div>

              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                  Serviço
                </p>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`${cardClass} ${
                        selectedService === service
                          ? "border-brand bg-brand/10 text-white"
                          : "border-white/10 bg-slate-950/60 text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <label className="grid gap-2 text-sm text-slate-200">
                Observações
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Me conte rapidamente o que você precisa"
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition focus:border-brand"
                />
              </label>

              {errorMessage && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-brand/40 bg-brand px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Solicitar atendimento"
                )}
              </button>
            </div>
          </form>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 sm:p-6 xl:sticky xl:top-24">
            {!submitted ? (
              <>
                <div className="flex items-start gap-3">
                  <span className="rounded-2xl bg-brand/10 p-3 text-brand-light">
                    <CalendarCheck2 className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                      Solicitação
                    </p>
                    <p className="text-base font-semibold text-white sm:text-lg">
                      {summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-slate-200">
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                      Cliente
                    </p>
                    <p className="mt-2 font-medium">
                      {name || "Seu nome aparecerá aqui"}
                    </p>
                  </div>

                  <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                      WhatsApp
                    </p>
                    <p className="mt-2 font-medium">
                      {phone || "Seu contato aparecerá aqui"}
                    </p>
                  </div>

                  <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                      Observações
                    </p>
                    <p className="mt-2 font-medium leading-7 text-slate-300">
                      {notes || "Nenhuma observação por enquanto."}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-[1.6rem] border border-brand/30 bg-brand/10 p-5">
                <div className="flex items-start gap-3">
                  <span className="rounded-2xl bg-brand/15 p-3 text-brand-light">
                    <Ticket className="h-6 w-6" />
                  </span>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                      Ticket gerado
                    </p>
                    <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                      {ticketNumber}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm text-slate-200">
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                      Serviço solicitado
                    </p>
                    <p className="mt-2 font-medium text-white">
                      Atendimento registrado com sucesso
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.2rem] border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-200">
                  Sua solicitação foi enviada com sucesso. Guarde o número do
                  seu atendimento.
                </div>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </section>
  );
}
