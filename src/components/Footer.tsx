import { Package } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-6 h-6" />
              <span className="text-xl font-black tracking-tight">nipo</span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">AMBALAJ</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Markana Renk Kat! Kaliteli ve uygun fiyatlı ambalaj çözümlerinde güvenilir adresiniz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Ürünler</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Kutu Çeşitleri</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Kağıt Çantalar</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Gıda Ambalajı</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Etiket & Baskı</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Kurumsal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">Hakkımızda</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Destek</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">SSS</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Kargo Bilgileri</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">İade Koşulları</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Gizlilik Politikası</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Nipo Ambalaj. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-primary-foreground/50">
            nipo.com.tr
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
