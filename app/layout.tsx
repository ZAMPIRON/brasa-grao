import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { Flame, LayoutGrid } from "lucide-react";
import NavLink from "@/components/NavLink";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Brasa & Grão | Smash Burgers & Specialty Coffee",
  description: "Hamburgueria e cafeteria artesanal na Rua dos Pinheiros, São Paulo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        {/* CABEÇALHO COMPARTILHADO */}
        <header className="sticky top-0 z-10 border-b border-borda bg-white/90 backdrop-blur">
          <div className="container-site flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brasa text-white">
                <Flame size={18} />
              </span>
              <span className="leading-tight">
                <strong className="block font-serif text-lg">Brasa &amp; Grão</strong>
                <small className="block text-[10px] tracking-wide text-texto-suave uppercase">
                  Smash Burgers &amp; Specialty Coffee
                </small>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-borda bg-creme p-1 md:flex">
              <NavLink href="/">Início</NavLink>
              <NavLink href="/cardapio">Cardápio Completo</NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-[11px] font-semibold text-green-700 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Aberto • 25–35 min
              </span>
              <button
                aria-label="Painel Gestor"
                className="flex items-center gap-1.5 rounded-lg border border-borda bg-white px-3 py-2 text-xs font-semibold whitespace-nowrap hover:bg-creme"
              >
                <LayoutGrid size={14} />
                <span className="hidden sm:inline">Painel Gestor</span>
              </button>
            </div>
          </div>

          {/* menu para telas pequenas */}
          <nav className="container-site flex gap-1 pb-3 md:hidden">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/cardapio">Cardápio Completo</NavLink>
          </nav>
        </header>

        {/* CONTEÚDO DE CADA PÁGINA (page.tsx) */}
        <main className="flex-1 py-8">{children}</main>

        {/* RODAPÉ COMPARTILHADO */}
        <footer className="bg-carvao text-white">
          <div className="container-site py-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brasa">
                  <Flame size={18} />
                </span>
                <span className="leading-tight">
                  <strong className="block font-serif text-lg">Brasa &amp; Grão</strong>
                  <small className="block text-[10px] tracking-wide text-white/50 uppercase">
                    Rua dos Pinheiros, 480 • São Paulo
                  </small>
                </span>
              </div>

              <ul className="flex flex-wrap gap-6 text-xs text-white/80">
                <li>
                  <Link href="/" className="hover:text-white">Início</Link>
                </li>
                <li>
                  <Link href="/cardapio" className="hover:text-white">Cardápio Completo</Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Área do Gestor (Admin)</a>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-[11px] text-white/50 sm:flex-row">
              <p>
                © 2026 Brasa &amp; Grão Artesanal. Layout didático para aula de
                Next.js (Rotas &amp; Layouts).
              </p>
              <p>Terça a Domingo • 18h às 23h30</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
