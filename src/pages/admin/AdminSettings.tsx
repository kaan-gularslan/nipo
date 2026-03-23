import { useState, useRef } from "react";
import { Save, Globe, Phone, Image, Palette, Share2, Upload, X, Check, Truck, CreditCard, Bell, Shield, FileText, ExternalLink } from "lucide-react";

interface SiteSettings {
  siteName: string;
  slogan: string;
  phone: string;
  phone2: string;
  email: string;
  address: string;
  freeShippingMin: string;
  defaultCurrency: string;
  logoUrl: string;
  faviconUrl: string;
  ogImage: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  instagram: string;
  facebook: string;
  twitter: string;
  whatsapp: string;
  youtube: string;
  linkedin: string;
  metaTitle: string;
  metaDescription: string;
  googleAnalytics: string;
  taxRate: string;
  minOrderAmount: string;
  installmentCount: string;
  maintenanceMode: boolean;
  notificationEmail: boolean;
  notificationSms: boolean;
}

const defaultSettings: SiteSettings = {
  siteName: "Nipo Ambalaj",
  slogan: "Markana Renk Kat!",
  phone: "+90 212 123 45 67",
  phone2: "+90 532 123 45 67",
  email: "info@nipoambalaj.com",
  address: "Esenyurt, İstanbul, Türkiye",
  freeShippingMin: "500",
  defaultCurrency: "TRY",
  logoUrl: "",
  faviconUrl: "",
  ogImage: "",
  primaryColor: "#004374",
  secondaryColor: "#FF456D",
  accentColor: "#9CC33B",
  instagram: "https://instagram.com/nipoambalaj",
  facebook: "https://facebook.com/nipoambalaj",
  twitter: "",
  whatsapp: "+905321234567",
  youtube: "",
  linkedin: "",
  metaTitle: "Nipo Ambalaj — Baskılı Ambalaj Çözümleri",
  metaDescription: "Baskılı kutu, çanta, bardak ve etiket üretiminde Türkiye'nin güvenilir ambalaj markası.",
  googleAnalytics: "",
  taxRate: "20",
  minOrderAmount: "100",
  installmentCount: "12",
  maintenanceMode: false,
  notificationEmail: true,
  notificationSms: false,
};

const AdminSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem("nipo_admin_settings");
    return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
  });
  const [saved, setSaved] = useState(false);
  const [activeSection, setActiveSection] = useState("general");
  const logoInputRef = useRef<HTMLInputElement>(null);
  const faviconInputRef = useRef<HTMLInputElement>(null);
  const ogInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    localStorage.setItem("nipo_admin_settings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleImageUpload = (field: keyof SiteSettings, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSettings({ ...settings, [field]: e.target?.result as string });
    };
    reader.readAsDataURL(file);
  };

  const sections = [
    { id: "general", label: "Genel", icon: Globe },
    { id: "branding", label: "Marka & Logo", icon: Image },
    { id: "colors", label: "Tema Renkleri", icon: Palette },
    { id: "contact", label: "İletişim", icon: Phone },
    { id: "social", label: "Sosyal Medya", icon: Share2 },
    { id: "ecommerce", label: "E-Ticaret", icon: CreditCard },
    { id: "seo", label: "SEO & Meta", icon: FileText },
    { id: "notifications", label: "Bildirimler", icon: Bell },
  ];

  const update = (key: keyof SiteSettings, value: string | boolean) => {
    setSettings({ ...settings, [key]: value });
  };

  const InputField = ({ label, field, type = "text", placeholder = "" }: { label: string; field: keyof SiteSettings; type?: string; placeholder?: string }) => (
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
      <input
        type={type}
        value={settings[field] as string}
        onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 px-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );

  const ImageUploader = ({ label, field, inputRef, hint }: { label: string; field: keyof SiteSettings; inputRef: React.RefObject<HTMLInputElement>; hint: string }) => (
    <div>
      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
      <div className="flex items-start gap-4">
        <div
          onClick={() => inputRef.current?.click()}
          className="w-24 h-24 rounded-xl border-2 border-dashed border-border hover:border-primary flex items-center justify-center cursor-pointer bg-muted/30 hover:bg-primary/5 transition-smooth overflow-hidden shrink-0"
        >
          {settings[field] ? (
            <img src={settings[field] as string} alt={label} className="w-full h-full object-contain" />
          ) : (
            <Upload className="w-6 h-6 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1">
          <p className="text-[11px] text-muted-foreground mb-2">{hint}</p>
          <div className="flex gap-2">
            <button onClick={() => inputRef.current?.click()} className="text-xs font-bold text-primary hover:text-primary/80 transition-smooth">
              Yükle
            </button>
            {settings[field] && (
              <button onClick={() => update(field, "")} className="text-xs font-bold text-secondary hover:text-secondary/80 transition-smooth">
                Kaldır
              </button>
            )}
          </div>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageUpload(field, file);
        }}
      />
    </div>
  );

  return (
    <div className="flex gap-6">
      {/* Left Nav */}
      <div className="w-48 shrink-0 hidden lg:block">
        <div className="sticky top-20 space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-smooth ${
                activeSection === s.id ? "bg-primary text-primary-foreground font-bold" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-2xl space-y-6">
        {/* Mobile tabs */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs whitespace-nowrap transition-smooth shrink-0 ${
                activeSection === s.id ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground"
              }`}
            >
              <s.icon className="w-3.5 h-3.5" />
              {s.label}
            </button>
          ))}
        </div>

        {/* General */}
        {activeSection === "general" && (
          <div className="bg-white rounded-xl border border-border p-6 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Genel Ayarlar</h3>
            </div>
            <InputField label="Site Adı" field="siteName" />
            <InputField label="Slogan" field="slogan" />
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Bakım Modu</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => update("maintenanceMode", !settings.maintenanceMode)}
                  className={`w-12 h-6 rounded-full transition-smooth relative ${settings.maintenanceMode ? "bg-secondary" : "bg-muted"}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-all ${settings.maintenanceMode ? "left-6" : "left-0.5"}`} />
                </button>
                <span className="text-xs text-muted-foreground">{settings.maintenanceMode ? "Aktif — Site ziyaretçilere kapalı" : "Pasif — Site açık"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Branding */}
        {activeSection === "branding" && (
          <div className="bg-white rounded-xl border border-border p-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Image className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Marka & Logo</h3>
            </div>
            <ImageUploader label="Site Logosu" field="logoUrl" inputRef={logoInputRef as React.RefObject<HTMLInputElement>} hint="Önerilen boyut: 200x60px. PNG veya SVG formatı tercih edin. Şeffaf arka plan kullanın." />
            <div className="border-t border-border pt-5">
              <ImageUploader label="Favicon" field="faviconUrl" inputRef={faviconInputRef as React.RefObject<HTMLInputElement>} hint="Tarayıcı sekmesinde görünen küçük ikon. 32x32px veya 64x64px, PNG formatı." />
            </div>
            <div className="border-t border-border pt-5">
              <ImageUploader label="OG Paylaşım Görseli" field="ogImage" inputRef={ogInputRef as React.RefObject<HTMLInputElement>} hint="Sosyal medyada paylaşıldığında görünecek görsel. Önerilen: 1200x630px." />
            </div>
            <div className="border-t border-border pt-5">
              <h4 className="text-sm font-bold text-foreground mb-3">Mevcut Logo Önizleme</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary rounded-xl p-4 flex items-center justify-center h-20">
                  {settings.logoUrl ? (
                    <img src={settings.logoUrl} alt="Logo" className="max-h-12 object-contain" />
                  ) : (
                    <span className="text-primary-foreground font-black text-xl">nipo</span>
                  )}
                </div>
                <div className="bg-white border border-border rounded-xl p-4 flex items-center justify-center h-20">
                  {settings.logoUrl ? (
                    <img src={settings.logoUrl} alt="Logo" className="max-h-12 object-contain" />
                  ) : (
                    <span className="text-primary font-black text-xl">nipo</span>
                  )}
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">Sol: Koyu zemin | Sağ: Açık zemin</p>
            </div>
          </div>
        )}

        {/* Colors */}
        {activeSection === "colors" && (
          <div className="bg-white rounded-xl border border-border p-6 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Tema Renkleri</h3>
            </div>
            {[
              { label: "Birincil Renk (Koyu Mavi)", field: "primaryColor" as keyof SiteSettings, desc: "Header, butonlar, linkler" },
              { label: "İkincil Renk (Pembe)", field: "secondaryColor" as keyof SiteSettings, desc: "CTA butonlar, badge'ler, vurgular" },
              { label: "Aksan Renk (Yeşil)", field: "accentColor" as keyof SiteSettings, desc: "Fiyat, stok durumu, başarı göstergeleri" },
            ].map((c) => (
              <div key={c.field} className="flex items-center gap-4">
                <input
                  type="color"
                  value={settings[c.field] as string}
                  onChange={(e) => update(c.field, e.target.value)}
                  className="w-12 h-12 rounded-lg border border-border cursor-pointer"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground">{c.label}</p>
                  <p className="text-[10px] text-muted-foreground">{c.desc}</p>
                  <span className="text-xs font-mono text-primary">{settings[c.field]}</span>
                </div>
              </div>
            ))}
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-bold text-foreground mb-3">Renk Önizleme</h4>
              <div className="flex gap-2">
                {[settings.primaryColor, settings.secondaryColor, settings.accentColor].map((color, i) => (
                  <div key={i} className="flex-1 h-16 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm" style={{ backgroundColor: color }}>
                    {["Birincil", "İkincil", "Aksan"][i]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact */}
        {activeSection === "contact" && (
          <div className="bg-white rounded-xl border border-border p-6 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">İletişim Bilgileri</h3>
            </div>
            <InputField label="Telefon (Birincil)" field="phone" />
            <InputField label="Telefon (İkincil)" field="phone2" />
            <InputField label="E-posta" field="email" type="email" />
            <InputField label="Adres" field="address" />
          </div>
        )}

        {/* Social Media */}
        {activeSection === "social" && (
          <div className="bg-white rounded-xl border border-border p-6 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Sosyal Medya Hesapları</h3>
            </div>
            <InputField label="Instagram" field="instagram" placeholder="https://instagram.com/..." />
            <InputField label="Facebook" field="facebook" placeholder="https://facebook.com/..." />
            <InputField label="Twitter / X" field="twitter" placeholder="https://x.com/..." />
            <InputField label="WhatsApp Numarası" field="whatsapp" placeholder="+905..." />
            <InputField label="YouTube" field="youtube" placeholder="https://youtube.com/..." />
            <InputField label="LinkedIn" field="linkedin" placeholder="https://linkedin.com/..." />
          </div>
        )}

        {/* E-Commerce */}
        {activeSection === "ecommerce" && (
          <div className="bg-white rounded-xl border border-border p-6 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">E-Ticaret Ayarları</h3>
            </div>
            <InputField label="Ücretsiz Kargo Alt Limiti (₺)" field="freeShippingMin" type="number" />
            <InputField label="Minimum Sipariş Tutarı (₺)" field="minOrderAmount" type="number" />
            <InputField label="KDV Oranı (%)" field="taxRate" type="number" />
            <InputField label="Maksimum Taksit Sayısı" field="installmentCount" type="number" />
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Para Birimi</label>
              <select
                value={settings.defaultCurrency}
                onChange={(e) => update("defaultCurrency", e.target.value)}
                className="w-full h-10 px-4 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="TRY">₺ Türk Lirası (TRY)</option>
                <option value="USD">$ ABD Doları (USD)</option>
                <option value="EUR">€ Euro (EUR)</option>
              </select>
            </div>
          </div>
        )}

        {/* SEO */}
        {activeSection === "seo" && (
          <div className="bg-white rounded-xl border border-border p-6 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">SEO & Meta Ayarları</h3>
            </div>
            <InputField label="Meta Başlık" field="metaTitle" />
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Meta Açıklama</label>
              <textarea
                value={settings.metaDescription}
                onChange={(e) => update("metaDescription", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <p className="text-[10px] text-muted-foreground mt-1">{settings.metaDescription.length}/160 karakter</p>
            </div>
            <InputField label="Google Analytics ID" field="googleAnalytics" placeholder="G-XXXXXXXXXX" />
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h4 className="text-xs font-bold text-foreground mb-2">Google Arama Önizleme</h4>
              <div className="space-y-0.5">
                <p className="text-primary text-sm font-medium truncate">{settings.metaTitle || settings.siteName}</p>
                <p className="text-accent text-xs">nipoambalaj.com</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{settings.metaDescription}</p>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeSection === "notifications" && (
          <div className="bg-white rounded-xl border border-border p-6 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Bildirim Ayarları</h3>
            </div>
            {[
              { label: "E-posta Bildirimleri", desc: "Yeni siparişlerde e-posta bildirimi al", field: "notificationEmail" as keyof SiteSettings },
              { label: "SMS Bildirimleri", desc: "Yeni siparişlerde SMS bildirimi al", field: "notificationSms" as keyof SiteSettings },
            ].map((n) => (
              <div key={n.field} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-bold text-foreground">{n.label}</p>
                  <p className="text-[10px] text-muted-foreground">{n.desc}</p>
                </div>
                <button
                  onClick={() => update(n.field, !(settings[n.field] as boolean))}
                  className={`w-12 h-6 rounded-full transition-smooth relative ${settings[n.field] ? "bg-accent" : "bg-muted"}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-all ${settings[n.field] ? "left-6" : "left-0.5"}`} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Save */}
        <div className="sticky bottom-4 z-10">
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-smooth ${
              saved ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {saved ? "Kaydedildi ✓" : "Değişiklikleri Kaydet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
