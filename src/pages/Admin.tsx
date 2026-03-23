import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Package, LayoutDashboard, ShoppingBag, FolderOpen, ClipboardList, Settings, LogOut, Lock, Eye, EyeOff } from "lucide-react";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProducts from "./admin/AdminProducts";
import AdminCategories from "./admin/AdminCategories";
import AdminOrders from "./admin/AdminOrders";
import AdminSettings from "./admin/AdminSettings";

const ADMIN_PIN = "1234";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "products", label: "Ürünler", icon: ShoppingBag },
  { id: "categories", label: "Kategoriler", icon: FolderOpen },
  { id: "orders", label: "Siparişler", icon: ClipboardList },
  { id: "settings", label: "Ayarlar", icon: Settings },
];

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(() => localStorage.getItem("nipo_admin_auth") === "true");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      localStorage.setItem("nipo_admin_auth", "true");
      setAuthenticated(true);
      setError("");
    } else {
      setError("Geçersiz PIN kodu");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("nipo_admin_auth");
    setAuthenticated(false);
    setPin("");
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border border-border">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-xl font-black text-foreground">Nipo Admin</h1>
            <p className="text-sm text-muted-foreground mt-1">Yönetim paneline erişmek için PIN giriniz</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPin ? "text" : "password"}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="PIN Kodu"
                className="w-full h-12 rounded-lg px-4 pr-12 text-center text-lg font-bold tracking-[0.5em] border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={4}
              />
              <button type="button" onClick={() => setShowPin(!showPin)} className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground">
                {showPin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {error && <p className="text-secondary text-sm text-center font-medium">{error}</p>}
            <button type="submit" className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-smooth">
              Giriş Yap
            </button>
          </form>
          <p className="text-[10px] text-muted-foreground text-center mt-4">Varsayılan PIN: 1234</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <AdminDashboard />;
      case "products": return <AdminProducts />;
      case "categories": return <AdminCategories />;
      case "orders": return <AdminOrders />;
      case "settings": return <AdminSettings />;
      default: return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-56" : "w-16"} bg-primary text-primary-foreground flex flex-col shrink-0 transition-all duration-300`}>
        <div className="p-4 flex items-center gap-2 border-b border-primary-foreground/10">
          <Package className="w-6 h-6 shrink-0" />
          {sidebarOpen && <span className="text-lg font-black">nipo</span>}
        </div>
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-smooth ${
                activeTab === item.id ? "bg-primary-foreground/15 font-bold" : "opacity-70 hover:opacity-100 hover:bg-primary-foreground/5"
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-primary-foreground/10 space-y-2">
          <Link to="/" className="flex items-center gap-2 text-xs opacity-60 hover:opacity-100 transition-smooth">
            {sidebarOpen && <span>Ana Siteye Dön</span>}
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-2 text-xs opacity-60 hover:opacity-100 transition-smooth">
            <LogOut className="w-4 h-4" />
            {sidebarOpen && <span>Çıkış</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-border px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-muted-foreground hover:text-foreground">
              <Package className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold text-foreground">{navItems.find((n) => n.id === activeTab)?.label}</h1>
          </div>
          <span className="text-xs text-muted-foreground">Admin Panel</span>
        </header>
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Admin;
