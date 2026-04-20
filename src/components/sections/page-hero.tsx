import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="overflow-hidden py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-light sm:text-xs">
            {eyebrow}
          </span>

          <div className="mt-5 max-w-4xl space-y-4">
            <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
