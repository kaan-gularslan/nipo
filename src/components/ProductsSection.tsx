import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, Star, ChevronRight } from "lucide-react";

import kutuImg from "@/assets/products/kutu-cesitleri.jpg";
import cantaImg from "@/assets/products/kagit-cantalar.jpg";
import gidaImg from "@/assets/products/gida-ambalaj.jpg";
import etiketImg from "@/assets/products/etiket-baski.jpg";
import koruyucuImg from "@/assets/products/koruyucu-ambalaj.jpg";
import strecImg from "@/assets/products/streç-bant.jpg";

const allProducts = [
  // Kutu ürünleri
  { id: 1, name: "Pizza Kutusu 26cm Baskılı", cat: "Kutu", price: "₺3.20", oldPrice: "₺4.50", img: kutuImg, badge: "Çok Satan", rating: 4.8 },
  { id: 2, name: "Lahmacun Kutusu Kraft", cat: "Kutu", price: "₺2.80", oldPrice: null, img: kutuImg, badge: null, rating: 4.5 },
  { id: 3, name: "E-Ticaret Kargo Kutusu (20x15x10)", cat: "Kutu", price: "₺4.50", oldPrice: "₺5.90", img: kutuImg, badge: "İndirimli", rating: 4.9 },
  { id: 4, name: "Hamburger Kutusu Baskılı", cat: "Kutu", price: "₺1.90", oldPrice: null, img: kutuImg, badge: null, rating: 4.3 },
  // Çanta ürünleri
  { id: 5, name: "Kraft Çanta 26x32 (Baskılı)", cat: "Çanta", price: "₺5.50", oldPrice: "₺7.00", img: cantaImg, badge: "Yeni", rating: 4.7 },
  { id: 6, name: "Karton Çanta Lüks (Laminasyonlu)", cat: "Çanta", price: "₺8.90", oldPrice: null, img: cantaImg, badge: null, rating: 4.6 },
  // Gıda
  { id: 7, name: "Karton Bardak 8oz (Baskılı)", cat: "Bardak", price: "₺0.65", oldPrice: "₺0.90", img: gidaImg, badge: "Çok Satan", rating: 4.8 },
  { id: 8, name: "Gıda Kasesi Kraft 750ml", cat: "Kase", price: "₺1.40", oldPrice: null, img: gidaImg, badge: null, rating: 4.4 },
  // Etiket
  { id: 9, name: "Barkod Etiketi 40x20mm (Rulo)", cat: "Etiket", price: "₺45.00", oldPrice: "₺55.00", img: etiketImg, badge: "İndirimli", rating: 4.5 },
  { id: 10, name: "Ürün Etiketi Özel Tasarım", cat: "Etiket", price: "₺0.12", oldPrice: null, img: etiketImg, badge: null, rating: 4.6 },
  // Koruyucu
  { id: 11, name: "Balonlu Naylon 100cm (50m Rulo)", cat: "Koruyucu", price: "₺185.00", oldPrice: "₺220.00", img: koruyucuImg, badge: null, rating: 4.7 },
  { id: 12, name: "Köpük Levha 100x200cm", cat: "Koruyucu", price: "₺28.00", oldPrice: null, img: koruyucuImg, badge: null, rating: 4.3 },
  // Streç & Bant
  { id: 13, name: "Streç Film 17mic 500m", cat: "Streç", price: "₺95.00", oldPrice: "₺120.00", img: strecImg, badge: "Çok Satan", rating: 4.9 },
  { id: 14, name: "Koli Bandı Şeffaf 45mm", cat: "Bant", price: "₺12.50", oldPrice: null, img: strecImg, badge: null, rating: 4.4 },
  { id: 15, name: "Maskeleme Bandı 48mm", cat: "Bant", price: "₺18.00", oldPrice: "₺22.00", img: strecImg, badge: "Yeni", rating: 4.2 },
  { id: 16, name: "Peçete Baskılı 33x33 (1000 Adet)", cat: "Peçete", price: "₺320.00", oldPrice: "₺380.00", img: gidaImg, badge: "İndirimli", rating: 4.6 },
];

const categoryCards = [
  { name: "Baskılı Kutular", count: 45, img: kutuImg, color: "bg-nipo-blue-light" },
  { name: "Kağıt Çantalar", count: 32, img: cantaImg, color: "bg-nipo-pink-light" },
  { name: "Bardak & Kase", count: 28, img: gidaImg, color: "bg-nipo-green-light" },
  { name: "Etiket & Sticker", count: 56, img: etiketImg, color: "bg-nipo-blue-light" },
  { name: "Koruyucu Ambalaj", count: 18, img: koruyucuImg, color: "bg-nipo-pink-light" },
  { name: "Streç & Bant", count: 24, img: strecImg, color: "bg-nipo-green-light" },
];

const ProductCard = ({ product, index }: { product: typeof allProducts[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-nipo transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative aspect-square overflow-hidden">
      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      {product.badge && (
        <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase ${
          product.badge === "Çok Satan" ? "bg-secondary text-secondary-foreground" :
          product.badge === "Yeni" ? "bg-accent text-accent-foreground" :
          "bg-primary text-primary-foreground"
        }`}>
          {product.badge}
        </span>
      )}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
        <button className="p-2.5 rounded-full bg-card/90 text-primary hover:bg-card transition-colors shadow-md">
          <Eye className="w-4 h-4" />
        </button>
        <button className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors shadow-md">
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="p-4">
      <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider mb-1">{product.cat}</p>
      <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 leading-snug">{product.name}</h3>
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
        ))}
        <span className="text-[10px] text-muted-foreground ml-1">({product.rating})</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-black text-primary">{product.price}</span>
        {product.oldPrice && (
          <span className="text-sm text-muted-foreground line-through">{product.oldPrice}</span>
        )}
      </div>
      <Button size="sm" className="w-full mt-3 text-xs">
        <ShoppingCart className="w-3.5 h-3.5" />
        Sepete Ekle
      </Button>
    </div>
  </motion.div>
);

const ProductsSection = () => {
  return (
    <section id="products" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-foreground">Kategoriler</h2>
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Tümünü Gör <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoryCards.map((cat, i) => (
              <motion.a
                key={cat.name}
                href="#"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-nipo transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-bold text-foreground">{cat.name}</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{cat.count} ürün</p>
                </div>
              </motion.a>
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              Çok Satan <span className="text-gradient-nipo">Ürünler</span>
            </h2>
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Tümünü Gör <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
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
          className="rounded-2xl gradient-hero p-8 md:p-12 mb-14 text-primary-foreground"
        >
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-4">🔥 Kampanya</span>
            <h2 className="text-2xl md:text-4xl font-black mb-3">Toptan Alımlarda %25'e Varan İndirim!</h2>
            <p className="text-primary-foreground/80 mb-6">1000 adet ve üzeri siparişlerinizde özel fiyat avantajlarından yararlanın. Markana Renk Kat!</p>
            <Button variant="hero" size="lg">Teklif Al</Button>
          </div>
        </motion.div>

        {/* New Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              Yeni <span className="text-gradient-nipo">Ürünler</span>
            </h2>
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Tümünü Gör <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              Tüm <span className="text-gradient-nipo">Ürünler</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {allProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">Daha Fazla Ürün Yükle</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
