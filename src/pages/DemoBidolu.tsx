import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Search, ShoppingCart, ChevronRight, Star, Truck, CreditCard, RotateCcw, ShieldCheck, ChevronLeft, Menu, X, Eye, Award, Zap, HeartHandshake, Phone, Mail } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import heroImg from "@/assets/hero-bidolu.jpg";

const navLinks = [
  { name: "Baskılı Kutular", to: "/kategori/oluklu-kutu" },
  { name: "Kağıt Çantalar", to: "/kategori/baski-canta" },
  { name: "Bardak & Kase", to: "/kategori/bardak" },
  { name: "Etiket & Sticker", to: "/kategori/etiket" },
  { name: "Yeni Ürünler", to: "/urunler" },
  { name: "Kampanyalar", to: "/kampanyalar" },
];

const trustBadges = [
  { icon: Truck, title: "Ücretsiz Kargo", desc: "500₺ üzeri siparişlerde" },
  { icon: CreditCard, title: "9 Taksit İmkanı", desc: "Tüm kredi kartlarına" },
  { icon: RotateCcw, title: "Kolay İade", desc: "14 gün içinde ücretsiz" },
  { icon: ShieldCheck, title: "Güvenli Alışveriş", desc: "256-bit SSL sertifikası" },
];

const slides = [
  { title: "Baskılı Ambalajda\nSınırsız Tasarım", subtitle: "Markanıza özel tasarım ambalaj çözümleri", cta: "Keşfet", to: "/urunler", gradient: "from-primary via-primary/80 to-primary/60" },
  { title: "Toplu Siparişe\nÖzel İndirimler", subtitle: "1000+ adet siparişlerde %20'ye varan indirim", cta: "Kampanyaları Gör", to: "/kampanyalar", gradient: "from-primary/90 via-primary to-primary/70" },
  { title: "Yeni Sezon\nKraft Çanta", subtitle: "Doğa dostu, şık ve dayanıklı çanta çeşitleri", cta: "Hemen İncele", to: "/kategori/baski-canta", gradient: "from-primary/80 via-primary/90 to-primary" },
];

const featuredProducts = products.slice(0, 8);

