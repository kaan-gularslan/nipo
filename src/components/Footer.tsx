import { useState, useEffect } from "react";
import { Package, Instagram, Facebook, Twitter, ArrowRight, MapPin, Phone, Mail, Palette } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ── Shared data ──
const productLinks = [
  { name: "Baskılı Kutular", slug: "oluklu-kutu" },
  { name: "Kağıt Çantalar", slug: "baski-canta" },
  { name: "Bardak & Kase", slug: "bardak" },
  { name: "Etiket & Sticker", slug: "etiket" },
  { name: "Peçete & Servis", slug: "pecete" },
];

const moreLinks = [
  { name: "Poşet Grubu", slug: "poset" },
  { name: "Streç Film", slug: "strec-bant" },
  { name: "Islak Mendil", slug: "islak-mendil" },
  { name: "Kasap Kağıtları", slug: "kasap-kagit" },
  { name: "Toz Dolum", slug: "toz-dolum" },
];

const corpLinks = [
  { name: "Hakkımızda", to: "/kurumsal" },
  { name: "İletişim", to: "/iletisim" },
  { name: "Kampanyalar", to: "/kampanyalar" },
  { name: "S.S.S", to: "/sss" },
];

const serviceLinks = [
  { name: "S.S.S", to: "/sss" },
  { name: "Kargo Bilgileri", to: "/kargo-bilgileri" },
  { name: "İade Koşulları", to: "/iade-kosullari" },
  { name: "Gizlilik Politikası", to: "/gizlilik" },
  { name: "KVKK", to: "/kvkk" },
];

const socials = [Instagram, Facebook, Twitter];

const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 group ${className}`}>
    <Package className="w-5 h-5 group-hover:text-secondary transition-smooth" />
    <span className="text-lg font-black">nipo</span>
    <span className="text-[9px] font-semibold tracking-[0.2em] uppercase opacity-70">AMBALAJ</span>
  </Link>
);

const SocialIcons = ({ className = "", iconClass = "" }: { className?: string; iconClass?: string }) => (
  <div className={`flex gap-2 ${className}`}>
    {socials.map((Icon, i) => (
      <a key={i} href="#" className={`w-8 h-8 rounded-full flex items-center justify-center transition-smooth ${iconClass || "bg-primary-foreground/8 hover:bg-secondary hover:text-secondary-foreground"}`}>
        <Icon className="w-3.5 h-3.5" />
      </a>
    ))}
  </div>
);

const Newsletter = ({ inputClass = "", btnVariant = "hero" as const }: { inputClass?: string; btnVariant?: "hero" | "secondary" | "accent" }) => (
  <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
    <Input
      placeholder="E-posta adresiniz"
      className={`w-64 rounded-full px-5 ${inputClass || "bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30"}`}
    />
    <Button variant={btnVariant} size="default" className="rounded-full px-6 gap-1.5">
      Abone Ol <ArrowRight className="w-3.5 h-3.5" />
    </Button>
  </form>
);

const ContactInfo = ({ className = "" }: { className?: string }) => (
  <div className={`space-y-2 ${className}`}>
    <div className="flex items-center gap-2 text-[11px] opacity-60">
      <MapPin className="w-3 h-3 shrink-0" />
      <span>Büyükçekmece / İSTANBUL</span>
    </div>
    <div className="flex items-center gap-2 text-[11px] opacity-60">
      <Phone className="w-3 h-3 shrink-0" />
      <span>0212 883 55 08</span>
    </div>
    <div className="flex items-center gap-2 text-[11px] opacity-60">
      <Mail className="w-3 h-3 shrink-0" />
      <span>info@nipo.com.tr</span>
    </div>
  </div>
);

const Copyright = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between gap-3 ${className}`}>
    <p className="text-[11px] opacity-30">© 2026 Nipo Ambalaj. Tüm hakları saklıdır.</p>
    <p className="text-[11px] opacity-30">Mimar Sinan Merkez Mh. İnönü Cd. No:95/3 Büyükçekmece / İSTANBUL</p>
  </div>
);

