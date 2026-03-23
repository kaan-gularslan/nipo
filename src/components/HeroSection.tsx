import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

import slideKutu from "@/assets/slides/slide-kutu.jpg";
import slideCanta from "@/assets/slides/slide-canta.jpg";
import slideBardak from "@/assets/slides/slide-bardak.jpg";

const slides = [
  { img: slideKutu, subtitle: "Özel Tasarım", title: "KUTU\nTASARIMLARI", desc: "Pizza, Lahmacun, Pide Kutuları ve markanıza özel tasarımlar.", cta: "Kutuları Keşfet", ctaLink: "/kategori/oluklu-kutu", accent: "bg-secondary" },
  { img: slideCanta, subtitle: "Kraft & Karton", title: "BASKILI\nÇANTALAR", desc: "Kraft Çanta, Karton Çanta ve Özel Tasarım Çanta Çözümleri.", cta: "Çantaları İncele", ctaLink: "/kategori/baski-canta", accent: "bg-accent" },
  { img: slideBardak, subtitle: "Paket Servis", title: "BARDAK\n& KASE", desc: "Baskılı Karton Bardak, Gıda Kasesi ve Paket Servis Ürünleri.", cta: "Ürünleri Gör", ctaLink: "/kategori/bardak", accent: "bg-primary" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setSlideKey((k) => k + 1);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setSlideKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex gap-5">
          {/* Category Sidebar */}
          <aside className="hidden lg:block w-[270px] shrink-0">
            <nav className="bg-card rounded-xl border border-border overflow-hidden shadow-nipo-card">
              <ul className="max-h-[524px] overflow-y-auto scrollbar-thin">
                {categories.map((cat, i) => (
                  <li key={cat.id}>
                    <Link
                      to={`/kategori/${cat.slug}`}
                      className={`group flex items-center gap-3 px-4 py-[11px] text-[13px] text-foreground hover:bg-nipo-blue-light hover:text-primary transition-smooth ${
                        i < categories.length - 1 ? "border-b border-border/40" : ""
                      }`}
                    >
                      <span className="text-base w-6 text-center shrink-0">{cat.icon}</span>
                      <span className="flex-1 font-medium">{cat.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-smooth" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/urunler"
                className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-primary bg-nipo-blue-light/50 hover:bg-nipo-blue-light transition-smooth border-t border-border/40"
              >
                TÜM KATEGORİLERİ GÖR
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </nav>
          </aside>

          {/* Slider */}
          <div
            className="flex-1 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[524px] shadow-nipo"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div key={slideKey} className="absolute inset-0 animate-hero-slide">
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center px-8 md:px-14">
                <div className="max-w-lg">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-semibold mb-4 border border-primary-foreground/10 animate-fade-up">
                    <span className={`w-1.5 h-1.5 rounded-full ${slide.accent}`} />
                    {slide.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-[3.2rem] font-black text-primary-foreground mb-3 md:mb-4 leading-[1.1] whitespace-pre-line drop-shadow-md animate-fade-up delay-2">
                    {slide.title}
                  </h2>
                  <p className="text-primary-foreground/80 mb-8 text-sm md:text-base max-w-sm leading-relaxed animate-fade-up delay-4">
                    {slide.desc}
                  </p>
                  <div className="flex items-center gap-3 animate-fade-up delay-6">
                    <Button size="lg" variant="hero" className="rounded-full px-8 shadow-lg" asChild>
                      <Link to={slide.ctaLink}>
                        {slide.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="hero-outline" className="rounded-full px-6" asChild>
                      <Link to="/iletisim">Teklif Al</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={prev} aria-label="Önceki slayt" className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-11 md:h-11 rounded-full bg-primary-foreground/10 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-smooth z-10 border border-primary-foreground/10">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button onClick={next} aria-label="Sonraki slayt" className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-11 md:h-11 rounded-full bg-primary-foreground/10 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-smooth z-10 border border-primary-foreground/10">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-primary/30 backdrop-blur-sm rounded-full px-3 py-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setSlideKey((k) => k + 1); }}
                  aria-label={`Slayt ${i + 1}`}
                  className={`rounded-full transition-all duration-500 relative overflow-hidden ${
                    i === current ? "w-8 h-2 bg-primary-foreground/30" : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                  }`}
                >
                  {i === current && !isPaused && <span key={slideKey} className="absolute inset-0 rounded-full bg-secondary animate-slide-progress" />}
                  {i === current && isPaused && <span className="absolute inset-0 rounded-full bg-secondary" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
