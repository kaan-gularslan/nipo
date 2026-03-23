import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Heart, Zap } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

import slideEtiket from "@/assets/slides/slide-etiket.jpg";

const campaignCircles = [
  { label: "Süper Fiyat", emoji: "🔥", path: "/kampanyalar" },
  { label: "Yeni Ürün", emoji: "✨", path: "/urunler" },
  { label: "Çok Satan", emoji: "⭐", path: "/urunler" },
  { label: "Kampanya", emoji: "🎯", path: "/kampanyalar" },
  { label: "Ücretsiz Kargo", emoji: "🚚", path: "/urunler" },
  { label: "İndirim", emoji: "💰", path: "/kampanyalar" },
  { label: "Fırsat", emoji: "⚡", path: "/kampanyalar" },
];

const DemoTrendyolHome = () => {
  const { addItem, totalItems } = useCart();
  const { demoLink } = useDemo();
  const [activeTab, setActiveTab] = useState("Tümü");

  const categoryTabs = ["Tümü", "Kutular", "Çantalar", "Bardaklar", "Etiketler", "Peçeteler", "Poşetler"];
  const filteredProducts = activeTab === "Tümü" ? products.slice(0, 12) : products.filter((p) => p.categoryLabel?.includes(activeTab)).slice(0, 12);
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products.slice(0, 12);
  const bestSellers = products.filter((p) => p.badge === "Çok Satan");
  const newProducts = products.filter((p) => p.badge === "Yeni");

  return (
    <div className="bg-muted/20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="h-56 md:h-72 relative">
          <img src={slideEtiket} alt="Ambalajda Süper Fırsatlar" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="text-primary-foreground max-w-md">
              <h2 className="text-2xl md:text-3xl font-black mb-2 drop-shadow-lg">Ambalajda Süper Fırsatlar</h2>
              <p className="text-sm opacity-90 mb-4">Tüm kategorilerde indirimli fiyatlar</p>
              <Link to={demoLink("/kampanyalar")} className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/90 inline-flex items-center gap-1">Fırsatları Gör <ChevronRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 -mt-8 relative z-10 pb-5">
          <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-thin justify-center">
            {campaignCircles.map((item, i) => (
              <Link key={i} to={demoLink(item.path)} className="flex flex-col items-center gap-1.5 min-w-[64px] group">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-smooth border border-border">{item.emoji}</div>
                <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Discount Banners */}
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[{ pct: 5, color: "from-primary/10 to-primary/5", text: "text-primary" }, { pct: 10, color: "from-accent/10 to-accent/5", text: "text-accent" }, { pct: 30, color: "from-secondary/10 to-secondary/5", text: "text-secondary" }, { pct: 50, color: "from-primary/10 to-secondary/5", text: "text-secondary" }].map((item) => (
            <Link key={item.pct} to={demoLink("/kampanyalar")} className={`bg-gradient-to-br ${item.color} rounded-xl border border-border p-4 text-center group hover:shadow-lg`}>
              <span className={`text-3xl font-black ${item.text}`}>%{item.pct}</span>
              <p className="text-xs text-muted-foreground mt-1">İndirim Fırsatı</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-foreground">{activeTab === "Tümü" ? "Popüler Ürünler" : activeTab}</h2>
            <Link to={demoLink("/urunler")} className="text-xs font-bold text-primary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {displayProducts.map((product) => (
              <div key={product.id} className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-smooth bg-white">
                <Link to={demoLink(`/urunler/${product.slug}`)}>
                  <div className="relative overflow-hidden bg-muted aspect-[3/4]">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                    {product.oldPrice && <span className="absolute bottom-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded">%{getDiscountPercent(product.price, product.oldPrice)}</span>}
                    <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth shadow-sm"><Heart className="w-3.5 h-3.5 text-muted-foreground" /></button>
                  </div>
                </Link>
                <div className="p-3">
                  <h3 className="text-xs font-medium text-foreground line-clamp-2 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-1"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span className="text-[10px] text-muted-foreground">{product.rating}</span></div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                    {product.oldPrice && <span className="text-[10px] line-through text-muted-foreground">{formatPrice(product.oldPrice)}</span>}
                  </div>
                  <button onClick={() => addItem(product)} className="w-full text-xs font-bold py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">Sepete Ekle</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      {bestSellers.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-lg font-black text-foreground mb-5">Çok Satanlar</h2>
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin">
            {bestSellers.map((product) => (
              <div key={product.id} className="min-w-[170px] max-w-[170px] shrink-0 bg-white rounded-xl border border-border overflow-hidden group hover:shadow-lg">
                <Link to={demoLink(`/urunler/${product.slug}`)}>
                  <div className="relative overflow-hidden bg-muted aspect-square"><img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" /><span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">{product.badge}</span></div>
                </Link>
                <div className="p-2.5">
                  <h3 className="text-xs font-medium text-foreground line-clamp-2 mb-1">{product.name}</h3>
                  <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                  <button onClick={() => addItem(product)} className="w-full mt-1.5 text-[10px] font-bold py-1.5 rounded border border-primary text-primary hover:bg-primary hover:text-primary-foreground">Ekle</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-black text-foreground mb-5">💡 Senin İçin Önerilenler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {products.slice(4, 16).map((product) => (
              <Link key={product.id} to={demoLink(`/urunler/${product.slug}`)} className="bg-white rounded-lg border border-border p-2.5 hover:shadow-md group">
                <div className="overflow-hidden rounded bg-muted aspect-square mb-2"><img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" /></div>
                <h3 className="text-[11px] font-medium text-foreground line-clamp-2 mb-1">{product.name}</h3>
                <span className="text-xs font-black text-primary">{formatPrice(product.price)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-lg font-black text-foreground mb-5">Tüm Kategoriler</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <Link key={cat.id} to={demoLink(`/kategori/${cat.slug}`)} className="bg-white rounded-xl p-3 text-center group hover:shadow-lg border border-border">
              <span className="text-2xl mb-1 block">{cat.icon}</span>
              <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoTrendyolHome;
