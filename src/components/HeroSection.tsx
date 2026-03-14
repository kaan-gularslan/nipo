import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import slideKutu from "@/assets/slides/slide-kutu.jpg";
import slideCanta from "@/assets/slides/slide-canta.jpg";
import slideBardak from "@/assets/slides/slide-bardak.jpg";

import kutuImg from "@/assets/products/kutu-cesitleri.jpg";
import cantaImg from "@/assets/products/kagit-cantalar.jpg";
import gidaImg from "@/assets/products/gida-ambalaj.jpg";

const slides = [
  {
    img: slideKutu,
    title: "KUTU TASARIMLARI",
    desc: "Pizza, Lahmacun, Pide Kutuları ve markanıza özel tasarımlar.",
    cta: "Kutuları Keşfet",
  },
  {
    img: slideCanta,
    title: "BASKILI ÇANTALAR",
    desc: "Kraft Çanta, Karton Çanta ve Özel Tasarım Çanta Çözümleri.",
    cta: "Çantaları İncele",
  },
  {
    img: slideBardak,
    title: "BARDAK & KASE",
    desc: "Baskılı Karton Bardak, Gıda Kasesi ve Paket Servis Ürünleri.",
    cta: "Ürünleri Gör",
  },
];

// Promo icons strip - like Hepsiburada's circular icons row
const promoIcons = [
  { icon: "📦", label: "Baskılı Kutular", sub: "100+ Ürün" },
  { icon: "👜", label: "Kağıt Çantalar", sub: "Kraft & Karton" },
  { icon: "🥤", label: "Bardak Grubu", sub: "Baskılı" },
  { icon: "🍽️", label: "Amerikan Servis", sub: "Özel Tasarım" },
  { icon: "🏷️", label: "Etiket & Sticker", sub: "Rulo & Yapışkan" },
  { icon: "🧻", label: "Peçete Grubu", sub: "Baskılı" },
  { icon: "🛍️", label: "Poşet Grubu", sub: "Baskılı" },
  { icon: "📋", label: "Streç & Bant", sub: "Ambalaj" },
  { icon: "🔥", label: "Kampanyalar", sub: "Fırsatları Kaçırma" },
  { icon: "⭐", label: "Çok Satanlar", sub: "En Popüler" },
  { icon: "🆕", label: "Yeni Ürünler", sub: "Son Eklenenler" },
  { icon: "💰", label: "İndirimli Ürünler", sub: "%25'e Varan" },
];

// Recommended products for right panel
const recommendedProducts = [
  { id: 1, name: "Pizza Kutusu 26cm Baskılı", price: "₺3.20", oldPrice: "₺4.50", img: kutuImg, rating: 4.8 },
  { id: 7, name: "Karton Bardak 8oz Baskılı", price: "₺0.65", oldPrice: "₺0.90", img: gidaImg, rating: 4.8 },
  { id: 5, name: "Kraft Çanta 26x32 Baskılı", price: "₺5.50", oldPrice: "₺7.00", img: cantaImg, rating: 4.7 },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const promoRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [isPaused, next]);

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        {/* Promo icons strip - Hepsiburada style */}
        <div className="relative py-4">
          <div
            ref={promoRef}
            className="flex items-start gap-2 overflow-x-auto pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {promoIcons.map((p, i) => (
              <Link
                key={i}
                to="/urunler"
                className="group flex flex-col items-center gap-1.5 shrink-0 w-[85px] md:w-[95px] py-2 rounded-xl hover:bg-muted/50 transition-smooth"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-muted/60 border-2 border-transparent group-hover:border-primary/20 flex items-center justify-center text-2xl md:text-3xl transition-smooth group-hover:scale-105 group-hover:shadow-nipo-card">
                  {p.icon}
                </div>
                <div className="text-center">
                  <div className="text-[11px] font-semibold text-foreground leading-tight">{p.label}</div>
                  <div className="text-[9px] text-muted-foreground leading-tight mt-0.5">{p.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Hero: Split layout - Slider left, Recommendations right */}
        <div className="flex gap-4 pb-5">
          {/* Main Slider */}
          <div
            className="flex-1 relative rounded-xl overflow-hidden min-h-[250px] md:min-h-[380px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img src={slides[current].img} alt={slides[current].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

                <div className="absolute inset-0 flex items-center px-7 md:px-12">
                  <div className="max-w-md">
                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-4xl font-black text-primary-foreground mb-3 leading-tight drop-shadow-md"
                    >
                      {slides[current].title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-primary-foreground/80 mb-5 text-sm max-w-xs"
                    >
                      {slides[current].desc}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button variant="hero" className="rounded-lg gap-1.5" asChild>
                        <Link to="/urunler">
                          {slides[current].cta} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide controls */}
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-smooth z-10 shadow-sm">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-smooth z-10 shadow-sm">
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 bg-primary/60 backdrop-blur-sm text-primary-foreground text-[11px] font-medium px-2.5 py-1 rounded-full z-10">
              {current + 1} / {slides.length}
            </div>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-400 ${
                    i === current ? "w-6 h-1.5 bg-secondary" : "w-1.5 h-1.5 bg-primary-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right panel - Recommendations (desktop) */}
          <div className="hidden lg:flex flex-col w-[320px] shrink-0 bg-card rounded-xl border border-border/60 overflow-hidden shadow-nipo-card">
            <div className="px-4 py-3 border-b border-border/40 flex items-center justify-between">
              <h3 className="text-sm font-bold text-foreground">Sizin İçin Seçtiklerimiz</h3>
              <Link to="/urunler" className="text-[11px] text-primary font-semibold hover:underline">Tümü</Link>
            </div>
            <div className="flex-1 divide-y divide-border/30">
              {recommendedProducts.map((p) => (
                <Link
                  key={p.id}
                  to="/urunler"
                  className="flex gap-3 p-3 hover:bg-muted/30 transition-smooth group"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-muted/30">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-smooth">{p.name}</h4>
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(p.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
                      ))}
                      <span className="text-[9px] text-muted-foreground ml-1">({p.rating})</span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-black text-primary">{p.price}</span>
                      {p.oldPrice && <span className="text-[11px] text-muted-foreground line-through">{p.oldPrice}</span>}
                    </div>
                  </div>
                  <button className="self-center p-1.5 rounded-md hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-smooth opacity-0 group-hover:opacity-100">
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </button>
                </Link>
              ))}
            </div>
            <div className="p-3 border-t border-border/40">
              <Button size="sm" variant="outline" className="w-full text-xs rounded-lg" asChild>
                <Link to="/urunler">Tüm Ürünleri Gör</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
