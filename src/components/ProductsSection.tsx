import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, Star, ChevronRight, ChevronLeft, ArrowRight, Heart, Zap, TrendingUp, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";

import kutuImg from "@/assets/products/kutu-cesitleri.jpg";
import cantaImg from "@/assets/products/kagit-cantalar.jpg";
import gidaImg from "@/assets/products/gida-ambalaj.jpg";
import etiketImg from "@/assets/products/etiket-baski.jpg";
import koruyucuImg from "@/assets/products/koruyucu-ambalaj.jpg";
import strecImg from "@/assets/products/streç-bant.jpg";

const allProducts = [
  { id: 1, name: "Pizza Kutusu 26cm Baskılı", cat: "Kutu", price: "₺3.20", oldPrice: "₺4.50", img: kutuImg, badge: "Çok Satan", rating: 4.8, reviews: 283, coupon: "Ek 50 TL Kupon" },
  { id: 2, name: "Lahmacun Kutusu Kraft", cat: "Kutu", price: "₺2.80", oldPrice: null, img: kutuImg, badge: null, rating: 4.5, reviews: 127, coupon: null },
  { id: 3, name: "E-Ticaret Kargo Kutusu (20x15x10)", cat: "Kutu", price: "₺4.50", oldPrice: "₺5.90", img: kutuImg, badge: "İndirimli", rating: 4.9, reviews: 456, coupon: "Ek 100 TL Kupon" },
  { id: 4, name: "Hamburger Kutusu Baskılı", cat: "Kutu", price: "₺1.90", oldPrice: null, img: kutuImg, badge: null, rating: 4.3, reviews: 89, coupon: null },
  { id: 5, name: "Kraft Çanta 26x32 (Baskılı)", cat: "Çanta", price: "₺5.50", oldPrice: "₺7.00", img: cantaImg, badge: "Yeni", rating: 4.7, reviews: 195, coupon: "Ek 200 TL Kupon" },
  { id: 6, name: "Karton Çanta Lüks (Laminasyonlu)", cat: "Çanta", price: "₺8.90", oldPrice: null, img: cantaImg, badge: null, rating: 4.6, reviews: 64, coupon: null },
  { id: 7, name: "Karton Bardak 8oz (Baskılı)", cat: "Bardak", price: "₺0.65", oldPrice: "₺0.90", img: gidaImg, badge: "Çok Satan", rating: 4.8, reviews: 512, coupon: "Ek 50 TL Kupon" },
  { id: 8, name: "Gıda Kasesi Kraft 750ml", cat: "Kase", price: "₺1.40", oldPrice: null, img: gidaImg, badge: null, rating: 4.4, reviews: 73, coupon: null },
  { id: 9, name: "Barkod Etiketi 40x20mm (Rulo)", cat: "Etiket", price: "₺45.00", oldPrice: "₺55.00", img: etiketImg, badge: "İndirimli", rating: 4.5, reviews: 234, coupon: null },
  { id: 10, name: "Ürün Etiketi Özel Tasarım", cat: "Etiket", price: "₺0.12", oldPrice: null, img: etiketImg, badge: null, rating: 4.6, reviews: 156, coupon: null },
  { id: 11, name: "Balonlu Naylon 100cm (50m Rulo)", cat: "Koruyucu", price: "₺185.00", oldPrice: "₺220.00", img: koruyucuImg, badge: null, rating: 4.7, reviews: 98, coupon: "Ek 300 TL Kupon" },
  { id: 12, name: "Köpük Levha 100x200cm", cat: "Koruyucu", price: "₺28.00", oldPrice: null, img: koruyucuImg, badge: null, rating: 4.3, reviews: 45, coupon: null },
  { id: 13, name: "Streç Film 17mic 500m", cat: "Streç", price: "₺95.00", oldPrice: "₺120.00", img: strecImg, badge: "Çok Satan", rating: 4.9, reviews: 367, coupon: "Ek 150 TL Kupon" },
  { id: 14, name: "Koli Bandı Şeffaf 45mm", cat: "Bant", price: "₺12.50", oldPrice: null, img: strecImg, badge: null, rating: 4.4, reviews: 201, coupon: null },
  { id: 15, name: "Maskeleme Bandı 48mm", cat: "Bant", price: "₺18.00", oldPrice: "₺22.00", img: strecImg, badge: "Yeni", rating: 4.2, reviews: 67, coupon: null },
  { id: 16, name: "Peçete Baskılı 33x33 (1000 Adet)", cat: "Peçete", price: "₺320.00", oldPrice: "₺380.00", img: gidaImg, badge: "İndirimli", rating: 4.6, reviews: 142, coupon: "Ek 500 TL Kupon" },
];

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Çok Satan": return "bg-secondary text-secondary-foreground";
    case "Yeni": return "bg-accent text-accent-foreground";
    case "İndirimli": return "bg-primary text-primary-foreground";
    default: return "";
  }
};

