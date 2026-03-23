import { categories } from "@/data/categories";
import { Edit2, Trash2, Plus } from "lucide-react";

const AdminCategories = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Toplam {categories.length} kategori</p>
        <button className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-smooth">
          <Plus className="w-4 h-4" /> Yeni Kategori
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-smooth">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground">{cat.name}</h3>
                  <p className="text-[10px] text-muted-foreground">/{cat.slug}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted transition-smooth text-muted-foreground hover:text-primary">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary/10 transition-smooth text-muted-foreground hover:text-secondary">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{cat.description}</p>
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{cat.productCount} ürün</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
