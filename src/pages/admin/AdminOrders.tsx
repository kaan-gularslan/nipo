import { useState } from "react";
import { Search, Eye, ChevronDown } from "lucide-react";

const mockOrders = [
  { id: "NP-1024", date: "2026-03-23", customer: "Ali Yılmaz", email: "ali@example.com", items: 3, total: "₺1.600", status: "delivered" },
  { id: "NP-1023", date: "2026-03-22", customer: "Fatma Demir", email: "fatma@example.com", items: 5, total: "₺2.750", status: "shipped" },
  { id: "NP-1022", date: "2026-03-22", customer: "Mehmet Kaya", email: "mehmet@example.com", items: 2, total: "₺1.300", status: "preparing" },
  { id: "NP-1021", date: "2026-03-21", customer: "Ayşe Korkmaz", email: "ayse@example.com", items: 1, total: "₺570", status: "delivered" },
  { id: "NP-1020", date: "2026-03-21", customer: "Emre Aydın", email: "emre@example.com", items: 4, total: "₺450", status: "delivered" },
  { id: "NP-1019", date: "2026-03-20", customer: "Zeynep Arslan", email: "zeynep@example.com", items: 2, total: "₺890", status: "shipped" },
  { id: "NP-1018", date: "2026-03-20", customer: "Can Özdemir", email: "can@example.com", items: 6, total: "₺3.200", status: "preparing" },
  { id: "NP-1017", date: "2026-03-19", customer: "Elif Şahin", email: "elif@example.com", items: 1, total: "₺185", status: "delivered" },
];

const statusMap: Record<string, { label: string; color: string }> = {
  delivered: { label: "Teslim Edildi", color: "bg-accent/10 text-accent" },
  shipped: { label: "Kargoda", color: "bg-primary/10 text-primary" },
  preparing: { label: "Hazırlanıyor", color: "bg-secondary/10 text-secondary" },
};

const AdminOrders = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = mockOrders.filter((o) => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Sipariş no veya müşteri ara..."
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="h-10 px-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="all">Tüm Durumlar</option>
          <option value="preparing">Hazırlanıyor</option>
          <option value="shipped">Kargoda</option>
          <option value="delivered">Teslim Edildi</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-muted-foreground text-left">
                <th className="px-4 py-3 font-medium">Sipariş No</th>
                <th className="px-4 py-3 font-medium">Tarih</th>
                <th className="px-4 py-3 font-medium">Müşteri</th>
                <th className="px-4 py-3 font-medium">Ürün Sayısı</th>
                <th className="px-4 py-3 font-medium">Toplam</th>
                <th className="px-4 py-3 font-medium">Durum</th>
                <th className="px-4 py-3 font-medium text-right">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => {
                const status = statusMap[order.status];
                return (
                  <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                    <td className="px-4 py-3 font-bold text-primary">{order.id}</td>
                    <td className="px-4 py-3 text-muted-foreground">{order.date}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground">{order.customer}</p>
                      <p className="text-[10px] text-muted-foreground">{order.email}</p>
                    </td>
                    <td className="px-4 py-3">{order.items}</td>
                    <td className="px-4 py-3 font-bold">{order.total}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${status.color}`}>{status.label}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted transition-smooth text-muted-foreground hover:text-primary ml-auto">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground">
          {filtered.length} sipariş gösteriliyor
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
