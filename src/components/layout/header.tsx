"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/designs", label: "Designs Web" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/orcamento", label: "Orçamento" },
  { href: "/agendamento", label: "Agendamento" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dashboardHref, setDashboardHref] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies["nextauth.token"];
    const userId = cookies["nextauth.userId"];

    if (token && userId) {
      setDashboardHref(`/dashboard/${userId}`);
    } else {
      setDashboardHref(null);
    }
  }, []);

  function handleLogout() {
    destroyCookie(undefined, "nextauth.token");
    destroyCookie(undefined, "nextauth.userId");

    setDashboardHref(null);
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-[4.5rem] items-center justify-between gap-3 py-2">
          <Link
            href="/"
            className="shrink-0 text-base font-black tracking-[0.18em] text-white sm:text-lg"
          >
            Will<span className="text-brand">Tech</span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            {dashboardHref && (
              <>
                <Button
                  href={dashboardHref}
                  variant="secondary"
                  className="hidden lg:inline-flex"
                >
                  Painel
                </Button>

                <button
                  onClick={handleLogout}
                  className="hidden h-10 items-center justify-center rounded-xl border border-red-500/30 px-4 text-sm font-semibold text-red-400 transition hover:bg-red-500/10 lg:inline-flex"
                >
                  Sair
                </button>
              </>
            )}

            <Button
              href="/orcamento"
              variant="secondary"
              className="hidden lg:inline-flex"
            >
              Fazer orçamento
            </Button>

            <Button href="/agendamento">Agendar</Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "fixed inset-0 top-[73px] bg-slate-950/70 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className={cn(
            "fixed inset-x-4 top-[84px] rounded-[2rem] border border-white/10 bg-slate-950/95 p-4 shadow-2xl transition-all duration-200",
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          )}
        >
          <nav className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-white/10 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4">
            {dashboardHref && (
              <>
                <Button
                  href={dashboardHref}
                  variant="secondary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Ir para o painel
                </Button>

                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="w-full rounded-xl border border-red-500/30 px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                >
                  Sair
                </button>
              </>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                href="/orcamento"
                variant="secondary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Fazer orçamento
              </Button>

              <Button
                href="/agendamento"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Agendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}