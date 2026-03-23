import { Package, Instagram, Facebook, Twitter, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  { name: "Kurumsal Kimlik", to: "/kurumsal-kimlik" },
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

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Newsletter */}
    <div className="border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black mb-1">Kampanya ve İndirimlerden Haberdar Olun</h3>
          <p className="text-sm text-primary-foreground/50">E-posta adresinizi bırakın, fırsatları kaçırmayın!</p>
        </div>
        <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
          <Input
            placeholder="E-posta adresiniz"
            className="w-64 rounded-full px-5 bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30"
          />
          <Button variant="hero" size="default" className="rounded-full px-6 gap-1.5">
            Abone Ol <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </form>
      </div>
    </div>

    {/* Links */}
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 group mb-5">
            <Package className="w-5 h-5 group-hover:text-secondary transition-smooth" />
            <span className="text-lg font-black">nipo</span>
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase opacity-70">AMBALAJ</span>
          </Link>
          <p className="text-xs text-primary-foreground/50 leading-relaxed mb-5">
            Markana Renk Kat! Kaliteli ve uygun fiyatlı ambalaj çözümlerinde güvenilir adresiniz.
          </p>
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2 text-[11px] opacity-60">
              <MapPin className="w-3 h-3 shrink-0" /> Büyükçekmece / İSTANBUL
            </div>
            <div className="flex items-center gap-2 text-[11px] opacity-60">
              <Phone className="w-3 h-3 shrink-0" /> 0212 883 55 08
            </div>
            <div className="flex items-center gap-2 text-[11px] opacity-60">
              <Mail className="w-3 h-3 shrink-0" /> info@nipo.com.tr
            </div>
          </div>
          <div className="flex gap-2">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-foreground/8 hover:bg-secondary hover:text-secondary-foreground transition-smooth">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Ürün Grupları</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/50">
            {productLinks.map(item => (
              <li key={item.name}>
                <Link to={`/kategori/${item.slug}`} className="hover:text-primary-foreground hover:pl-1 transition-smooth">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Daha Fazla</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/50">
            {moreLinks.map(item => (
              <li key={item.name}>
                <Link to={`/kategori/${item.slug}`} className="hover:text-primary-foreground hover:pl-1 transition-smooth">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Kurumsal</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/50">
            {corpLinks.map(l => (
              <li key={l.name}><Link to={l.to} className="hover:text-primary-foreground hover:pl-1 transition-smooth">{l.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service */}
        <div>
          <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-foreground/80">Müşteri Hizmetleri</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/50">
            {serviceLinks.map(l => (
              <li key={l.name}><Link to={l.to} className="hover:text-primary-foreground hover:pl-1 transition-smooth">{l.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Demo Pages */}
      <div className="border-t border-primary-foreground/8 mt-10 pt-6">
        <p className="text-[10px] uppercase tracking-wider opacity-40 mb-3 text-center">Tema Demoları</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { name: "Hepsiburada", to: "/demo/hepsiburada" },
            { name: "Bidolu", to: "/demo/bidolu" },
            { name: "Trendyol", to: "/demo/trendyol" },
            { name: "Amazon", to: "/demo/amazon" },
            { name: "N11", to: "/demo/n11" },
          ].map((demo) => (
            <Link key={demo.name} to={demo.to} className="text-[10px] font-medium px-3 py-1.5 rounded-full bg-primary-foreground/8 hover:bg-secondary hover:text-secondary-foreground transition-smooth">
              {demo.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/8 mt-6 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] opacity-30">© 2026 Nipo Ambalaj. Tüm hakları saklıdır.</p>
          <p className="text-[11px] opacity-30">Mimar Sinan Merkez Mh. İnönü Cd. No:95/3 Büyükçekmece / İSTANBUL</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
