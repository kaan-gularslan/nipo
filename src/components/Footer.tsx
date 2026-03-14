import { Package, Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">Kampanya ve İndirimlerden Haberdar Olun</h3>
            <p className="text-sm text-primary-foreground/60">E-posta adresinizi bırakın, fırsatları kaçırmayın!</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="E-posta adresiniz" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 w-64" />
            <Button variant="hero" size="default">Abone Ol</Button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5" />
              <span className="text-lg font-black">nipo</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">AMBALAJ</span>
            </div>
            <p className="text-xs text-primary-foreground/60 leading-relaxed mb-4">
              Markana Renk Kat! Kaliteli ve uygun fiyatlı ambalaj çözümlerinde güvenilir adresiniz.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product categories */}
          <div>
            <h4 className="font-bold mb-3 text-xs uppercase tracking-wider">Ürün Grupları</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Baskılı Kutular</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Kağıt Çantalar</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Bardak & Kase</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Etiket & Sticker</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Peçete & Servis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xs uppercase tracking-wider">Daha Fazla</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Poşet Grubu</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Streç Film</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Koli Bandı</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Koruyucu Ambalaj</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Islak Mendil</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xs uppercase tracking-wider">Kurumsal</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Duyurular</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xs uppercase tracking-wider">Müşteri Hizmetleri</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">S.S.S</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Kargo Bilgileri</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">İade Koşulları</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">KVKK</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-primary-foreground/40">
            © 2026 Nipo Ambalaj. Tüm hakları saklıdır. | nipo.com.tr
          </p>
          <p className="text-[11px] text-primary-foreground/40">
            Mimar Sinan Merkez Mh. İnönü Cd. No:95/3 Büyükçekmece / İSTANBUL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
