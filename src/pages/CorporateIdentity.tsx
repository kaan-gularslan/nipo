import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Package, Type, Palette, Image, MessageSquareQuote, Globe, Zap, TrendingUp,
  CreditCard, FileText, Mail, FolderOpen, Receipt, BookOpen, StickyNote, AtSign,
  Coffee, Usb, ShoppingBag, PenTool, BookMarked, Clock, KeyRound, Monitor,
  Flag, Car, ShieldCheck, Users, BarChart3, Truck, Layers, Sparkles,
  ArrowRight, Check, Star
} from "lucide-react";

/* ══════════════════════════════════════════════
   VERİ
   ══════════════════════════════════════════════ */

const brandColors = [
  {
    name: "Nipo Mavi",
    hex: "#004374",
    rgb: "R:0  G:67  B:116",
    cmyk: "C:100  M:60  Y:15  K:15",
    hsl: "205° 100% 22.7%",
    tints: ["#004374","#1a5682","#336a91","#4d7da0","#6691af","#80a4be","#99b8cd","#b3cbdc","#ccdfeb","#e6f2fa"],
  },
  {
    name: "Nipo Pembe",
    hex: "#FF456D",
    rgb: "R:255  G:69  B:109",
    cmyk: "C:0  M:80  Y:40  K:0",
    hsl: "347° 100% 63.5%",
    tints: ["#FF456D","#ff587a","#ff6b88","#ff7e95","#ff91a3","#ffa4b0","#ffb7be","#ffcacb","#ffddd9","#fff0e6"],
  },
  {
    name: "Nipo Yeşil",
    hex: "#9CC33B",
    rgb: "R:156  G:195  B:59",
    cmyk: "C:35  M:0  Y:85  K:5",
    hsl: "77° 55% 49.8%",
    tints: ["#9CC33B","#a6c94f","#b0cf62","#bad576","#c4db89","#cee19d","#d8e7b0","#e2edc4","#ecf3d7","#f6f9eb"],
  },
];

const fontWeights = [
  { weight: 300, name: "Light", sample: "Kaliteli Ambalaj Çözümleri" },
  { weight: 500, name: "Medium", sample: "Nipo Ambalaj ile Fark Yaratın" },
  { weight: 700, name: "Bold", sample: "Güvenilir Adresiniz" },
  { weight: 800, name: "ExtraBold", sample: "Markana Renk Kat!" },
  { weight: 900, name: "Black", sample: "NİPO ONLİNE" },
];

const onlineAdvantages = [
  { icon: Globe, title: "7/24 Erişim", desc: "İstediğiniz zaman, istediğiniz yerden sipariş verin." },
  { icon: Zap, title: "Hızlı Teklif", desc: "Özel ürünleriniz için anında fiyat hesaplama." },
  { icon: ShieldCheck, title: "Güvenli Alışveriş", desc: "SSL sertifikası ile korunan ödeme altyapısı." },
  { icon: Truck, title: "Hızlı Teslimat", desc: "Türkiye genelinde 2-5 iş günü kargo." },
  { icon: Users, title: "Kişisel Hesap", desc: "Sipariş geçmişi, favori ürünler, özel fiyatlar." },
  { icon: Layers, title: "Kişiselleştirme", desc: "Baskı, boyut ve malzeme seçeneklerini ağaç yapısında özelleştirin." },
];

const evolutionSteps = [
  { year: "2010", title: "Kuruluş", desc: "Nipo Ambalaj, Büyükçekmece'de faaliyete başladı.", color: "#004374" },
  { year: "2015", title: "Büyüme", desc: "200+ ürün çeşidi ve Türkiye genelinde dağıtım ağı.", color: "#004374" },
  { year: "2020", title: "Dijital Adım", desc: "İlk e-ticaret altyapısı ve online sipariş sistemi.", color: "#FF456D" },
  { year: "2024", title: "Nipo Online", desc: "Tam kapsamlı online platform ile dijital dönüşüm.", color: "#9CC33B" },
];

