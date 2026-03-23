import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Search, ShoppingCart, Menu, X } from "lucide-react";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

export const N11Header = () => {
  const { totalItems } = useCart();
  const { demoLink } = useDemo();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to={demoLink("/")} className="flex items-center gap-1.5 shrink-0">
              <Package className="w-6 h-6" />
              <span className="text-lg font-black">nipo</span>
              <span className="text-[8px] font-bold tracking-wider opacity-60 uppercase">ONLINE</span>
            </Link>
            <div className="hidden lg:flex items-center gap-1 bg-primary-foreground/10 rounded-lg px-3 py-2 text-xs font-bold cursor-pointer hover:bg-primary-foreground/20 transition-smooth">
              <Menu className="w-4 h-4" /> Kategoriler
            </div>
            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <input type="text" placeholder="Ürün veya kategori ara..." className="w-full h-9 rounded-lg pl-4 pr-10 text-sm text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <button className="absolute right-0 top-0 h-9 w-10 bg-secondary rounded-r-lg flex items-center justify-center hover:bg-secondary/90">
                  <Search className="w-4 h-4 text-secondary-foreground" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Link to={demoLink("/kampanyalar")} className="hidden lg:block text-xs hover:opacity-80">Kampanyalar</Link>
              <Link to={demoLink("/sss")} className="hidden lg:block text-xs hover:opacity-80">Yardım</Link>
              <Link to={demoLink("/sepet")} className="flex items-center gap-1 hover:opacity-80 relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary/80 border-t border-primary-foreground/10 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 text-xs">
              {categories.slice(0, 8).map((cat) => (
                <Link key={cat.id} to={demoLink(`/kategori/${cat.slug}`)} className="px-3 py-1.5 hover:bg-primary-foreground/10 rounded transition-smooth whitespace-nowrap">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className="lg:hidden bg-white border-b shadow-lg fixed inset-x-0 z-40 max-h-[70vh] overflow-y-auto" style={{ top: "48px" }}>
          <div className="p-4">
            <div className="relative mb-3">
              <input type="text" placeholder="Ara..." className="w-full h-10 rounded-lg pl-4 pr-10 text-sm border border-border" />
              <Search className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
            </div>
            <Link to={demoLink("/kampanyalar")} className="block py-2 px-3 text-sm font-semibold text-secondary hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>🔥 Kampanyalar</Link>
            <Link to={demoLink("/sss")} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>Yardım</Link>
            <div className="border-t border-border my-2" />
            {categories.slice(0, 8).map((cat) => (
              <Link key={cat.id} to={demoLink(`/kategori/${cat.slug}`)} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export const N11Footer = () => {
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
            <p className="text-xs opacity-50 leading-relaxed">Markana Renk Kat! Kaliteli ambalaj çözümleri.</p>
          </div>
          <div>
            <h4 className="font-bold text-xs mb-3">Ürünler</h4>
            <ul className="space-y-1.5 text-xs opacity-60">
              {categories.slice(0, 5).map((c) => <li key={c.id}><Link to={demoLink(`/kategori/${c.slug}`)} className="hover:opacity-100">{c.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs mb-3">Kurumsal</h4>
            <ul className="space-y-1.5 text-xs opacity-60">
              <li><Link to={demoLink("/kurumsal")} className="hover:opacity-100">Hakkımızda</Link></li>
              <li><Link to={demoLink("/iletisim")} className="hover:opacity-100">İletişim</Link></li>
              <li><Link to={demoLink("/sss")} className="hover:opacity-100">S.S.S</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs mb-3">Yardım</h4>
            <ul className="space-y-1.5 text-xs opacity-60">
              <li><Link to={demoLink("/kargo-bilgileri")} className="hover:opacity-100">Kargo</Link></li>
              <li><Link to={demoLink("/iade-kosullari")} className="hover:opacity-100">İade</Link></li>
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
