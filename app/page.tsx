import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beef, Clock, Coffee, Star } from "lucide-react";

const diferenciais = [
  {
    icone: Beef,
    titulo: "Blend 100% Angus Fresco",
    texto: "Carne selecionada e moída diariamente na nossa cozinha.",
  },
  {
    icone: Coffee,
    titulo: "Torrefação Própria",
    texto: "Grãos especiais do Cerrado Mineiro e sobremesas autorais.",
  },
  {
    icone: Clock,
    titulo: "Entrega Quente em 30 min",
    texto: "Embalagem térmica selada para manter a crocância.",
  },
];

const maisPedidos = [
  {
    nome: "Duplo Brasa & Bacon",
    descricao:
      "Dois smash burgers de 90g na brasa, queijo cheddar inglês derretido, fatias de bacon crocante e molho defumado da casa no brioche.",
    preco: "R$ 38,90",
    nota: "4.9",
    tag: "Mais Vendido",
    tagCor: "bg-brasa",
    imagem: "/images/duplo-brasa-bacon.jpg",
  },
  {
    nome: "Truffle Brie & Cebola",
    descricao:
      "Hambúrguer alto 180g, queijo brie maçaricado, geleia artesanal de pimenta com bacon, rúcula fresca e maionese trufada no pão australiano.",
    preco: "R$ 44,90",
    nota: "5.0",
    tag: "Chef's Choice",
    tagCor: "bg-carvao",
    imagem: "/images/truffle-brie-cebola.jpg",
  },
  {
    nome: "Crispy Chicken Hot Honey",
    descricao:
      "Sobrecoxa de frango empanada super crocante, mel picante artesanal, picles da casa, salada coleslaw cremosa e pão de batata.",
    preco: "R$ 34,90",
    nota: "4.8",
    tag: "Novo",
    tagCor: "bg-carvao",
    imagem: "/images/crispy-chicken.jpg",
  },
];

export default function Home() {
  return (
    <div className="container-site space-y-12">
      {/* HERO */}
      <section className="grid items-center gap-10 rounded-3xl bg-linear-to-br from-carvao to-[#3b2112] p-8 text-white md:grid-cols-[1.3fr_1fr] md:p-12">
        <div>
          <span className="inline-block rounded-full border border-brasa/40 bg-brasa/15 px-3 py-1 text-[11px] font-semibold text-orange-200">
            🔥 Eleito o Melhor Smash Burger de 2026
          </span>

          <h1 className="mt-5 font-serif text-4xl leading-tight font-bold md:text-[44px]">
            Sabor defumado na brasa, crosta perfeita{" "}
            <span className="text-ouro">a cada mordida.</span>
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Blend 100% Angus moído no dia, pão brioche selado na manteiga de
            garrafa e cafés especiais torrados artesanalmente na nossa casa.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/cardapio"
              className="flex items-center gap-2 rounded-lg bg-brasa px-5 py-3 text-sm font-semibold hover:bg-brasa-escura"
            >
              Explorar Cardápio <ArrowRight size={16} />
            </Link>
            <a
              href="#mais-pedidos"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Ver Mais Pedidos
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-5 text-xs text-white/50">
            <p>
              <strong className="text-sm text-white">4.9 ★</strong> (1.840+ avaliações)
            </p>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <p>
              <strong className="text-sm text-white">100% Artesanal</strong> sem conservantes
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-8/9 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/hero-duplo-cheddar.jpg"
              alt="Hambúrguer Duplo Brasa Cheddar"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>

          {/* card flutuante de preço */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl bg-white p-2.5 pr-5 text-texto shadow-xl md:-left-8">
            <span className="rounded-lg bg-brasa-clara px-3 py-2 text-sm font-bold text-brasa">
              R$ 38,90
            </span>
            <div>
              <p className="text-xs font-bold">Duplo Brasa Cheddar</p>
              <p className="text-[10px] text-texto-suave">2x Smash 90g • Bacon Caramelizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="grid gap-4 md:grid-cols-3">
        {diferenciais.map(({ icone: Icone, titulo, texto }) => (
          <div
            key={titulo}
            className="flex items-start gap-3 rounded-2xl border border-borda bg-white p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brasa-clara text-brasa">
              <Icone size={18} />
            </span>
            <div>
              <h3 className="text-sm font-bold">{titulo}</h3>
              <p className="mt-1 text-xs leading-relaxed text-texto-suave">{texto}</p>
            </div>
          </div>
        ))}
      </section>

      {/* MAIS PEDIDOS */}
      <section id="mais-pedidos" className="scroll-mt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold text-brasa">Favoritos da Galera</p>
            <h2 className="mt-1 font-serif text-2xl font-bold">Os Mais Pedidos da Semana</h2>
          </div>
          <Link
            href="/cardapio"
            className="rounded-lg border border-borda bg-white px-4 py-2 text-xs font-semibold hover:bg-creme"
          >
            Ver todos os 16 pratos →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {maisPedidos.map((lanche) => (
            <article
              key={lanche.nome}
              className="overflow-hidden rounded-2xl border border-borda bg-white"
            >
              <div className="relative h-48">
                <Image
                  src={lanche.imagem}
                  alt={lanche.nome}
                  fill
                  sizes="(max-width: 640px) 100vw, 340px"
                  className="object-cover"
                />
                <span
                  className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold text-white uppercase ${lanche.tagCor}`}
                >
                  {lanche.tag}
                </span>
                <span className="absolute right-3 bottom-3 flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold">
                  <Star size={11} className="fill-texto" /> {lanche.nota}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold">{lanche.nome}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-texto-suave">
                  {lanche.descricao}
                </p>

                <div className="mt-4 flex items-end justify-between border-t border-borda pt-4">
                  <div>
                    <p className="text-[10px] text-texto-suave uppercase">Individual</p>
                    <p className="text-lg font-bold text-brasa">{lanche.preco}</p>
                  </div>
                  <button className="rounded-lg bg-carvao px-3.5 py-2 text-xs font-semibold text-white hover:bg-black">
                    + Pedir Agora
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
