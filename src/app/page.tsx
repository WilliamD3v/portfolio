"use client";

import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Process } from "@/components/sections/process";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SectionIndicator } from "@/components/ui/section-indicator";

export default function HomePage() {
  return (
    <>
      <SectionIndicator />

      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <ServicesPreview />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="portfolio">
        <PortfolioPreview />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="cta">
        <CtaBanner />
      </section>
    </>
  );
}