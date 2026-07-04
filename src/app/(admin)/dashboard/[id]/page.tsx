"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  CalendarDays,
  ClipboardList,
  Clock3,
  Loader2,
  Phone,
  Search,
  Ticket,
  User2,
  Wrench,
} from "lucide-react";

import { MdDoNotDisturbOn } from "react-icons/md";

import { GiConfirmed } from "react-icons/gi";


import { Container } from "@/components/ui/container";
import { getSchedules } from "@/hooks/schedules";
import axios from "@/lib/axios";

type ScheduleProps = {
  _id: string;
  ticketNumber: string;
  name: string;
  phone: string;
  notes?: string;
  service: string;
  scheduledAt: string;
  createdAt: string;
  updatedAt: string;
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatDateTime(dateString: string) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Data inválida";
  }

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminSchedulesPage() {
  const [search, setSearch] = useState("");


  const [openDescriptionId, setOpenDescriptionId] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const {
    data: schedules,
    isLoading,
    isError,
  } = useQuery<ScheduleProps[]>({
    queryKey: ["schedules"],
    queryFn: getSchedules,
  });

  const filteredSchedules = useMemo(() => {
    if (!schedules) return [];

    return [...schedules]
      .filter((schedule) => {
        const value = search.toLowerCase();

        return (
          schedule.name.toLowerCase().includes(value) ||
          schedule.phone.toLowerCase().includes(value) ||
          schedule.ticketNumber.toLowerCase().includes(value) ||
          schedule.service.toLowerCase().includes(value) ||
          (schedule.notes || "").toLowerCase().includes(value)
        );
      })
      .sort(
        (a, b) =>
          new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime(),
      );
  }, [schedules, search]);

  const groupedSchedules = useMemo(() => {
    return filteredSchedules.reduce(
      (acc, schedule) => {
        const rawDate = schedule.createdAt;

        const validDate = new Date(rawDate);

        const dateKey = isNaN(validDate.getTime())
          ? "Sem data"
          : validDate.toLocaleDateString("pt-BR");

        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }

        acc[dateKey].push(schedule);

        return acc;
      },
      {} as Record<string, ScheduleProps[]>,
    );
  }, [filteredSchedules]);

  const groupedEntries = Object.entries(groupedSchedules);

const handleDelete = async (id: string) => {
  try {
    await axios.post(`schedule/del-schedules/${id}`, {
      description,
    });
    
    setOpenDescriptionId(null);
    setDescription("");

  } catch (error) {
    console.error(error);
  }
};

  return (
    <section className="min-h-screen bg-slate-950 pb-14 pt-8 sm:pb-16 sm:pt-10">
      <Container>
        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
                  Painel administrativo
                </p>
                <h1 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-4xl">
                  Fila de atendimentos
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Os atendimentos estão organizados por data e horário, com
                  prioridade para os mais antigos.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-brand/10 p-3 text-brand-light">
                      <ClipboardList className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        Total
                      </p>
                      <h3 className="mt-1 text-xl font-black text-white">
                        {filteredSchedules.length}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-brand/10 p-3 text-brand-light">
                      <CalendarDays className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        Organização
                      </p>
                      <h3 className="mt-1 text-sm font-semibold text-white">
                        Por data e horário
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por nome, telefone, ticket, serviço ou observação"
                className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand"
              />
            </div>
          </div>

          {isLoading && (
            <div className="flex min-h-[240px] items-center justify-center rounded-[2rem] border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 text-slate-300">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Carregando agendamentos...</span>
              </div>
            </div>
          )}

          {isError && (
            <div className="rounded-[2rem] border border-red-500/20 bg-red-500/10 p-6 text-red-200">
              Não foi possível carregar os agendamentos.
            </div>
          )}

          {!isLoading && !isError && groupedEntries.length === 0 && (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="text-lg font-bold text-white">
                Nenhum agendamento encontrado
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Tente buscar por outro nome, ticket ou serviço.
              </p>
            </div>
          )}

          {!isLoading && !isError && groupedEntries.length > 0 && (
            <div className="grid gap-8">
              {groupedEntries.map(([date, items]) => (
                <div key={date} className="grid gap-4">
                  <div className="sticky top-4 z-10 rounded-[1.4rem] border border-brand/20 bg-slate-950/90 px-5 py-4 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="rounded-2xl bg-brand/10 p-3 text-brand-light">
                        <CalendarDays className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-black text-white">{date}</p>
                        <p className="text-xs text-slate-400">
                          {items.length} atendimento(s) nesta data
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 xl:grid-cols-2">
                    {items.map((schedule, index) => (
                      <article
                        key={schedule._id}
                        className="rounded-[2rem] border border-white/10 bg-white/5 p-5 transition hover:border-brand/30 hover:bg-white/[0.07] sm:p-6"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                              Ticket
                            </p>
                            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-bold text-white">
                              <Ticket className="h-4 w-4 text-brand-light" />
                              {schedule.ticketNumber}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-medium text-slate-300">
                            <Clock3 className="h-4 w-4" />
                            {formatDateTime(schedule.createdAt)}
                          </div>
                        </div>

                        <div className="mt-4 flex justify-between items-center gap-2">
                          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                            Posição na fila: {index + 1}
                          </span>


                          <div className="flex">
                            <div className="flex items-center text-[20px] border border-white/10 bg-slate-950/70 py-1 px-2 rounded-2xl text-xs">
                              <button className="text-red-600" onClick={() => setOpenDescriptionId(schedule._id)}>
                                <MdDoNotDisturbOn />
                              </button>
                            </div>

                            <div className="flex items-center text-[20px] border border-white/10 bg-slate-950/70 py-1 px-2 rounded-2xl text-xs">
                              <button className="text-green-500">
                                <GiConfirmed />
                              </button>
                            </div>
                          </div>
                        </div>


                        {openDescriptionId === schedule._id && (
                          <label className="mt-4 grid relateive top-3 text-sm text-slate-200">
                            <input
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              placeholder="Motivo do cancelamento"
                              className="h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-white outline-none transition focus:border-brand"
                            />

                            <button onClick={() => handleDelete(schedule._id)} className="mt-4" >
                              Confirmar
                            </button>
                          </label>
                        )}

                        <div className="mt-5 grid gap-3">
                          <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/70 p-4">
                            <div className="flex items-start gap-3">
                              <span className="rounded-2xl bg-white/5 p-3 text-slate-300">
                                <User2 className="h-4 w-4" />
                              </span>
                              <div>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                  Cliente
                                </p>
                                <p className="mt-2 text-sm font-semibold text-white">
                                  {schedule.name}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/70 p-4">
                            <div className="flex items-start gap-3">
                              <span className="rounded-2xl bg-white/5 p-3 text-slate-300">
                                <Phone className="h-4 w-4" />
                              </span>
                              <div>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                  WhatsApp
                                </p>
                                <p className="mt-2 text-sm font-semibold text-white">
                                  {schedule.phone}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/70 p-4">
                            <div className="flex items-start gap-3">
                              <span className="rounded-2xl bg-white/5 p-3 text-slate-300">
                                <Wrench className="h-4 w-4" />
                              </span>
                              <div>
                                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                  Serviço
                                </p>
                                <p className="mt-2 text-sm font-semibold text-white">
                                  {schedule.service}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/70 p-4">
                            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                              Observações
                            </p>
                            <p className="mt-2 text-sm leading-7 text-slate-300">
                              {schedule.notes?.trim()
                                ? schedule.notes
                                : "Nenhuma observação informada."}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
