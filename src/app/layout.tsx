import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { queryClient } from "@/services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/authContext";
import { MenuProvider } from "@/context/MenuContext";

export const metadata: Metadata = {
  title: "WillTech | Criação de Sites Profissionais",
  description:
    "Portfólio profissional com orçamento online, agendamento de atendimento e apresentação de serviços de desenvolvimento web.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <MenuProvider>

          <Header />
          <main>
            <AuthProvider>{children}</AuthProvider>
            <Footer />
          </main>
          </MenuProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
