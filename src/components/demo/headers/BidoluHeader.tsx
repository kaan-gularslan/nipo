import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Search, ShoppingCart, Menu, X, User, Truck, CreditCard, RotateCcw, ShieldCheck } from "lucide-react";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

const navLinks = [
  { name: "Baskılı Kutular", path: "/kategori/oluklu-kutu" },
  { name: "Kağıt Çantalar", path: "/kategori/baski-canta" },
  { name: "Bardak & Kase", path: "/kategori/bardak" },
  { name: "Etiket & Sticker", path: "/kategori/etiket" },
  { name: "Yeni Ürünler", path: "/urunler" },
  { name: "Kampanyalar", path: "/kampanyalar" },
];

export const BidoluHeader = () => {
  const { totalItems } = useCart();
  const { demoLink } = useDemo();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between text-[11px] py-1.5 text-muted-foreground">
          <span>Markana Renk Kat! | Nipo Online Ambalaj</span>
          <div className="flex gap-3">
            <Link to={demoLink("/sss")} className="hover:text-primary">Yardım</Link>
            <Link to={demoLink("/iletisim")} className="hover:text-primary">İletişim</Link>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-6">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to={demoLink("/")} className="flex items-center gap-2 shrink-0">
              <Package className="w-7 h-7 text-primary" />
              <div>
                <span className="text-xl font-black text-primary">nipo</span>
                <span className="text-[8px] font-semibold tracking-[0.15em] uppercase text-muted-foreground ml-1">ONLINE</span>
              </div>
            </Link>
            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <input type="text" placeholder="Ne aramıştınız?" className="w-full h-10 rounded-lg pl-4 pr-12 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
                <button className="absolute right-0 top-0 h-10 w-12 bg-primary rounded-r-lg flex items-center justify-center hover:bg-primary/90 transition-smooth">
                  <Search className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <Link to={demoLink("/kurumsal")} className="hidden md:flex flex-col items-center text-[10px] text-muted-foreground hover:text-primary transition-smooth">
                <User className="w-5 h-5 mb-0.5" />
                Üye Ol / Giriş
              </Link>
              <Link to={demoLink("/sepet")} className="flex flex-col items-center text-[10px] text-muted-foreground hover:text-primary transition-smooth relative">
                <ShoppingCart className="w-5 h-5 mb-0.5" />
                Sepetim
                {totalItems > 0 && (
                  <span className="absolute -top-1 right-0 bg-secondary text-secondary-foreground w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={demoLink(link.path)} className="text-sm font-medium px-4 py-2.5 hover:text-primary hover:bg-primary/5 rounded-t transition-smooth">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg fixed top-[60px] inset-x-0 z-40">
          <div className="p-4 space-y-2">
            <div className="relative mb-3">
              <input type="text" placeholder="Ürün ara..." className="w-full h-10 rounded-lg pl-4 pr-12 text-sm border border-border" />
              <Search className="absolute right-4 top-3 w-4 h-4 text-muted-foreground" />
            </div>
            {navLinks.map((link) => (
              <Link key={link.name} to={demoLink(link.path)} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Trust Badges */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, title: "Ücretsiz Kargo", desc: "500₺ üzeri siparişlerde" },
              { icon: CreditCard, title: "9 Taksit İmkanı", desc: "Tüm kredi kartlarına" },
              { icon: RotateCcw, title: "Kolay İade", desc: "14 gün içinde ücretsiz" },
              { icon: ShieldCheck, title: "Güvenli Alışveriş", desc: "256-bit SSL sertifikası" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <badge.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{badge.title}</h4>
                  <p className="text-[10px] text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const BidoluFooter = () => {
  const { demoLink } = useDemo();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to={demoLink("/")} className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5" />
              <span className="text-lg font-black">nipo</span>
            </Link>
            <p className="text-xs opacity-50 leading-relaxed">Markana Renk Kat! Kaliteli ve uygun fiyatlı ambalaj çözümleri.</p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Ürünler</h4>
            <ul className="space-y-2 text-xs opacity-50">
              {categories.slice(0, 5).map((c) => <li key={c.id}><Link to={demoLink(`/kategori/${c.slug}`)} className="hover:opacity-100">{c.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Kurumsal</h4>
            <ul className="space-y-2 text-xs opacity-50">
              <li><Link to={demoLink("/kurumsal")} className="hover:opacity-100">Hakkımızda</Link></li>
              <li><Link to={demoLink("/iletisim")} className="hover:opacity-100">İletişim</Link></li>
              <li><Link to={demoLink("/sss")} className="hover:opacity-100">S.S.S</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Yardım</h4>
            <ul className="space-y-2 text-xs opacity-50">
              <li><Link to={demoLink("/kargo-bilgileri")} className="hover:opacity-100">Kargo Bilgileri</Link></li>
              <li><Link to={demoLink("/iade-kosullari")} className="hover:opacity-100">İade Koşulları</Link></li>
              <li><Link to={demoLink("/gizlilik")} className="hover:opacity-100">Gizlilik</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-[11px] opacity-30">
          © 2026 Nipo Ambalaj | <Link to="/" className="underline">Ana Siteye Dön</Link>
        </div>
      </div>
    </footer>
  );
};
