import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

import kutuImg from "@/assets/products/kutu-cesitleri.jpg";
import cantaImg from "@/assets/products/kagit-cantalar.jpg";
import gidaImg from "@/assets/products/gida-ambalaj.jpg";
import etiketImg from "@/assets/products/etiket-baski.jpg";
import koruyucuImg from "@/assets/products/koruyucu-ambalaj.jpg";
import strecImg from "@/assets/products/streç-bant.jpg";

const products = [
  { name: "Kutu Çeşitleri", desc: "Oluklu, düz, e-ticaret kutuları", price: "₺2.50", unit: "adet", img: kutuImg, badge: "Çok Satan" },
  { name: "Kağıt Çantalar", desc: "Kraft, lüks ve hediye çantaları", price: "₺1.80", unit: "adet", img: cantaImg, badge: null },
  { name: "Gıda Ambalajı", desc: "Paket servis kutu ve bardakları", price: "₺0.90", unit: "adet", img: gidaImg, badge: "Yeni" },
  { name: "Etiket & Baskı", desc: "Özel tasarım etiket ve sticker", price: "₺0.15", unit: "adet", img: etiketImg, badge: null },
  { name: "Koruyucu Ambalaj", desc: "Balonlu nylon, köpük malzeme", price: "₺12.00", unit: "metre", img: koruyucuImg, badge: null },
  { name: "Streç & Bant", desc: "Streç film, koli bandı, maskeleme", price: "₺8.50", unit: "rulo", img: strecImg, badge: "İndirimli" },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-card rounded-xl border border-border overflow-hidden shadow-nipo hover:shadow-nipo-lg transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative aspect-square overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {product.badge && (
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
          product.badge === "Çok Satan" ? "bg-secondary text-secondary-foreground" :
          product.badge === "Yeni" ? "bg-accent text-accent-foreground" :
          "bg-primary text-primary-foreground"
        }`}>
          {product.badge}
        </span>
      )}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
        <button className="p-3 rounded-full bg-card/90 text-primary hover:bg-card transition-colors">
          <Eye className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-lg text-foreground mb-1">{product.name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{product.desc}</p>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-2xl font-black text-primary">{product.price}</span>
          <span className="text-sm text-muted-foreground ml-1">/ {product.unit}</span>
        </div>
        <Button size="sm">Sepete Ekle</Button>
      </div>
    </div>
  </motion.div>
);

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Ürünlerimiz</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2">
            Ambalaj <span className="text-gradient-nipo">Çözümleri</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            İhtiyacınıza uygun ambalaj ürünlerini keşfedin. Toptan ve perakende satış imkanı.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Tüm Ürünleri Gör
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
