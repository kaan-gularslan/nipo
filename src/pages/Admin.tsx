import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, LayoutDashboard, ShoppingBag, FolderOpen, ClipboardList, Settings, LogOut, Lock, Eye, EyeOff, Menu, X, Bell, ChevronRight, Home, Search } from "lucide-react";
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
  const [mobileSidebar, setMobileSidebar] = useState(false);

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
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-muted/30 to-secondary/5 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border border-border">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Package className="w-8 h-8 text-primary-foreground" />
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
                placeholder="• • • •"
                className="w-full h-14 rounded-xl px-4 pr-12 text-center text-2xl font-bold tracking-[0.8em] border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30"
                maxLength={4}
              />
              <button type="button" onClick={() => setShowPin(!showPin)} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
                {showPin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {error && <p className="text-secondary text-sm text-center font-medium">{error}</p>}
            <button type="submit" className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-smooth text-sm">
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

  const SidebarContent = () => (
    <>
      <div className="p-4 flex items-center gap-2 border-b border-primary-foreground/10">
        <Package className="w-6 h-6 shrink-0" />
        {sidebarOpen && (
          <div>
            <span className="text-lg font-black block leading-none">nipo</span>
            <span className="text-[8px] uppercase tracking-widest opacity-60">admin panel</span>
          </div>
        )}
      </div>
      <nav className="flex-1 py-3 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { setActiveTab(item.id); setMobileSidebar(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg mb-0.5 transition-smooth ${
              activeTab === item.id
                ? "bg-primary-foreground/15 font-bold shadow-sm"
                : "opacity-70 hover:opacity-100 hover:bg-primary-foreground/5"
            }`}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {sidebarOpen && <span>{item.label}</span>}
            {sidebarOpen && activeTab === item.id && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
          </button>
        ))}
      </nav>
      <div className="p-3 border-t border-primary-foreground/10 space-y-1">
        <Link to="/" className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg opacity-60 hover:opacity-100 hover:bg-primary-foreground/5 transition-smooth">
          <Home className="w-4 h-4" />
          {sidebarOpen && <span>Ana Siteye Dön</span>}
        </Link>
        <button onClick={handleLogout} className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg opacity-60 hover:opacity-100 hover:bg-primary-foreground/5 transition-smooth">
          <LogOut className="w-4 h-4" />
          {sidebarOpen && <span>Çıkış Yap</span>}
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Desktop Sidebar */}
      <aside className={`${sidebarOpen ? "w-56" : "w-16"} bg-primary text-primary-foreground hidden lg:flex flex-col shrink-0 transition-all duration-300 sticky top-0 h-screen`}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebar && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileSidebar(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-primary text-primary-foreground flex flex-col shadow-2xl">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto min-w-0">
        <header className="bg-white border-b border-border px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => { if (window.innerWidth < 1024) setMobileSidebar(true); else setSidebarOpen(!sidebarOpen); }} className="text-muted-foreground hover:text-foreground transition-smooth">
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base md:text-lg font-bold text-foreground">{navItems.find((n) => n.id === activeTab)?.label}</h1>
              <p className="text-[10px] text-muted-foreground hidden md:block">Nipo Ambalaj Yönetim Paneli</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-muted transition-smooth text-muted-foreground relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-white" />
            </button>
            <div className="hidden md:flex items-center gap-2 ml-2 pl-3 border-l border-border">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">A</span>
              </div>
              <span className="text-xs font-medium text-foreground">Admin</span>
            </div>
          </div>
        </header>
        <div className="p-4 md:p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Admin;
