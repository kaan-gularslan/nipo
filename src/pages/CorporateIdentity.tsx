import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Package, Type, Palette, Image, MessageSquareQuote,
  CreditCard, FileText, Mail, FolderOpen, Receipt, BookOpen, StickyNote, AtSign,
  Coffee, Usb, ShoppingBag, PenTool, BookMarked, Clock, KeyRound, Monitor,
  Flag, Car, Lanyard
} from "lucide-react";

/* ── Renk Verileri ── */
const brandColors = [
  {
    name: "Koyu Mavi",
    hex: "#004374",
    rgb: "R:0  G:67  B:116",
    cmyk: "C:100  M:60  Y:15  K:15",
    hsl: "205° 100% 22.7%",
    css: "var(--nipo-blue)",
    tints: ["#004374", "#1a5682", "#336a91", "#4d7da0", "#6691af", "#80a4be", "#99b8cd", "#b3cbdc", "#ccdfeb", "#e6f2fa"],
  },
  {
    name: "Pembe",
    hex: "#FF456D",
    rgb: "R:255  G:69  B:109",
    cmyk: "C:0  M:80  Y:40  K:0",
    hsl: "347° 100% 63.5%",
    css: "var(--nipo-pink)",
    tints: ["#FF456D", "#ff587a", "#ff6b88", "#ff7e95", "#ff91a3", "#ffa4b0", "#ffb7be", "#ffcacb", "#ffddd9", "#fff0e6"],
  },
  {
    name: "Yeşil",
    hex: "#9CC33B",
    rgb: "R:156  G:195  B:59",
    cmyk: "C:35  M:0  Y:85  K:5",
    hsl: "77° 55% 49.8%",
    css: "var(--nipo-green)",
    tints: ["#9CC33B", "#a6c94f", "#b0cf62", "#bad576", "#c4db89", "#cee19d", "#d8e7b0", "#e2edc4", "#ecf3d7", "#f6f9eb"],
  },
];

/* ── Font Ağırlıkları ── */
const fontWeights = [
  { weight: 100, name: "Thin", sample: "Markana Renk Kat!" },
  { weight: 300, name: "Light", sample: "Kaliteli Ambalaj Çözümleri" },
  { weight: 500, name: "Medium", sample: "Nipo Ambalaj ile Fark Yaratın" },
  { weight: 800, name: "ExtraBold", sample: "Güvenilir Adresiniz" },
  { weight: 900, name: "Black", sample: "MARKANA RENK KAT!" },
];

/* ── Kurumsal Materyaller ── */
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

/* ── Tanıtım Ürünleri ── */
const promoProducts = [
  { icon: Coffee, name: "Kupa Bardak", desc: "Seramik, logo baskılı" },
  { icon: Usb, name: "USB Bellek", desc: "8/16/32 GB, kurumsal renkler" },
  { icon: ShoppingBag, name: "Karton Çanta", desc: "Kraft / kuşe, ip saplı" },
  { icon: ShoppingBag, name: "Bez Çanta", desc: "Ham bez, serigrafi baskı" },
  { icon: PenTool, name: "Kalem", desc: "Metal tükenmez, lazer gravür" },
  { icon: BookMarked, name: "Ajanda", desc: "Termo deri kapak, kurumsal renk" },
  { icon: Clock, name: "Duvar Saati", desc: "30cm çap, cam kadran" },
  { icon: KeyRound, name: "Anahtarlık", desc: "Metal, döküm logo" },
  { icon: Monitor, name: "Mouse Pad", desc: "Kauçuk taban, 4 renk baskı" },
];

/* ── Outdoor / Indoor ── */
const outdoorItems = [
  { icon: Flag, name: "Kol Banner", desc: "60×160cm, dijital baskı" },
  { icon: Flag, name: "Yelken Bayrak", desc: "Çift taraflı, rüzgar dayanımlı" },
  { icon: Car, name: "Araç Kaplama", desc: "Tam / yarım kaplama, folyo baskı" },
  { icon: Package, name: "Yaka İpi", desc: "20mm polyester, klipsli" },
];

/* ── Bölüm Başlığı ── */
const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-2xl font-black text-foreground">{title}</h2>
    </div>
    <p className="text-sm text-muted-foreground ml-[52px]">{subtitle}</p>
  </div>
);

