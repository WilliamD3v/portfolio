import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { queryClient } from "@/services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/authContext";
import { MenuProvider } from "@/context/MenuContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://willtech.com.br"),

  title: {
    default: "WillTech | Criação de Sites Profissionais",
    template: "%s | WillTech",
  },

  description:
    "Desenvolvimento de sites, landing pages e sistemas personalizados para empresas.",

  keywords: [
    "criação de sites",
    "desenvolvimento web",
    "landing page",
    "sistema web",
    "Next.js",
    "React",
    "WillTech",
  ],

  authors: [{ name: "WillTech" }],

  creator: "WillTech",

  openGraph: {
    title: "WillTech",
    description:
      "Desenvolvimento de sites profissionais e sistemas personalizados.",
    url: "https://willtech.com.br",
    siteName: "WillTech",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WillTech",
    description:
      "Desenvolvimento de sites profissionais e sistemas personalizados.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
