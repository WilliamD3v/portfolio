import BaseProjectOne from "./demos/BaseProjectOne";
import ProProjectOne from "./demos/ProProjectOne";
import PremiumProjectOne from "./demos/PremiumProjectOne";

export type DesignLevel = "base" | "professional" | "premium";

export type DesignProject = {
  slug: string;
  title: string;
  level: DesignLevel;
  shortDescription: string;
  fullDescription: string;
  component: React.ComponentType;
};

export const designProjects: DesignProject[] = [
  {
    slug: "site-institucional-clean",
    title: "Site Institucional Clean",
    level: "base",
    shortDescription:
      "Projeto objetivo e elegante para apresentar serviços e contato.",
    fullDescription:
      "Um modelo base focado em clareza, boa leitura e apresentação profissional para negócios que precisam de um site bonito e direto.",
    component: BaseProjectOne,
  },
  {
    slug: "landing-comercial-blue",
    title: "Landing Comercial Blue",
    level: "professional",
    shortDescription: "Projeto com mais presença visual e foco comercial.",
    fullDescription:
      "Modelo profissional com maior impacto visual, seções estratégicas e mais força para transmitir valor ao cliente.",
    component: ProProjectOne,
  },
  {
    slug: "luxury-brand-experience",
    title: "Luxury Brand Experience",
    level: "premium",
    shortDescription:
      "Projeto premium com estética sofisticada e forte percepção de valor.",
    fullDescription:
      "Um layout premium criado para marcas que querem impressionar, gerar autoridade e entregar uma experiência mais refinada.",
    component: PremiumProjectOne,
  },
];
