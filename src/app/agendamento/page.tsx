import { PageHero } from "@/components/sections/page-hero";
import { ScheduleForm } from "@/components/sections/schedule-form";

export default function AgendamentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Agendamento"
        title="Solicite seu atendimento de forma rápida e organizada"
        description="Preencha suas informações, escolha o tipo de serviço e envie sua solicitação. Você receberá o retorno para dar continuidade ao atendimento."
      />
      <ScheduleForm />
    </>
  );
}
