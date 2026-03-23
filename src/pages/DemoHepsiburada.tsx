import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Heart, ShoppingCart, Clock, ChevronLeft } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

import slideAmbalaj from "@/assets/slides/slide-ambalaj.jpg";
import slideKraft from "@/assets/slides/slide-kraft.jpg";
import slideKafe from "@/assets/slides/slide-kafe.jpg";

const featuredProducts = products.filter((p) => p.badge);
const popularProducts = products.slice(0, 8);
const discountedProducts = products.filter((p) => p.oldPrice).slice(0, 6);
const bestSellers = products.filter((p) => p.badge === "Çok Satan");

const heroSlides = [
  { img: slideAmbalaj, title: "Baskılı Ambalajda\nToplu Siparişe Özel İndirim", subtitle: "1000+ adet siparişlerde %20'ye varan indirim", cta: "Hemen İncele", badge: "Kampanya", to: "/kampanyalar" },
  { img: slideKraft, title: "Kraft Ambalaj\nKoleksiyonu Yenilendi", subtitle: "Doğa dostu ve şık ambalaj çözümleri", cta: "Keşfet", badge: "Yeni", to: "/urunler" },
  { img: slideKafe, title: "Karton Bardak\nSetlerinde Fırsat", subtitle: "Kafe ve restoranlar için özel fiyatlar", cta: "Fırsatları Gör", badge: "Fırsat", to: "/kampanyalar" },
];

