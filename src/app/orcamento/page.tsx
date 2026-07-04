import { PageHero } from "@/components/sections/page-hero";
import { BudgetSimulator } from "@/components/sections/budget-simulator";

export default function OrcamentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Monte uma estimativa inicial do seu projeto"
        description="Selecione as opções desejadas e veja uma estimativa automática do valor. Você pode enviar a solicitação para dar continuidade ao atendimento."
      />
      <BudgetSimulator />
    </>
  );
}
