import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, ChevronLeft, Eye, Award, Zap, HeartHandshake } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

import slideKutu from "@/assets/slides/slide-kutu.jpg";
import slidePaket from "@/assets/slides/slide-paket.jpg";
import slideCanta from "@/assets/slides/slide-canta.jpg";

const slides = [
  { img: slideKutu, title: "Baskılı Ambalajda\nSınırsız Tasarım", subtitle: "Markanıza özel tasarım ambalaj çözümleri", cta: "Keşfet", to: "/urunler" },
  { img: slidePaket, title: "Toplu Siparişe\nÖzel İndirimler", subtitle: "1000+ adet siparişlerde %20'ye varan indirim", cta: "Kampanyaları Gör", to: "/kampanyalar" },
  { img: slideCanta, title: "Yeni Sezon\nKraft Çanta", subtitle: "Doğa dostu, şık ve dayanıklı çanta çeşitleri", cta: "Hemen İncele", to: "/kategori/baski-canta" },
];

const featuredProducts = products.slice(0, 8);

const whyUs = [
  { icon: Award, title: "Üstün Kalite", desc: "ISO sertifikalı üretim" },
  { icon: Zap, title: "Hızlı Üretim", desc: "7-10 iş günü teslimat" },
  { icon: HeartHandshake, title: "Uygun Fiyat", desc: "Toptan fiyat avantajı" },
  { icon: Eye, title: "Profesyonel Destek", desc: "Ücretsiz tasarım desteği" },
];

const DemoBidoluHome = () => {
  const { addItem } = useCart();
  const { demoLink } = useDemo();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <div className="relative overflow-hidden h-72 md:h-[420px]">
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-all duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-end">
              <div className="container mx-auto px-4 relative z-10 pb-10 md:pb-14">
                <div className="max-w-lg">
                  <h1 className="text-2xl md:text-4xl font-black leading-tight whitespace-pre-line mb-3 text-primary-foreground drop-shadow-lg">{slide.title}</h1>
                  <p className="text-sm text-primary-foreground/80 mb-5">{slide.subtitle}</p>
                  <Link to={demoLink(slide.to)} className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-bold text-sm hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">
                    {slide.cta} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 z-20"><ChevronLeft className="w-5 h-5 text-primary-foreground" /></button>
        <button onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 z-20"><ChevronRight className="w-5 h-5 text-primary-foreground" /></button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full transition-smooth ${i === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/40 w-2.5"}`} />)}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-foreground">Öne Çıkan Ürünler</h2>
          <Link to={demoLink("/urunler")} className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-border overflow-hidden group card-hover">
              <Link to={demoLink(`/urunler/${product.slug}`)}>
                <div className="relative overflow-hidden bg-muted aspect-square">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  {product.badge && <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">{product.badge}</span>}
                  {product.oldPrice && <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded">%{getDiscountPercent(product.price, product.oldPrice)}</span>}
                </div>
              </Link>
              <div className="p-4">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{product.categoryLabel}</span>
                <Link to={demoLink(`/urunler/${product.slug}`)}>
                  <h3 className="text-sm font-bold text-foreground mt-1 mb-2 line-clamp-2 hover:text-primary">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-border"}`} />)}
                  <span className="text-[10px] text-muted-foreground ml-1">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-primary">{formatPrice(product.price)}</span>
                    {product.oldPrice && <span className="text-xs line-through text-muted-foreground ml-2">{formatPrice(product.oldPrice)}</span>}
                  </div>
                  <button onClick={() => addItem(product)} className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-bold hover:bg-primary/90">Sepete Ekle</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neden Nipo */}
      <div className="bg-muted/30 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-black text-foreground text-center mb-8">Neden Nipo?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 text-center border border-border hover:shadow-lg transition-smooth">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="text-[10px] text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-muted/50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-black text-foreground mb-6">Kategoriler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((cat) => (
              <Link key={cat.id} to={demoLink(`/kategori/${cat.slug}`)} className="bg-white rounded-xl p-5 text-center group hover:shadow-lg transition-smooth border border-border">
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary">{cat.name}</h3>
                <p className="text-[10px] text-muted-foreground mt-1">{cat.productCount} ürün</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="gradient-hero py-14">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Özel Tasarım Ambalaj mı İstiyorsunuz?</h2>
          <p className="text-sm opacity-70 mb-6 max-w-xl mx-auto">Profesyonel ekibimiz sizinle iletişime geçsin.</p>
          <Link to={demoLink("/iletisim")} className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold hover:bg-secondary/90 inline-flex items-center gap-1">
            Teklif Alın <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DemoBidoluHome;
