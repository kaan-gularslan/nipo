import { motion } from "framer-motion";
import { Shield, Truck, Palette, Recycle } from "lucide-react";

const features = [
  { icon: Shield, title: "Kalite Garantisi", desc: "ISO standartlarında üretim, her ürün kalite kontrolünden geçer." },
  { icon: Truck, title: "Hızlı Teslimat", desc: "İstanbul içi aynı gün, Türkiye geneli 2-3 iş günü teslimat." },
  { icon: Palette, title: "Özel Tasarım", desc: "Markanıza özel baskılı ambalaj çözümleri sunuyoruz." },
  { icon: Recycle, title: "Çevreci Üretim", desc: "Geri dönüştürülebilir ve doğa dostu ambalaj malzemeleri." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Hakkımızda</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2 mb-6">
              Nipo Ambalaj ile{" "}
              <span className="text-gradient-nipo">Farkı Hissedin</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Nipo Ambalaj olarak kalite ve uygun fiyat politika anlayışımızla sektörümüze örnek bir pazar oluşturuyoruz. 
              Tedarik, üretim, satış ve satış sonrası faaliyetlerimiz müşterilerimizin markayı bugünden yarınlara taşıyacak 
              bir olguyu oluşturmaktadır.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              İstanbul Büyükçekmece'deki üretim tesisimizde, en son teknoloji ekipmanlarla 
              geniş ürün yelpazemizi üretiyoruz.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-card bg-muted flex items-center justify-center text-xs font-bold text-primary"
                  >
                    {["TA", "MK", "AY", "SÖ"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Uzman Ekibimiz</div>
                <div className="text-xs text-muted-foreground">Her zaman yanınızda</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-nipo border border-border hover:border-secondary/30 transition-colors"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  i === 0 ? "bg-nipo-blue-light text-primary" :
                  i === 1 ? "bg-nipo-pink-light text-secondary" :
                  i === 2 ? "bg-nipo-green-light text-accent" :
                  "bg-muted text-primary"
                }`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
