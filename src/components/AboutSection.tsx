import { motion } from "framer-motion";
import { Shield, Truck, Palette, Recycle, Award, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "Kalite Garantisi", desc: "ISO standartlarında üretim" },
  { icon: Truck, title: "Hızlı Teslimat", desc: "Türkiye geneli 2-3 iş günü" },
  { icon: Palette, title: "Özel Tasarım", desc: "Markanıza özel baskı" },
  { icon: Recycle, title: "Çevreci Üretim", desc: "Geri dönüştürülebilir malzeme" },
  { icon: Award, title: "Uygun Fiyat", desc: "Toptan fiyat avantajı" },
  { icon: Headphones, title: "7/24 Destek", desc: "Her zaman yanınızda" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Feature strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl p-4 text-center border border-border hover:border-secondary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg mx-auto mb-3 bg-nipo-blue-light text-primary flex items-center justify-center">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-foreground">{f.title}</h3>
              <p className="text-[11px] text-muted-foreground mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* About content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Hakkımızda</span>
              <h2 className="text-2xl md:text-4xl font-black text-foreground mt-2 mb-4">
                Nipo Ambalaj ile <span className="text-gradient-nipo">Farkı Hissedin</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Nipo Ambalaj olarak kalite ve uygun fiyat politika anlayışımızla sektörümüze örnek bir pazar oluşturuyoruz.
                Tedarik, üretim, satış ve satış sonrası faaliyetlerimiz müşterilerimizin markayı bugünden yarınlara taşıyacak
                bir olguyu oluşturmaktadır.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                İstanbul Büyükçekmece'deki üretim tesisimizde, en son teknoloji ekipmanlarla
                geniş ürün yelpazemizi üretiyor ve Türkiye'nin her yerine ulaştırıyoruz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Ürün Çeşidi" },
                { value: "10K+", label: "Mutlu Müşteri" },
                { value: "15+", label: "Yıllık Tecrübe" },
                { value: "81", label: "İl'e Teslimat" },
              ].map((s) => (
                <div key={s.label} className="bg-muted rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
