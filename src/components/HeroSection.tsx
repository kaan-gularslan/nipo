import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import slideKutu from "@/assets/slides/slide-kutu.jpg";
import slideCanta from "@/assets/slides/slide-canta.jpg";
import slideBardak from "@/assets/slides/slide-bardak.jpg";

const slides = [
  {
    img: slideKutu,
    subtitle: "Nipo Ambalaj",
    title: "KUTU TASARIMLARI",
    desc: "Pizza ve Lahmacun Kutuları, Pide Kutuları ve Size Özel Ürünler...",
  },
  {
    img: slideCanta,
    subtitle: "Nipo Ambalaj",
    title: "BASKILI ÇANTALAR",
    desc: "Kraft Çanta, Karton Çanta ve Özel Tasarım Çanta Çözümleri...",
  },
  {
    img: slideBardak,
    subtitle: "Nipo Ambalaj",
    title: "BARDAK & KASE",
    desc: "Baskılı Karton Bardak, Gıda Kasesi ve Paket Servis Ürünleri...",
  },
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
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-4">
          {/* Category Sidebar - desktop only */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {categories.map((cat, i) => (
                <Link
                  key={cat}
                  to="/urunler"
                  className={`flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors ${
                    i < categories.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  <span className="w-7 h-7 rounded-md bg-nipo-blue-light flex items-center justify-center text-primary shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </span>
                  <span className="flex-1">{cat}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
              <Link
                to="/urunler"
                className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-primary hover:bg-muted transition-colors"
              >
                <span className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-primary shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </span>
                TÜMÜNÜ GÖR
              </Link>
            </div>
          </div>

          {/* Slider */}
          <div className="flex-1 relative rounded-xl overflow-hidden min-h-[350px] md:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/60 to-transparent" />

                <div className="absolute inset-0 flex items-center px-8 md:px-14">
                  <div className="max-w-md">
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-sm font-medium text-muted-foreground mb-2"
                    >
                      {slides[current].subtitle}
                    </motion.p>
                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-5xl font-black text-foreground mb-3 leading-tight"
                    >
                      {slides[current].title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-muted-foreground mb-6"
                    >
                      {slides[current].desc}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button size="lg" className="rounded-full font-semibold" asChild>
                        <Link to="/urunler">
                          Alışverişe Başla
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
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