const corporateMaterials = [
  { icon: CreditCard, name: "Kartvizit", desc: "85×55mm, 350gr kuşe, mat selofan + spot UV" },
  { icon: FileText, name: "Antetli Kağıt", desc: "A4, 100gr 1. hamur, 4 renk baskı" },
  { icon: Mail, name: "Zarf", desc: "Diplomat & torba zarf, pencereli / penceresiz" },
  { icon: FolderOpen, name: "Dosya", desc: "A4 cepli dosya, 350gr kuşe, mat laminasyon" },
  { icon: Receipt, name: "Fatura", desc: "A4/A5, sürekli form veya koçanlı" },
  { icon: BookOpen, name: "Makbuz", desc: "Standart koçanlı, numaralı" },
  { icon: StickyNote, name: "Bloknot", desc: "A4/A5/A6, 80gr 1. hamur, 50 yaprak" },
  { icon: AtSign, name: "Mail İmza", desc: "HTML e-posta imzası, tüm istemcilerle uyumlu" },
];

const promoProducts = [
  { icon: Coffee, name: "Kupa Bardak" },
  { icon: Usb, name: "USB Bellek" },
  { icon: ShoppingBag, name: "Karton Çanta" },
  { icon: ShoppingBag, name: "Bez Çanta" },
  { icon: PenTool, name: "Kalem" },
  { icon: BookMarked, name: "Ajanda" },
  { icon: Clock, name: "Duvar Saati" },
  { icon: KeyRound, name: "Anahtarlık" },
  { icon: Monitor, name: "Mouse Pad" },
];

/* ══════════════════════════════════════════════
   BİLEŞENLER
   ══════════════════════════════════════════════ */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-3">
    <Sparkles className="w-3 h-3" />
    {children}
  </span>
);

const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-11 h-11 rounded-2xl gradient-hero-warm flex items-center justify-center shadow-nipo">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-foreground">{title}</h2>
    </div>
    <p className="text-sm text-muted-foreground ml-14">{subtitle}</p>
  </div>
);

/* ══════════════════════════════════════════════
   ANA SAYFA
   ══════════════════════════════════════════════ */

