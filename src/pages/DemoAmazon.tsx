import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Search, MapPin, User, ShoppingCart, ChevronRight, Star, Menu, X, ChevronUp, Truck, Award, Headphones, Timer } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import heroImg from "@/assets/hero-amazon.jpg";

const topNavLinks = [
  { name: "Çok Satanlar", to: "/urunler" },
  { name: "Kampanyalar", to: "/kampanyalar" },
  { name: "Yeni Ürünler", to: "/urunler" },
  { name: "Müşteri Hizmetleri", to: "/sss" },
];

const categoryCards = [
  { title: "Baskılı Kutular", subtitle: "Pizza, lahmacun, kargo kutuları", to: "/kategori/oluklu-kutu", emoji: "📦" },
  { title: "Kağıt Çantalar", subtitle: "Kraft ve lüks çanta çeşitleri", to: "/kategori/baski-canta", emoji: "👜" },
  { title: "Bardak & Kase", subtitle: "Karton bardak, gıda kasesi", to: "/kategori/bardak", emoji: "🥤" },
  { title: "Etiket & Sticker", subtitle: "Barkod, ürün etiketi", to: "/kategori/etiket", emoji: "🏷️" },
];

const dealProducts = products.filter((p) => p.oldPrice).slice(0, 4);
const allProducts = products.slice(0, 8);
const recentProducts = products.slice(8, 16);