const ProductCard = ({ product }: { product: typeof allProducts[0] }) => (
  <div className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-nipo-hover transition-smooth flex-shrink-0 w-[220px] md:w-[230px]">
    <div className="relative aspect-square overflow-hidden bg-muted/20">
      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
      
      {/* Favorite */}
      <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-card/90 shadow-sm flex items-center justify-center text-muted-foreground hover:text-secondary transition-smooth z-10">
        <Heart className="w-4 h-4" />
      </button>

      {/* Badge */}
      {product.badge && (
        <span className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold ${getBadgeColor(product.badge)} z-10`}>
          {product.badge}
        </span>
      )}

      {/* Discount percentage */}
      {product.oldPrice && (
        <span className="absolute bottom-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
          %{Math.round((1 - parseFloat(product.price.replace("₺", "").replace(",", ".")) / parseFloat(product.oldPrice.replace("₺", "").replace(",", "."))) * 100)}
        </span>
      )}

      {/* Quick actions */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary/10">
        <button className="p-2.5 rounded-full bg-card shadow-md text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>

    <div className="p-3">
      {/* Coupon badge - Hepsiburada style */}
      {product.coupon && (
        <span className="inline-block text-[10px] font-bold text-secondary mb-1.5">{product.coupon}</span>
      )}
      
      <h3 className="text-[12px] font-medium text-foreground mb-1.5 line-clamp-2 leading-snug min-h-[32px] group-hover:text-primary transition-smooth">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        <div className="flex items-center gap-0.5">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="text-[11px] font-semibold text-foreground">{product.rating}</span>
        </div>
        <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1.5 mb-2.5">
        <span className="text-base font-black text-primary">{product.price}</span>
        {product.oldPrice && (
          <span className="text-[11px] text-muted-foreground line-through">{product.oldPrice}</span>
        )}
      </div>

      {/* Add to cart */}
      <Button size="sm" className="w-full text-[11px] h-8 rounded-lg gap-1">
        <ShoppingCart className="w-3 h-3" />
        Sepete Ekle
      </Button>
    </div>
  </div>
);

// Horizontal scrollable product carousel
const ProductCarousel = ({ products, title, icon: Icon, highlight }: {
  products: typeof allProducts;
  title: string;
  icon: React.ElementType;
  highlight: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -480 : 480, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-nipo-blue-light flex items-center justify-center text-primary">
            <Icon className="w-4 h-4" />
          </div>
          <h2 className="text-lg md:text-xl font-black text-foreground">
            {title} <span className="text-gradient-nipo">{highlight}</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => scroll("left")} className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-smooth">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => scroll("right")} className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-smooth">
            <ChevronRight className="w-4 h-4" />
          </button>
          <Link to="/urunler" className="hidden md:flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-smooth ml-2">
            Tümü <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Çok Satanlar */}
        <ProductCarousel
          products={allProducts.filter(p => p.badge === "Çok Satan" || p.rating >= 4.7)}
          title="Popüler ürünlerden"
          highlight="seçtik"
          icon={TrendingUp}
        />

        {/* Campaign Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl gradient-hero-warm p-6 md:p-8 mb-8 text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black">Toptan Alımlarda %25'e Varan İndirim!</h3>
                <p className="text-primary-foreground/60 text-sm mt-0.5">1000 adet ve üzeri siparişlerde özel fiyat avantajı</p>
              </div>
            </div>
            <Button variant="hero" className="rounded-lg shrink-0 gap-1.5" asChild>
              <Link to="/iletisim">Teklif Al <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </motion.div>

        {/* Yeni Ürünler */}
        <ProductCarousel
          products={allProducts.filter(p => p.badge === "Yeni" || p.id > 8)}
          title="Yeni"
          highlight="ürünler"
          icon={Sparkles}
        />

        {/* Free shipping banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-nipo-green-light border border-accent/20 p-5 mb-8 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">Ücretsiz Kargo</h3>
            <p className="text-xs text-muted-foreground">500₺ ve üzeri siparişlerinizde kargo tamamen ücretsiz!</p>
          </div>
          <Button size="sm" variant="accent" className="ml-auto rounded-lg shrink-0" asChild>
            <Link to="/urunler">Alışverişe Başla</Link>
          </Button>
        </motion.div>

        {/* İndirimli Ürünler */}
        <ProductCarousel
          products={allProducts.filter(p => p.oldPrice)}
          title="İndirimli"
          highlight="ürünler"
          icon={Zap}
        />

        {/* All Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg md:text-xl font-black text-foreground">
              Tüm <span className="text-gradient-nipo">Ürünler</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {allProducts.map((product) => (
              <div key={product.id} className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-nipo-hover transition-smooth">
                <div className="relative aspect-square overflow-hidden bg-muted/20">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                  <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-card/90 shadow-sm flex items-center justify-center text-muted-foreground hover:text-secondary transition-smooth z-10">
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                  {product.badge && (
                    <span className={`absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold ${getBadgeColor(product.badge)} z-10`}>
                      {product.badge}
                    </span>
                  )}
                  {product.oldPrice && (
                    <span className="absolute bottom-2 left-2 bg-secondary text-secondary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
                      %{Math.round((1 - parseFloat(product.price.replace("₺", "").replace(",", ".")) / parseFloat(product.oldPrice.replace("₺", "").replace(",", "."))) * 100)}
                    </span>
                  )}
                </div>
                <div className="p-2.5">
                  {product.coupon && (
                    <span className="inline-block text-[9px] font-bold text-secondary mb-1">{product.coupon}</span>
                  )}
                  <h3 className="text-[11px] font-medium text-foreground mb-1 line-clamp-2 leading-snug min-h-[28px] group-hover:text-primary transition-smooth">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-0.5 mb-1.5">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-semibold">{product.rating}</span>
                    <span className="text-[9px] text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-black text-primary">{product.price}</span>
                    {product.oldPrice && <span className="text-[10px] text-muted-foreground line-through">{product.oldPrice}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="rounded-lg px-10 gap-2">
              Daha Fazla Ürün Yükle
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
