import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Minus, Plus, Package, Truck, Shield, ArrowRight } from "lucide-react";
import { getProductBySlug, getProductsByCategory, formatPrice, getDiscountPercent, type Product } from "@/data/products";
import { getCategoryBySlug, categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  return (
    <Link to={`/urunler/${product.slug}`} className="group block bg-card rounded-xl border border-border/60 overflow-hidden card-hover">
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" loading="lazy" />
        {product.badge && (
          <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-sm ${
            product.badge === "Çok Satan" ? "bg-secondary text-secondary-foreground" :
            product.badge === "Yeni" ? "bg-accent text-accent-foreground" :
            "bg-primary text-primary-foreground"
          }`}>{product.badge}</span>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-xs text-foreground mb-1.5 line-clamp-2 group-hover:text-primary transition-smooth">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-black text-primary">{formatPrice(product.price)}</span>
          {product.oldPrice && <span className="text-[10px] text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}
        </div>
      </div>
    </Link>
  );
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Ürün Bulunamadı</h1>
          <p className="text-muted-foreground mb-6">Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
          <Button asChild><Link to="/urunler">Ürünlere Dön</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const category = categories.find(c => c.id === product.categoryId);
  const relatedProducts = getProductsByCategory(product.categoryId).filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "Sepete Eklendi ✓",
      description: `${quantity} ${product.unit} ${product.name} sepetinize eklendi.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[
          { label: "Ürünler", href: "/urunler" },
          ...(category ? [{ label: category.name, href: `/kategori/${category.slug}` }] : []),
          { label: product.name },
        ]} />

        {/* Product detail */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 mt-4">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-muted/30 border border-border/60">
            <img src={product.img} alt={product.name} className="w-full aspect-square object-cover" />
            {product.badge && (
              <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase shadow-sm ${
                product.badge === "Çok Satan" ? "bg-secondary text-secondary-foreground" :
                product.badge === "Yeni" ? "bg-accent text-accent-foreground" :
                "bg-primary text-primary-foreground"
              }`}>{product.badge}</span>
            )}
            {product.oldPrice && (
              <span className="absolute top-4 right-4 w-14 h-14 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shadow-md">
                %{getDiscountPercent(product.price, product.oldPrice)}
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-2">{product.categoryLabel}</p>
            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted/60"}`} />
              ))}
              <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-black text-primary">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
              )}
              <span className="text-xs text-muted-foreground">/ {product.unit}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Min order */}
            <div className="bg-nipo-blue-light rounded-xl p-4 mb-6 text-sm">
              <span className="font-semibold text-primary">Minimum Sipariş:</span>{" "}
              <span className="text-foreground">{product.minOrder.toLocaleString("tr-TR")} {product.unit}</span>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-smooth">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-14 h-10 flex items-center justify-center text-sm font-bold border-x border-border">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-smooth">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="flex-1 rounded-xl gap-2">
                <ShoppingCart className="w-4 h-4" />
                Sepete Ekle
              </Button>
            </div>

            {/* Features */}
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

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-foreground">Benzer <span className="text-gradient-nipo">Ürünler</span></h2>
              {category && (
                <Link to={`/kategori/${category.slug}`} className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-smooth">
                  Tümünü Gör <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
