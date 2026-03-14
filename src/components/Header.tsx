import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Ana Sayfa", href: "#hero" },
    { label: "Ürünler", href: "#products" },
    { label: "Hakkımızda", href: "#about" },
    { label: "İletişim", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-montserrat font-black tracking-tight text-primary">
            nip
            <span className="relative">
              o
              <span className="absolute -top-1 -right-2 flex gap-[1px]">
                <span className="block w-[3px] h-3 bg-secondary rounded-full rotate-[-15deg]" />
                <span className="block w-[3px] h-3 bg-accent rounded-full rotate-[0deg]" />
                <span className="block w-[3px] h-3 bg-primary rounded-full rotate-[15deg]" />
              </span>
            </span>
          </span>
          <span className="text-xs font-montserrat font-semibold tracking-[0.25em] text-primary uppercase ml-3">
            AMBALAJ
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+902128835508" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>0212 883 55 08</span>
          </a>
          <Button size="sm">
            <ShoppingCart className="w-4 h-4" />
            Sepet
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="mt-2">
                <ShoppingCart className="w-4 h-4" />
                Sepet
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
