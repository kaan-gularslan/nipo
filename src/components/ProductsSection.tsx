import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, Star, ChevronRight, ArrowRight, Zap, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import kutuImg from "@/assets/products/kutu-cesitleri.jpg";
import cantaImg from "@/assets/products/kagit-cantalar.jpg";
import gidaImg from "@/assets/products/gida-ambalaj.jpg";
import etiketImg from "@/assets/products/etiket-baski.jpg";
import koruyucuImg from "@/assets/products/koruyucu-ambalaj.jpg";
import strecImg from "@/assets/products/streç-bant.jpg";

const allProducts = [
  { id: 1, name: "Pizza Kutusu 26cm Baskılı", cat: "Kutu", price: "₺3.20", oldPrice: "₺4.50", img: kutuImg, badge: "Çok Satan", rating: 4.8 },
  { id: 2, name: "Lahmacun Kutusu Kraft", cat: "Kutu", price: "₺2.80", oldPrice: null, img: kutuImg, badge: null, rating: 4.5 },
  { id: 3, name: "E-Ticaret Kargo Kutusu (20x15x10)", cat: "Kutu", price: "₺4.50", oldPrice: "₺5.90", img: kutuImg, badge: "İndirimli", rating: 4.9 },
  { id: 4, name: "Hamburger Kutusu Baskılı", cat: "Kutu", price: "₺1.90", oldPrice: null, img: kutuImg, badge: null, rating: 4.3 },
  { id: 5, name: "Kraft Çanta 26x32 (Baskılı)", cat: "Çanta", price: "₺5.50", oldPrice: "₺7.00", img: cantaImg, badge: "Yeni", rating: 4.7 },
  { id: 6, name: "Karton Çanta Lüks (Laminasyonlu)", cat: "Çanta", price: "₺8.90", oldPrice: null, img: cantaImg, badge: null, rating: 4.6 },
  { id: 7, name: "Karton Bardak 8oz (Baskılı)", cat: "Bardak", price: "₺0.65", oldPrice: "₺0.90", img: gidaImg, badge: "Çok Satan", rating: 4.8 },
  { id: 8, name: "Gıda Kasesi Kraft 750ml", cat: "Kase", price: "₺1.40", oldPrice: null, img: gidaImg, badge: null, rating: 4.4 },
  { id: 9, name: "Barkod Etiketi 40x20mm (Rulo)", cat: "Etiket", price: "₺45.00", oldPrice: "₺55.00", img: etiketImg, badge: "İndirimli", rating: 4.5 },
  { id: 10, name: "Ürün Etiketi Özel Tasarım", cat: "Etiket", price: "₺0.12", oldPrice: null, img: etiketImg, badge: null, rating: 4.6 },
  { id: 11, name: "Balonlu Naylon 100cm (50m Rulo)", cat: "Koruyucu", price: "₺185.00", oldPrice: "₺220.00", img: koruyucuImg, badge: null, rating: 4.7 },
  { id: 12, name: "Köpük Levha 100x200cm", cat: "Koruyucu", price: "₺28.00", oldPrice: null, img: koruyucuImg, badge: null, rating: 4.3 },
  { id: 13, name: "Streç Film 17mic 500m", cat: "Streç", price: "₺95.00", oldPrice: "₺120.00", img: strecImg, badge: "Çok Satan", rating: 4.9 },
  { id: 14, name: "Koli Bandı Şeffaf 45mm", cat: "Bant", price: "₺12.50", oldPrice: null, img: strecImg, badge: null, rating: 4.4 },
  { id: 15, name: "Maskeleme Bandı 48mm", cat: "Bant", price: "₺18.00", oldPrice: "₺22.00", img: strecImg, badge: "Yeni", rating: 4.2 },
  { id: 16, name: "Peçete Baskılı 33x33 (1000 Adet)", cat: "Peçete", price: "₺320.00", oldPrice: "₺380.00", img: gidaImg, badge: "İndirimli", rating: 4.6 },
];

const categoryCards = [
  { name: "Baskılı Kutular", count: 45, img: kutuImg, icon: "📦" },
  { name: "Kağıt Çantalar", count: 32, img: cantaImg, icon: "👜" },
  { name: "Bardak & Kase", count: 28, img: gidaImg, icon: "🥤" },
  { name: "Etiket & Sticker", count: 56, img: etiketImg, icon: "🏷️" },
  { name: "Koruyucu Ambalaj", count: 18, img: koruyucuImg, icon: "🛡️" },
  { name: "Streç & Bant", count: 24, img: strecImg, icon: "📋" },
];

