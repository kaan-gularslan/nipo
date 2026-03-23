import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Minus, Plus, Package, Truck, Shield, ArrowRight } from "lucide-react";
import { getProductBySlug, getProductsByCategory, formatPrice, getDiscountPercent } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import ProductCustomizer from "@/components/ProductCustomizer";

const DemoProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addItem } = useCart();
  const { demoLink } = useDemo();
  const [quantity, setQuantity] = useState(1);
  const [customPrice, setCustomPrice] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Ürün Bulunamadı</h1>
        <Button asChild><Link to={demoLink("/urunler")}>Ürünlere Dön</Link></Button>
      </div>
    );
  }

  const category = categories.find(c => c.id === product.categoryId);
  const relatedProducts = getProductsByCategory(product.categoryId).filter(p => p.id !== product.id).slice(0, 4);
  const displayPrice = customPrice ?? product.price;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({ title: "Sepete Eklendi ✓", description: `${quantity} ${product.unit} ${product.name} sepetinize eklendi.` });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="relative rounded-2xl overflow-hidden bg-muted/30 border border-border/60">
          <img src={product.img} alt={product.name} className="w-full aspect-square object-cover" />
          {product.badge && <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase shadow-sm ${product.badge === "Çok Satan" ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"}`}>{product.badge}</span>}
          {product.oldPrice && <span className="absolute top-4 right-4 w-14 h-14 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shadow-md">%{getDiscountPercent(product.price, product.oldPrice)}</span>}
        </div>

        <div>
          <p className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-2">{product.categoryLabel}</p>
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-4">{product.name}</h1>
          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted/60"}`} />)}
            <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-black text-primary">{formatPrice(displayPrice)}</span>
            {product.oldPrice && !customPrice && <span className="text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}
            <span className="text-xs text-muted-foreground">/ {product.unit}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>
          <div className="bg-primary/5 rounded-xl p-4 mb-6 text-sm">
            <span className="font-semibold text-primary">Minimum Sipariş:</span> <span className="text-foreground">{product.minOrder.toLocaleString("tr-TR")} {product.unit}</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-muted"><Minus className="w-4 h-4" /></button>
              <span className="w-14 h-10 flex items-center justify-center text-sm font-bold border-x border-border">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-muted"><Plus className="w-4 h-4" /></button>
            </div>
            <Button onClick={handleAddToCart} size="lg" className="flex-1 rounded-xl gap-2">
              <ShoppingCart className="w-4 h-4" /> Sepete Ekle
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Truck, label: "Hızlı Kargo", sub: "2-3 iş günü" },
              { icon: Shield, label: "Kalite Garantisi", sub: "ISO standart" },
              { icon: Package, label: "Güvenli Paket", sub: "Hasarsız teslimat" },
            ].map((f) => (
              <div key={f.label} className="text-center p-3 bg-muted/30 rounded-lg border border-border/40">
                <f.icon className="w-4 h-4 text-primary mx-auto mb-1.5" />
                <div className="text-[10px] font-bold text-foreground">{f.label}</div>
                <div className="text-[9px] text-muted-foreground">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-14">
        <ProductCustomizer categoryId={product.categoryId} basePrice={product.price} onCustomizationChange={(_s, price) => setCustomPrice(price)} />
      </div>

      {relatedProducts.length > 0 && (
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-foreground">Benzer Ürünler</h2>
            {category && <Link to={demoLink(`/kategori/${category.slug}`)} className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary"><span>Tümünü Gör</span> <ArrowRight className="w-4 h-4" /></Link>}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={demoLink(`/urunler/${p.slug}`)} className="group block bg-card rounded-xl border border-border/60 overflow-hidden card-hover">
                <div className="relative aspect-square overflow-hidden bg-muted/30"><img src={p.img} alt={p.name} className="w-full h-full object-cover img-zoom" loading="lazy" /></div>
                <div className="p-3">
                  <h3 className="font-semibold text-xs text-foreground mb-1.5 line-clamp-2 group-hover:text-primary">{p.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-black text-primary">{formatPrice(p.price)}</span>
                    {p.oldPrice && <span className="text-[10px] text-muted-foreground line-through">{formatPrice(p.oldPrice)}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoProductDetail;