const CorporateIdentity = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* ═══ HERO ═══ */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero-warm" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <Breadcrumb items={[{ label: "Kurumsal Kimlik" }]} />
        <div className="max-w-3xl">
          <SectionLabel>Nipo Online — Marka Kılavuzu</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-4">
            Markana<br />
            <span className="bg-gradient-to-r from-white via-white/90 to-accent bg-clip-text text-transparent">
              Renk Kat!
            </span>
          </h1>
          <p className="text-primary-foreground/60 max-w-xl text-base leading-relaxed mb-8">
            Nipo Ambalaj'ın dijital dönüşümüyle doğan <strong className="text-primary-foreground/90">Nipo Online</strong> platformunun
            marka tutarlılığını korumak için tüm renk, tipografi ve logo kullanım kurallarını içeren kurumsal kimlik rehberi.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/80 text-xs font-semibold">
              <Package className="w-3.5 h-3.5" /> Nipo Ambalaj
              <ArrowRight className="w-3 h-3" />
              <Globe className="w-3.5 h-3.5" /> Nipo Online
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ NİPO ONLINE DÖNÜŞÜM ═══ */}
    <section className="py-16 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionLabel>Dijital Dönüşüm</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            Nipo Ambalaj'dan <span className="text-gradient-nipo">Nipo Online'a</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Fiziksel ambalaj uzmanlığımızı dijital dünyaya taşıyoruz. Aynı kalite, aynı güven — artık online.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            {evolutionSteps.map((step, i) => (
              <div key={step.year} className={`relative flex items-start gap-6 mb-8 last:mb-0 animate-fade-up delay-${i + 1}`}>
                <div className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xs shrink-0 shadow-lg"
                  style={{ backgroundColor: step.color }}>
                  {step.year}
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Avantajlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {onlineAdvantages.map((item, i) => (
            <div key={item.title} className={`group rounded-2xl border border-border bg-background p-6 card-hover animate-fade-up delay-${i + 1}`}>
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="container mx-auto px-4 py-16 space-y-24">

      {/* ═══ KURUMSAL RENKLER ═══ */}
      <section>
        <SectionTitle icon={Palette} title="Kurumsal Renkler" subtitle="Tüm dijital ve basılı iletişimde kullanılan resmi renk paleti." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandColors.map((c) => (
            <div key={c.name} className="group rounded-2xl border border-border overflow-hidden bg-card card-hover">
              <div className="h-36 relative" style={{ backgroundColor: c.hex }}>
                <div className="absolute bottom-3 left-4">
                  <span className="text-white/90 font-black text-lg">{c.name}</span>
                </div>
                <div className="absolute bottom-3 right-4">
                  <span className="text-white/60 font-mono text-xs">{c.hex}</span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground font-mono">
                  <p><span className="font-semibold text-foreground/70">RGB</span><br />{c.rgb}</p>
                  <p><span className="font-semibold text-foreground/70">CMYK</span><br />{c.cmyk}</p>
                  <p className="col-span-2"><span className="font-semibold text-foreground/70">HSL</span> {c.hsl}</p>
                </div>
                <div className="flex rounded-lg overflow-hidden h-5">
                  {c.tints.map((t, i) => (
                    <div key={i} className="flex-1 transition-smooth group-hover:scale-y-125" style={{ backgroundColor: t }} />
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground text-center">%100 → %10 ton geçişi</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TİPOGRAFİ ═══ */}
      <section>
        <SectionTitle icon={Type} title="Tipografi" subtitle="Ana font Montserrat, yardımcı font Calibri." />
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">Ana Font</span>
              <span className="text-lg font-black text-foreground">Montserrat</span>
            </div>
            <div className="space-y-0">
              {fontWeights.map((fw) => (
                <div key={fw.weight} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-border/50 py-4 last:border-0">
                  <div className="w-32 shrink-0 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">{fw.weight}</span>
                    <span className="text-xs text-muted-foreground">{fw.name}</span>
                  </div>
                  <span className="text-2xl md:text-3xl text-foreground" style={{ fontWeight: fw.weight }}>
                    {fw.sample}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted/50 px-6 md:px-8 py-5 border-t border-border">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider">Yardımcı</span>
              <span className="text-sm font-semibold text-foreground">Calibri</span>
              <span className="text-xs text-muted-foreground">— Resmi yazışmalar, faturalar ve dijital belgelerde</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOGO KULLANIMI ═══ */}
      <section>
        <SectionTitle icon={Image} title="Logo Kullanımı" subtitle="Logo'nun doğru ve tutarlı kullanımı marka algısı için kritiktir." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Logo Hikayesi */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="font-black text-lg text-foreground mb-4">Logo Hikayesi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              "Nipo" ismindeki <strong className="text-foreground">"O"</strong> harfi bir boya kutusu olarak betimlenmiştir.
              Logonun üzerindeki <strong className="text-foreground">3 damlacık</strong>, markanın 3 ana rengini temsil eder
              ve <em>"Markana Renk Kat!"</em> sloganıyla bütünleşir.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
              <div className="flex items-center gap-2">
                {[{ c: "#004374", n: "Mavi" }, { c: "#FF456D", n: "Pembe" }, { c: "#9CC33B", n: "Yeşil" }].map(d => (
                  <div key={d.n} className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: d.c }} />
                    <span className="text-[10px] font-semibold text-muted-foreground">{d.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kullanım Kuralları */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="font-black text-lg text-foreground mb-4">Kullanım Kuralları</h3>
            <ul className="space-y-3">
              {[
                "Minimum boyut: Kısa kenar en az 25mm",
                "Açık zemin: Renkli logo kullanılır",
                "Koyu zemin: Beyaz logo kullanılır",
                "Siyah-beyaz baskı: Gri tonlama versiyonu",
                "Logo etrafında logo yüksekliğinin %25'i kadar boşluk",
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Açık Zemin */}
          <div className="rounded-2xl border border-border bg-white p-10 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <Package className="w-10 h-10 text-[#004374]" />
              <span className="text-4xl font-black text-[#004374]">nipo</span>
            </div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#004374]/70">AMBALAJ</span>
            <div className="mt-3 px-3 py-1 rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">Açık Zemin</div>
          </div>

          {/* Koyu Zemin */}
          <div className="rounded-2xl border border-border bg-[#004374] p-10 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <Package className="w-10 h-10 text-white" />
              <span className="text-4xl font-black text-white">nipo</span>
            </div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60">AMBALAJ</span>
            <span className="text-xs font-bold text-accent mt-1">ONLINE</span>
            <div className="mt-2 px-3 py-1 rounded-full bg-white/10 text-[10px] font-semibold text-white/60">Koyu Zemin</div>
          </div>
        </div>
      </section>

      {/* ═══ SLOGAN ═══ */}
      <section>
        <SectionTitle icon={MessageSquareQuote} title="Kurumsal Slogan" subtitle="Tüm iletişim materyallerinde kullanılan resmi slogan." />
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="gradient-hero-warm p-12 md:p-16 text-center relative">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <p className="relative text-5xl md:text-7xl font-black text-primary-foreground leading-tight">
              Markana<br />Renk Kat!
            </p>
          </div>
          <div className="bg-card px-6 md:px-8 py-5 border-t border-border">
            <p className="text-sm text-muted-foreground max-w-lg">
              Slogan her zaman <strong>Montserrat Black</strong> ile yazılır. Logo ile birlikte veya bağımsız olarak kullanılabilir.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ KURUMSAL MATERYALLER ═══ */}
      <section>
        <SectionTitle icon={CreditCard} title="Kurumsal Materyaller" subtitle="Basılı iletişim materyalleri ve baskı özellikleri." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {corporateMaterials.map((m) => (
            <div key={m.name} className="group rounded-2xl border border-border bg-card p-5 card-hover">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-smooth">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-sm text-foreground mb-1">{m.name}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TANITIM ÜRÜNLERİ ═══ */}
      <section>
        <SectionTitle icon={ShoppingBag} title="Tanıtım Ürünleri" subtitle="Kurumsal hediye ve promosyon ürünleri." />
        <div className="flex flex-wrap gap-3">
          {promoProducts.map((p, i) => (
            <div key={`${p.name}-${i}`} className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-nipo-card transition-smooth">
              <p.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ OUTDOOR / INDOOR ═══ */}
      <section>
        <SectionTitle icon={Flag} title="Outdoor & Indoor" subtitle="Açık ve kapalı alan kurumsal tanıtım ürünleri." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Flag, name: "Kol Banner", desc: "60×160cm, dijital baskı" },
            { icon: Flag, name: "Yelken Bayrak", desc: "Çift taraflı, rüzgar dayanımlı" },
            { icon: Car, name: "Araç Kaplama", desc: "Tam / yarım kaplama, folyo baskı" },
            { icon: Package, name: "Yaka İpi", desc: "20mm polyester, klipsli" },
          ].map((o) => (
            <div key={o.name} className="group rounded-2xl border border-border bg-card p-5 card-hover">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-smooth">
                <o.icon className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-bold text-sm text-foreground mb-1">{o.name}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SUNUM İNDİR ═══ */}
      <section className="rounded-2xl gradient-hero-warm p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative">
          <BarChart3 className="w-10 h-10 text-primary-foreground/40 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-black text-primary-foreground mb-2">Kurumsal Kimlik Sunumu</h3>
          <p className="text-primary-foreground/60 text-sm max-w-md mx-auto mb-6">
            Nipo Online kurumsal kimlik kılavuzunu PPTX formatında indirin.
          </p>
          <a
            href="/mnt/documents/Nipo_Online_Kurumsal_Kimlik.pptx"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-primary font-bold text-sm hover:shadow-nipo-lg transition-smooth"
          >
            <Star className="w-4 h-4" />
            Sunumu İndir (.pptx)
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
);

export default CorporateIdentity;
