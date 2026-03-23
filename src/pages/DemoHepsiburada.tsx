import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Search, User, ShoppingCart, ChevronRight, Star, Heart, Menu, X, Truck, CreditCard, RotateCcw, Shield, Clock, ChevronLeft } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import heroImg from "@/assets/hero-hepsiburada.jpg";

const navCategories = categories.slice(0, 10);
const featuredProducts = products.filter((p) => p.badge);
const popularProducts = products.slice(0, 8);
const discountedProducts = products.filter((p) => p.oldPrice).slice(0, 6);
const bestSellers = products.filter((p) => p.badge === "Çok Satan");

const heroSlides = [
  { title: "Baskılı Ambalajda\nToplu Siparişe Özel İndirim", subtitle: "1000+ adet siparişlerde %20'ye varan indirim fırsatı", cta: "Hemen İncele", badge: "Kampanya", to: "/kampanyalar" },
  { title: "Kraft Ambalaj\nKoleksiyonu Yenilendi", subtitle: "Doğa dostu ve şık ambalaj çözümleri", cta: "Keşfet", badge: "Yeni", to: "/urunler" },
  { title: "Karton Bardak\nSetlerinde Fırsat", subtitle: "Kafe ve restoranlar için özel fiyatlar", cta: "Fırsatları Gör", badge: "Fırsat", to: "/kampanyalar" },
];

const marqueeItems = [
  "🚚 500₺ Üzeri Ücretsiz Kargo",
  "💳 12 Aya Varan Taksit İmkanı",
  "⚡ Aynı Gün Kargo",
  "🔒 Güvenli Alışveriş",
  "📞 7/24 Müşteri Desteği",
  "🎯 Toplu Siparişe Özel Fiyat",
];

