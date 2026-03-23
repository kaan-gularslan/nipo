import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Search, User, ShoppingCart, ChevronRight, Star, Heart, Menu, X } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";

const navCategories = categories.slice(0, 10);
const featuredProducts = products.filter((p) => p.badge);
const popularProducts = products.slice(0, 8);
const discountedProducts = products.filter((p) => p.oldPrice).slice(0, 6);

const DemoHepsiburada = () => {
  const { addItem, totalItems } = useCart();
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
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
      <div className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link to="/demo/hepsiburada" className="flex items-center gap-2 shrink-0">
              <Package className="w-7 h-7" />
              <div>
                <span className="text-xl font-black tracking-tight">nipo</span>
                <span className="text-[8px] font-semibold tracking-[0.15em] uppercase ml-1 opacity-70">ONLINE</span>
              </div>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ürün, kategori veya marka ara..."
                  className="w-full h-10 rounded-lg pl-4 pr-12 text-sm text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button className="absolute right-0 top-0 h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center hover:bg-secondary/90 transition-smooth">
                  <Search className="w-5 h-5 text-secondary-foreground" />
                </button>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 ml-auto">
              <Link to="/kurumsal" className="hidden md:flex items-center gap-1.5 text-xs hover:opacity-80 transition-smooth">
                <User className="w-5 h-5" />
                <span className="hidden lg:block">Hesabım</span>
              </Link>
              <Link to="/sepet" className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-smooth relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden lg:block">Sepetim</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 lg:-top-2 lg:-right-3 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tab Bar */}
      <div className="bg-primary/95 text-primary-foreground border-t border-primary-foreground/10 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin py-1">
            {navCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/kategori/${cat.slug}`}
                className="text-[12px] font-medium px-3 py-2 whitespace-nowrap hover:bg-primary-foreground/10 rounded transition-smooth"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden bg-white p-3">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ürün ara..."
            className="w-full h-10 rounded-lg pl-4 pr-12 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="absolute right-0 top-0 h-10 w-12 bg-secondary rounded-r-lg flex items-center justify-center">
            <Search className="w-5 h-5 text-secondary-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg">
          <div className="p-4 space-y-2">
            {navCategories.map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="block py-2 px-3 text-sm hover:bg-muted rounded" onClick={() => setMobileMenu(false)}>
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Category Icons Row */}
      <div className="bg-white py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-2">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/kategori/${cat.slug}`} className="flex flex-col items-center gap-1.5 min-w-[72px] group">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-smooth group-hover:scale-110">
                  {cat.icon}
                </div>
                <span className="text-[10px] text-muted-foreground text-center leading-tight group-hover:text-primary font-medium">{cat.name.split(" ")[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero: Banner + Sidebar */}
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Banner */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden gradient-hero-warm relative h-56 md:h-72 flex items-center">
            <div className="relative z-10 p-8 text-primary-foreground">
              <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Kampanya</span>
              <h2 className="text-2xl md:text-3xl font-black mb-2">Baskılı Ambalajda<br />Toplu Siparişe Özel İndirim</h2>
              <p className="text-sm opacity-80 mb-4">1000+ adet siparişlerde %20'ye varan indirim fırsatı</p>
              <Link to="/kampanyalar" className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">
                Hemen İncele <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl p-5 border border-border shadow-nipo-card flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Yeni Ürün</span>
              <h3 className="font-bold text-sm mt-1 text-foreground">Kraft Çanta Koleksiyonu</h3>
              <p className="text-xs text-muted-foreground mt-1">Doğa dostu ambalaj çözümleri</p>
              <Link to="/kategori/baski-canta" className="text-xs font-bold text-primary mt-3 inline-flex items-center gap-0.5 hover:gap-1.5 transition-smooth">
                Keşfet <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border shadow-nipo-card flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Fırsat</span>
              <h3 className="font-bold text-sm mt-1 text-foreground">Karton Bardak Seti</h3>
              <p className="text-xs text-muted-foreground mt-1">Kafe ve restoranlar için ideal</p>
              <Link to="/kategori/bardak" className="text-xs font-bold text-primary mt-3 inline-flex items-center gap-0.5 hover:gap-1.5 transition-smooth">
                İncele <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Carousel */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-foreground">Öne Çıkan Ürünler</h2>
            <Link to="/urunler" className="text-xs font-bold text-primary hover:text-secondary transition-smooth flex items-center gap-0.5">
              Tümünü Gör <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/urunler/${product.slug}`} className="min-w-[200px] max-w-[200px] bg-white rounded-xl border border-border p-3 group card-hover shrink-0">
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-3">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">{product.badge}</span>
                  )}
                  {product.oldPrice && (
                    <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 rounded">
                      %{getDiscountPercent(product.price, product.oldPrice)}
                    </span>
                  )}
                </div>
                <h3 className="text-xs font-semibold text-foreground leading-tight mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] text-muted-foreground">{product.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                  {product.oldPrice && (
                    <span className="text-[11px] line-through text-muted-foreground">{formatPrice(product.oldPrice)}</span>
                  )}
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
          <Link to="/urunler" className="text-xs font-bold text-primary hover:text-secondary transition-smooth flex items-center gap-0.5">
            Tümünü Gör <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-border overflow-hidden group card-hover">
              <Link to={`/urunler/${product.slug}`}>
                <div className="relative overflow-hidden bg-muted aspect-[4/3]">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">{product.badge}</span>
                  )}
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth hover:bg-secondary hover:text-secondary-foreground">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </Link>
              <div className="p-3">
                <span className="text-[10px] text-muted-foreground">{product.categoryLabel}</span>
                <Link to={`/urunler/${product.slug}`}>
                  <h3 className="text-sm font-semibold text-foreground leading-tight mt-0.5 mb-2 line-clamp-2 hover:text-primary transition-smooth">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] text-muted-foreground">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-black text-primary">{formatPrice(product.price)}</span>
                    {product.oldPrice && (
                      <span className="text-xs line-through text-muted-foreground ml-1.5">{formatPrice(product.oldPrice)}</span>
                    )}
                  </div>
                  <button
                    onClick={() => addItem(product)}
                    className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-smooth"
                    title="Sepete Ekle"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discounted Products */}
      {discountedProducts.length > 0 && (
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-foreground">🔥 İndirimli Ürünler</h2>
              <Link to="/urunler" className="text-xs font-bold text-secondary hover:text-primary transition-smooth flex items-center gap-0.5">
                Tümünü Gör <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">
              {discountedProducts.map((product) => (
                <Link key={product.id} to={`/urunler/${product.slug}`} className="min-w-[180px] max-w-[180px] bg-white rounded-xl border border-secondary/20 p-3 group card-hover shrink-0 relative">
                  <span className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-bl-xl rounded-tr-xl">
                    %{getDiscountPercent(product.price, product.oldPrice!)}
                  </span>
                  <div className="overflow-hidden rounded-lg bg-muted aspect-square mb-3">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground leading-tight mb-1 line-clamp-2">{product.name}</h3>
                  <span className="text-xs line-through text-muted-foreground">{formatPrice(product.oldPrice!)}</span>
                  <span className="text-sm font-black text-secondary ml-1">{formatPrice(product.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Category Highlights */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-lg font-black text-foreground mb-5">Kategoriler</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.slice(0, 8).map((cat) => (
            <Link key={cat.id} to={`/kategori/${cat.slug}`} className="bg-white rounded-xl border border-border p-4 flex items-center gap-3 group hover:border-primary/30 hover:shadow-nipo-card transition-smooth">
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-smooth">{cat.name}</h3>
                <span className="text-[10px] text-muted-foreground">{cat.productCount} ürün</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link to="/demo/hepsiburada" className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5" />
                <span className="text-lg font-black">nipo</span>
              </Link>
              <p className="text-xs opacity-50 leading-relaxed">Markana Renk Kat! Kaliteli ambalaj çözümlerinde güvenilir adresiniz.</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Ürünler</h4>
              <ul className="space-y-2 text-xs opacity-50">
                {categories.slice(0, 5).map((c) => (
                  <li key={c.id}><Link to={`/kategori/${c.slug}`} className="hover:opacity-100">{c.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Kurumsal</h4>
              <ul className="space-y-2 text-xs opacity-50">
                <li><Link to="/kurumsal" className="hover:opacity-100">Hakkımızda</Link></li>
                <li><Link to="/iletisim" className="hover:opacity-100">İletişim</Link></li>
                <li><Link to="/sss" className="hover:opacity-100">S.S.S</Link></li>
                <li><Link to="/kampanyalar" className="hover:opacity-100">Kampanyalar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 opacity-80">Yardım</h4>
              <ul className="space-y-2 text-xs opacity-50">
                <li><Link to="/kargo-bilgileri" className="hover:opacity-100">Kargo Bilgileri</Link></li>
                <li><Link to="/iade-kosullari" className="hover:opacity-100">İade Koşulları</Link></li>
                <li><Link to="/gizlilik" className="hover:opacity-100">Gizlilik</Link></li>
                <li><Link to="/kvkk" className="hover:opacity-100">KVKK</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-[11px] opacity-30">
            © 2026 Nipo Ambalaj. Tüm hakları saklıdır. | <Link to="/" className="underline">Ana Siteye Dön</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoHepsiburada;
