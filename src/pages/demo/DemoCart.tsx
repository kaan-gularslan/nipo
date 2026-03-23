import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, Package } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useDemo } from "@/context/DemoContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";

const DemoCart = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, totalItems } = useCart();
  const { demoLink } = useDemo();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-black text-foreground mb-6">Sepetim ({totalItems} ürün)</h1>

      {items.length === 0 ? (
        <div className="text-center py-20 mb-14">
          <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-5">
            <ShoppingCart className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Sepetiniz Boş</h2>
          <p className="text-sm text-muted-foreground mb-6">Henüz sepetinize ürün eklemediniz.</p>
          <Button asChild size="lg" className="rounded-full px-8 gap-2">
            <Link to={demoLink("/urunler")}><Package className="w-4 h-4" /> Ürünlere Göz At</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 mb-14">
          <div className="flex-1 space-y-3">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 bg-card rounded-xl border border-border/60 p-4">
                <Link to={demoLink(`/urunler/${product.slug}`)} className="shrink-0">
                  <img src={product.img} alt={product.name} className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={demoLink(`/urunler/${product.slug}`)}>
                    <h3 className="font-semibold text-sm text-foreground hover:text-primary transition-smooth line-clamp-1">{product.name}</h3>
                  </Link>
                  <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider mt-0.5">{product.categoryLabel}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-black text-primary">{formatPrice(product.price)}</span>
                    {product.oldPrice && <span className="text-xs text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-muted"><Minus className="w-3 h-3" /></button>
                      <span className="w-10 h-8 flex items-center justify-center text-xs font-bold border-x border-border">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-muted"><Plus className="w-3 h-3" /></button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-foreground">{formatPrice(product.price * quantity)}</span>
                      <button onClick={() => removeItem(product.id)} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={clearCart} className="text-xs text-muted-foreground hover:text-destructive underline mt-2">Sepeti Temizle</button>
          </div>

          <div className="lg:w-80">
            <div className="bg-card rounded-xl border border-border/60 p-6 sticky top-36">
              <h3 className="text-lg font-bold text-foreground mb-4">Sipariş Özeti</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Ara Toplam</span><span className="font-semibold">{formatPrice(totalPrice)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Kargo</span><span className="font-semibold text-accent">{totalPrice >= 500 ? "Ücretsiz" : formatPrice(29.90)}</span></div>
                {totalPrice < 500 && <p className="text-[10px] text-muted-foreground bg-accent/10 rounded-lg px-3 py-2">💡 {formatPrice(500 - totalPrice)} daha ekleyin, kargo bedava!</p>}
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-bold">Toplam</span>
                  <span className="text-xl font-black text-primary">{formatPrice(totalPrice + (totalPrice >= 500 ? 0 : 29.90))}</span>
                </div>
              </div>
              <Button size="lg" className="w-full mt-5 rounded-xl gap-2">Siparişi Tamamla <ArrowRight className="w-4 h-4" /></Button>
              <Link to={demoLink("/urunler")} className="flex items-center justify-center gap-1 text-xs text-primary font-semibold mt-3 hover:text-secondary">Alışverişe Devam Et</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoCart;