const DemoHepsiburada = () => {
  const { addItem, totalItems } = useCart();
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ h: 5, m: 42, s: 18 });

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // Countdown
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
    <div className="min-h-screen bg-muted/30">
      {/* Marquee Bar */}
      <div className="bg-primary text-primary-foreground overflow-hidden">
        <div className="animate-[marquee_30s_linear_infinite] flex whitespace-nowrap py-1.5">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-[11px] mx-8 opacity-90">{item}</span>
          ))}
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-primary/95 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-[11px] py-1.5 opacity-70">
            <div className="flex gap-4">
              <Link to="/kampanyalar" className="hover:opacity-100">Kampanyalar</Link>
              <Link to="/kurumsal" className="hover:opacity-100">Kurumsal</Link>
              <Link to="/iletisim" className="hover:opacity-100">İletişim</Link>
            </div>
            <div className="flex gap-4">
              <Link to="/sss" className="hover:opacity-100">Yardım</Link>
              <Link to="/sepet" className="hover:opacity-100">Siparişlerim</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/demo/hepsiburada" className="flex items-center gap-2 shrink-0">
              <Package className="w-7 h-7" />
              <div>
                <span className="text-xl font-black tracking-tight">nipo</span>
                <span className="text-[8px] font-semibold tracking-[0.15em] uppercase ml-1 opacity-70">ONLINE</span>
              </div>
            </Link>
            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Ürün, kategori veya marka ara..." className="w-full h-10 rounded-lg pl-4 pr-12 text-sm text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <button className="absolute right-0 top-0 h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center hover:bg-secondary/90 transition-smooth">
                  <Search className="w-5 h-5 text-secondary-foreground" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <Link to="/kurumsal" className="hidden md:flex items-center gap-1.5 text-xs hover:opacity-80 transition-smooth">
                <User className="w-5 h-5" /><span className="hidden lg:block">Hesabım</span>
              </Link>
              <Link to="/urunler" className="hidden md:flex items-center gap-1.5 text-xs hover:opacity-80 transition-smooth">
                <Heart className="w-5 h-5" /><span className="hidden lg:block">Favorilerim</span>
              </Link>
              <Link to="/sepet" className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-smooth relative">
                <ShoppingCart className="w-5 h-5" /><span className="hidden lg:block">Sepetim</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 lg:-top-2 lg:-right-3 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tab Bar */}
      <div className="bg-primary/90 text-primary-foreground border-t border-primary-foreground/10 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin py-1">
            {navCategories.map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="text-[12px] font-medium px-3 py-2 whitespace-nowrap hover:bg-primary-foreground/10 rounded transition-smooth">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-white p-3">
        <div className="relative">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Ürün ara..." className="w-full h-10 rounded-lg pl-4 pr-12 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
          <button className="absolute right-0 top-0 h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center"><Search className="w-5 h-5 text-secondary-foreground" /></button>
        </div>
      </div>
      {mobileMenu && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg fixed top-[56px] inset-x-0 z-40">
          <div className="p-4 space-y-2">
            {navCategories.map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Category Icons */}
      <div className="bg-white py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-2">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="flex flex-col items-center gap-1.5 min-w-[72px] group">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-smooth group-hover:scale-110">{cat.icon}</div>
                <span className="text-[10px] text-muted-foreground text-center leading-tight group-hover:text-primary font-medium">{cat.name.split(" ")[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Slider + Sidebar */}
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Slider */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden bg-primary relative h-56 md:h-72">
            {heroSlides.map((slide, i) => (
              <div key={i} className={`absolute inset-0 flex items-center transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="relative z-10 p-8 text-primary-foreground">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">{slide.badge}</span>
                  <h2 className="text-2xl md:text-3xl font-black mb-2 whitespace-pre-line">{slide.title}</h2>
                  <p className="text-sm opacity-80 mb-4">{slide.subtitle}</p>
                  <Link to={slide.to} className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">
                    {slide.cta} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />
              </div>
            ))}
            {/* Slide controls */}
            <button onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-smooth"><ChevronLeft className="w-4 h-4" /></button>
            <button onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-smooth"><ChevronRight className="w-4 h-4" /></button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-smooth ${i === currentSlide ? "bg-white scale-125" : "bg-white/40"}`} />
              ))}
            </div>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-5 border border-border flex-1 hover:shadow-nipo-card transition-smooth">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Yeni Ürün</span>
              <h3 className="font-bold text-sm mt-1 text-foreground">Kraft Çanta Koleksiyonu</h3>
              <p className="text-xs text-muted-foreground mt-1">Doğa dostu ambalaj çözümleri</p>
              <Link to="/kategori/baski-canta" className="text-xs font-bold text-primary mt-3 inline-flex items-center gap-0.5 hover:gap-1.5 transition-smooth">Keşfet <ChevronRight className="w-3 h-3" /></Link>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-5 border border-border flex-1 hover:shadow-nipo-card transition-smooth">
              <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Fırsat</span>
              <h3 className="font-bold text-sm mt-1 text-foreground">Karton Bardak Seti</h3>
              <p className="text-xs text-muted-foreground mt-1">Kafe ve restoranlar için ideal</p>
              <Link to="/kategori/bardak" className="text-xs font-bold text-primary mt-3 inline-flex items-center gap-0.5 hover:gap-1.5 transition-smooth">İncele <ChevronRight className="w-3 h-3" /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-y border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, label: "Ücretsiz Kargo", desc: "500₺ üzeri siparişlerde" },
              { icon: CreditCard, label: "12 Taksit", desc: "Tüm kredi kartlarına" },
              { icon: RotateCcw, label: "Kolay İade", desc: "14 gün içinde iade" },
              { icon: Shield, label: "Güvenli Ödeme", desc: "256-bit SSL şifreleme" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-smooth">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Süper Fırsatlar - Countdown */}
      <div className="bg-gradient-to-r from-secondary/10 via-white to-secondary/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-black text-foreground">⚡ Süper Fırsatlar</h2>
              <div className="flex items-center gap-1.5 text-secondary">
                <Clock className="w-4 h-4" />
                <div className="flex gap-1">
                  {[
                    { val: countdown.h, label: "Saat" },
                    { val: countdown.m, label: "Dk" },
                    { val: countdown.s, label: "Sn" },
                  ].map((t, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground text-xs font-black px-2 py-1 rounded">
                      {String(t.val).padStart(2, "0")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/kampanyalar" className="text-xs font-bold text-secondary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">
            {discountedProducts.map((product) => (
              <div key={product.id} className="min-w-[200px] max-w-[200px] bg-white rounded-xl border border-secondary/20 p-3 group card-hover shrink-0 relative">
                <span className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-bl-xl rounded-tr-xl">
                  %{getDiscountPercent(product.price, product.oldPrice!)}
                </span>
                <Link to={`/urunler/${product.slug}`}>
                  <div className="overflow-hidden rounded-lg bg-muted aspect-square mb-3">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  </div>
                </Link>
                <h3 className="text-xs font-semibold text-foreground leading-tight mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span className="text-[10px] text-muted-foreground">{product.rating}</span>
                </div>
                <span className="text-xs line-through text-muted-foreground">{formatPrice(product.oldPrice!)}</span>
                <span className="text-sm font-black text-secondary ml-1">{formatPrice(product.price)}</span>
                <button onClick={() => addItem(product)} className="w-full mt-2 bg-secondary text-secondary-foreground text-xs font-bold py-2 rounded-lg hover:bg-secondary/90 transition-smooth">Sepete Ekle</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-foreground">Öne Çıkan Ürünler</h2>
            <Link to="/urunler" className="text-xs font-bold text-primary hover:text-secondary transition-smooth flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/urunler/${product.slug}`} className="min-w-[200px] max-w-[200px] bg-white rounded-xl border border-border p-3 group card-hover shrink-0">
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

      {/* Popular Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-black text-foreground">Popüler Ürünler</h2>
          <Link to="/urunler" className="text-xs font-bold text-primary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-border overflow-hidden group card-hover">
              <Link to={`/urunler/${product.slug}`}>
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
                  <button onClick={() => addItem(product)} className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-smooth"><ShoppingCart className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Çok Satanlar */}
      {bestSellers.length > 0 && (
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-black text-foreground mb-5">🏆 Çok Satanlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestSellers.map((product, i) => (
                <Link key={product.id} to={`/urunler/${product.slug}`} className="flex items-center gap-4 bg-muted/30 rounded-xl p-4 border border-border hover:shadow-nipo-card transition-smooth group">
                  <span className="text-3xl font-black text-primary/20 shrink-0 w-8">#{i + 1}</span>
                  <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden shrink-0"><img src={product.img} alt={product.name} className="w-full h-full object-cover" /></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-smooth">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span className="text-[10px] text-muted-foreground">{product.rating}</span></div>
                    <span className="text-sm font-black text-primary mt-0.5 block">{formatPrice(product.price)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toplu Sipariş CTA */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Toplu Sipariş Teklif Alın</h2>
            <p className="text-sm opacity-80 mb-6 max-w-lg mx-auto">1000 adet ve üzeri siparişleriniz için özel fiyat teklifi alın. Ücretsiz tasarım desteği ve hızlı üretim garantisi.</p>
            <Link to="/iletisim" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-xl text-sm font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-2">
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
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="bg-muted/30 rounded-xl border border-border p-4 flex items-center gap-3 group hover:border-primary/30 hover:shadow-nipo-card transition-smooth">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-smooth">{cat.name}</h3>
                  <span className="text-[10px] text-muted-foreground">{cat.productCount} ürün</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link to="/demo/hepsiburada" className="flex items-center gap-2 mb-4"><Package className="w-5 h-5" /><span className="text-lg font-black">nipo</span></Link>
              <p className="text-xs opacity-60 leading-relaxed">Markana Renk Kat! Türkiye'nin en kapsamlı ambalaj çözümleri.</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Ürünler</h4>
              <ul className="space-y-2 text-xs opacity-60">{categories.slice(0, 5).map((c) => <li key={c.id}><Link to={`/kategori/${c.slug}`} className="hover:opacity-100">{c.name}</Link></li>)}</ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Kurumsal</h4>
              <ul className="space-y-2 text-xs opacity-60">
                <li><Link to="/kurumsal" className="hover:opacity-100">Hakkımızda</Link></li>
                <li><Link to="/iletisim" className="hover:opacity-100">İletişim</Link></li>
                <li><Link to="/sss" className="hover:opacity-100">S.S.S</Link></li>
                <li><Link to="/kurumsal-kimlik" className="hover:opacity-100">Kurumsal Kimlik</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Yardım</h4>
              <ul className="space-y-2 text-xs opacity-60">
                <li><Link to="/kargo-bilgileri" className="hover:opacity-100">Kargo</Link></li>
                <li><Link to="/iade-kosullari" className="hover:opacity-100">İade</Link></li>
                <li><Link to="/gizlilik" className="hover:opacity-100">Gizlilik</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-[11px] opacity-50">
            © 2026 Nipo Ambalaj — Tüm Hakları Saklıdır | <Link to="/" className="underline hover:opacity-100">Ana Siteye Dön</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoHepsiburada;
