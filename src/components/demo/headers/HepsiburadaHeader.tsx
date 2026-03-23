import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Search, User, ShoppingCart, Heart, Menu, X, Truck, CreditCard, RotateCcw, Shield } from "lucide-react";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

const navCategories = categories.slice(0, 10);

const marqueeItems = [
  "🚚 500₺ Üzeri Ücretsiz Kargo",
  "💳 12 Aya Varan Taksit İmkanı",
  "⚡ Aynı Gün Kargo",
  "🔒 Güvenli Alışveriş",
  "📞 7/24 Müşteri Desteği",
  "🎯 Toplu Siparişe Özel Fiyat",
];

export const HepsiburadaHeader = () => {
  const { totalItems } = useCart();
  const { demoLink } = useDemo();
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Marquee - hidden on mobile */}
      <div className="bg-primary text-primary-foreground overflow-hidden hidden md:block">
        <div className="animate-[marquee_30s_linear_infinite] flex whitespace-nowrap py-1.5">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-[11px] mx-8 opacity-90">{item}</span>
          ))}
        </div>
      </div>

      {/* Top Bar - hidden on mobile */}
      <div className="bg-primary/95 text-primary-foreground hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-[11px] py-1.5 opacity-70">
            <div className="flex gap-4">
              <Link to={demoLink("/kampanyalar")} className="hover:opacity-100">Kampanyalar</Link>
              <Link to={demoLink("/kurumsal")} className="hover:opacity-100">Kurumsal</Link>
              <Link to={demoLink("/iletisim")} className="hover:opacity-100">İletişim</Link>
            </div>
            <div className="flex gap-4">
              <Link to={demoLink("/sss")} className="hover:opacity-100">Yardım</Link>
              <Link to={demoLink("/sepet")} className="hover:opacity-100">Siparişlerim</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to={demoLink("/")} className="flex items-center gap-2 shrink-0">
              <Package className="w-7 h-7" />
              <div>
                <span className="text-xl font-black tracking-tight">nipo</span>
                <span className="text-[8px] font-semibold tracking-[0.15em] uppercase ml-1 opacity-70">ONLINE</span>
              </div>
            </Link>
            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Ürün, kategori veya marka ara..." className="w-full h-10 rounded-lg pl-4 pr-12 text-sm text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <button className="absolute right-0 top-0 h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center hover:bg-secondary/90 transition-smooth">
                  <Search className="w-5 h-5 text-secondary-foreground" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <Link to={demoLink("/kurumsal")} className="hidden md:flex items-center gap-1.5 text-xs hover:opacity-80 transition-smooth">
                <User className="w-5 h-5" /><span className="hidden lg:block">Hesabım</span>
              </Link>
              <Link to={demoLink("/urunler")} className="hidden md:flex items-center gap-1.5 text-xs hover:opacity-80 transition-smooth">
                <Heart className="w-5 h-5" /><span className="hidden lg:block">Favorilerim</span>
              </Link>
              <Link to={demoLink("/sepet")} className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-smooth relative">
                <ShoppingCart className="w-5 h-5" /><span className="hidden lg:block">Sepetim</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 lg:-top-2 lg:-right-3 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tab Bar */}
      <div className="bg-primary/90 text-primary-foreground border-t border-primary-foreground/10 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin py-1">
            {navCategories.map((cat) => (
              <Link key={cat.id} to={demoLink(`/kategori/${cat.slug}`)} className="text-[12px] font-medium px-3 py-2 whitespace-nowrap hover:bg-primary-foreground/10 rounded transition-smooth">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-white p-3">
        <div className="relative">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Ürün ara..." className="w-full h-10 rounded-lg pl-4 pr-12 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
          <button className="absolute right-0 top-0 h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center"><Search className="w-5 h-5 text-secondary-foreground" /></button>
        </div>
      </div>
      {mobileMenu && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg fixed inset-x-0 z-40 max-h-[70vh] overflow-y-auto" style={{ top: "56px" }}>
          <div className="p-4 space-y-1">
            <Link to={demoLink("/kampanyalar")} className="block py-2 px-3 text-sm font-semibold text-secondary hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>🔥 Kampanyalar</Link>
            <Link to={demoLink("/kurumsal")} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>Kurumsal</Link>
            <Link to={demoLink("/iletisim")} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>İletişim</Link>
            <Link to={demoLink("/sss")} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>Yardım</Link>
            <div className="border-t border-border my-2" />
            {navCategories.map((cat) => (
              <Link key={cat.id} to={demoLink(`/kategori/${cat.slug}`)} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Category Icons */}
      <div className="bg-white py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-2">
            {categories.map((cat) => (
              <Link key={cat.id} to={demoLink(`/kategori/${cat.slug}`)} className="flex flex-col items-center gap-1.5 min-w-[72px] group">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-smooth group-hover:scale-110">{cat.icon}</div>
                <span className="text-[10px] text-muted-foreground text-center leading-tight group-hover:text-primary font-medium line-clamp-2 max-w-[72px]">{cat.name.replace(" Grubu", "").replace("Baskılı ", "")}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-y border-border">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Truck, label: "Ücretsiz Kargo", desc: "500₺ üzeri siparişlerde" },
              { icon: CreditCard, label: "12 Taksit", desc: "Tüm kredi kartlarına" },
              { icon: RotateCcw, label: "Kolay İade", desc: "14 gün içinde iade" },
              { icon: Shield, label: "Güvenli Ödeme", desc: "256-bit SSL şifreleme" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-smooth shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] md:text-xs font-bold text-foreground">{item.label}</p>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground hidden sm:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const HepsiburadaFooter = () => {
  const { demoLink } = useDemo();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to={demoLink("/")} className="flex items-center gap-2 mb-4"><Package className="w-5 h-5" /><span className="text-lg font-black">nipo</span></Link>
            <p className="text-xs opacity-60 leading-relaxed">Markana Renk Kat! Türkiye'nin en kapsamlı ambalaj çözümleri.</p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Ürünler</h4>
            <ul className="space-y-2 text-xs opacity-60">{categories.slice(0, 5).map((c) => <li key={c.id}><Link to={demoLink(`/kategori/${c.slug}`)} className="hover:opacity-100">{c.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Kurumsal</h4>
            <ul className="space-y-2 text-xs opacity-60">
              <li><Link to={demoLink("/kurumsal")} className="hover:opacity-100">Hakkımızda</Link></li>
              <li><Link to={demoLink("/iletisim")} className="hover:opacity-100">İletişim</Link></li>
              <li><Link to={demoLink("/sss")} className="hover:opacity-100">S.S.S</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Yardım</h4>
            <ul className="space-y-2 text-xs opacity-60">
              <li><Link to={demoLink("/kargo-bilgileri")} className="hover:opacity-100">Kargo</Link></li>
              <li><Link to={demoLink("/iade-kosullari")} className="hover:opacity-100">İade</Link></li>
              <li><Link to={demoLink("/gizlilik")} className="hover:opacity-100">Gizlilik</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-[11px] opacity-50">
          © 2026 Nipo Ambalaj | <Link to="/" className="underline hover:opacity-100">Ana Siteye Dön</Link>
        </div>
      </div>
    </footer>
  );
};
