import { ShoppingBag, FolderOpen, ClipboardList, TrendingUp, DollarSign, Users, Package } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const stats = [
  { label: "Toplam Ürün", value: products.length, icon: ShoppingBag, color: "bg-primary/10 text-primary" },
  { label: "Kategoriler", value: categories.length, icon: FolderOpen, color: "bg-accent/10 text-accent" },
  { label: "Siparişler", value: 156, icon: ClipboardList, color: "bg-secondary/10 text-secondary" },
  { label: "Gelir (Aylık)", value: "₺48.250", icon: DollarSign, color: "bg-primary/10 text-primary" },
];

const recentOrders = [
  { id: "NP-1024", customer: "Ali Yılmaz", product: "Pizza Kutusu 26cm", amount: "₺1.600", status: "Teslim Edildi", statusColor: "bg-accent/10 text-accent" },
  { id: "NP-1023", customer: "Fatma Demir", product: "Kraft Çanta 26x32", amount: "₺2.750", status: "Kargoda", statusColor: "bg-primary/10 text-primary" },
  { id: "NP-1022", customer: "Mehmet Kaya", product: "Karton Bardak 8oz", amount: "₺1.300", status: "Hazırlanıyor", statusColor: "bg-secondary/10 text-secondary" },
  { id: "NP-1021", customer: "Ayşe Korkmaz", product: "Streç Film 17mic", amount: "₺570", status: "Teslim Edildi", statusColor: "bg-accent/10 text-accent" },
  { id: "NP-1020", customer: "Emre Aydın", product: "Barkod Etiketi Rulo", amount: "₺450", status: "Teslim Edildi", statusColor: "bg-accent/10 text-accent" },
];

const topProducts = products.slice(0, 5);

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-2xl font-black text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-border">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-bold text-foreground">Son Siparişler</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-left">
                  <th className="px-5 py-3 font-medium">Sipariş No</th>
                  <th className="px-5 py-3 font-medium">Müşteri</th>
                  <th className="px-5 py-3 font-medium">Ürün</th>
                  <th className="px-5 py-3 font-medium">Tutar</th>
                  <th className="px-5 py-3 font-medium">Durum</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="px-5 py-3 font-bold text-primary">{order.id}</td>
                    <td className="px-5 py-3">{order.customer}</td>
                    <td className="px-5 py-3 text-muted-foreground">{order.product}</td>
                    <td className="px-5 py-3 font-bold">{order.amount}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${order.statusColor}`}>{order.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl border border-border">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-bold text-foreground">En Çok Satan Ürünler</h3>
          </div>
          <div className="p-4 space-y-3">
            {topProducts.map((product, i) => (
              <div key={product.id} className="flex items-center gap-3">
                <span className="text-lg font-black text-muted-foreground/30 w-6">#{i + 1}</span>
                <img src={product.img} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-foreground truncate">{product.name}</p>
                  <p className="text-[10px] text-muted-foreground">{product.categoryLabel}</p>
                </div>
                <span className="text-xs font-bold text-primary">₺{product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
