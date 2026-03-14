import { useState, useRef } from "react";
import { Search, User, ShoppingCart, Heart, Phone, ChevronDown, ChevronLeft, ChevronRight, Menu, X, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Ürünler", href: "/urunler" },
  { label: "S.S.S", href: "/sss" },
  { label: "Kampanyalar", href: "/kampanyalar" },
  { label: "İletişim", href: "/iletisim" },
];

const categoryTabs = [
  { label: "Baskılı Kutular", href: "/urunler" },
  { label: "Kağıt Çantalar", href: "/urunler" },
  { label: "Bardak & Kase", href: "/urunler" },
  { label: "Peçete & Servis", href: "/urunler" },
  { label: "Etiket & Sticker", href: "/urunler" },
  { label: "Poşet Grubu", href: "/urunler" },
  { label: "Streç & Bant", href: "/urunler" },
  { label: "Koruyucu Ambalaj", href: "/urunler" },
  { label: "Oluklu Kutu", href: "/urunler" },
  { label: "Islak Mendil", href: "/urunler" },
  { label: "Kasap Kağıtları", href: "/urunler" },
  { label: "Toz Dolum", href: "/urunler" },
];

const mobileCategories = [
  "Baskılı Kağıt Grubu", "Amerikan Servis", "Kasap Kağıtları",
  "Baskılı Çanta Grubu", "Baskılı Oluklu Kutu Grubu", "Baskılı Islak Mendil Grubu",
  "Baskılı Poşet Grubu", "Baskılı Bardak Grubu",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (dir: "left" | "right") => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar - compact links */}
      <div className="bg-primary text-primary-foreground text-[11px] hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            {navItems.slice(1).map((item) => (
              <Link key={item.label} to={item.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/70">
            <span className="text-primary-foreground/90 font-medium">🎨 Markana Renk Kat!</span>
            <Link to="/iletisim" className="hover:text-primary-foreground transition-smooth">Teklif İste</Link>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              0212 883 55 08
            </span>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 flex items-center gap-4 md:gap-6 h-[60px] md:h-[68px]">
          {/* Mobile menu */}
          <button className="md:hidden text-primary p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 shrink-0 group">
            <span className="text-[22px] md:text-[26px] font-montserrat font-black tracking-tight text-primary">
              nip
              <span className="relative">
                o
                <span className="absolute -top-1 -right-2 flex gap-[1px]">
                  <span className="block w-[2.5px] h-2.5 bg-secondary rounded-full rotate-[-15deg]" />
                  <span className="block w-[2.5px] h-2.5 bg-accent rounded-full" />
                  <span className="block w-[2.5px] h-2.5 bg-primary rounded-full rotate-[15deg]" />
                </span>
              </span>
            </span>
            <span className="text-[8px] md:text-[9px] font-montserrat font-semibold tracking-[0.18em] text-primary uppercase ml-2.5">
              AMBALAJ
            </span>
          </Link>

          {/* Search bar - Hepsiburada style */}
          <div className="hidden md:flex flex-1 max-w-[580px] relative">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
              <Input
                placeholder="Ürün, kategori veya marka arayın..."
                className="pl-10 pr-24 h-10 rounded-lg border-border bg-muted/40 text-sm focus:bg-card focus:border-primary/40 transition-smooth"
              />
              <button className="absolute right-1 top-1 bottom-1 px-5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-smooth">
                Ara
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-2 ml-auto">
            {/* Location - desktop */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-muted transition-smooth cursor-pointer">
              <MapPin className="w-4 h-4 text-primary" />
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground leading-tight">Teslimat Bölgesi</div>
                <div className="text-xs font-semibold text-foreground leading-tight">İstanbul</div>
              </div>
            </div>

            {/* Login */}
            <a href="#" className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-muted transition-smooth">
              <User className="w-5 h-5 text-muted-foreground" />
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground leading-tight">Giriş Yap</div>
                <div className="text-xs font-semibold text-foreground leading-tight">Hesabım</div>
              </div>
            </a>

            {/* Favorites */}
            <a href="#" className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:bg-nipo-pink-light hover:text-secondary transition-smooth">
              <Heart className="w-[18px] h-[18px]" />
            </a>

            {/* Cart */}
            <Link to="#" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth">
              <div className="relative">
                <ShoppingCart className="w-[18px] h-[18px]" />
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-secondary text-secondary-foreground text-[9px] font-bold flex items-center justify-center">0</span>
              </div>
              <span className="hidden md:inline text-xs font-semibold">Sepetim</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Category tabs bar - Hepsiburada style */}
      <div className="bg-card border-b border-border/50 hidden md:block relative">
        <div className="container mx-auto px-4 relative">
          {/* Left scroll button */}
          <button
            onClick={() => scrollTabs("left")}
            className="absolute left-0 top-0 bottom-0 z-10 w-8 flex items-center justify-center bg-gradient-to-r from-card via-card to-transparent"
          >
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Tabs */}
          <div
            ref={tabsRef}
            className="flex items-center gap-0 h-10 overflow-x-auto scrollbar-hide mx-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categoryTabs.map((tab, i) => (
              <Link
                key={tab.label}
                to={tab.href}
                className={`shrink-0 px-4 h-full flex items-center text-[13px] font-medium transition-smooth border-b-2 whitespace-nowrap ${
                  i === 0
                    ? "text-primary border-primary font-semibold"
                    : "text-foreground/70 border-transparent hover:text-primary hover:border-primary/30"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scrollTabs("right")}
            className="absolute right-0 top-0 bottom-0 z-10 w-8 flex items-center justify-center bg-gradient-to-l from-card via-card to-transparent"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-card border-b border-border shadow-nipo"
          >
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Ürün arayın..." className="pl-10 rounded-lg bg-muted/40" />
              </div>
              <div className="space-y-0.5 mb-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center justify-between py-2.5 px-3 text-sm font-medium text-foreground rounded-lg hover:bg-muted transition-smooth"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </Link>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-0.5">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2 px-3">Kategoriler</div>
                {mobileCategories.map((cat) => (
                  <Link key={cat} to="/urunler" className="block py-2 px-3 text-sm text-foreground rounded-lg hover:bg-muted transition-smooth" onClick={() => setMobileOpen(false)}>
                    {cat}
                  </Link>
                ))}
                <Link to="/urunler" className="flex items-center gap-1 py-2 px-3 text-sm font-bold text-primary" onClick={() => setMobileOpen(false)}>
                  Tümünü Gör <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
