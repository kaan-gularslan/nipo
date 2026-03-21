import { Shield, Truck, Palette, Recycle, Award, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "Kalite Garantisi", desc: "ISO standartlarında üretim", color: "bg-nipo-blue-light text-primary" },
  { icon: Truck, title: "Hızlı Teslimat", desc: "Türkiye geneli 2-3 iş günü", color: "bg-nipo-green-light text-accent" },
  { icon: Palette, title: "Özel Tasarım", desc: "Markanıza özel baskı", color: "bg-nipo-pink-light text-secondary" },
  { icon: Recycle, title: "Çevreci Üretim", desc: "Geri dönüştürülebilir", color: "bg-nipo-green-light text-accent" },
  { icon: Award, title: "Uygun Fiyat", desc: "Toptan fiyat avantajı", color: "bg-nipo-blue-light text-primary" },
  { icon: Headphones, title: "7/24 Destek", desc: "Her zaman yanınızda", color: "bg-nipo-pink-light text-secondary" },
];

const stats = [
  { value: "500+", label: "Ürün Çeşidi", color: "bg-nipo-blue-light" },
  { value: "10K+", label: "Mutlu Müşteri", color: "bg-nipo-pink-light" },
  { value: "15+", label: "Yıllık Tecrübe", color: "bg-nipo-green-light" },
  { value: "81", label: "İl'e Teslimat", color: "bg-nipo-blue-light" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Feature strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-14">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-xl p-5 text-center border border-border/60 card-hover group animate-fade-up delay-${Math.min(i + 1, 6)}`}
            >
              <div className={`w-11 h-11 rounded-xl mx-auto mb-3 ${f.color} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-foreground">{f.title}</h3>
              <p className="text-[11px] text-muted-foreground mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* About content */}
        <div className="bg-card rounded-2xl border border-border/60 p-8 md:p-12 shadow-nipo-card animate-fade-up">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nipo-pink-light text-secondary text-xs font-bold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Hakkımızda
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-foreground mt-2 mb-5 leading-tight">
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
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`${s.color} rounded-xl p-6 text-center hover:scale-[1.03] transition-smooth animate-scale-in delay-${Math.min(i + 1, 4)}`}
                >
                  <div className="text-3xl md:text-4xl font-black text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1.5 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
