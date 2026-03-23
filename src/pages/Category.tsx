import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ChevronRight } from "lucide-react";
import { getProductsByCategory, formatPrice, getDiscountPercent, type Product } from "@/data/products";
import { getCategoryBySlug, categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

type SortOption = "default" | "price-asc" | "price-desc" | "rating";

const sortProducts = (products: Product[], sort: SortOption): Product[] => {
  const sorted = [...products];
  switch (sort) {
    case "price-asc": return sorted.sort((a, b) => a.price - b.price);
    case "price-desc": return sorted.sort((a, b) => b.price - a.price);
    case "rating": return sorted.sort((a, b) => b.rating - a.rating);
    default: return sorted;
  }
};

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const [sort, setSort] = useState<SortOption>("default");
  const { addItem } = useCart();

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Kategori Bulunamadı</h1>
          <Button asChild><Link to="/urunler">Ürünlere Dön</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const products = sortProducts(getProductsByCategory(category.id), sort);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast({ title: "Sepete Eklendi ✓", description: `${product.name} sepetinize eklendi.` });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[
          { label: "Ürünler", href: "/urunler" },
          { label: category.name },
        ]} />

        <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-14">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-card rounded-xl border border-border/60 overflow-hidden sticky top-36">
              <h3 className="px-4 py-3 text-sm font-bold text-foreground border-b border-border/40 bg-muted/30">Kategoriler</h3>
              <ul>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/kategori/${cat.slug}`}
                      className={`flex items-center gap-2.5 px-4 py-2.5 text-xs border-b border-border/20 transition-smooth ${
                        cat.id === category.id
                          ? "bg-nipo-blue-light text-primary font-bold"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span className="flex-1">{cat.name}</span>
                      <ChevronRight className="w-3 h-3 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-xl md:text-2xl font-black text-foreground">{category.name}</h1>
                <p className="text-xs text-muted-foreground mt-1">{products.length} ürün bulundu</p>
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="text-xs border border-border rounded-lg px-3 py-2 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="default">Varsayılan Sıralama</option>
                <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                <option value="rating">Puan: En Yüksek</option>
              </select>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">Bu kategoride henüz ürün bulunmamaktadır.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {products.map((product) => (
                  <article key={product.id} className="group bg-card rounded-xl border border-border/60 overflow-hidden card-hover">
                    <Link to={`/urunler/${product.slug}`}>
                      <div className="relative aspect-square overflow-hidden bg-muted/30">
                        <img src={product.img} alt={product.name} className="w-full h-full object-cover img-zoom" loading="lazy" />
                        {product.badge && (
                          <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-sm ${
                            product.badge === "Çok Satan" ? "bg-secondary text-secondary-foreground" :
                            product.badge === "Yeni" ? "bg-accent text-accent-foreground" :
                            "bg-primary text-primary-foreground"
                          }`}>{product.badge}</span>
                        )}
                        {product.oldPrice && (
                          <span className="absolute top-2.5 right-2.5 w-10 h-10 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold flex items-center justify-center shadow-sm">
                            %{getDiscountPercent(product.price, product.oldPrice)}
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider mb-1.5">{product.categoryLabel}</p>
                      <Link to={`/urunler/${product.slug}`}>
                        <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-smooth">{product.name}</h3>
                      </Link>
                      <div className="flex items-center gap-0.5 mb-2.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted/60"}`} />
                        ))}
                        <span className="text-[10px] text-muted-foreground ml-1.5">({product.rating})</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-black text-primary">{formatPrice(product.price)}</span>
                        {product.oldPrice && <span className="text-xs text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}
                      </div>
                      <Button size="sm" className="w-full text-xs rounded-lg gap-1.5" onClick={() => handleAddToCart(product)}>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Sepete Ekle
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
