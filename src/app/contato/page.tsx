"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactGrid } from "@/components/sections/contact-grid";
import { Container } from "@/components/ui/container";

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSendToWhatsApp() {
    const phone = "5583996823375";

    const text = `Olá, me chamo ${name}.
Email: ${email}

Mensagem:
${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Deixe seus canais organizados para o cliente escolher como falar com você"
        description="Você pode usar essa página para centralizar WhatsApp, email e chamada de atendimento com uma estrutura limpa e profissional."
      />

      <ContactGrid />

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7">
            <h2 className="text-2xl font-semibold text-white">Mensagem rápida</h2>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-white outline-none transition focus:border-brand"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email"
                className="h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-white outline-none transition focus:border-brand"
              />
            </div>

            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descreva o que você precisa"
              className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition focus:border-brand"
            />

            <button
              onClick={handleSendToWhatsApp}
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-2xl border border-brand/40 bg-brand px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-light"
            >
              Enviar mensagem
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}