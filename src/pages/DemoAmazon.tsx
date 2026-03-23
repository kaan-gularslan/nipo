import { Link } from "react-router-dom";
import { ChevronRight, Star, ShoppingCart } from "lucide-react";
import { products, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";

import slideUrunler from "@/assets/slides/slide-urunler.jpg";

const categoryCards = [
  { title: "Baskılı Kutular", subtitle: "Pizza, lahmacun, kargo kutuları", path: "/kategori/oluklu-kutu", emoji: "📦" },
  { title: "Kağıt Çantalar", subtitle: "Kraft ve lüks çanta çeşitleri", path: "/kategori/baski-canta", emoji: "👜" },
  { title: "Bardak & Kase", subtitle: "Karton bardak, gıda kasesi", path: "/kategori/bardak", emoji: "🥤" },
  { title: "Etiket & Sticker", subtitle: "Barkod, ürün etiketi", path: "/kategori/etiket", emoji: "🏷️" },
];

const dealProducts = products.filter((p) => p.oldPrice).slice(0, 4);
const allProducts = products.slice(0, 8);
const recentProducts = products.slice(8, 16);

const DemoAmazonHome = () => {
  const { addItem } = useCart();
  const { demoLink } = useDemo();

  return (
    <div className="bg-muted/40">
      {/* Hero */}
      <div className="relative h-56 md:h-80 overflow-hidden">
        <img src={slideUrunler} alt="Ambalajda Büyük Fırsat" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-primary-foreground max-w-lg">
            <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">Özel Fiyat</span>
            <h1 className="text-2xl md:text-4xl font-black mt-3 mb-2 drop-shadow-lg">Ambalajda Büyük Fırsat</h1>
            <p className="text-sm opacity-90 mb-5">Baskılı kutu, çanta ve bardaklarda toplu sipariş indirimi</p>
            <Link to={demoLink("/urunler")} className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/90 inline-flex items-center gap-1">Alışverişe Başla <ChevronRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryCards.map((card) => (
            <Link key={card.title} to={demoLink(card.path)} className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition-smooth group">
              <h3 className="text-sm font-bold text-foreground mb-1">{card.title}</h3>
              <p className="text-[10px] text-muted-foreground mb-3">{card.subtitle}</p>
              <span className="text-4xl block mb-2">{card.emoji}</span>
              <span className="text-xs font-bold text-primary group-hover:text-secondary flex items-center gap-0.5">Hemen Keşfet <ChevronRight className="w-3 h-3" /></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Deals */}
      {dealProducts.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black text-foreground">Günün Fırsatları</h2>
              <Link to={demoLink("/kampanyalar")} className="text-xs font-bold text-primary flex items-center gap-0.5">Tümünü Gör <ChevronRight className="w-3.5 h-3.5" /></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dealProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={demoLink(`/urunler/${product.slug}`)}>
                    <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-2">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" />
                      <span className="absolute bottom-0 inset-x-0 bg-secondary text-secondary-foreground text-center text-xs font-bold py-1">%{getDiscountPercent(product.price, product.oldPrice!)} İndirim</span>
                    </div>
                  </Link>
                  <div className="w-full bg-muted rounded-full h-1.5 mb-2"><div className="bg-secondary h-1.5 rounded-full" style={{ width: `${Math.min(85, 40 + product.id * 7)}%` }} /></div>
                  <p className="text-[10px] text-secondary font-bold mb-1">Fırsat neredeyse bitti!</p>
                  <h3 className="text-xs font-medium text-foreground line-clamp-2">{product.name}</h3>
                  <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Products */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg p-5 shadow-lg">
          <h2 className="text-lg font-black text-foreground mb-4">Sizin İçin Seçtiklerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allProducts.map((product) => (
              <div key={product.id} className="group border border-border rounded-lg p-3 hover:shadow-lg transition-smooth">
                <Link to={demoLink(`/urunler/${product.slug}`)}>
                  <div className="overflow-hidden rounded bg-muted aspect-square mb-2"><img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" /></div>
                </Link>
                <Link to={demoLink(`/urunler/${product.slug}`)}>
                  <h3 className="text-xs text-primary hover:text-secondary hover:underline line-clamp-2 mb-1">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-border"}`} />)}
                  <span className="text-[10px] text-muted-foreground ml-1">{product.rating}</span>
                </div>
                <span className="text-base font-black text-foreground">{formatPrice(product.price)}</span>
                {product.oldPrice && <span className="text-xs line-through text-muted-foreground ml-1">{formatPrice(product.oldPrice)}</span>}
                <button onClick={() => addItem(product)} className="w-full mt-2 bg-secondary text-secondary-foreground py-2 rounded-lg text-xs font-bold hover:bg-secondary/90">Sepete Ekle</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg p-5 shadow-lg">
          <h2 className="text-lg font-black text-foreground mb-4">Keşfetmeye Devam Et</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
            {recentProducts.map((product) => (
              <Link key={product.id} to={demoLink(`/urunler/${product.slug}`)} className="min-w-[150px] max-w-[150px] shrink-0 group">
                <div className="overflow-hidden rounded bg-muted aspect-square mb-2"><img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" /></div>
                <h3 className="text-[11px] text-primary hover:text-secondary line-clamp-2">{product.name}</h3>
                <span className="text-sm font-bold text-foreground">{formatPrice(product.price)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoAmazonHome;
