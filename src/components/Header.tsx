import { useState } from "react";
import { Search, User, ShoppingCart, Heart, Phone, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Anasayfa", href: "#" },
  { label: "Kurumsal", href: "#about" },
  { label: "Ürünler", href: "#products", hasSub: true },
  { label: "S.S.S", href: "#faq" },
  { label: "Kampanyalar", href: "#campaigns" },
  { label: "Duyurular", href: "#" },
  { label: "İletişim", href: "#contact" },
];

const categories = [
  "Baskılı Kağıt Grubu",
  "Amerikan Servis",
  "Kasap Kağıtları",
  "Baskılı Çanta Grubu",
  "Baskılı Oluklu Kutu Grubu",
  "Baskılı Islak Mendil Grubu",
  "Baskılı Poşet Grubu",
  "Baskılı Toz Dolum Grubu",
  "Baskılı Bardak Grubu",
  "Baskılı Gıda Kabı Grubu",
  "Baskılı Peçete Grubu",
  "Baskılı Etiket Grubu",
  "Karton Kutu Grubu",
  "Streç Film & Bant",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-xs md:text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              Desteğe mi İhtiyacınız Var?
            </span>
            <a href="#contact" className="bg-secondary text-secondary-foreground px-3 py-0.5 rounded text-xs font-bold hover:bg-secondary/90 transition-colors">
              İletişime Geç!
            </a>
          </div>
          <span className="hidden md:block font-medium">Nipo Ambalaj İle Markana Renk Kat!</span>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <a href="#" className="hover:underline">Teklif İste</a>
            <a href="#" className="hover:underline">Hesabım</a>
            <a href="#" className="hover:underline">Favorilerim</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 flex items-center gap-4 md:gap-8 h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center gap-1 shrink-0">
            <span className="text-2xl md:text-3xl font-montserrat font-black tracking-tight text-primary">
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
            <span className="text-[10px] md:text-xs font-montserrat font-semibold tracking-[0.2em] text-primary uppercase ml-3">
              AMBALAJ
            </span>
          </a>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <Input
              placeholder="Ürün arayın..."
              className="pr-12 h-11 rounded-lg border-border bg-background text-sm"
            />
            <button className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-5 ml-auto">
            <a href="#" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground">Hesabım</div>
                <div className="text-xs font-semibold text-foreground">Giriş Yap</div>
              </div>
            </a>
            <a href="#" className="hidden md:flex items-center gap-1 text-muted-foreground hover:text-secondary transition-colors">
              <Heart className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center gap-2 text-sm">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold flex items-center justify-center">0</span>
              </div>
              <div className="hidden md:block text-left">
                <div className="text-[10px] text-muted-foreground">Sepetim</div>
                <div className="text-xs font-semibold text-foreground">0 Ürün</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-card border-b border-border hidden md:block">
        <div className="container mx-auto px-4 flex items-center h-12 gap-0">
          {/* Categories dropdown */}
          <div className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 h-12 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Menu className="w-4 h-4" />
              Tüm Kategorileri Keşfet
              <ChevronDown className={`w-4 h-4 transition-transform ${catOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {catOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 w-72 bg-card border border-border rounded-b-lg shadow-nipo-lg z-50"
                >
                  {categories.map((cat) => (
                    <a
                      key={cat}
                      href="#products"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors border-b border-border/50 last:border-0"
                      onClick={() => setCatOpen(false)}
                    >
                      <span className="w-8 h-8 rounded-lg bg-nipo-blue-light flex items-center justify-center text-primary">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                      </span>
                      {cat}
                    </a>
                  ))}
                  <a
                    href="#products"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-primary hover:bg-muted transition-colors"
                    onClick={() => setCatOpen(false)}
                  >
                    TÜMÜNÜ GÖR
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Nav items */}
          <nav className="flex items-center h-full ml-6 gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 h-full text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
                {item.hasSub && <ChevronDown className="w-3 h-3" />}
              </a>
            ))}
          </nav>

          {/* Phone */}
          <div className="ml-auto flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-primary" />
            <div>
              <div className="text-[10px] text-muted-foreground">7/24 Müşteri Desteği</div>
              <div className="text-xs font-bold text-foreground">0212 883 55 08</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="p-4">
              <div className="relative mb-4">
                <Input placeholder="Ürün arayın..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <div className="space-y-1 mb-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-1">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Kategoriler</div>
                {categories.slice(0, 8).map((cat) => (
                  <a key={cat} href="#products" className="block py-1.5 text-sm text-foreground" onClick={() => setMobileOpen(false)}>
                    {cat}
                  </a>
                ))}
                <a href="#products" className="block py-1.5 text-sm font-bold text-primary" onClick={() => setMobileOpen(false)}>
                  Tümünü Gör →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