/* ── Materyal Kartı ── */
const MaterialCard = ({ icon: Icon, name, desc }: { icon: React.ElementType; name: string; desc: string }) => (
  <div className="group rounded-xl border border-border bg-card p-5 hover:shadow-lg hover:border-primary/20 transition-smooth">
    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-smooth">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <h4 className="font-bold text-sm text-foreground mb-1">{name}</h4>
    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

/* ── Ana Sayfa ── */
const CorporateIdentity = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: "Kurumsal Kimlik" }]} />
        <h1 className="text-4xl md:text-5xl font-black mb-3">Kurumsal Kimlik Kılavuzu</h1>
        <p className="text-primary-foreground/60 max-w-xl text-sm leading-relaxed">
          Nipo Ambalaj'ın marka tutarlılığını korumak için tüm renk, tipografi ve logo
          kullanım kurallarını içeren resmi kurumsal kimlik rehberi.
        </p>
      </div>
    </section>

    <div className="container mx-auto px-4 py-12 space-y-20">

      {/* ── 1. Kurumsal Renkler ── */}
      <section>
        <SectionTitle icon={Palette} title="Kurumsal Renkler" subtitle="Tüm iletişim materyallerinde aşağıdaki renkler kullanılmalıdır." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandColors.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border overflow-hidden bg-card">
              <div className="h-32" style={{ backgroundColor: c.hex }} />
              <div className="p-5 space-y-3">
                <h3 className="font-black text-lg text-foreground">{c.name}</h3>
                <div className="space-y-1.5 text-xs text-muted-foreground font-mono">
                  <p><span className="font-semibold text-foreground/70">HEX:</span> {c.hex}</p>
                  <p><span className="font-semibold text-foreground/70">RGB:</span> {c.rgb}</p>
                  <p><span className="font-semibold text-foreground/70">CMYK:</span> {c.cmyk}</p>
                  <p><span className="font-semibold text-foreground/70">HSL:</span> {c.hsl}</p>
                </div>
                {/* Tint strip */}
                <div className="flex rounded-lg overflow-hidden h-6">
                  {c.tints.map((t, i) => (
                    <div key={i} className="flex-1" style={{ backgroundColor: t }} title={`${(10 - i) * 10}%`} />
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground text-center">%100 → %10 ton geçişi</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Tipografi ── */}
      <section>
        <SectionTitle icon={Type} title="Tipografi" subtitle="Ana font Montserrat, yardımcı font Calibri kullanılır." />
        <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider text-primary mb-4">Montserrat — Ana Font</h3>
            <div className="space-y-4">
              {fontWeights.map((fw) => (
                <div key={fw.weight} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-border/50 pb-3 last:border-0">
                  <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">
                    {fw.name} ({fw.weight})
                  </span>
                  <span className="text-2xl text-foreground" style={{ fontWeight: fw.weight }}>
                    {fw.sample}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="font-black text-sm uppercase tracking-wider text-primary mb-3">Calibri — Yardımcı Font</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Resmi yazışmalar, faturalar ve dijital belgelerde Calibri kullanılır.
              E-posta gövdesi, teklif dökümanları ve iç iletişim materyallerinde tercih edilir.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Logo Kullanımı ── */}
      <section>
        <SectionTitle icon={Image} title="Logo Kullanımı" subtitle="Logo'nun doğru ve tutarlı kullanımı marka algısı için kritiktir." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo Hikayesi */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold text-sm text-foreground mb-3">Logo Hikayesi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              "Nipo" ismindeki <strong>"O"</strong> harfi bir boya kutusu olarak betimlenmiştir. Logonun
              üzerindeki <strong>3 damlacık</strong>, markanın 3 ana rengini (Mavi, Pembe, Yeşil) temsil eder
              ve "Markana Renk Kat!" sloganıyla bütünleşir.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#004374" }} />
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#FF456D" }} />
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#9CC33B" }} />
              <span className="text-xs text-muted-foreground ml-2">3 Damlacık Renkleri</span>
            </div>
          </div>

          {/* Kullanım Kuralları */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold text-sm text-foreground mb-3">Kullanım Kuralları</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                Minimum boyut: Kısa kenar <strong>en az 25mm</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                Açık zemin: Renkli logo kullanılır
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                Koyu zemin: Beyaz logo kullanılır
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                Siyah-beyaz baskı: Gri tonlama versiyonu kullanılır
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                Logo etrafında minimum <strong>logo yüksekliğinin %25'i</strong> kadar boşluk bırakılmalıdır
              </li>
            </ul>
          </div>

          {/* Açık Zemin Demo */}
          <div className="rounded-2xl border border-border bg-white p-8 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <Package className="w-8 h-8 text-[#004374]" />
              <span className="text-3xl font-black text-[#004374]">nipo</span>
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#004374]/70">AMBALAJ</span>
            <span className="text-[10px] text-muted-foreground mt-2">Açık Zemin Kullanımı</span>
          </div>

          {/* Koyu Zemin Demo */}
          <div className="rounded-2xl border border-border bg-[#004374] p-8 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <Package className="w-8 h-8 text-white" />
              <span className="text-3xl font-black text-white">nipo</span>
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70">AMBALAJ</span>
            <span className="text-[10px] text-white/40 mt-2">Koyu Zemin Kullanımı</span>
          </div>
        </div>
      </section>

      {/* ── 4. Slogan ── */}
      <section>
        <SectionTitle icon={MessageSquareQuote} title="Kurumsal Slogan" subtitle="Tüm iletişim materyallerinde kullanılan resmi slogan." />
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-10 text-center">
          <p className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#004374] via-[#FF456D] to-[#9CC33B] bg-clip-text text-transparent mb-4">
            Markana Renk Kat!
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Slogan her zaman Montserrat Black ile yazılır. Logo ile birlikte veya bağımsız olarak kullanılabilir.
            Renk geçişli veya tek renkli (Koyu Mavi) versiyonları mevcuttur.
          </p>
        </div>
      </section>

      {/* ── 5. Kurumsal Materyaller ── */}
      <section>
        <SectionTitle icon={CreditCard} title="Kurumsal Materyaller" subtitle="Basılı iletişim materyalleri ve baskı özellikleri." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {corporateMaterials.map((m) => (
            <MaterialCard key={m.name} icon={m.icon} name={m.name} desc={m.desc} />
          ))}
        </div>
      </section>

      {/* ── 6. Tanıtım Ürünleri ── */}
      <section>
        <SectionTitle icon={ShoppingBag} title="Tanıtım Ürünleri" subtitle="Kurumsal hediye ve promosyon ürünleri." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {promoProducts.map((p, i) => (
            <MaterialCard key={`${p.name}-${i}`} icon={p.icon} name={p.name} desc={p.desc} />
          ))}
        </div>
      </section>

      {/* ── 7. Outdoor / Indoor ── */}
      <section>
        <SectionTitle icon={Flag} title="Outdoor & Indoor" subtitle="Açık ve kapalı alan kurumsal tanıtım ürünleri." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {outdoorItems.map((o) => (
            <MaterialCard key={o.name} icon={o.icon} name={o.name} desc={o.desc} />
          ))}
        </div>
      </section>

    </div>

    <Footer />
  </div>
);

export default CorporateIdentity;
