import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Search, User, Heart, ShoppingCart, ChevronRight, Star, Menu, X, Zap } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";


const campaignCircles = [
  { label: "Süper Fiyat", emoji: "🔥", to: "/kampanyalar" },
  { label: "Yeni Ürün", emoji: "✨", to: "/urunler" },
  { label: "Çok Satan", emoji: "⭐", to: "/urunler" },
  { label: "Kampanya", emoji: "🎯", to: "/kampanyalar" },
  { label: "Ücretsiz Kargo", emoji: "🚚", to: "/urunler" },
  { label: "İndirim", emoji: "💰", to: "/kampanyalar" },
  { label: "Fırsat", emoji: "⚡", to: "/kampanyalar" },
];

const categoryTabs = ["Tümü", "Kutular", "Çantalar", "Bardaklar", "Etiketler", "Peçeteler", "Poşetler"];

const DemoTrendyol = () => {
  const { addItem, totalItems } = useCart();
  const [activeTab, setActiveTab] = useState("Tümü");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [flashCountdown, setFlashCountdown] = useState({ m: 47, s: 33 });

  // Filter products by tab
  const filteredProducts = activeTab === "Tümü" ? products.slice(0, 12) : products.filter((p) => p.categoryLabel?.includes(activeTab)).slice(0, 12);
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products.slice(0, 12);

  const bestSellers = products.filter((p) => p.badge === "Çok Satan");
  const newProducts = products.filter((p) => p.badge === "Yeni");
  const discountedProducts = products.filter((p) => p.oldPrice).slice(0, 8);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlashCountdown((prev) => {
        let { m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; s = 59; }
        return { m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Flash Deal Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 py-2 text-xs font-bold">
            <Zap className="w-4 h-4" />
            <span>Süper Fiyat Fırsatları</span>
            <div className="flex gap-1">
              <span className="bg-secondary-foreground/20 px-1.5 py-0.5 rounded text-[11px]">{String(flashCountdown.m).padStart(2, "0")}</span>
              <span>:</span>
              <span className="bg-secondary-foreground/20 px-1.5 py-0.5 rounded text-[11px]">{String(flashCountdown.s).padStart(2, "0")}</span>
            </div>
            <Link to="/kampanyalar" className="underline text-[11px] ml-2">İncele →</Link>
          </div>
        </div>
      </div>

      {/* Thin top accent */}
      <div className="h-1 bg-primary" />

      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/demo/trendyol" className="flex items-center gap-1.5 shrink-0">
              <Package className="w-6 h-6 text-primary" />
              <span className="text-xl font-black text-primary">nipo</span>
            </Link>
            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Ürün, kategori veya marka ara" className="w-full h-10 rounded-lg pl-10 pr-4 text-sm bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="flex items-center gap-3 ml-auto text-muted-foreground">
              <Link to="/kurumsal" className="hidden md:flex items-center gap-1 text-xs hover:text-primary transition-smooth"><User className="w-5 h-5" /><span className="hidden lg:block">Giriş Yap</span></Link>
              <Link to="/urunler" className="hidden md:flex items-center gap-1 text-xs hover:text-primary transition-smooth"><Heart className="w-5 h-5" /><span className="hidden lg:block">Favorilerim</span></Link>
              <Link to="/sepet" className="flex items-center gap-1 text-xs hover:text-primary transition-smooth relative">
                <ShoppingCart className="w-5 h-5" /><span className="hidden lg:block">Sepetim</span>
                {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center">{totalItems}</span>}
              </Link>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="border-t border-border hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 overflow-x-auto">
              {categoryTabs.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`text-sm font-medium px-4 py-2.5 border-b-2 transition-smooth whitespace-nowrap ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-b shadow-lg fixed top-[52px] inset-x-0 z-40">
          <div className="p-4">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Ara..." className="w-full h-10 rounded-lg pl-10 pr-4 text-sm bg-muted border-0" />
            </div>
            <div className="space-y-1">
              {categoryTabs.map((tab) => (
                <button key={tab} onClick={() => { setActiveTab(tab); setMobileMenu(false); }} className={`block w-full text-left py-2 px-3 text-sm rounded ${activeTab === tab ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted"}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Campaign Circles + Hero */}
      <div className="relative overflow-hidden">
        <div className="h-48 md:h-64 relative bg-gradient-to-r from-primary via-primary/80 to-secondary/40">
          <div className="absolute right-0 top-0 w-1/2 h-full hidden md:flex items-center justify-end pr-8 gap-3 opacity-25">
            {products.slice(0, 3).map((p) => (
              <img key={p.id} src={p.img} alt="" className="w-36 h-36 object-cover rounded-2xl rotate-3 shadow-lg" />
            ))}
          </div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="text-primary-foreground max-w-md">
              <h2 className="text-2xl md:text-3xl font-black mb-2">Ambalajda Süper Fırsatlar</h2>
              <p className="text-sm opacity-80 mb-4">Tüm kategorilerde indirimli fiyatlar</p>
              <Link to="/kampanyalar" className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/90 transition-smooth inline-flex items-center gap-1">Fırsatları Gör <ChevronRight className="w-4 h-4" /></Link>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="container mx-auto px-4 -mt-8 relative z-10 pb-5">
          <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-thin justify-center">
            {campaignCircles.map((item, i) => (
              <Link key={i} to={item.to} className="flex flex-col items-center gap-1.5 min-w-[64px] group">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-smooth group-hover:shadow-xl border border-border">
                  {item.emoji}
                </div>
                <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Discount Banners */}
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { pct: 5, color: "from-primary/10 to-primary/5", text: "text-primary" },
            { pct: 10, color: "from-accent/10 to-accent/5", text: "text-accent" },
            { pct: 30, color: "from-secondary/10 to-secondary/5", text: "text-secondary" },
            { pct: 50, color: "from-primary/10 to-secondary/5", text: "text-secondary" },
          ].map((item) => (
            <Link key={item.pct} to="/kampanyalar" className={`bg-gradient-to-br ${item.color} rounded-xl border border-border p-4 text-center group hover:shadow-lg transition-smooth`}>
              <span className={`text-3xl font-black ${item.text}`}>%{item.pct}</span>
              <p className="text-xs text-muted-foreground mt-1">İndirim Fırsatı</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Filtered Products Grid */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-foreground">
              {activeTab === "Tümü" ? "Popüler Ürünler" : activeTab}
            </h2>
            <Link to="/urunler" className="text-xs font-bold text-primary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {displayProducts.map((product) => (
              <div key={product.id} className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-smooth bg-white">
                <Link to={`/urunler/${product.slug}`}>
                  <div className="relative overflow-hidden bg-muted aspect-[3/4]">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                    {product.oldPrice && (
                      <span className="absolute bottom-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded">%{getDiscountPercent(product.price, product.oldPrice)}</span>
                    )}
                    <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth shadow-sm">
                      <Heart className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  </div>
                </Link>
                <div className="p-3">
                  <h3 className="text-xs font-medium text-foreground line-clamp-2 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-1"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span className="text-[10px] text-muted-foreground">{product.rating}</span></div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                    {product.oldPrice && <span className="text-[10px] line-through text-muted-foreground">{formatPrice(product.oldPrice)}</span>}
                  </div>
                  <button onClick={() => addItem(product)} className="w-full text-xs font-bold py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers - Horizontal */}
      {bestSellers.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-lg font-black text-foreground mb-5">Çok Satanlar</h2>
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin">
            {bestSellers.map((product) => (
              <div key={product.id} className="min-w-[170px] max-w-[170px] shrink-0 bg-white rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-smooth">
                <Link to={`/urunler/${product.slug}`}>
                  <div className="relative overflow-hidden bg-muted aspect-square">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                    <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">{product.badge}</span>
                  </div>
                </Link>
                <div className="p-2.5">
                  <h3 className="text-xs font-medium text-foreground line-clamp-2 mb-1">{product.name}</h3>
                  <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                  <button onClick={() => addItem(product)} className="w-full mt-1.5 text-[10px] font-bold py-1.5 rounded border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                    Ekle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Senin İçin Önerilenler */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-black text-foreground mb-5">💡 Senin İçin Önerilenler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {products.slice(4, 16).map((product) => (
              <Link key={product.id} to={`/urunler/${product.slug}`} className="bg-white rounded-lg border border-border p-2.5 hover:shadow-md transition-smooth group">
                <div className="overflow-hidden rounded bg-muted aspect-square mb-2"><img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" /></div>
                <h3 className="text-[11px] font-medium text-foreground line-clamp-2 mb-1">{product.name}</h3>
                <span className="text-xs font-black text-primary">{formatPrice(product.price)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* New Products */}
      {newProducts.length > 0 && (
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-black text-foreground mb-5">Yeni Ürünler</h2>
            <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">
              {newProducts.map((product) => (
                <Link key={product.id} to={`/urunler/${product.slug}`} className="min-w-[200px] max-w-[200px] shrink-0 bg-muted/30 rounded-xl p-3 group card-hover border border-border">
                  <div className="overflow-hidden rounded-lg bg-muted aspect-square mb-3"><img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" /></div>
                  <span className="text-[10px] font-bold text-accent uppercase">Yeni</span>
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2 mt-0.5">{product.name}</h3>
                  <span className="text-base font-black text-primary mt-1 block">{formatPrice(product.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-lg font-black text-foreground mb-5">Tüm Kategoriler</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/kategori/${cat.slug}`} className="bg-white rounded-xl p-3 text-center group hover:shadow-lg transition-smooth border border-border">
              <span className="text-2xl mb-1 block">{cat.icon}</span>
              <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary">{cat.name.split(" ")[0]}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link to="/demo/trendyol" className="flex items-center gap-2 mb-4"><Package className="w-5 h-5 text-primary" /><span className="text-lg font-black text-primary">nipo</span></Link>
              <p className="text-xs text-muted-foreground leading-relaxed">Markana Renk Kat!</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-foreground">Ürünler</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">{categories.slice(0, 5).map((c) => <li key={c.id}><Link to={`/kategori/${c.slug}`} className="hover:text-primary">{c.name}</Link></li>)}</ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-foreground">Kurumsal</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><Link to="/kurumsal" className="hover:text-primary">Hakkımızda</Link></li>
                <li><Link to="/iletisim" className="hover:text-primary">İletişim</Link></li>
                <li><Link to="/sss" className="hover:text-primary">S.S.S</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-foreground">Yardım</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><Link to="/kargo-bilgileri" className="hover:text-primary">Kargo</Link></li>
                <li><Link to="/iade-kosullari" className="hover:text-primary">İade</Link></li>
                <li><Link to="/gizlilik" className="hover:text-primary">Gizlilik</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-[11px] text-muted-foreground">
            © 2026 Nipo Ambalaj | <Link to="/" className="text-primary underline">Ana Siteye Dön</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoTrendyol;
