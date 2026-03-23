import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Search, ShoppingCart, ChevronRight, ChevronLeft, Star, Clock, Zap, Menu, X, Heart, User, TrendingUp, Flame } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";


const slides = [
  { title: "Toplu Siparişe\nÖzel Fiyatlar", subtitle: "1000+ adet siparişlerde %20 indirim", cta: "Fırsatı Yakala", to: "/kampanyalar" },
  { title: "Baskılı Ambalajda\nSınırsız Tasarım", subtitle: "Markanıza özel profesyonel baskı", cta: "Keşfet", to: "/urunler" },
  { title: "Yeni Sezon\nÜrünleri Geldi", subtitle: "Kraft çanta ve kutu koleksiyonu", cta: "Hemen İncele", to: "/kategori/baski-canta" },
];

const dealProducts = products.filter((p) => p.oldPrice).slice(0, 3);
const opportunityProducts = products.slice(0, 6);
const bestSellers = products.filter((p) => p.badge === "Çok Satan");

const DemoN11 = () => {
  const { addItem, totalItems } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ h: 5, m: 42, s: 18 });
  const [mobileMenu, setMobileMenu] = useState(false);

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
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/demo/n11" className="flex items-center gap-1.5 shrink-0">
              <Package className="w-6 h-6" />
              <span className="text-lg font-black">nipo</span>
              <span className="text-[8px] font-bold tracking-wider opacity-60 uppercase">ONLINE</span>
            </Link>

            {/* Category Dropdown */}
            <div className="hidden lg:flex items-center gap-1 bg-primary-foreground/10 rounded-lg px-3 py-2 text-xs font-bold cursor-pointer hover:bg-primary-foreground/20 transition-smooth">
              <Menu className="w-4 h-4" /> Kategoriler
            </div>

            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <input type="text" placeholder="Ürün veya kategori ara..." className="w-full h-9 rounded-lg pl-4 pr-10 text-sm text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <button className="absolute right-0 top-0 h-9 w-10 bg-secondary rounded-r-lg flex items-center justify-center hover:bg-secondary/90">
                  <Search className="w-4 h-4 text-secondary-foreground" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <Link to="/kampanyalar" className="hidden lg:block text-xs hover:opacity-80">Kampanyalar</Link>
              <Link to="/sss" className="hidden lg:block text-xs hover:opacity-80">Yardım</Link>
              <Link to="/sepet" className="flex items-center gap-1 hover:opacity-80 relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="bg-primary/80 border-t border-primary-foreground/10 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 text-xs">
              {categories.slice(0, 8).map((cat) => (
                <Link key={cat.id} to={`/kategori/${cat.slug}`} className="px-3 py-1.5 hover:bg-primary-foreground/10 rounded transition-smooth whitespace-nowrap">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-b shadow-lg fixed top-[50px] inset-x-0 z-40">
          <div className="p-4">
            <div className="relative mb-3">
              <input type="text" placeholder="Ara..." className="w-full h-10 rounded-lg pl-4 pr-10 text-sm border border-border" />
              <Search className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
            </div>
            {categories.slice(0, 8).map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hero: Slider + Side Banners */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          {/* Main Slider */}
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden h-64 md:h-80">
            {slides.map((slide, i) => (
              <div key={i} className={`absolute inset-0 transition-all duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-accent/40" />
                <div className="absolute right-0 top-0 w-2/5 h-full hidden md:flex items-center justify-center p-6 opacity-25">
                  <img src={products[i]?.img || products[0].img} alt="" className="w-48 h-48 object-cover rounded-2xl rotate-6 shadow-2xl" />
                </div>
                <div className="absolute inset-0 flex items-end">
                  <div className="relative z-10 p-6 md:p-8 text-white w-full">
                    <h1 className="text-xl md:text-3xl font-black leading-tight whitespace-pre-line mb-2">{slide.title}</h1>
                    <p className="text-sm opacity-90 mb-4">{slide.subtitle}</p>
                    <Link to={slide.to} className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">
                      {slide.cta} <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={() => setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1))} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/40 z-20">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/40 z-20">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full ${i === currentSlide ? "bg-white w-6" : "bg-white/40 w-2"} transition-smooth`} />
              ))}
            </div>
          </div>

          {/* Side Banners */}
          <div className="hidden lg:flex flex-col gap-3">
            <Link to="/kampanyalar" className="flex-1 bg-secondary/10 border border-secondary/20 rounded-xl p-4 flex flex-col justify-center hover:shadow-nipo-card transition-smooth">
              <Flame className="w-6 h-6 text-secondary mb-2" />
              <h3 className="text-sm font-bold text-foreground">Flash İndirimler</h3>
              <p className="text-[10px] text-muted-foreground mt-1">Kaçırılmayacak fırsatlar</p>
            </Link>
            <Link to="/urunler" className="flex-1 bg-accent/10 border border-accent/20 rounded-xl p-4 flex flex-col justify-center hover:shadow-nipo-card transition-smooth">
              <Star className="w-6 h-6 text-accent mb-2" />
              <h3 className="text-sm font-bold text-foreground">Yeni Ürünler</h3>
              <p className="text-[10px] text-muted-foreground mt-1">Sezonun en yenileri</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Deal of the Day */}
      {dealProducts.length > 0 && (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-xl border border-border p-5 shadow-nipo-card">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" /> Günün Fırsatı
                </h2>
                <div className="flex gap-1">
                  {[countdown.h, countdown.m, countdown.s].map((v, i) => (
                    <span key={i} className="bg-primary text-primary-foreground text-sm font-bold px-2.5 py-1 rounded">
                      {String(v).padStart(2, "0")}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/kampanyalar" className="text-xs font-bold text-primary flex items-center gap-0.5">
                Tümünü Gör <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dealProducts.map((product) => (
                <div key={product.id} className="flex gap-4 border border-border rounded-lg p-3 hover:shadow-nipo-card transition-smooth">
                  <Link to={`/urunler/${product.slug}`} className="shrink-0">
                    <div className="w-28 h-28 rounded-lg bg-muted overflow-hidden">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link to={`/urunler/${product.slug}`}>
                      <h3 className="text-sm font-bold text-foreground line-clamp-2 hover:text-primary transition-smooth">{product.name}</h3>
                    </Link>
                    <div className="flex items-center gap-1 my-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-[10px] text-muted-foreground">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-black text-secondary">{formatPrice(product.price)}</span>
                      <span className="text-xs line-through text-muted-foreground">{formatPrice(product.oldPrice!)}</span>
                      <span className="text-[10px] font-bold bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">
                        %{getDiscountPercent(product.price, product.oldPrice!)}
                      </span>
                    </div>
                    <button onClick={() => addItem(product)} className="bg-primary text-primary-foreground px-4 py-1.5 rounded text-xs font-bold hover:bg-primary/90 transition-smooth">
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Opportunity Products */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-black text-foreground">🔥 Fırsat Ürünleri</h2>
          <Link to="/urunler" className="text-xs font-bold text-primary flex items-center gap-0.5">
            Tümünü Gör <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {opportunityProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-border overflow-hidden group card-hover">
              <Link to={`/urunler/${product.slug}`}>
                <div className="relative overflow-hidden bg-muted aspect-square">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded">{product.badge}</span>
                  )}
                </div>
              </Link>
              <div className="p-2.5">
                <h3 className="text-[11px] font-medium text-foreground line-clamp-2 mb-1">{product.name}</h3>
                <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                {product.oldPrice && (
                  <span className="text-[10px] line-through text-muted-foreground ml-1">{formatPrice(product.oldPrice)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Grid */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-black text-foreground mb-5">Kategoriler</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="p-3 text-center group hover:shadow-nipo-card transition-smooth rounded-xl border border-border">
                <span className="text-3xl block mb-1">{cat.icon}</span>
                <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers Carousel */}
      {bestSellers.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-lg font-black text-foreground mb-5">⭐ Çok Satanlar</h2>
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">
            {bestSellers.map((product) => (
              <div key={product.id} className="min-w-[200px] max-w-[200px] bg-white rounded-xl border border-border overflow-hidden shrink-0 card-hover">
                <Link to={`/urunler/${product.slug}`}>
                  <div className="overflow-hidden bg-muted aspect-square">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  </div>
                </Link>
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-foreground line-clamp-2 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-[10px] text-muted-foreground">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                    <button onClick={() => addItem(product)} className="bg-primary text-primary-foreground w-7 h-7 rounded flex items-center justify-center hover:bg-primary/90 transition-smooth">
                      <ShoppingCart className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Opportunity Banner */}
      <div className="gradient-nipo py-12">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-black mb-2">Markana Renk Kat!</h2>
          <p className="text-sm opacity-70 mb-5">Özel tasarım ambalajlarla fark yaratın</p>
          <Link to="/iletisim" className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-sm hover:bg-white/90 transition-smooth inline-flex items-center gap-1">
            Teklif Al <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link to="/demo/n11" className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5" />
                <span className="text-lg font-black">nipo</span>
              </Link>
              <p className="text-xs opacity-50 leading-relaxed">Markana Renk Kat! Kaliteli ambalaj çözümleri.</p>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Ürünler</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                {categories.slice(0, 5).map((c) => <li key={c.id}><Link to={`/kategori/${c.slug}`} className="hover:opacity-100">{c.name}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Kurumsal</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                <li><Link to="/kurumsal" className="hover:opacity-100">Hakkımızda</Link></li>
                <li><Link to="/iletisim" className="hover:opacity-100">İletişim</Link></li>
                <li><Link to="/sss" className="hover:opacity-100">S.S.S</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Yardım</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                <li><Link to="/kargo-bilgileri" className="hover:opacity-100">Kargo</Link></li>
                <li><Link to="/iade-kosullari" className="hover:opacity-100">İade</Link></li>
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

export default DemoN11;