const DemoAmazon = () => {
  const { addItem, totalItems } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Top Navy Bar */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/demo/amazon" className="flex items-center gap-1.5 shrink-0 hover:ring-1 hover:ring-primary-foreground/30 rounded px-1 py-0.5">
              <Package className="w-6 h-6" />
              <span className="text-lg font-black">nipo</span>
            </Link>

            <div className="hidden md:flex items-center gap-1 text-xs shrink-0 hover:ring-1 hover:ring-primary-foreground/30 rounded px-2 py-1 cursor-pointer">
              <MapPin className="w-4 h-4" />
              <div className="leading-tight">
                <span className="text-[10px] opacity-60 block">Gönderim:</span>
                <span className="font-bold text-[11px]">İstanbul</span>
              </div>
            </div>

            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="flex">
                <select className="h-10 rounded-l-lg bg-muted text-foreground text-xs px-2 border-0 focus:outline-none">
                  <option>Tümü</option>
                  {categories.slice(0, 6).map((c) => <option key={c.id}>{c.name}</option>)}
                </select>
                <input type="text" placeholder="Ara..." className="flex-1 h-10 text-sm text-foreground px-3 border-0 focus:outline-none" />
                <button className="h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center hover:bg-secondary/90">
                  <Search className="w-5 h-5 text-secondary-foreground" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <Link to="/kurumsal" className="hidden md:block hover:ring-1 hover:ring-primary-foreground/30 rounded px-2 py-1 text-xs">
                <span className="text-[10px] opacity-60 block">Merhaba, Giriş Yapın</span>
                <span className="font-bold text-[11px]">Hesap</span>
              </Link>
              <Link to="/sepet" className="flex items-center gap-1 hover:ring-1 hover:ring-primary-foreground/30 rounded px-2 py-1 relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="font-bold text-sm hidden md:block">Sepet</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 left-3 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Sub Nav */}
        <div className="bg-primary/80 border-t border-primary-foreground/10 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1">
              <button className="text-xs font-bold px-3 py-1.5 flex items-center gap-1 hover:ring-1 hover:ring-primary-foreground/30 rounded">
                <Menu className="w-4 h-4" /> Tümü
              </button>
              {topNavLinks.map((link) => (
                <Link key={link.name} to={link.to} className="text-xs px-3 py-1.5 hover:ring-1 hover:ring-primary-foreground/30 rounded">
                  {link.name}
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
            <div className="flex mb-3">
              <input type="text" placeholder="Ara..." className="flex-1 h-10 rounded-l-lg pl-4 text-sm border border-border" />
              <button className="h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-secondary-foreground" />
              </button>
            </div>
            {topNavLinks.map((link) => (
              <Link key={link.name} to={link.to} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hero Banner with Image */}
      <div className="relative h-56 md:h-80 overflow-hidden">
        <img src={heroImg} alt="Nipo Ambalaj Depo" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-primary-foreground max-w-lg">
            <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">Özel Fiyat</span>
            <h1 className="text-2xl md:text-4xl font-black mt-3 mb-2 drop-shadow-lg">Ambalajda Büyük Fırsat</h1>
            <p className="text-sm opacity-90 mb-5">Baskılı kutu, çanta ve bardaklarda toplu sipariş indirimi</p>
            <Link to="/urunler" className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">
              Alışverişe Başla <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryCards.map((card) => (
            <Link key={card.title} to={card.to} className="bg-white rounded-lg p-5 shadow-nipo-card hover:shadow-nipo transition-smooth group">
              <h3 className="text-sm font-bold text-foreground mb-1">{card.title}</h3>
              <p className="text-[10px] text-muted-foreground mb-3">{card.subtitle}</p>
              <span className="text-4xl block mb-2">{card.emoji}</span>
              <span className="text-xs font-bold text-primary group-hover:text-secondary transition-smooth flex items-center gap-0.5">
                Hemen Keşfet <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Deals */}
      {dealProducts.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg p-5 shadow-nipo-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black text-foreground">Günün Fırsatları</h2>
              <Link to="/kampanyalar" className="text-xs font-bold text-primary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dealProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/urunler/${product.slug}`}>
                    <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-2">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                      <span className="absolute bottom-0 inset-x-0 bg-secondary text-secondary-foreground text-center text-xs font-bold py-1">
                        %{getDiscountPercent(product.price, product.oldPrice!)} İndirim
                      </span>
                    </div>
                  </Link>
                  <div className="w-full bg-muted rounded-full h-1.5 mb-2">
                    <div className="bg-secondary h-1.5 rounded-full" style={{ width: `${Math.min(85, 40 + product.id * 7)}%` }} />
                  </div>
                  <p className="text-[10px] text-secondary font-bold mb-1">Fırsat neredeyse bitti!</p>
                  <h3 className="text-xs font-medium text-foreground line-clamp-2">{product.name}</h3>
                  <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg p-5 shadow-nipo-card">
          <h2 className="text-lg font-black text-foreground mb-4">Sizin İçin Seçtiklerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allProducts.map((product) => (
              <div key={product.id} className="group border border-border rounded-lg p-3 hover:shadow-nipo-card transition-smooth">
                <Link to={`/urunler/${product.slug}`}>
                  <div className="overflow-hidden rounded bg-muted aspect-square mb-2">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  </div>
                </Link>
                <Link to={`/urunler/${product.slug}`}>
                  <h3 className="text-xs text-primary hover:text-secondary hover:underline line-clamp-2 mb-1">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-border"}`} />
                  ))}
                  <span className="text-[10px] text-muted-foreground ml-1">{product.rating}</span>
                </div>
                <span className="text-base font-black text-foreground">{formatPrice(product.price)}</span>
                {product.oldPrice && <span className="text-xs line-through text-muted-foreground ml-1">{formatPrice(product.oldPrice)}</span>}
                <button onClick={() => addItem(product)} className="w-full mt-2 bg-secondary text-secondary-foreground py-2 rounded-lg text-xs font-bold hover:bg-secondary/90 transition-smooth">
                  Sepete Ekle
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recently Viewed Style */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg p-5 shadow-nipo-card">
          <h2 className="text-lg font-black text-foreground mb-4">Keşfetmeye Devam Et</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
            {recentProducts.map((product) => (
              <Link key={product.id} to={`/urunler/${product.slug}`} className="min-w-[150px] max-w-[150px] shrink-0 group">
                <div className="overflow-hidden rounded bg-muted aspect-square mb-2">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                </div>
                <h3 className="text-[11px] text-primary hover:text-secondary line-clamp-2">{product.name}</h3>
                <span className="text-sm font-bold text-foreground">{formatPrice(product.price)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-primary/90 text-primary-foreground text-center py-3 text-xs cursor-pointer hover:bg-primary/80 transition-smooth" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Başa Dön ↑
      </div>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-xs mb-3">Bizi Tanıyın</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                <li><Link to="/kurumsal" className="hover:opacity-100 hover:underline">Hakkımızda</Link></li>
                <li><Link to="/kurumsal-kimlik" className="hover:opacity-100 hover:underline">Kurumsal Kimlik</Link></li>
                <li><Link to="/iletisim" className="hover:opacity-100 hover:underline">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Yardım</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                <li><Link to="/sss" className="hover:opacity-100 hover:underline">S.S.S</Link></li>
                <li><Link to="/kargo-bilgileri" className="hover:opacity-100 hover:underline">Kargo</Link></li>
                <li><Link to="/iade-kosullari" className="hover:opacity-100 hover:underline">İade</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Ürünler</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                {categories.slice(0, 4).map((c) => <li key={c.id}><Link to={`/kategori/${c.slug}`} className="hover:opacity-100 hover:underline">{c.name}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-3">Yasal</h4>
              <ul className="space-y-1.5 text-xs opacity-60">
                <li><Link to="/gizlilik" className="hover:opacity-100 hover:underline">Gizlilik</Link></li>
                <li><Link to="/kvkk" className="hover:opacity-100 hover:underline">KVKK</Link></li>
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

export default DemoAmazon;
