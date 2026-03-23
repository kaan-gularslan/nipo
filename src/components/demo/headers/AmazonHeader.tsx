import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Search, MapPin, ShoppingCart, Menu, X } from "lucide-react";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

const topNavLinks = [
  { name: "Çok Satanlar", path: "/urunler" },
  { name: "Kampanyalar", path: "/kampanyalar" },
  { name: "Yeni Ürünler", path: "/urunler" },
  { name: "Müşteri Hizmetleri", path: "/sss" },
];

export const AmazonHeader = () => {
  const { totalItems } = useCart();
  const { demoLink } = useDemo();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to={demoLink("/")} className="flex items-center gap-1.5 shrink-0 hover:ring-1 hover:ring-primary-foreground/30 rounded px-1 py-0.5">
              <Package className="w-6 h-6" />
              <span className="text-lg font-black">nipo</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-xs shrink-0 hover:ring-1 hover:ring-primary-foreground/30 rounded px-2 py-1 cursor-pointer">
              <MapPin className="w-4 h-4" />
              <div className="leading-tight">
                <span className="text-[10px] opacity-60 block">Gönderim:</span>
                <span className="font-bold text-[11px]">İstanbul</span>
              </div>
            </div>
            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="flex">
                <select className="h-10 rounded-l-lg bg-muted text-foreground text-xs px-2 border-0 focus:outline-none">
                  <option>Tümü</option>
                  {categories.slice(0, 6).map((c) => <option key={c.id}>{c.name}</option>)}
                </select>
                <input type="text" placeholder="Ara..." className="flex-1 h-10 text-sm text-foreground px-3 border-0 focus:outline-none" />
                <button className="h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center hover:bg-secondary/90">
                  <Search className="w-5 h-5 text-secondary-foreground" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Link to={demoLink("/kurumsal")} className="hidden md:block hover:ring-1 hover:ring-primary-foreground/30 rounded px-2 py-1 text-xs">
                <span className="text-[10px] opacity-60 block">Merhaba, Giriş Yapın</span>
                <span className="font-bold text-[11px]">Hesap</span>
              </Link>
              <Link to={demoLink("/sepet")} className="flex items-center gap-1 hover:ring-1 hover:ring-primary-foreground/30 rounded px-2 py-1 relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="font-bold text-sm hidden md:block">Sepet</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 left-3 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary/80 border-t border-primary-foreground/10 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1">
              <button className="text-xs font-bold px-3 py-1.5 flex items-center gap-1 hover:ring-1 hover:ring-primary-foreground/30 rounded">
                <Menu className="w-4 h-4" /> Tümü
              </button>
              {topNavLinks.map((link) => (
                <Link key={link.name} to={demoLink(link.path)} className="text-xs px-3 py-1.5 hover:ring-1 hover:ring-primary-foreground/30 rounded">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className="lg:hidden bg-white border-b shadow-lg fixed inset-x-0 z-40 max-h-[70vh] overflow-y-auto" style={{ top: "48px" }}>
          <div className="p-4">
            <div className="flex mb-3">
              <input type="text" placeholder="Ara..." className="flex-1 h-10 rounded-l-lg pl-4 text-sm border border-border" />
              <button className="h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-secondary-foreground" />
              </button>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3 px-3">
              <MapPin className="w-3.5 h-3.5" /> Gönderim: İstanbul
            </div>
            {topNavLinks.map((link) => (
              <Link key={link.name} to={demoLink(link.path)} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border my-2" />
            <Link to={demoLink("/kurumsal")} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>Hesap</Link>
            <Link to={demoLink("/sss")} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>Yardım</Link>
          </div>
        </div>
      )}
    </>
  );
};

export const AmazonFooter = () => {
  const { demoLink } = useDemo();
  return (
    <>
      <div className="bg-primary/90 text-primary-foreground text-center py-3 text-xs cursor-pointer hover:bg-primary/80 transition-smooth" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Başa Dön ↑
      </div>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-xs mb-3">Bizi Tanıyın</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                <li><Link to={demoLink("/kurumsal")} className="hover:opacity-100 hover:underline">Hakkımızda</Link></li>
                <li><Link to={demoLink("/iletisim")} className="hover:opacity-100 hover:underline">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Yardım</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                <li><Link to={demoLink("/sss")} className="hover:opacity-100 hover:underline">S.S.S</Link></li>
                <li><Link to={demoLink("/kargo-bilgileri")} className="hover:opacity-100 hover:underline">Kargo</Link></li>
                <li><Link to={demoLink("/iade-kosullari")} className="hover:opacity-100 hover:underline">İade</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Ürünler</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                {categories.slice(0, 4).map((c) => <li key={c.id}><Link to={demoLink(`/kategori/${c.slug}`)} className="hover:opacity-100 hover:underline">{c.name}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Yasal</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                <li><Link to={demoLink("/gizlilik")} className="hover:opacity-100 hover:underline">Gizlilik</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-[11px] opacity-30">
            © 2026 Nipo Ambalaj | <Link to="/" className="underline">Ana Siteye Dön</Link>
          </div>
        </div>
      </footer>
    </>
  );
};
