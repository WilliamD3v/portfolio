"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const projectTypes = [
  { label: "Landing page", value: 900 },
  { label: "Site institucional", value: 1400 },
  { label: "Loja virtual", value: 2600 },
  { label: "Sistema web", value: 4200 },
];

const features = [
  { label: "Painel administrativo", value: 900 },
  { label: "Login de usuários", value: 600 },
  { label: "Integração com WhatsApp", value: 250 },
  { label: "Relatórios", value: 700 },
  { label: "Pagamento online", value: 850 },
  { label: "Dashboard com métricas", value: 800 },
];

const deadlines = [
  { label: "Normal", value: 0 },
  { label: "Prioritário", value: 500 },
  { label: "Urgente", value: 1200 },
];

const designLevels = [
  { label: "Base", value: 0 },
  { label: "Profissional", value: 450 },
  { label: "Premium", value: 950 },
];

export function BudgetSimulator() {
  const [projectType, setProjectType] = useState(projectTypes[1].label);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "Integração com WhatsApp",
  ]);
  const [deadline, setDeadline] = useState(deadlines[0].label);
  const [design, setDesign] = useState(designLevels[1].label);
  const [showMobileSummary, setShowMobileSummary] = useState(false);

  const total = useMemo(() => {
    const projectBase =
      projectTypes.find((item) => item.label === projectType)?.value ?? 0;

    const featureTotal = selectedFeatures.reduce(
      (acc, feature) =>
        acc + (features.find((item) => item.label === feature)?.value ?? 0),
      0,
    );

    const deadlineExtra =
      deadlines.find((item) => item.label === deadline)?.value ?? 0;

    const designExtra =
      designLevels.find((item) => item.label === design)?.value ?? 0;

    return projectBase + featureTotal + deadlineExtra + designExtra;
  }, [projectType, selectedFeatures, deadline, design]);

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostei do simulador e quero conversar sobre meu projeto.\n\nTipo: ${projectType}\nDesign: ${design}\nPrazo: ${deadline}\nFuncionalidades: ${
      selectedFeatures.join(", ") || "Nenhuma"
    }\nEstimativa: ${formatCurrency(total)}`,
  );

  function toggleFeature(label: string) {
    setSelectedFeatures((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  }

  const cardClass =
    "rounded-[1.35rem] border px-4 py-4 text-left transition sm:px-5";

  const summaryItems = [
    ["Tipo", projectType],
    ["Design", design],
    ["Prazo", deadline],
    [
      "Funcionalidades",
      selectedFeatures.length
        ? selectedFeatures.join(", ")
        : "Nenhuma selecionada",
    ],
  ];

  return (
    <section className="pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
          <div className="min-w-0">
            <div className="sticky top-[72px] z-30 mb-5 xl:hidden">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Estimativa
                    </p>
                    <h2 className="truncate text-xl font-black text-white sm:text-2xl">
                      {formatCurrency(total)}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowMobileSummary((prev) => !prev)}
                    className="shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-400/15"
                  >
                    {showMobileSummary ? "Ocultar" : "Resumo"}
                  </button>
                </div>

                {showMobileSummary && (
                  <div className="border-t border-white/10 px-4 py-4 sm:px-5">
                    <div className="space-y-3">
                      {summaryItems.map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-[1.15rem] border border-white/10 bg-white/5 p-3"
                        >
                          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                            {label}
                          </p>
                          <p className="mt-1.5 text-sm font-medium leading-6 text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3">
                      <Button
                        href={`https://wa.me/5583996823375?text=${whatsappMessage}`}
                        className="w-full"
                      >
                        Enviar no WhatsApp
                      </Button>
                      <Button
                        href="/agendamento"
                        variant="secondary"
                        className="w-full"
                      >
                        Agendar atendimento
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7">
              <div className="grid gap-8">
                <div>
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                    1. Tipo de projeto
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {projectTypes.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setProjectType(item.label)}
                        className={`${cardClass} ${
                          projectType === item.label
                            ? "border-brand bg-brand/10 text-white"
                            : "border-white/10 bg-slate-950/50 text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span className="block font-semibold">{item.label}</span>
                        <span className="mt-2 block text-sm text-slate-400">
                          A partir de {formatCurrency(item.value)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                    2. Funcionalidades
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {features.map((item) => {
                      const checked = selectedFeatures.includes(item.label);

                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => toggleFeature(item.label)}
                          className={`${cardClass} ${
                            checked
                              ? "border-brand bg-brand/10 text-white"
                              : "border-white/10 bg-slate-950/50 text-slate-300 hover:bg-white/5"
                          }`}
                        >
                          <span className="block font-semibold">
                            {item.label}
                          </span>
                          <span className="mt-2 block text-sm text-slate-400">
                            + {formatCurrency(item.value)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                      3. Prazo
                    </p>
                    <div className="grid gap-3">
                      {deadlines.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setDeadline(item.label)}
                          className={`${cardClass} ${
                            deadline === item.label
                              ? "border-brand bg-brand/10 text-white"
                              : "border-white/10 bg-slate-950/50 text-slate-300 hover:bg-white/5"
                          }`}
                        >
                          <span className="block font-semibold">
                            {item.label}
                          </span>
                          <span className="mt-2 block text-sm text-slate-400">
                            {item.value
                              ? `+ ${formatCurrency(item.value)}`
                              : "Sem adicional"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                      4. Nível de design
                    </p>
                    <div className="grid gap-3">
                      {designLevels.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setDesign(item.label)}
                          className={`${cardClass} ${
                            design === item.label
                              ? "border-brand bg-brand/10 text-white"
                              : "border-white/10 bg-slate-950/50 text-slate-300 hover:bg-white/5"
                          }`}
                        >
                          <span className="block font-semibold">
                            {item.label}
                          </span>
                          <span className="mt-2 block text-sm text-slate-400">
                            {item.value
                              ? `+ ${formatCurrency(item.value)}`
                              : "Incluso"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-5 xl:hidden">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                    Resumo rápido
                  </p>

                  <div className="mt-4 space-y-3">
                    {summaryItems.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[1.15rem] border border-white/10 bg-white/5 p-4"
                      >
                        <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                          {label}
                        </p>
                        <p className="mt-2 text-sm font-medium leading-7 text-white">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3">
                    <Button
                      href={`https://wa.me/5583996823375?text=${whatsappMessage}`}
                      className="w-full"
                    >
                      Enviar no WhatsApp
                    </Button>
                    <Button
                      href="/agendamento"
                      variant="secondary"
                      className="w-full"
                    >
                      Agendar atendimento
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 sm:p-6 xl:sticky xl:top-24 xl:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
              Estimativa
            </p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              {formatCurrency(total)}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Esse valor é uma base inicial. O preço final pode subir ou descer
              conforme o escopo real do projeto.
            </p>

            <div className="mt-6 space-y-3">
              {summaryItems.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-7 text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <Button
                href={`https://wa.me/5583996823375?text=${whatsappMessage}`}
                className="w-full"
              >
                Enviar no WhatsApp
              </Button>
              <Button
                href="/agendamento"
                variant="secondary"
                className="w-full"
              >
                Agendar atendimento
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}