const DemoBidolu = () => {
  const { addItem, totalItems } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Mini Bar */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between text-[11px] py-1.5 text-muted-foreground">
          <span>Markana Renk Kat! | Nipo Online Ambalaj</span>
          <div className="flex gap-3">
            <Link to="/sss" className="hover:text-primary">Yardım</Link>
            <Link to="/iletisim" className="hover:text-primary">İletişim</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-6">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/demo/bidolu" className="flex items-center gap-2 shrink-0">
              <Package className="w-7 h-7 text-primary" />
              <div>
                <span className="text-xl font-black text-primary">nipo</span>
                <span className="text-[8px] font-semibold tracking-[0.15em] uppercase text-muted-foreground ml-1">ONLINE</span>
              </div>
            </Link>

            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ne aramıştınız?"
                  className="w-full h-10 rounded-lg pl-4 pr-12 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <button className="absolute right-0 top-0 h-10 w-12 bg-primary rounded-r-lg flex items-center justify-center hover:bg-primary/90 transition-smooth">
                  <Search className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <Link to="/kurumsal" className="hidden md:flex flex-col items-center text-[10px] text-muted-foreground hover:text-primary transition-smooth">
                <User className="w-5 h-5 mb-0.5" />
                Üye Ol / Giriş
              </Link>
              <Link to="/sepet" className="flex flex-col items-center text-[10px] text-muted-foreground hover:text-primary transition-smooth relative">
                <ShoppingCart className="w-5 h-5 mb-0.5" />
                Sepetim
                {totalItems > 0 && (
                  <span className="absolute -top-1 right-0 bg-secondary text-secondary-foreground w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="border-t border-border hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.to} className="text-sm font-medium px-4 py-2.5 hover:text-primary hover:bg-primary/5 rounded-t transition-smooth">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg fixed top-[60px] inset-x-0 z-40">
          <div className="p-4 space-y-2">
            <div className="relative mb-3">
              <input type="text" placeholder="Ürün ara..." className="w-full h-10 rounded-lg pl-4 pr-12 text-sm border border-border" />
              <Search className="absolute right-4 top-3 w-4 h-4 text-muted-foreground" />
            </div>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.to} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hero Slider */}
      <div className="relative overflow-hidden h-72 md:h-[420px]">
        <img src={heroImg} alt="Nipo Premium Ambalaj" className="absolute inset-0 w-full h-full object-cover" width={1920} height={900} />
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 flex items-end transition-all duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="container mx-auto px-4 relative z-10 pb-10 md:pb-14">
              <div className="max-w-lg">
                <h1 className="text-2xl md:text-4xl font-black leading-tight whitespace-pre-line mb-3 text-white drop-shadow-lg">{slide.title}</h1>
                <p className="text-sm text-white/80 mb-5">{slide.subtitle}</p>
                <Link to={slide.to} className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-bold text-sm hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">
                  {slide.cta} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-smooth z-20">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-smooth z-20">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full transition-smooth ${i === currentSlide ? "bg-white w-8" : "bg-white/40 w-2.5"}`} />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                  <badge.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{badge.title}</h4>
                  <p className="text-[10px] text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-foreground">Öne Çıkan Ürünler</h2>
          <Link to="/urunler" className="text-sm font-bold text-primary hover:text-secondary transition-smooth flex items-center gap-0.5">
            Tümünü Gör <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-border overflow-hidden group card-hover">
              <Link to={`/urunler/${product.slug}`}>
                <div className="relative overflow-hidden bg-muted aspect-square">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">{product.badge}</span>
                  )}
                  {product.oldPrice && (
                    <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded">
                      %{getDiscountPercent(product.price, product.oldPrice)}
                    </span>
                  )}
                </div>
              </Link>
              <div className="p-4">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{product.categoryLabel}</span>
                <Link to={`/urunler/${product.slug}`}>
                  <h3 className="text-sm font-bold text-foreground mt-1 mb-2 line-clamp-2 hover:text-primary transition-smooth">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-border"}`} />
                  ))}
                  <span className="text-[10px] text-muted-foreground ml-1">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-primary">{formatPrice(product.price)}</span>
                    {product.oldPrice && (
                      <span className="text-xs line-through text-muted-foreground ml-2">{formatPrice(product.oldPrice)}</span>
                    )}
                  </div>
                  <button onClick={() => addItem(product)} className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-smooth">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="bg-muted/50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-black text-foreground mb-6">Kategoriler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="bg-white rounded-xl p-5 text-center group hover:shadow-nipo transition-smooth border border-border">
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-smooth">{cat.name}</h3>
                <p className="text-[10px] text-muted-foreground mt-1">{cat.productCount} ürün</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="gradient-hero py-14">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Özel Tasarım Ambalaj mı İstiyorsunuz?</h2>
          <p className="text-sm opacity-70 mb-6 max-w-xl mx-auto">Markanıza özel tasarım ve baskı hizmetimiz ile fark yaratın. Profesyonel ekibimiz sizinle iletişime geçsin.</p>
          <Link to="/iletisim" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">
            Teklif Alın <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link to="/demo/bidolu" className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5" />
                <span className="text-lg font-black">nipo</span>
              </Link>
              <p className="text-xs opacity-50 leading-relaxed">Markana Renk Kat! Kaliteli ve uygun fiyatlı ambalaj çözümleri.</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Ürünler</h4>
              <ul className="space-y-2 text-xs opacity-50">
                {categories.slice(0, 5).map((c) => <li key={c.id}><Link to={`/kategori/${c.slug}`} className="hover:opacity-100">{c.name}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Kurumsal</h4>
              <ul className="space-y-2 text-xs opacity-50">
                <li><Link to="/kurumsal" className="hover:opacity-100">Hakkımızda</Link></li>
                <li><Link to="/iletisim" className="hover:opacity-100">İletişim</Link></li>
                <li><Link to="/sss" className="hover:opacity-100">S.S.S</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Yardım</h4>
              <ul className="space-y-2 text-xs opacity-50">
                <li><Link to="/kargo-bilgileri" className="hover:opacity-100">Kargo Bilgileri</Link></li>
                <li><Link to="/iade-kosullari" className="hover:opacity-100">İade Koşulları</Link></li>
                <li><Link to="/gizlilik" className="hover:opacity-100">Gizlilik</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-[11px] opacity-30">
            © 2026 Nipo Ambalaj | <Link to="/" className="underline">Ana Siteye Dön</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoBidolu;
