import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap, Check, X, Star, Trophy, Download, Printer, Bell, Shield,
  Flame, Clock, Lock, Gift, ChevronDown, MessageCircle, ArrowRight,
} from "lucide-react";
import pdfMockup from "@/assets/pdf-mockup.png";
import stickersImg from "@/assets/stickers.jpg";
import { CountdownTimer } from "@/components/CountdownTimer";
import { PurchasePopup } from "@/components/PurchasePopup";
import { fireConfetti } from "@/lib/confetti";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Pack Figurinhas Copa 2026 PDF — Complete seu álbum por R$19,90" },
      { name: "description", content: "Acesse o pack digital com todas as figurinhas da Copa do Mundo 2026 em PDF de alta qualidade. Download imediato, impressão fácil, atualizações semanais. Pare de gastar fortunas com envelopes." },
      { property: "og:title", content: "Pack Figurinhas Copa 2026 PDF — R$19,90" },
      { property: "og:description", content: "Complete seu álbum sem gastar uma fortuna. PDFs prontos para imprimir." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const CTA_HREF = "#oferta";

function CTAButton({ children, large = false, onClick }: { children: React.ReactNode; large?: boolean; onClick?: () => void }) {
  const handle = () => { fireConfetti(); onClick?.(); };
  return (
    <a
      href={CTA_HREF}
      onClick={handle}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-cta font-display font-black uppercase tracking-wide text-primary-foreground shadow-neon animate-pulse-glow transition-transform hover:scale-105 active:scale-95 ${
        large ? "px-8 py-5 text-xl sm:text-2xl w-full sm:w-auto" : "px-6 py-4 text-base sm:text-lg"
      }`}
    >
      <Zap className="h-5 w-5 fill-current" />
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-4 py-16 sm:py-24 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

function LandingPage() {
  return (
    <div className="min-h-screen pb-24 sm:pb-0">
      {/* URGENCY BAR */}
      <div className="sticky top-0 z-30 bg-destructive text-destructive-foreground py-2 px-4 text-center text-xs sm:text-sm font-bold">
        <Flame className="inline h-4 w-4 mr-1" /> OFERTA RELÂMPAGO • Últimas vagas no grupo VIP por R$19,90
      </div>

      {/* HERO */}
      <Section className="relative overflow-hidden pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-primary mb-6">
              <Trophy className="h-4 w-4" /> COPA DO MUNDO 2026 — PACK OFICIAL DIGITAL
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase">
              Complete seu <span className="text-gradient-green glow-text">álbum da Copa 2026</span> sem gastar uma <span className="text-gradient-gold">fortuna</span> ⚽🔥
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Acesse agora o <strong className="text-foreground">PACK DIGITAL</strong> com figurinhas em PDF de várias seleções completas da Copa do Mundo 2026 e imprima quantas quiser.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <CTAButton large>Quero acessar agora</CTAButton>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { icon: Zap, label: "Acesso Imediato" },
                { icon: Bell, label: "Atualizações Semanais" },
                { icon: Printer, label: "Alta Qualidade de Impressão" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs sm:text-sm font-semibold">
                  <b.icon className="h-4 w-4 text-primary" /> {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual - album cover */}
          <div className="relative flex items-center justify-center py-6">
            <div className="absolute inset-0 bg-gradient-cta opacity-30 blur-3xl rounded-full" />
            <div className="absolute inset-x-10 top-10 bottom-10 bg-accent/20 blur-2xl rounded-full" />
            <div className="relative animate-float">
              <img
                src={pdfMockup}
                alt="Álbum Copa do Mundo 2026 PDF"
                width={600} height={800}
                className="relative max-h-[520px] w-auto rounded-lg shadow-[0_30px_80px_-15px_oklch(0_0_0/0.8)] ring-4 ring-accent/40 -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -top-3 -right-3 rotate-12 rounded-full bg-gradient-gold px-4 py-2 text-sm sm:text-base font-black text-accent-foreground shadow-gold animate-shake">
                R$19,90
              </div>
              <div className="absolute -bottom-3 -left-3 -rotate-6 rounded-full bg-primary px-4 py-2 text-xs font-black text-primary-foreground shadow-neon">
                PDF • IMPRIMA
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-card/40 overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-lg font-display font-bold text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-12">
              <span>🇧🇷 BRASIL</span><span>🇦🇷 ARGENTINA</span><span>🇫🇷 FRANÇA</span>
              <span>🇪🇸 ESPANHA</span><span>🇵🇹 PORTUGAL</span><span>🇩🇪 ALEMANHA</span>
              <span>🇮🇹 ITÁLIA</span><span>🇬🇧 INGLATERRA</span><span>🇲🇽 MÉXICO</span>
              <span>🇺🇸 EUA</span><span>🇨🇦 CANADÁ</span><span>🇳🇱 HOLANDA</span>
            </div>
          ))}
        </div>
      </div>

      {/* DOR */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-destructive font-bold uppercase tracking-widest text-sm mb-3">⚠️ Você se identifica?</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase">
            Cansado de <span className="text-destructive">queimar dinheiro</span><br />em envelopes que vêm <span className="text-destructive">repetidos?</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Já gastei mais de R$300 em envelopes e o álbum continua VAZIO",
            "Procurei figurinhas raras em todas as bancas e não achei NADA",
            "Tentei trocar com amigos mas ninguém tem as que eu preciso",
            "A frustração de ver o álbum incompleto me deixa LOUCO",
          ].map((dor) => (
            <div key={dor} className="flex items-start gap-3 card-premium rounded-2xl p-5 border-destructive/30">
              <X className="h-6 w-6 shrink-0 text-destructive mt-0.5" />
              <p className="text-base sm:text-lg font-medium">{dor}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-xl sm:text-2xl font-bold text-muted-foreground">
          Existe uma forma <span className="text-primary glow-text">100x mais barata</span> de completar seu álbum… 👇
        </p>
      </Section>

      {/* SOLUÇÃO */}
      <Section className="bg-card/30">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">A solução definitiva</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase">
            Apresentando o <span className="text-gradient-green">Pack Digital</span><br /><span className="text-gradient-gold">Copa 2026 em PDF</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para completar seu álbum, organizado e pronto para imprimir.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-cta opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-neon bg-card p-2">
              <img
                src={stickersImg}
                alt="Figurinhas Copa 2026 - Seleção Brasileira"
                width={900} height={1200}
                loading="lazy"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -top-3 -right-3 rotate-6 bg-gradient-gold rounded-full px-4 py-2 text-xs font-black text-accent-foreground shadow-gold">
              ⭐ ALTA QUALIDADE
            </div>
          </div>
          <ul className="space-y-3">
            {[
              "Todas as figurinhas das seleções disponíveis",
              "Arquivos em PDF prontos para imprimir",
              "Qualidade profissional em alta resolução",
              "Acesso imediato 100% liberado",
              "Atualizações constantes sem custo extra",
              "Imprima quantas vezes quiser, para sempre",
            ].map((b) => (
              <li key={b} className="card-premium flex items-center gap-3 rounded-xl p-4 transition-transform hover:translate-x-1">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-cta">
                  <Check className="h-5 w-5 text-primary-foreground" strokeWidth={3} />
                </div>
                <span className="font-semibold">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* OFERTA */}
      <Section>
        <div id="oferta" className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/20 border border-destructive/50 px-4 py-1.5 text-sm font-bold text-destructive mb-4">
            <Flame className="h-4 w-4" /> OFERTA POR TEMPO LIMITADO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase">
            🔥 Pack Figurinhas <span className="text-gradient-gold">Copa 2026 PDF</span> 🔥
          </h2>
        </div>

        {/* Compare */}
        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          <div className="rounded-2xl border-2 border-destructive/40 bg-destructive/5 p-6 sm:p-8 relative">
            <div className="absolute -top-3 left-6 bg-destructive px-3 py-1 rounded-full text-xs font-bold uppercase">Caminho difícil</div>
            <h3 className="text-xl font-black mb-4 text-destructive">Comprando envelopes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><X className="h-5 w-5 text-destructive shrink-0" /> R$5,00 por envelope</li>
              <li className="flex gap-2"><X className="h-5 w-5 text-destructive shrink-0" /> Figurinhas repetidas</li>
              <li className="flex gap-2"><X className="h-5 w-5 text-destructive shrink-0" /> Meses para completar</li>
              <li className="flex gap-2"><X className="h-5 w-5 text-destructive shrink-0" /> Pode chegar a R$2.000+</li>
            </ul>
            <div className="mt-6 text-3xl font-black text-destructive line-through">R$ 2.000+</div>
          </div>

          <div className="rounded-2xl bg-gradient-cta p-[2px] shadow-neon animate-pulse-glow relative">
            <div className="rounded-2xl bg-card p-6 sm:p-8 h-full">
              <div className="absolute -top-3 left-6 bg-gradient-cta px-3 py-1 rounded-full text-xs font-black uppercase text-primary-foreground">Caminho inteligente</div>
              <h3 className="text-xl font-black mb-4 text-gradient-green">Pack Digital PDF</h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Pagamento único</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Todas as figurinhas</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Acesso em 1 minuto</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" /> Imprime quantas quiser</li>
              </ul>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground line-through">R$97,00</span>
                <span className="text-5xl font-black text-gradient-gold">R$19,90</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Pagamento único • Acesso vitalício</p>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="card-premium rounded-3xl p-6 sm:p-10 text-center">
          <p className="text-sm uppercase tracking-widest text-destructive font-bold mb-2">
            <Clock className="inline h-4 w-4 mr-1" /> Esta oferta expira em:
          </p>
          <div className="my-6"><CountdownTimer /></div>
          <CTAButton large>Quero meu acesso agora</CTAButton>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-primary" /> Garantia 7 dias</span>
            <span className="flex items-center gap-1"><Lock className="h-4 w-4 text-primary" /> Pagamento seguro</span>
            <span className="flex items-center gap-1"><Download className="h-4 w-4 text-primary" /> Download imediato</span>
          </div>
        </div>
      </Section>

      {/* PROVA SOCIAL */}
      <Section className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black uppercase">
            +5.000 torcedores já estão <span className="text-gradient-green">completando o álbum</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          {[
            { n: "+5.000", l: "Downloads realizados" },
            { n: "+12", l: "Seleções completas" },
            { n: "100%", l: "Satisfação garantida" },
          ].map((s) => (
            <div key={s.l} className="card-premium rounded-2xl p-6 text-center">
              <div className="text-4xl sm:text-5xl font-black text-gradient-gold">{s.n}</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { name: "Carlos M.", text: "Completei o álbum do meu filho em UMA semana. Valeu cada centavo!", time: "10:42" },
            { name: "Patrícia L.", text: "Achei que era cilada mas chegou tudo certinho. Imprimi e ficou idêntico! 🤩", time: "14:18" },
            { name: "Rodrigo S.", text: "Economizei mais de R$500. Recomendo de olhos fechados ⚽", time: "21:05" },
          ].map((d) => (
            <div key={d.name} className="rounded-2xl bg-[oklch(0.96_0.01_140)] text-[oklch(0.15_0.02_150)] p-4 shadow-card">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-black/10">
                <div className="h-9 w-9 rounded-full bg-gradient-cta flex items-center justify-center font-bold text-primary-foreground">
                  {d.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm">{d.name}</div>
                  <div className="text-xs text-black/50">online</div>
                </div>
              </div>
              <div className="bg-[oklch(0.85_0.16_142)] rounded-lg p-3 text-sm relative">
                {d.text}
                <div className="text-[10px] text-black/50 text-right mt-1">{d.time} ✓✓</div>
              </div>
              <div className="flex justify-center gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* BÔNUS */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">🎁 Bônus exclusivos</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase">
            Comprando hoje você também leva:
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Brindes Exclusivos", d: "Cards especiais em alta resolução", v: "R$47" },
            { t: "Novos Álbuns", d: "Acesso à biblioteca completa", v: "R$67" },
            { t: "Packs Extras", d: "Edições limitadas e raras", v: "R$37" },
            { t: "Atualizações Vitalícias", d: "Tudo que sair, é seu sem custo", v: "R$97" },
          ].map((b, i) => (
            <div key={b.t} className="card-premium rounded-2xl p-6 relative overflow-hidden group hover:scale-105 transition-transform" style={{ animationDelay: `${i * 100}ms` }}>
              <Gift className="h-10 w-10 text-accent mb-3" />
              <h3 className="font-display font-black text-xl mb-1">{b.t}</h3>
              <p className="text-sm text-muted-foreground mb-3">{b.d}</p>
              <div className="text-sm">
                <span className="text-muted-foreground">Valor:</span>{" "}
                <span className="line-through text-muted-foreground">{b.v}</span>{" "}
                <span className="text-primary font-bold">GRÁTIS</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg">Valor total dos bônus: <span className="line-through text-muted-foreground">R$248</span></p>
          <p className="text-2xl font-black mt-1">Você paga apenas <span className="text-gradient-gold text-3xl">R$19,90</span></p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black uppercase">Perguntas frequentes</h2>
        </div>
        <div className="space-y-3 max-w-3xl mx-auto">
          {[
            { q: "Como eu recebo o pack?", a: "Logo após a confirmação do pagamento, você recebe acesso imediato ao grupo VIP com todos os arquivos PDF prontos para download." },
            { q: "Funciona no celular?", a: "Sim! Você pode baixar e visualizar pelo celular, tablet ou computador. Os PDFs são otimizados para qualquer dispositivo." },
            { q: "Como faço para imprimir?", a: "Basta abrir o PDF e mandar imprimir em papel adesivo ou comum. Funciona em qualquer impressora caseira ou gráfica rápida." },
            { q: "Vou receber atualizações?", a: "Sim! Toda semana adicionamos novas figurinhas e seleções. Você recebe tudo automaticamente sem pagar nada a mais." },
            { q: "É realmente acesso imediato?", a: "Sim! Em menos de 1 minuto após o pagamento, você já tem tudo em mãos. Sem espera, sem complicação." },
            { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Não gostou? Devolvemos 100% do seu dinheiro." },
          ].map((f) => <FAQItem key={f.q} {...f} />)}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section>
        <div className="card-premium rounded-3xl p-8 sm:p-14 text-center border-primary/40 shadow-neon">
          <Trophy className="h-16 w-16 text-accent mx-auto mb-6 animate-shake" />
          <h2 className="text-3xl sm:text-5xl font-black uppercase">
            Ou você completa seu álbum <span className="text-gradient-green">AGORA</span>…
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-muted-foreground">
            …ou continua <span className="text-destructive font-bold">gastando dinheiro</span> tentando achar figurinha rara.
          </p>
          <p className="mt-8 text-lg max-w-xl mx-auto">
            A escolha é sua. Mas lembre-se: <strong>essa oferta pode sair do ar a qualquer momento.</strong>
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton large>Quero meu acesso agora ⚽🔥</CTAButton>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            🔒 Pagamento 100% seguro • 7 dias de garantia • Acesso vitalício
          </p>
        </div>
      </Section>

      <footer className="border-t border-border py-8 px-4 text-center text-xs text-muted-foreground">
        <p>© 2026 Pack Figurinhas Copa. Este produto não é afiliado oficialmente à FIFA ou a qualquer entidade oficial.</p>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-background/95 backdrop-blur border-t border-border p-3">
        <a
          href={CTA_HREF}
          onClick={fireConfetti}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-cta py-4 font-display font-black text-primary-foreground uppercase text-sm shadow-neon"
        >
          <Zap className="h-5 w-5" /> Garantir por R$19,90 <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <PurchasePopup />
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-premium rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-bold text-base sm:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground animate-slide-up">{a}</div>}
    </div>
  );
}