// ════════════════════════════════════════════
// DEMO 1: Klasik (Mevcut)
// ════════════════════════════════════════════
const FooterClassic = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black mb-1">Kampanya ve İndirimlerden Haberdar Olun</h3>
          <p className="text-sm text-primary-foreground/50">E-posta adresinizi bırakın, fırsatları kaçırmayın!</p>
        </div>
        <Newsletter />
      </div>
    </div>
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1 lg:col-span-1">
          <Logo className="mb-5" />
          <p className="text-xs text-primary-foreground/50 leading-relaxed mb-5">
            Markana Renk Kat! Kaliteli ve uygun fiyatlı ambalaj çözümlerinde güvenilir adresiniz.
          </p>
          <ContactInfo className="mb-5" />
          <SocialIcons />
        </div>
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Ürün Grupları</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/50">
            {productLinks.map(item => (
              <li key={item.name}><Link to={`/kategori/${item.slug}`} className="hover:text-primary-foreground hover:pl-1 transition-smooth">{item.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Daha Fazla</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/50">
            {moreLinks.map(item => (
              <li key={item.name}><Link to={`/kategori/${item.slug}`} className="hover:text-primary-foreground hover:pl-1 transition-smooth">{item.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Kurumsal</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/50">
            {corpLinks.map(l => (
              <li key={l.name}><Link to={l.to} className="hover:text-primary-foreground hover:pl-1 transition-smooth">{l.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Müşteri Hizmetleri</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/50">
            {serviceLinks.map(l => (
              <li key={l.name}><Link to={l.to} className="hover:text-primary-foreground hover:pl-1 transition-smooth">{l.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/8 mt-10 pt-6">
        <Copyright />
      </div>
    </div>
  </footer>
);

// ════════════════════════════════════════════
// DEMO 2: Minimal
// ════════════════════════════════════════════
const FooterMinimal = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-primary-foreground/60">
          <Link to="/urunler" className="hover:text-primary-foreground transition-smooth">Ürünler</Link>
          <Link to="/kurumsal" className="hover:text-primary-foreground transition-smooth">Hakkımızda</Link>
          <Link to="/kampanyalar" className="hover:text-primary-foreground transition-smooth">Kampanyalar</Link>
          <Link to="/iletisim" className="hover:text-primary-foreground transition-smooth">İletişim</Link>
          <Link to="/sss" className="hover:text-primary-foreground transition-smooth">S.S.S</Link>
          <Link to="/gizlilik" className="hover:text-primary-foreground transition-smooth">Gizlilik</Link>
          <Link to="/kvkk" className="hover:text-primary-foreground transition-smooth">KVKK</Link>
        </nav>
        <SocialIcons />
      </div>
      <div className="border-t border-primary-foreground/8 mt-4 pt-4">
        <Copyright />
      </div>
    </div>
  </footer>
);

// ════════════════════════════════════════════
// DEMO 3: Mega Footer
// ════════════════════════════════════════════
const FooterMega = () => (
  <footer className="text-primary-foreground">
    {/* CTA Banner */}
    <div className="gradient-hero-warm">
      <div className="container mx-auto px-4 py-14 text-center">
        <h3 className="text-3xl md:text-4xl font-black mb-3">Markanıza Özel Ambalaj Çözümleri</h3>
        <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">Ücretsiz numune talep edin, size özel teklif alalım.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Newsletter inputClass="bg-primary-foreground/15 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
        </div>
      </div>
    </div>
    {/* Links */}
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-xs text-primary-foreground/50 leading-relaxed mb-4">Kaliteli ve uygun fiyatlı ambalaj çözümlerinde güvenilir adresiniz.</p>
            <ContactInfo />
          </div>
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Ürünler</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/50">
              {[...productLinks, ...moreLinks].slice(0, 8).map(item => (
                <li key={item.name}><Link to={`/kategori/${item.slug}`} className="hover:text-primary-foreground transition-smooth">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Kurumsal</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/50">
              {corpLinks.map(l => (
                <li key={l.name}><Link to={l.to} className="hover:text-primary-foreground transition-smooth">{l.name}</Link></li>
              ))}
            </ul>
            <h4 className="font-bold mb-4 mt-6 text-xs uppercase tracking-wider text-primary-foreground/80">Destek</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/50">
              {serviceLinks.slice(1).map(l => (
                <li key={l.name}><Link to={l.to} className="hover:text-primary-foreground transition-smooth">{l.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Bizi Takip Edin</h4>
            <SocialIcons className="mb-6" />
            <div className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <p className="text-xs font-semibold mb-1">📞 Hızlı Destek</p>
              <p className="text-lg font-black">0212 883 55 08</p>
              <p className="text-[10px] text-primary-foreground/40 mt-1">Pzt-Cum: 09:00 - 18:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/8 mt-10 pt-6">
          <Copyright />
        </div>
      </div>
    </div>
  </footer>
);

// ════════════════════════════════════════════
// DEMO 4: Dark Glass
// ════════════════════════════════════════════
const FooterDarkGlass = () => (
  <footer className="relative text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 bg-foreground/95 backdrop-blur-xl" />
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
    <div className="relative container mx-auto px-4 py-12">
      {/* Center logo */}
      <div className="text-center mb-8">
        <Logo className="justify-center mb-3" />
        <p className="text-xs text-primary-foreground/40 max-w-md mx-auto">Markana Renk Kat! Kaliteli ve uygun fiyatlı ambalaj çözümlerinde güvenilir adresiniz.</p>
      </div>
      {/* Links row 1 */}
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-primary-foreground/50 mb-4">
        {productLinks.map(item => (
          <Link key={item.name} to={`/kategori/${item.slug}`} className="hover:text-primary-foreground transition-smooth">{item.name}</Link>
        ))}
      </nav>
      {/* Links row 2 */}
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-primary-foreground/50 mb-8">
        {corpLinks.map(l => (
          <Link key={l.name} to={l.to} className="hover:text-primary-foreground transition-smooth">{l.name}</Link>
        ))}
        {serviceLinks.slice(1).map(l => (
          <Link key={l.name} to={l.to} className="hover:text-primary-foreground transition-smooth">{l.name}</Link>
        ))}
      </nav>
      {/* Newsletter */}
      <div className="flex justify-center mb-8">
        <Newsletter inputClass="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" />
      </div>
      {/* Social + contact */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
        <SocialIcons iconClass="bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground" />
        <span className="text-xs text-primary-foreground/30">|</span>
        <div className="flex items-center gap-4 text-[11px] text-primary-foreground/40">
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 0212 883 55 08</span>
          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@nipo.com.tr</span>
        </div>
      </div>
      <div className="border-t border-primary-foreground/8 pt-5">
        <Copyright />
      </div>
    </div>
  </footer>
);

// ════════════════════════════════════════════
// DEMO 5: Renkli Bloklar
// ════════════════════════════════════════════
const FooterColorBlocks = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Newsletter */}
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-lg font-black text-secondary-foreground">Fırsatları Kaçırmayın!</h3>
        <Newsletter inputClass="bg-secondary-foreground/15 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50" btnVariant="accent" />
      </div>
    </div>
    {/* Color blocks */}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Blue block - Products */}
        <div className="rounded-2xl bg-nipo-blue-light p-6 text-foreground">
          <h4 className="font-bold text-sm mb-4 text-nipo-blue flex items-center gap-2">
            <Package className="w-4 h-4" /> Ürün Grupları
          </h4>
          <ul className="space-y-1.5 text-xs text-foreground/70">
            {[...productLinks, ...moreLinks].slice(0, 6).map(item => (
              <li key={item.name}><Link to={`/kategori/${item.slug}`} className="hover:text-nipo-blue transition-smooth">{item.name}</Link></li>
            ))}
          </ul>
        </div>
        {/* Pink block - Corporate */}
        <div className="rounded-2xl bg-nipo-pink-light p-6 text-foreground">
          <h4 className="font-bold text-sm mb-4 text-nipo-pink flex items-center gap-2">
            <Mail className="w-4 h-4" /> Kurumsal & Destek
          </h4>
          <ul className="space-y-1.5 text-xs text-foreground/70">
            {[...corpLinks, ...serviceLinks.slice(1)].map(l => (
              <li key={l.name}><Link to={l.to} className="hover:text-nipo-pink transition-smooth">{l.name}</Link></li>
            ))}
          </ul>
        </div>
        {/* Green block - Contact */}
        <div className="rounded-2xl bg-nipo-green-light p-6 text-foreground">
          <h4 className="font-bold text-sm mb-4 text-nipo-green flex items-center gap-2">
            <MapPin className="w-4 h-4" /> İletişim
          </h4>
          <div className="space-y-3 text-xs text-foreground/70">
            <div className="flex items-center gap-2"><MapPin className="w-3 h-3 shrink-0" /> Büyükçekmece / İSTANBUL</div>
            <div className="flex items-center gap-2"><Phone className="w-3 h-3 shrink-0" /> 0212 883 55 08</div>
            <div className="flex items-center gap-2"><Mail className="w-3 h-3 shrink-0" /> info@nipo.com.tr</div>
            <SocialIcons className="pt-2" iconClass="bg-foreground/10 hover:bg-accent hover:text-accent-foreground" />
          </div>
        </div>
      </div>
    </div>
    {/* Bottom */}
    <div className="container mx-auto px-4 pb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <Logo />
        <p className="text-[11px] text-primary-foreground/30">© 2026 Nipo Ambalaj. Tüm hakları saklıdır.</p>
      </div>
    </div>
  </footer>
);

// ════════════════════════════════════════════
// DEMO SWITCHER
// ════════════════════════════════════════════
const DEMO_NAMES = ["Klasik", "Minimal", "Mega", "Cam", "Renkli"];
const DEMOS = [FooterClassic, FooterMinimal, FooterMega, FooterDarkGlass, FooterColorBlocks];

const Footer = () => {
  const [demo, setDemo] = useState(() => {
    const saved = localStorage.getItem("nipo-footer-demo");
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("nipo-footer-demo", String(demo));
  }, [demo]);

  const ActiveFooter = DEMOS[demo] || DEMOS[0];

  return (
    <div>
      <ActiveFooter />
      {/* Switcher bar */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider opacity-50 mr-2">
            <Palette className="w-3 h-3" /> Footer Demo
          </span>
          {DEMO_NAMES.map((name, i) => (
            <button
              key={name}
              onClick={() => setDemo(i)}
              className={`text-[11px] px-3 py-1 rounded-full font-semibold transition-smooth ${
                demo === i
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-background/10 hover:bg-background/20 text-background/70"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
