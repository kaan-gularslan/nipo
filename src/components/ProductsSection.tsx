import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, Star, ChevronRight, ArrowRight, Zap, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { products, formatPrice, getDiscountPercent, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

import kutuImg from "@/assets/products/kutu-cesitleri.jpg";
import cantaImg from "@/assets/products/kagit-cantalar.jpg";
import gidaImg from "@/assets/products/gida-ambalaj.jpg";
import etiketImg from "@/assets/products/etiket-baski.jpg";
import koruyucuImg from "@/assets/products/koruyucu-ambalaj.jpg";
import strecImg from "@/assets/products/streç-bant.jpg";

const categoryCards = [
  { name: "Baskılı Kutular", slug: "oluklu-kutu", count: 45, img: kutuImg, icon: "📦" },
  { name: "Kağıt Çantalar", slug: "baski-canta", count: 32, img: cantaImg, icon: "👜" },
  { name: "Bardak & Kase", slug: "bardak", count: 28, img: gidaImg, icon: "🥤" },
  { name: "Etiket & Sticker", slug: "etiket", count: 56, img: etiketImg, icon: "🏷️" },
  { name: "Koruyucu Ambalaj", slug: "strec-bant", count: 18, img: koruyucuImg, icon: "🛡️" },
  { name: "Streç & Bant", slug: "strec-bant", count: 24, img: strecImg, icon: "📋" },
];

const getBadgeStyles = (badge: string) => {
  switch (badge) {
    case "Çok Satan": return "bg-secondary text-secondary-foreground";
    case "Yeni": return "bg-accent text-accent-foreground";
    case "İndirimli": return "bg-primary text-primary-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const ProductCard = ({ product, delay }: { product: Product; delay: string }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({ title: "Sepete Eklendi ✓", description: `${product.name} sepetinize eklendi.` });
  };

  return (
    <article className={`group bg-card rounded-xl border border-border/60 overflow-hidden card-hover animate-fade-up ${delay}`}>
      <Link to={`/urunler/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-muted/30">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" loading="lazy" />
          {product.badge && (
            <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-sm ${getBadgeStyles(product.badge)}`}>
              {product.badge}
            </span>
          )}
          {product.oldPrice && (
            <span className="absolute top-2.5 right-2.5 w-10 h-10 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold flex items-center justify-center shadow-sm">
              %{getDiscountPercent(product.price, product.oldPrice)}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end justify-center pb-5">
            <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="p-2.5 rounded-full bg-card shadow-md text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Eye className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider mb-1.5">{product.categoryLabel}</p>
        <Link to={`/urunler/${product.slug}`}>
          <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-smooth">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-0.5 mb-2.5" aria-label={`${product.rating} üzerinden 5 yıldız`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted/60"}`} />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1.5">({product.rating})</span>
        </div>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-black text-primary">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <Button size="sm" className="w-full text-xs rounded-lg gap-1.5" onClick={handleAddToCart}>
          <ShoppingCart className="w-3.5 h-3.5" />
          Sepete Ekle
        </Button>
      </div>
    </article>
  );
};

const SectionHeader = ({
  title, highlight, linkText = "Tümünü Gör", linkTo = "/urunler", icon: Icon,
}: {
  title: string; highlight: string; linkText?: string; linkTo?: string; icon?: React.ElementType;
}) => (
  <div className="flex items-center justify-between mb-7 animate-fade-up">
    <div className="flex items-center gap-3">
      {Icon && (
        <div className="w-9 h-9 rounded-lg bg-nipo-blue-light flex items-center justify-center text-primary">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <h2 className="text-xl md:text-2xl font-black text-foreground">
        {title} <span className="text-gradient-nipo">{highlight}</span>
      </h2>
    </div>
    <Link to={linkTo} className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-smooth group">
      {linkText} <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-smooth" />
    </Link>
  </div>
);

const delayClass = (i: number) => `delay-${Math.min(i + 1, 12)}`;

const ProductsSection = () => {
  return (
    <section id="products" className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Cards */}
        <div className="mb-14">
          <SectionHeader title="" highlight="Kategoriler" icon={Sparkles} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {categoryCards.map((cat, i) => (
              <Link
                key={cat.name}
                to={`/kategori/${cat.slug}`}
                className={`group block bg-card rounded-xl border border-border/60 overflow-hidden card-hover animate-fade-up ${delayClass(i)}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover img-zoom" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-2xl">{cat.icon}</span>
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-smooth">{cat.name}</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{cat.count} ürün</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="section-divider mb-14" />

        {/* Popular Products */}
        <div className="mb-14">
          <SectionHeader title="Çok Satan" highlight="Ürünler" icon={TrendingUp} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.filter(p => p.badge === "Çok Satan").map((product, i) => (
              <ProductCard key={product.id} product={product} delay={delayClass(i)} />
            ))}
          </div>
        </div>

        {/* Campaign Banner */}
        <div className="rounded-2xl gradient-hero-warm p-8 md:p-12 mb-14 text-primary-foreground relative overflow-hidden animate-fade-up">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-5">
              <Zap className="w-3 h-3" /> Kampanya
            </span>
            <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">Toptan Alımlarda %25'e Varan İndirim!</h2>
            <p className="text-primary-foreground/70 mb-7 text-sm md:text-base max-w-md leading-relaxed">1000 adet ve üzeri siparişlerinizde özel fiyat avantajlarından yararlanın.</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" className="rounded-full px-8" asChild>
                <Link to="/iletisim">Teklif Al</Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-full px-6" asChild>
                <Link to="/kampanyalar">Kampanyaları Gör</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* New Products */}
        <div className="mb-14">
          <SectionHeader title="Yeni" highlight="Ürünler" icon={Sparkles} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.filter(p => p.badge === "Yeni").map((product, i) => (
              <ProductCard key={product.id} product={product} delay={delayClass(i)} />
            ))}
          </div>
        </div>

        <div className="section-divider mb-14" />

        {/* All Products */}
        <div>
          <SectionHeader title="Tüm" highlight="Ürünler" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={delayClass(i)} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="rounded-full px-10 gap-2 hover:bg-primary hover:text-primary-foreground transition-smooth" asChild>
              <Link to="/urunler">
                Daha Fazla Ürün Yükle
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
