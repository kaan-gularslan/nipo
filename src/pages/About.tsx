import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Shield, Truck, Palette, Recycle, Award, Headphones, Target, Eye, Users, Factory, CheckCircle } from "lucide-react";

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

const timeline = [
  { year: "2009", title: "Kuruluş", desc: "Nipo Ambalaj, İstanbul Büyükçekmece'de küçük bir atölye olarak faaliyetlerine başladı." },
  { year: "2013", title: "İlk Fabrika", desc: "Artan talep doğrultusunda modern üretim tesisine taşınarak kapasite artırıldı." },
  { year: "2017", title: "Dijital Dönüşüm", desc: "Online satış kanalları açılarak Türkiye genelinde hizmet verilmeye başlandı." },
  { year: "2020", title: "ISO Sertifikası", desc: "ISO 9001 ve ISO 22000 kalite yönetim sistemi sertifikaları alındı." },
  { year: "2024", title: "Büyüme", desc: "500'den fazla ürün çeşidi ve 10.000+ müşteri portföyüne ulaşıldı." },
];

const capabilities = [
  "Ofset baskı (4 renge kadar)",
  "Flekso baskı (esnek ambalajlar)",
  "Dijital baskı (küçük tirajlar)",
  "Laminasyon ve selefon kaplama",
  "Sıcak folyo yaldız baskı",
  "Kabartma ve gofre baskı",
  "Lazer kesim ve şekil kesim",
  "Yapıştırma ve montaj",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Kurumsal" }]} />

        {/* Hero */}
        <div className="text-center mt-4 mb-14 animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nipo-pink-light text-secondary text-xs font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Hakkımızda
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-foreground mt-2 mb-4 leading-tight">
            Nipo Ambalaj ile <span className="text-gradient-nipo">Farkı Hissedin</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            2009 yılından bu yana kalite ve uygun fiyat politikamızla ambalaj sektöründe öncü çözümler sunuyoruz.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <div key={s.label} className={`${s.color} rounded-xl p-6 text-center hover:scale-[1.03] transition-smooth animate-scale-in delay-${Math.min(i + 1, 4)}`}>
              <div className="text-3xl md:text-4xl font-black text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1.5 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-10 mb-14 animate-fade-up">
          <div>
            <h2 className="text-2xl font-black text-foreground mb-4">Hikayemiz</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Nipo Ambalaj olarak kalite ve uygun fiyat politika anlayışımızla sektörümüze örnek bir pazar oluşturuyoruz.
              Tedarik, üretim, satış ve satış sonrası faaliyetlerimiz müşterilerimizin markayı bugünden yarınlara taşıyacak
              bir olguyu oluşturmaktadır.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              İstanbul Büyükçekmece'deki modern üretim tesisimizde, en son teknoloji baskı ve kesim makineleriyle
              geniş ürün yelpazemizi üretiyor ve Türkiye'nin 81 iline ulaştırıyoruz. Gıda ambalajından e-ticaret
              kutularına, baskılı çantalardan etiketlere kadar 500'den fazla ürün çeşidiyle hizmet veriyoruz.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Müşterilerimize ücretsiz tasarım desteği sunarak markalarına değer katmalarını sağlıyoruz.
              "Markana Renk Kat!" sloganımızla her projede fark yaratmayı hedefliyoruz.
            </p>
          </div>
          <div className="space-y-4">
            {/* Vision & Mission */}
            <div className="bg-card rounded-xl border border-border/60 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-nipo-blue-light flex items-center justify-center text-primary">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Vizyonumuz</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ambalaj sektöründe Türkiye'nin en güvenilir ve yenilikçi markası olmak, 
                sürdürülebilir üretim anlayışıyla global pazarda söz sahibi olmak.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border/60 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-nipo-pink-light flex items-center justify-center text-secondary">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Misyonumuz</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Müşterilerimizin ihtiyaçlarına en uygun, kaliteli ve ekonomik ambalaj çözümleri sunarak
                markalarının büyümesine katkıda bulunmak.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-14">
          <h2 className="text-2xl font-black text-foreground text-center mb-8">Yolculuğumuz</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} animate-fade-up delay-${Math.min(i + 1, 5)}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""} pl-12 md:pl-0`}>
                  <div className="bg-card rounded-xl border border-border/60 p-5">
                    <span className="text-xs font-bold text-secondary">{item.year}</span>
                    <h3 className="text-sm font-bold text-foreground mt-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-card mt-6" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-14">
          {features.map((f, i) => (
            <div key={f.title} className={`bg-card rounded-xl p-5 text-center border border-border/60 card-hover group animate-fade-up delay-${Math.min(i + 1, 6)}`}>
              <div className={`w-11 h-11 rounded-xl mx-auto mb-3 ${f.color} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-foreground">{f.title}</h3>
              <p className="text-[11px] text-muted-foreground mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Production capabilities */}
        <div className="bg-card rounded-2xl border border-border/60 p-8 md:p-12 mb-14 animate-fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-nipo-green-light flex items-center justify-center text-accent">
                  <Factory className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-black text-foreground">Üretim Kapasitemiz</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Büyükçekmece'deki 2.500 m² kapalı alandaki tesisimizde, son teknoloji makinelerle
                yüksek kaliteli üretim gerçekleştiriyoruz.
              </p>
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">45+ uzman personel</span>
              </div>
              <div className="flex items-center gap-3">
                <Factory className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">2.500 m² üretim alanı</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-3">Baskı & Üretim Yetenekleri</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
