export type Service = {
  title: string;
  description: string;
  priceFrom: string;
  deadline: string;
  highlights: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  result: string;
  url: string;
};
export type Testimonial = {
  name: string;
  company: string;
  quote: string;
};

export type Faq = {
  question: string;
  answer: string;
};
