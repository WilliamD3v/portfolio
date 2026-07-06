"use client";

import { useEffect, useRef, useState } from "react";

import { useMenu } from "@/context/MenuContext";

const sections = [
  { id: "hero", label: "Início" },
  { id: "services", label: "Serviços" },
  { id: "process", label: "Processo" },
  { id: "portfolio", label: "Portfólio" },
  { id: "testimonials", label: "Depoimentos" },
  { id: "faq", label: "FAQ" },
];

export function SectionIndicator() {
  const [active, setActive] = useState<string>("hero");
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const { open } = useMenu();

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = mobileNavRef.current;
    const activeItem = itemRefs.current[active];

    if (!container || !activeItem) return;

    const containerWidth = container.clientWidth;
    const itemLeft = activeItem.offsetLeft;
    const itemWidth = activeItem.offsetWidth;

    const targetScroll =
      itemLeft - containerWidth / 2 + itemWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  }, [active]);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (open) return null;

  return (
    <>
      <div className="fixed left-3 top-1/2 z-50 hidden -translate-y-1/2 md:block lg:left-4 xl:left-5">
        <div className="rounded-2xl border border-white/10 bg-slate-950/35 px-2 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur-md">
          <div className="flex flex-col gap-2">
            {sections.map((section) => {
              const isActive = active === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => handleNavigate(section.id)}
                  className="group flex items-center gap-2 rounded-xl px-2 py-1.5 text-left transition hover:bg-white/5"
                >
                  <span
                    className={`h-2 w-2 rounded-full transition ${isActive ? "bg-brand scale-125" : "bg-white/25"
                      }`}
                  />

                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition lg:text-[11px] ${isActive
                        ? "text-white"
                        : "text-white/45 group-hover:text-white/80"
                      }`}
                  >
                    {section.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-[420px] -translate-x-1/2 md:hidden">
        <div
          ref={mobileNavRef}
          className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/45 px-2 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max items-center gap-2">
            {sections.map((section) => {
              const isActive = active === section.id;

              return (
                <button
                  key={section.id}
                  ref={(el) => {
                    itemRefs.current[section.id] = el;
                  }}
                  onClick={() => handleNavigate(section.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${isActive
                      ? "bg-brand text-slate-950"
                      : "bg-white/5 text-white/65"
                    }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-slate-950" : "bg-white/35"
                      }`}
                  />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}