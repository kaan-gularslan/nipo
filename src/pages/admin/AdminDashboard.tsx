import { ShoppingBag, FolderOpen, ClipboardList, DollarSign, TrendingUp, TrendingDown, ArrowUpRight, Eye, Users, Package, BarChart3, Activity } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Link } from "react-router-dom";

const stats = [
  { label: "Toplam Ürün", value: products.length, change: "+3", up: true, icon: ShoppingBag, color: "bg-primary/10 text-primary" },
  { label: "Kategoriler", value: categories.length, change: "+1", up: true, icon: FolderOpen, color: "bg-accent/10 text-accent" },
  { label: "Siparişler (Bu Ay)", value: 156, change: "+12%", up: true, icon: ClipboardList, color: "bg-secondary/10 text-secondary" },
  { label: "Gelir (Aylık)", value: "₺48.250", change: "+8%", up: true, icon: DollarSign, color: "bg-primary/10 text-primary" },
];

const recentOrders = [
  { id: "NP-1024", customer: "Ali Yılmaz", product: "Pizza Kutusu 26cm", amount: "₺1.600", status: "Teslim Edildi", statusColor: "bg-accent/10 text-accent", date: "Bugün, 14:22" },
  { id: "NP-1023", customer: "Fatma Demir", product: "Kraft Çanta 26x32", amount: "₺2.750", status: "Kargoda", statusColor: "bg-primary/10 text-primary", date: "Bugün, 11:05" },
  { id: "NP-1022", customer: "Mehmet Kaya", product: "Karton Bardak 8oz", amount: "₺1.300", status: "Hazırlanıyor", statusColor: "bg-secondary/10 text-secondary", date: "Dün, 16:40" },
  { id: "NP-1021", customer: "Ayşe Korkmaz", product: "Streç Film 17mic", amount: "₺570", status: "Teslim Edildi", statusColor: "bg-accent/10 text-accent", date: "Dün, 09:15" },
  { id: "NP-1020", customer: "Emre Aydın", product: "Barkod Etiketi Rulo", amount: "₺450", status: "Teslim Edildi", statusColor: "bg-accent/10 text-accent", date: "22 Mar, 17:30" },
];

const topProducts = products.slice(0, 5);

const weeklyRevenue = [
  { day: "Pzt", value: 4200 },
  { day: "Sal", value: 6800 },
  { day: "Çar", value: 5100 },
  { day: "Per", value: 8900 },
  { day: "Cum", value: 12400 },
  { day: "Cmt", value: 7600 },
  { day: "Paz", value: 3200 },
];

const maxRevenue = Math.max(...weeklyRevenue.map((d) => d.value));

const recentActivity = [
  { text: "Ali Yılmaz yeni sipariş verdi", time: "2 dk önce", type: "order" },
  { text: "Pizza Kutusu 26cm stok güncellendi", time: "15 dk önce", type: "stock" },
  { text: "Fatma Demir siparişi kargoya verildi", time: "1 saat önce", type: "shipping" },
  { text: "Yeni ürün eklendi: Kraft Çanta XL", time: "3 saat önce", type: "product" },
  { text: "Mehmet Kaya 5 yıldız değerlendirme yaptı", time: "5 saat önce", type: "review" },
];

const quickLinks = [
  { label: "Yeni Ürün Ekle", icon: ShoppingBag, color: "bg-primary" },
  { label: "Sipariş Oluştur", icon: ClipboardList, color: "bg-secondary" },
  { label: "Kategori Ekle", icon: FolderOpen, color: "bg-accent" },
  { label: "Siteyi Görüntüle", icon: Eye, color: "bg-primary" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {quickLinks.map((link, i) => (
          <button key={i} className={`${link.color} text-white rounded-xl p-4 flex items-center gap-3 hover:opacity-90 transition-smooth text-left`}>
            <link.icon className="w-5 h-5 shrink-0" />
            <span className="text-sm font-bold">{link.label}</span>
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-smooth">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground">{stat.label}</span>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-2xl font-black text-foreground">{stat.value}</p>
            <div className="flex items-center gap-1 mt-1">
              {stat.up ? <TrendingUp className="w-3 h-3 text-accent" /> : <TrendingDown className="w-3 h-3 text-secondary" />}
              <span className={`text-[10px] font-bold ${stat.up ? "text-accent" : "text-secondary"}`}>{stat.change}</span>
              <span className="text-[10px] text-muted-foreground">bu ay</span>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2"><BarChart3 className="w-4 h-4 text-primary" /> Haftalık Gelir</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Son 7 günün gelir dağılımı</p>
            </div>
            <span className="text-lg font-black text-primary">₺48.200</span>
          </div>
          <div className="flex items-end gap-3 h-40">
            {weeklyRevenue.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] font-bold text-foreground">₺{(d.value / 1000).toFixed(1)}k</span>
                <div className="w-full rounded-t-lg bg-primary/15 relative overflow-hidden" style={{ height: `${(d.value / maxRevenue) * 100}%` }}>
                  <div className="absolute inset-0 bg-primary rounded-t-lg" style={{ opacity: 0.3 + (d.value / maxRevenue) * 0.7 }} />
                </div>
                <span className="text-[10px] text-muted-foreground">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-border">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-bold text-foreground flex items-center gap-2"><Activity className="w-4 h-4 text-primary" /> Son Aktiviteler</h3>
          </div>
          <div className="p-4 space-y-4">
            {recentActivity.map((act, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="text-xs text-foreground">{act.text}</p>
                  <p className="text-[10px] text-muted-foreground">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-border">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-foreground">Son Siparişler</h3>
            <span className="text-xs text-primary font-bold cursor-pointer hover:text-primary/80">Tümünü Gör →</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-left">
                  <th className="px-5 py-3 font-medium">Sipariş</th>
                  <th className="px-5 py-3 font-medium">Müşteri</th>
                  <th className="px-5 py-3 font-medium">Ürün</th>
                  <th className="px-5 py-3 font-medium">Tutar</th>
                  <th className="px-5 py-3 font-medium">Durum</th>
                  <th className="px-5 py-3 font-medium">Tarih</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30 cursor-pointer">
                    <td className="px-5 py-3 font-bold text-primary">{order.id}</td>
                    <td className="px-5 py-3">{order.customer}</td>
                    <td className="px-5 py-3 text-muted-foreground text-xs">{order.product}</td>
                    <td className="px-5 py-3 font-bold">{order.amount}</td>
                    <td className="px-5 py-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${order.statusColor}`}>{order.status}</span>
                    </td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">{order.date}</td>
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
              <div key={product.id} className="flex items-center gap-3 group">
                <span className="text-lg font-black text-muted-foreground/20 w-6">#{i + 1}</span>
                <img src={product.img} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-smooth">{product.name}</p>
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