const DemoHepsiburadaHome = () => {
  const { addItem } = useCart();
  const { demoLink } = useDemo();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ h: 5, m: 42, s: 18 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-muted/30">
      {/* Hero Slider + Sidebar */}
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-xl overflow-hidden relative h-64 md:h-80">
            {heroSlides.map((slide, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="relative z-10 p-6 md:p-8 text-primary-foreground max-w-md">
                    <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">{slide.badge}</span>
                    <h2 className="text-xl md:text-2xl font-black mb-2 whitespace-pre-line leading-tight drop-shadow-md">{slide.title}</h2>
                    <p className="text-xs md:text-sm opacity-90 mb-4">{slide.subtitle}</p>
                    <Link to={demoLink(slide.to)} className="bg-secondary text-secondary-foreground px-5 py-2 rounded-lg text-sm font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">
                      {slide.cta} <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm"><ChevronLeft className="w-4 h-4" /></button>
            <button onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm"><ChevronRight className="w-4 h-4" /></button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroSlides.map((_, i) => <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-smooth ${i === currentSlide ? "bg-white scale-125" : "bg-white/40"}`} />)}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-5 border border-border flex-1 hover:shadow-lg transition-smooth">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Yeni Ürün</span>
              <h3 className="font-bold text-sm mt-1 text-foreground">Kraft Çanta Koleksiyonu</h3>
              <p className="text-xs text-muted-foreground mt-1">Doğa dostu ambalaj çözümleri</p>
              <Link to={demoLink("/kategori/baski-canta")} className="text-xs font-bold text-primary mt-3 inline-flex items-center gap-0.5 hover:gap-1.5 transition-smooth">Keşfet <ChevronRight className="w-3 h-3" /></Link>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-5 border border-border flex-1 hover:shadow-lg transition-smooth">
              <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Fırsat</span>
              <h3 className="font-bold text-sm mt-1 text-foreground">Karton Bardak Seti</h3>
              <p className="text-xs text-muted-foreground mt-1">Kafe ve restoranlar için ideal</p>
              <Link to={demoLink("/kategori/bardak")} className="text-xs font-bold text-primary mt-3 inline-flex items-center gap-0.5 hover:gap-1.5 transition-smooth">İncele <ChevronRight className="w-3 h-3" /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Süper Fırsatlar */}
      <div className="bg-gradient-to-r from-secondary/10 via-white to-secondary/10 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-base md:text-lg font-black text-foreground">⚡ Süper Fırsatlar</h2>
              <div className="flex items-center gap-1.5 text-secondary">
                <Clock className="w-4 h-4" />
                <div className="flex gap-1">
                  {[countdown.h, countdown.m, countdown.s].map((v, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground text-[10px] md:text-xs font-black px-1.5 md:px-2 py-0.5 md:py-1 rounded">{String(v).padStart(2, "0")}</span>
                  ))}
                </div>
              </div>
            </div>
            <Link to={demoLink("/kampanyalar")} className="text-xs font-bold text-secondary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">
            {discountedProducts.map((product) => (
              <div key={product.id} className="min-w-[200px] max-w-[200px] bg-white rounded-xl border border-secondary/20 p-3 group card-hover shrink-0 relative">
                <span className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-bl-xl rounded-tr-xl">%{getDiscountPercent(product.price, product.oldPrice!)}</span>
                <Link to={demoLink(`/urunler/${product.slug}`)}>
                  <div className="overflow-hidden rounded-lg bg-muted aspect-square mb-3"><img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" /></div>
                </Link>
                <h3 className="text-xs font-semibold text-foreground leading-tight mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-1"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span className="text-[10px] text-muted-foreground">{product.rating}</span></div>
                <span className="text-xs line-through text-muted-foreground">{formatPrice(product.oldPrice!)}</span>
                <span className="text-sm font-black text-secondary ml-1">{formatPrice(product.price)}</span>
                <button onClick={() => addItem(product)} className="w-full mt-2 bg-secondary text-secondary-foreground text-xs font-bold py-2 rounded-lg hover:bg-secondary/90 transition-smooth">Sepete Ekle</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-foreground">Öne Çıkan Ürünler</h2>
            <Link to={demoLink("/urunler")} className="text-xs font-bold text-primary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={demoLink(`/urunler/${product.slug}`)} className="min-w-[200px] max-w-[200px] bg-white rounded-xl border border-border p-3 group card-hover shrink-0">
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-3">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  {product.badge && <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">{product.badge}</span>}
                </div>
                <h3 className="text-xs font-semibold text-foreground leading-tight mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-1"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span className="text-[10px] text-muted-foreground">{product.rating}</span></div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                  {product.oldPrice && <span className="text-[11px] line-through text-muted-foreground">{formatPrice(product.oldPrice)}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-black text-foreground">Popüler Ürünler</h2>
          <Link to={demoLink("/urunler")} className="text-xs font-bold text-primary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-border overflow-hidden group card-hover">
              <Link to={demoLink(`/urunler/${product.slug}`)}>
                <div className="relative overflow-hidden bg-muted aspect-[4/3]">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  {product.badge && <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">{product.badge}</span>}
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth"><Heart className="w-4 h-4 text-muted-foreground" /></button>
                </div>
              </Link>
              <div className="p-3">
                <span className="text-[10px] text-muted-foreground">{product.categoryLabel}</span>
                <h3 className="text-sm font-semibold text-foreground leading-tight mt-0.5 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span className="text-[10px] text-muted-foreground">{product.rating}</span></div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-black text-primary">{formatPrice(product.price)}</span>
                    {product.oldPrice && <span className="text-xs line-through text-muted-foreground ml-1.5">{formatPrice(product.oldPrice)}</span>}
                  </div>
                  <button onClick={() => addItem(product)} className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center hover:bg-primary/90"><ShoppingCart className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Sellers */}
      {bestSellers.length > 0 && (
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-black text-foreground mb-5">🏆 Çok Satanlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestSellers.map((product, i) => (
                <Link key={product.id} to={demoLink(`/urunler/${product.slug}`)} className="flex items-center gap-4 bg-muted/30 rounded-xl p-4 border border-border hover:shadow-lg transition-smooth group">
                  <span className="text-3xl font-black text-primary/20 shrink-0 w-8">#{i + 1}</span>
                  <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden shrink-0"><img src={product.img} alt={product.name} className="w-full h-full object-cover" /></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary">{product.name}</h3>
                    <span className="text-sm font-black text-primary mt-0.5 block">{formatPrice(product.price)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Toplu Sipariş Teklif Alın</h2>
            <p className="text-sm opacity-80 mb-6 max-w-lg mx-auto">1000+ adet siparişleriniz için özel fiyat teklifi alın.</p>
            <Link to={demoLink("/iletisim")} className="bg-secondary text-secondary-foreground px-8 py-3 rounded-xl text-sm font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-2">
              Teklif Al <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-black text-foreground mb-5">Kategoriler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.slice(0, 8).map((cat) => (
              <Link key={cat.id} to={demoLink(`/kategori/${cat.slug}`)} className="bg-muted/30 rounded-xl border border-border p-4 flex items-center gap-3 group hover:border-primary/30 hover:shadow-lg transition-smooth">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary">{cat.name}</h3>
                  <span className="text-[10px] text-muted-foreground">{cat.productCount} ürün</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoHepsiburadaHome;
