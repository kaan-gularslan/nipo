import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Search, User, Heart, ShoppingCart, Menu, X, Zap } from "lucide-react";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

const categoryTabs = ["Tümü", "Kutular", "Çantalar", "Bardaklar", "Etiketler", "Peçeteler", "Poşetler"];

export const TrendyolHeader = () => {
  const { totalItems } = useCart();
  const { demoLink } = useDemo();
  const [activeTab, setActiveTab] = useState("Tümü");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Flash Deal Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 py-2 text-xs font-bold">
            <Zap className="w-4 h-4" />
            <span>Süper Fiyat Fırsatları</span>
            <Link to={demoLink("/kampanyalar")} className="underline text-[11px] ml-2">İncele →</Link>
          </div>
        </div>
      </div>

      <div className="h-1 bg-primary" />

      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to={demoLink("/")} className="flex items-center gap-1.5 shrink-0">
              <Package className="w-6 h-6 text-primary" />
              <span className="text-xl font-black text-primary">nipo</span>
            </Link>
            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Ürün, kategori veya marka ara" className="w-full h-10 rounded-lg pl-10 pr-4 text-sm bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="flex items-center gap-3 ml-auto text-muted-foreground">
              <Link to={demoLink("/kurumsal")} className="hidden md:flex items-center gap-1 text-xs hover:text-primary transition-smooth"><User className="w-5 h-5" /><span className="hidden lg:block">Giriş Yap</span></Link>
              <Link to={demoLink("/urunler")} className="hidden md:flex items-center gap-1 text-xs hover:text-primary transition-smooth"><Heart className="w-5 h-5" /><span className="hidden lg:block">Favorilerim</span></Link>
              <Link to={demoLink("/sepet")} className="flex items-center gap-1 text-xs hover:text-primary transition-smooth relative">
                <ShoppingCart className="w-5 h-5" /><span className="hidden lg:block">Sepetim</span>
                {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">{totalItems}</span>}
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 overflow-x-auto">
              {categoryTabs.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`text-sm font-medium px-4 py-2.5 border-b-2 transition-smooth whitespace-nowrap ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className="lg:hidden bg-white border-b shadow-lg fixed top-[52px] inset-x-0 z-40">
          <div className="p-4">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Ara..." className="w-full h-10 rounded-lg pl-10 pr-4 text-sm bg-muted border-0" />
            </div>
            <div className="space-y-1">
              {categoryTabs.map((tab) => (
                <button key={tab} onClick={() => { setActiveTab(tab); setMobileMenu(false); }} className={`block w-full text-left py-2 px-3 text-sm rounded ${activeTab === tab ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted"}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const TrendyolFooter = () => {
  const { demoLink } = useDemo();
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to={demoLink("/")} className="flex items-center gap-2 mb-4"><Package className="w-5 h-5 text-primary" /><span className="text-lg font-black text-primary">nipo</span></Link>
            <p className="text-xs text-muted-foreground leading-relaxed">Markana Renk Kat!</p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-foreground">Ürünler</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">{categories.slice(0, 5).map((c) => <li key={c.id}><Link to={demoLink(`/kategori/${c.slug}`)} className="hover:text-primary">{c.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-foreground">Kurumsal</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to={demoLink("/kurumsal")} className="hover:text-primary">Hakkımızda</Link></li>
              <li><Link to={demoLink("/iletisim")} className="hover:text-primary">İletişim</Link></li>
              <li><Link to={demoLink("/sss")} className="hover:text-primary">S.S.S</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-foreground">Yardım</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to={demoLink("/kargo-bilgileri")} className="hover:text-primary">Kargo</Link></li>
              <li><Link to={demoLink("/iade-kosullari")} className="hover:text-primary">İade</Link></li>
              <li><Link to={demoLink("/gizlilik")} className="hover:text-primary">Gizlilik</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-[11px] text-muted-foreground">
          © 2026 Nipo Ambalaj | <Link to="/" className="text-primary underline">Ana Siteye Dön</Link>
        </div>
      </div>
    </footer>
  );
};
