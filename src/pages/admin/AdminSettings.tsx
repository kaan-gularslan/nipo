import { useState } from "react";
import { Save, Globe, Phone, Mail, MapPin } from "lucide-react";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: "Nipo Ambalaj",
    slogan: "Markana Renk Kat!",
    phone: "+90 212 123 45 67",
    email: "info@nipoambalaj.com",
    address: "İstanbul, Türkiye",
    freeShippingMin: "500",
    defaultCurrency: "TRY",
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem("nipo_admin_settings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div className="bg-white rounded-xl border border-border p-6">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" /> Site Bilgileri
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Site Adı</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full h-10 px-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Slogan</label>
            <input
              type="text"
              value={settings.slogan}
              onChange={(e) => setSettings({ ...settings, slogan: e.target.value })}
              className="w-full h-10 px-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border p-6">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-primary" /> İletişim Bilgileri
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Telefon</label>
            <input
              type="text"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="w-full h-10 px-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">E-posta</label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full h-10 px-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Adres</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full h-10 px-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border p-6">
        <h3 className="font-bold text-foreground mb-4">E-Ticaret Ayarları</h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Ücretsiz Kargo Alt Limiti (₺)</label>
            <input
              type="number"
              value={settings.freeShippingMin}
              onChange={(e) => setSettings({ ...settings, freeShippingMin: e.target.value })}
              className="w-full h-10 px-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSave}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-smooth ${
          saved ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        <Save className="w-4 h-4" />
        {saved ? "Kaydedildi ✓" : "Değişiklikleri Kaydet"}
      </button>
    </div>
  );
};

export default AdminSettings;