const getBadgeStyles = (badge: string) => {
  switch (badge) {
    case "Çok Satan": return "bg-secondary text-secondary-foreground";
    case "Yeni": return "bg-accent text-accent-foreground";
    case "İndirimli": return "bg-primary text-primary-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const ProductCard = ({ product, index }: { product: typeof allProducts[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    className="group bg-card rounded-xl border border-border/60 overflow-hidden hover:shadow-nipo-hover transition-smooth hover:-translate-y-1"
  >
    <div className="relative aspect-square overflow-hidden bg-muted/30">
      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out" />
      {product.badge && (
        <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase shadow-sm ${getBadgeStyles(product.badge)}`}>
          {product.badge}
        </span>
      )}
      {product.oldPrice && (
        <span className="absolute top-2.5 right-2.5 w-10 h-10 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold flex items-center justify-center shadow-sm">
          %{Math.round((1 - parseFloat(product.price.replace("₺", "").replace(",", ".")) / parseFloat(product.oldPrice.replace("₺", "").replace(",", "."))) * 100)}
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/0 to-primary/0 group-hover:from-primary/40 group-hover:to-transparent transition-all duration-500 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
        <div className="flex gap-2">
          <button className="p-2.5 rounded-full bg-card shadow-md text-primary hover:bg-primary hover:text-primary-foreground transition-smooth transform translate-y-4 group-hover:translate-y-0 duration-300">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-full bg-secondary shadow-md text-secondary-foreground hover:bg-secondary/90 transition-smooth transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <div className="p-4">
      <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider mb-1.5">{product.cat}</p>
      <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-smooth">{product.name}</h3>
      <div className="flex items-center gap-0.5 mb-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted/60"}`} />
        ))}
        <span className="text-[10px] text-muted-foreground ml-1.5">({product.rating})</span>
      </div>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-lg font-black text-primary">{product.price}</span>
        {product.oldPrice && (
          <span className="text-xs text-muted-foreground line-through">{product.oldPrice}</span>
        )}
      </div>
      <Button size="sm" className="w-full text-xs rounded-lg gap-1.5">
        <ShoppingCart className="w-3.5 h-3.5" />
        Sepete Ekle
      </Button>
    </div>
  </motion.div>
);

const SectionHeader = ({
  title,
  highlight,
  linkText = "Tümünü Gör",
  linkTo = "/urunler",
  icon: Icon,
}: {
  title: string;
  highlight: string;
  linkText?: string;
  linkTo?: string;
  icon?: React.ElementType;
}) => (
  <div className="flex items-center justify-between mb-7">
    <div className="flex items-center gap-3">
      {Icon && (
        <div className="w-9 h-9 rounded-lg bg-nipo-blue-light flex items-center justify-center text-primary">
          <Icon className="w-4.5 h-4.5" />
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

const ProductsSection = () => {
  return (
    <section id="products" className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionHeader title="" highlight="Kategoriler" icon={Sparkles} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {categoryCards.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to="/urunler"
                  className="group block bg-card rounded-xl border border-border/60 overflow-hidden hover:shadow-nipo-hover transition-smooth hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-2xl">{cat.icon}</span>
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-smooth">{cat.name}</h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{cat.count} ürün</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionHeader title="Çok Satan" highlight="Ürünler" icon={TrendingUp} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {allProducts.filter(p => p.badge === "Çok Satan").map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Campaign Banner */}
        <motion.div
          id="campaigns"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl gradient-hero-warm p-8 md:p-12 mb-14 text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-5">
              <Zap className="w-3 h-3" /> Kampanya
            </span>
            <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">Toptan Alımlarda %25'e Varan İndirim!</h2>
            <p className="text-primary-foreground/70 mb-7 text-sm md:text-base max-w-md">1000 adet ve üzeri siparişlerinizde özel fiyat avantajlarından yararlanın.</p>
            <div className="flex gap-3">
              <Button variant="hero" size="lg" className="rounded-full px-8" asChild>
                <Link to="/iletisim">Teklif Al</Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-full px-6" asChild>
                <Link to="/kampanyalar">Kampanyaları Gör</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* New Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionHeader title="Yeni" highlight="Ürünler" icon={Sparkles} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {allProducts.filter(p => p.badge === "Yeni").map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </motion.div>

        {/* All Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader title="Tüm" highlight="Ürünler" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {allProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="rounded-full px-10 gap-2">
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
