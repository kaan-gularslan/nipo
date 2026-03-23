import { useState } from "react";
import { products, formatPrice } from "@/data/products";
import { Search, Plus, Edit2, Trash2, Star, X } from "lucide-react";

const AdminProducts = () => {
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.categoryLabel.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ürün ara..."
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-smooth">
          <Plus className="w-4 h-4" /> Yeni Ürün
        </button>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-muted-foreground text-left">
                <th className="px-4 py-3 font-medium">Görsel</th>
                <th className="px-4 py-3 font-medium">Ürün Adı</th>
                <th className="px-4 py-3 font-medium">Kategori</th>
                <th className="px-4 py-3 font-medium">Fiyat</th>
                <th className="px-4 py-3 font-medium">Puan</th>
                <th className="px-4 py-3 font-medium">Badge</th>
                <th className="px-4 py-3 font-medium">Min. Sipariş</th>
                <th className="px-4 py-3 font-medium text-right">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                  <td className="px-4 py-3">
                    <img src={product.img} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-bold text-foreground">{product.name}</p>
                    <p className="text-[10px] text-muted-foreground">{product.slug}</p>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{product.categoryLabel}</td>
                  <td className="px-4 py-3">
                    <span className="font-bold text-primary">{formatPrice(product.price)}</span>
                    {product.oldPrice && (
                      <span className="text-[10px] line-through text-muted-foreground ml-1">{formatPrice(product.oldPrice)}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{product.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {product.badge ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">{product.badge}</span>
                    ) : <span className="text-muted-foreground text-xs">—</span>}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{product.minOrder} {product.unit}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted transition-smooth text-muted-foreground hover:text-primary">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary/10 transition-smooth text-muted-foreground hover:text-secondary">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground">
          Toplam {filtered.length} ürün gösteriliyor
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
