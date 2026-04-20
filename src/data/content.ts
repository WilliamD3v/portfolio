import { Faq, Project, Service, Testimonial } from "@/types";

export const services: Service[] = [
  {
    title: "Sites profissionais",
    description:
      "Sites modernos, rápidos e focados em conversão para apresentar seu negócio de forma profissional.",
    priceFrom: "R$ 1.200",
    deadline: "5 a 12 dias",
    highlights: ["Design responsivo", "SEO básico", "Integração com WhatsApp"],
  },
  {
    title: "Landing pages",
    description:
      "Páginas pensadas para campanhas, tráfego pago e captação de leads com CTA forte.",
    priceFrom: "R$ 900",
    deadline: "3 a 7 dias",
    highlights: ["Alta conversão", "Formulários", "Copy estratégica"],
  },
  {
    title: "Sistemas sob medida",
    description:
      "Sistemas web para gestão, cadastro, vendas, relatórios e processos internos do seu negócio.",
    priceFrom: "R$ 3.500",
    deadline: "Sob análise",
    highlights: [
      "Painel administrativo",
      "Login seguro",
      "Automação de processos",
    ],
  },
  {
    title: "Suporte e manutenção",
    description:
      "Acompanhamento, correções, melhorias, performance e evolução contínua do seu projeto.",
    priceFrom: "R$ 350/mês",
    deadline: "Recorrente",
    highlights: ["Correções rápidas", "Atualizações", "Ajustes contínuos"],
  },
];

export const projects: Project[] = [
  {
    title: "Simões Atacado",
    category: "Site | Catálogo",
    description:
      "Catálogo online desenvolvido para apresentar produtos de atacado com mais organização, melhor leitura no celular e uma vitrine digital mais profissional para a loja.",
    stack: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
    result:
      "Maior clareza na exposição dos produtos, apresentação mais profissional da marca e navegação mais prática para clientes interessados no catálogo.",
    url: "https://simoesatacado.vercel.app",
  },
  {
    title: "Perfil Edson Ferreira",
    category: "Blog / Notícias",
    description:
      "Plataforma de notícias desenvolvida para organizar e exibir conteúdos de forma clara, com navegação simples, leitura otimizada e atualização dinâmica das matérias.",
    stack: ["Next.js", "Tailwind", "Node.js"],
    result:
      "Melhor organização das notícias, experiência de leitura mais fluida e estrutura ideal para publicação e atualização constante de conteúdos.",
    url: "https://perfiledsonferreira.vercel.app",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Leonardo Simões",
    company: "Catalogo",
    quote:
      "O site ficou profissional, rápido e ajudou muito no atendimento pelo WhatsApp.",
  },
  {
    name: "Edson Ferreira",
    company: "Perfil de Noticias",
    quote:
      "Consegui organizar melhor as notícias e ficou muito mais fácil publicar conteúdos com clareza para os leitores.",
  },
];

export const faqs: Faq[] = [
  {
    question: "Quanto tempo leva para entregar um projeto?",
    answer:
      "Depende da complexidade. Landing pages costumam sair em poucos dias e sistemas sob medida exigem análise detalhada.",
  },
  {
    question: "Você atende apenas na sua cidade?",
    answer:
      "Não. Posso atender online e desenvolver projetos para qualquer lugar do Brasil.",
  },
  {
    question: "O orçamento do site é fechado na hora?",
    answer:
      "O valor exibido no simulador é uma estimativa inicial. O preço final pode variar de acordo com os detalhes do projeto.",
  },
  {
    question: "Você faz manutenção depois da entrega?",
    answer:
      "Sim. Posso oferecer suporte pontual ou acompanhamento mensal, dependendo da necessidade do projeto.",
  },
];
