import { useState } from "react";
import { User, ShoppingCart, Heart, Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/categories";
import SearchBar from "@/components/SearchBar";

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Ürünler", href: "/urunler", hasSub: true },
  { label: "S.S.S", href: "/sss" },
  { label: "Kampanyalar", href: "/kampanyalar" },
  { label: "İletişim", href: "/iletisim" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 opacity-80">
              <Phone className="w-3 h-3" />
              Yardıma mı ihtiyacınız var?
            </span>
            <Link to="/iletisim" className="bg-secondary text-secondary-foreground px-3 py-0.5 rounded-full text-[10px] font-bold hover:bg-secondary/90 transition-smooth">
              İletişime Geç
            </Link>
          </div>
          <span className="hidden md:block font-medium text-primary-foreground/80">
            🎨 Markana Renk Kat! — Ücretsiz Tasarım Desteği
          </span>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-primary-foreground/70">
            <Link to="/iletisim" className="hover:text-primary-foreground transition-smooth">Teklif İste</Link>
            <a href="#" className="hover:text-primary-foreground transition-smooth">Hesabım</a>
            <a href="#" className="hover:text-primary-foreground transition-smooth">Favorilerim</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 flex items-center gap-4 md:gap-6 h-16 md:h-[72px]">
          <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menüyü aç/kapat">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className="flex items-center gap-1 shrink-0 group" aria-label="Nipo Ambalaj Anasayfa">
            <span className="text-2xl md:text-[28px] font-montserrat font-black tracking-tight text-primary group-hover:opacity-90 transition-smooth">
              nip
              <span className="relative">
                o
                <span className="absolute -top-1 -right-2 flex gap-[1px]">
                  <span className="block w-[3px] h-3 bg-secondary rounded-full rotate-[-15deg]" />
                  <span className="block w-[3px] h-3 bg-accent rounded-full" />
                  <span className="block w-[3px] h-3 bg-primary rounded-full rotate-[15deg]" />
                </span>
              </span>
            </span>
            <span className="text-[9px] md:text-[10px] font-montserrat font-semibold tracking-[0.2em] text-primary uppercase ml-3">
              AMBALAJ
            </span>
          </Link>

          {/* Search bar */}
          <SearchBar className="hidden md:flex flex-1 max-w-xl" />

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-4 ml-auto">
            <a href="#" className="hidden md:flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-smooth">
              <User className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground leading-tight">Hesabım</div>
                <div className="text-xs font-semibold text-foreground leading-tight">Giriş Yap</div>
              </div>
            </a>
            <a href="#" className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:bg-nipo-pink-light hover:text-secondary transition-smooth" aria-label="Favorilerim">
              <Heart className="w-5 h-5" />
            </a>
            <Link to="/sepet" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-muted transition-smooth">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <span className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-secondary text-secondary-foreground text-[9px] font-bold flex items-center justify-center ${totalItems > 0 ? "animate-badge-pulse" : ""}`}>
                  {totalItems}
                </span>
              </div>
              <div className="hidden md:block text-left">
                <div className="text-[10px] text-muted-foreground leading-tight">Sepetim</div>
                <div className="text-xs font-semibold text-foreground leading-tight">{totalItems} Ürün</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-card border-b border-border/60 hidden md:block" aria-label="Ana navigasyon">
        <div className="container mx-auto px-4 flex items-center h-11 gap-0">
          <div className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-2 gradient-hero text-primary-foreground px-5 h-11 text-[13px] font-semibold hover:opacity-95 transition-smooth"
              aria-expanded={catOpen}
              aria-haspopup="true"
            >
              <Menu className="w-4 h-4" />
              Tüm Kategoriler
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${catOpen ? "rotate-180" : ""}`} />
            </button>
            {catOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setCatOpen(false)} />
                <div className="absolute top-full left-0 w-72 bg-card border border-border rounded-b-xl shadow-nipo-lg z-50 animate-fade-in">
                  <ul>
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to={`/kategori/${cat.slug}`}
                          className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-foreground hover:bg-nipo-blue-light hover:text-primary transition-smooth border-b border-border/30 last:border-0"
                          onClick={() => setCatOpen(false)}
                        >
                          <span className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-base shrink-0">
                            {cat.icon}
                          </span>
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/urunler"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-primary bg-nipo-blue-light/50 hover:bg-nipo-blue-light transition-smooth rounded-b-xl"
                    onClick={() => setCatOpen(false)}
                  >
                    TÜMÜNÜ GÖR <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center h-full ml-4 gap-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative flex items-center gap-1 px-4 h-full text-[13px] font-medium transition-smooth underline-reveal ${
                  isActive(item.href) ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                {item.hasSub && <ChevronDown className="w-3 h-3" />}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2.5 text-sm">
            <div className="w-8 h-8 rounded-full bg-nipo-blue-light flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground leading-tight">7/24 Destek</div>
              <div className="text-xs font-bold text-foreground leading-tight">0212 883 55 08</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden bg-card border-b border-border shadow-nipo transition-all duration-300 ease-out ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-4">
          <SearchBar mobile className="mb-4" />
          <nav className="space-y-0.5 mb-4" aria-label="Mobil navigasyon">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center justify-between py-2.5 px-2 text-sm font-medium rounded-lg transition-smooth ${
                  isActive(item.href) ? "text-primary bg-nipo-blue-light font-bold" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground -rotate-90" />
              </Link>
            ))}
          </nav>
          <div className="border-t border-border pt-3 space-y-0.5">
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2">Kategoriler</div>
            {categories.slice(0, 8).map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="block py-2 px-2 text-sm text-foreground rounded-lg hover:bg-muted transition-smooth" onClick={() => setMobileOpen(false)}>
                {cat.icon} {cat.name}
              </Link>
            ))}
            <Link to="/urunler" className="flex items-center gap-1 py-2 px-2 text-sm font-bold text-primary" onClick={() => setMobileOpen(false)}>
              Tümünü Gör <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
