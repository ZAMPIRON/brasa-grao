import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Cardápio Completo | Brasa & Grão",
};

const filtros = [
  { nome: "🔥 Todos os Itens (10)", ativo: true },
  { nome: "🍔 Smash Burgers (4)", ativo: false },
  { nome: "🍟 Porções & Entradas (3)", ativo: false },
  { nome: "☕ Cafés & Shakes (3)", ativo: false },
];

const burgers = [
  {
    nome: "Clássico American Smash",
    descricao:
      "2x smash 90g, duplo american cheese artesanal, picles agridoce, cebola roxa picada, mostarda dijon e ketchup da casa.",
    detalhe: "180g de carne",
    preco: "R$ 34,90",
    nota: "4.9",
    tag: "Campeão",
    tagCor: "bg-brasa",
    imagem: "/images/classico-american-smash.jpg",
  },
  {
    nome: "Oklahoma Crispy Onion",
    descricao:
      "Dois discos de 90g prensados na chapa com fios finíssimos de cebola caramelizada, cheddar inglês e maionese de alho negro.",
    detalhe: "180g de carne",
    preco: "R$ 37,90",
    nota: "4.9",
    tag: "Prensado na cebola",
    tagCor: "bg-carvao",
    imagem: "/images/oklahoma-crispy-onion.jpg",
  },
  {
    nome: "Portobello Crispy Melt",
    descricao:
      "Cogumelo Portobello gigante empanado na panko e recheado com queijo meia-cura, tomate confit, rúcula e pesto de manjericão.",
    detalhe: "Vegetariano",
    preco: "R$ 39,90",
    nota: "4.8",
    tag: "100% Vegetariano",
    tagCor: "bg-green-700",
    imagem: "/images/portobello-crispy-melt.jpg",
  },
];

const acompanhamentos = [
  {
    nome: "Fritas Rústicas com Alecrim & Páprica",
    descricao:
      "Batatas cortadas à mão, fritas em dupla imersão com flor de sal, alecrim fresco e maionese de páprica defumada.",
    medida: "350g",
    preco: "R$ 24,90",
    imagem: "/images/fritas-rusticas.jpg",
  },
  {
    nome: "Shake Espresso & Caramelo Salgado",
    descricao:
      "Sorvete artesanal de baunilha em fava batido com dose dupla de espresso 100% arábica e calda de flor de sal.",
    medida: "400ml",
    preco: "R$ 26,90",
    imagem: "/images/shake-espresso.jpg",
  },
  {
    nome: "Latte Artesanal Torra Média",
    descricao:
      "Grãos de microlote da Serra da Mantiqueira com notas de chocolate amargo e avelã, leite vaporizado cremoso.",
    medida: "Quente/Gelado",
    preco: "R$ 15,90",
    imagem: "/images/latte-artesanal.jpg",
  },
  {
    nome: "Brownie Belga 70% na Chapa",
    descricao:
      "Servido quentinho na panelinha de ferro com sorvete de creme artesanal e farofa crocante de castanhas.",
    medida: "Sobremesa",
    preco: "R$ 28,90",
    imagem: "/images/brownie-chapa.jpg",
  },
];

export default function Cardapio() {
  return (
    <div className="container-site space-y-10">
      {/* BANNER DO CARDÁPIO */}
      <section className="flex flex-col justify-between gap-6 rounded-2xl border border-orange-100 bg-linear-to-r from-brasa-clara to-[#fff8ef] p-8 md:flex-row md:items-center">
        <div className="max-w-md">
          <p className="text-[11px] font-semibold text-brasa">
            Cardapio Artesanal - Edição de Outono
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold">
            Escolha sua experiENcia na brasa
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-texto-suave">
            Todos os hambúrgueres acompanham maionese defumada da casa. Adicione
            batata rústica e bebida artesanal por +R$ 16,00
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-[10px] font-bold tracking-wide text-brasa uppercase">
            Combo do Dia
          </p>
          <p className="mt-1 font-serif text-xl font-bold">Smash + Fritas + Café Gelado</p>
          <p className="mt-1 text-xs font-semibold text-brasa">
            De <s className="text-texto-suave">R$ 62,00</s> por R$ 49,90
          </p>
        </div>
      </section>

      {/* FILTROS (só visual por enquanto) */}
      <div className="flex flex-wrap gap-2">
        {filtros.map((filtro) => (
          <button
            key={filtro.nome}
            className={`rounded-full border px-4 py-2 text-xs font-semibold ${
              filtro.ativo
                ? "border-brasa bg-brasa text-white"
                : "border-borda bg-white hover:border-brasa/40"
            }`}
          >
            {filtro.nome}
          </button>
        ))}
      </div>

      {/* LINHA SMASH & BRASA */}
      <section>
        <h2 className="font-serif text-2xl font-bold">Linha Smash &amp; Brasa</h2>
        <p className="mt-1 text-xs text-texto-suave">
          Feitos com blend 100% Angus certificado e pão de fermentação natural.
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {burgers.map((burger) => (
            <article
              key={burger.nome}
              className="overflow-hidden rounded-2xl border border-borda bg-white"
            >
              <div className="relative h-44">
                <Image
                  src={burger.imagem}
                  alt={burger.nome}
                  fill
                  sizes="(max-width: 640px) 100vw, 340px"
                  className="object-cover"
                />
                <span
                  className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold text-white uppercase ${burger.tagCor}`}
                >
                  {burger.tag}
                </span>
                <span className="absolute right-3 bottom-3 flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold">
                  <Star size={11} className="fill-texto" /> {burger.nota}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold">{burger.nome}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-texto-suave">
                  {burger.descricao}
                </p>

                <div className="mt-4 flex items-end justify-between border-t border-borda pt-4">
                  <div>
                    <p className="text-[10px] text-texto-suave uppercase">{burger.detalhe}</p>
                    <p className="text-lg font-bold text-brasa">{burger.preco}</p>
                  </div>
                  <button className="rounded-lg bg-carvao px-3.5 py-2 text-xs font-semibold text-white hover:bg-black">
                    + Adicionar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ACOMPANHAMENTOS & CAFETERIA */}
      <section>
        <h2 className="font-serif text-2xl font-bold">Acompanhamentos &amp; Cafeteria</h2>
        <p className="mt-1 text-xs text-texto-suave">
          Para compartilhar na mesa ou fechar sua refeição com chave de ouro.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {acompanhamentos.map((item) => (
            <article
              key={item.nome}
              className="flex gap-4 rounded-2xl border border-borda bg-white p-4"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold">{item.nome}</h3>
                  <span className="shrink-0 rounded-full bg-brasa-clara px-2 py-0.5 text-[10px] font-semibold text-brasa">
                    {item.medida}
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-texto-suave">
                  {item.descricao}
                </p>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <p className="font-bold text-brasa">{item.preco}</p>
                  <button className="rounded-lg border border-borda px-3 py-1.5 text-[11px] font-semibold hover:bg-creme">
                    + Adicionar
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
