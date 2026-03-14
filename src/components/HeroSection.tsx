import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import slideKutu from "@/assets/slides/slide-kutu.jpg";
import slideCanta from "@/assets/slides/slide-canta.jpg";
import slideBardak from "@/assets/slides/slide-bardak.jpg";

const slides = [
  {
    img: slideKutu,
    subtitle: "Özel Tasarım",
    title: "KUTU\nTASARIMLARI",
    desc: "Pizza, Lahmacun, Pide Kutuları ve markanıza özel tasarımlar.",
    cta: "Kutuları Keşfet",
    accent: "bg-secondary",
  },
  {
    img: slideCanta,
    subtitle: "Kraft & Karton",
    title: "BASKILI\nÇANTALAR",
    desc: "Kraft Çanta, Karton Çanta ve Özel Tasarım Çanta Çözümleri.",
    cta: "Çantaları İncele",
    accent: "bg-accent",
  },
  {
    img: slideBardak,
    subtitle: "Paket Servis",
    title: "BARDAK\n& KASE",
    desc: "Baskılı Karton Bardak, Gıda Kasesi ve Paket Servis Ürünleri.",
    cta: "Ürünleri Gör",
    accent: "bg-primary",
  },
];

const categories = [
  { name: "Baskılı Kağıt Grubu", icon: "📄" },
  { name: "Amerikan Servis", icon: "🍽️" },
  { name: "Kasap Kağıtları", icon: "🥩" },
  { name: "Baskılı Çanta Grubu", icon: "👜" },
  { name: "Baskılı Oluklu Kutu Grubu", icon: "📦" },
  { name: "Baskılı Islak Mendil Grubu", icon: "🧻" },
  { name: "Baskılı Poşet Grubu", icon: "🛍️" },
  { name: "Baskılı Toz Dolum Grubu", icon: "☕" },
  { name: "Baskılı Bardak Grubu", icon: "🥤" },
  { name: "Baskılı Gıda Kabı Grubu", icon: "🥡" },
  { name: "Baskılı Peçete Grubu", icon: "🧴" },
  { name: "Baskılı Etiket Grubu", icon: "🏷️" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex gap-5">
          {/* Category Sidebar - desktop only */}
          <div className="hidden lg:block w-[270px] shrink-0">
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-nipo-card">
              <div className="max-h-[524px] overflow-y-auto scrollbar-thin">
                {categories.map((cat, i) => (
                  <Link
                    key={cat.name}
                    to="/urunler"
                    className={`group flex items-center gap-3 px-4 py-[11px] text-[13px] text-foreground hover:bg-nipo-blue-light hover:text-primary transition-smooth ${
                      i < categories.length - 1 ? "border-b border-border/40" : ""
                    }`}
                  >
                    <span className="text-base w-6 text-center shrink-0">{cat.icon}</span>
                    <span className="flex-1 font-medium">{cat.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-smooth" />
                  </Link>
                ))}
              </div>
              <Link
                to="/urunler"
                className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-primary bg-nipo-blue-light/50 hover:bg-nipo-blue-light transition-smooth border-t border-border/40"
              >
                TÜM KATEGORİLERİ GÖR
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Slider */}
          <div
            className="flex-1 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[524px] shadow-nipo"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center px-8 md:px-14">
                  <div className="max-w-lg">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-semibold mb-4 border border-primary-foreground/10">
                        <span className={`w-1.5 h-1.5 rounded-full ${slides[current].accent}`} />
                        {slides[current].subtitle}
                      </span>
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.5 }}
                      className="text-3xl md:text-[3.2rem] font-black text-primary-foreground mb-4 leading-[1.1] whitespace-pre-line drop-shadow-md"
                    >
                      {slides[current].title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      className="text-primary-foreground/80 mb-8 text-sm md:text-base max-w-sm leading-relaxed"
                    >
                      {slides[current].desc}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <Button size="lg" variant="hero" className="rounded-full px-8 shadow-lg" asChild>
                        <Link to="/urunler">
                          {slides[current].cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="hero-outline" className="rounded-full px-6" asChild>
                        <Link to="/iletisim">Teklif Al</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary-foreground/10 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-smooth z-10 border border-primary-foreground/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary-foreground/10 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-smooth z-10 border border-primary-foreground/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Progress dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-primary/30 backdrop-blur-sm rounded-full px-3 py-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 h-2 bg-secondary"
                      : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
