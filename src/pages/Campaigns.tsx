import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Tag, Percent, Clock, ArrowRight, Zap, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const campaigns = [
  {
    title: "Toptan Alımlarda %25'e Varan İndirim!",
    desc: "1000 adet ve üzeri siparişlerinizde özel fiyat avantajlarından yararlanın. Miktar arttıkça indirim oranı da artar.",
    badge: "🔥 Sınırlı Süre",
    icon: Percent,
    gradient: "from-primary to-nipo-blue",
    endDate: new Date("2026-04-30"),
    details: ["1.000 adet: %10 indirim", "5.000 adet: %15 indirim", "10.000+ adet: %25 indirim"],
  },
  {
    title: "İlk Siparişe Özel %15 İndirim",
    desc: "Yeni müşterilerimize özel hoş geldin indirimi. Tüm ürün gruplarında geçerlidir.",
    badge: "🎉 Yeni Üyelere Özel",
    icon: Gift,
    gradient: "from-secondary to-nipo-pink",
    endDate: new Date("2026-06-30"),
    code: "HOSGELDIN15",
    details: ["Tüm ürün gruplarında geçerli", "Tek kullanımlık kupon", "Min. 200₺ sipariş tutarı"],
  },
  {
    title: "Kargo Bedava Kampanyası",
    desc: "500₺ ve üzeri siparişlerinizde kargo tamamen ücretsiz! Türkiye geneli tüm illere geçerlidir.",
    badge: "📦 Ücretsiz Kargo",
    icon: Clock,
    gradient: "from-accent to-nipo-green",
    endDate: new Date("2026-12-31"),
    details: ["81 ile ücretsiz kargo", "500₺ ve üzeri siparişlerde", "Süresiz kampanya"],
  },
  {
    title: "Sezon Sonu İndirimli Ürünler",
    desc: "Seçili ürün gruplarında %40'a varan indirimlerle stok eritme kampanyası.",
    badge: "⚡ Fırsat",
    icon: Zap,
    gradient: "from-primary to-secondary",
    endDate: new Date("2026-04-15"),
    details: ["Seçili kutularda %30", "Poşet grubunda %40", "Stokla sınırlı"],
  },
];

const CountdownTimer = ({ endDate }: { endDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = endDate.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 60000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className="text-muted-foreground">Kalan süre:</span>
      <span className="px-1.5 py-0.5 rounded bg-muted font-bold text-foreground">{timeLeft.days}g</span>
      <span className="px-1.5 py-0.5 rounded bg-muted font-bold text-foreground">{timeLeft.hours}s</span>
      <span className="px-1.5 py-0.5 rounded bg-muted font-bold text-foreground">{timeLeft.minutes}d</span>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Kampanyalar" }]} />

        <div className="text-center mt-4 mb-10 animate-fade-up">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest">Kampanyalar</span>
          <h1 className="text-2xl md:text-4xl font-black text-foreground mt-2">
            Güncel <span className="text-gradient-nipo">Kampanyalar</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
            Fırsatları kaçırmayın! İndirimli ürünler ve özel teklifler sizi bekliyor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {campaigns.map((c, i) => (
            <article
              key={i}
              className={`bg-card rounded-2xl border border-border overflow-hidden card-hover group animate-fade-up delay-${Math.min(i + 1, 4)}`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${c.gradient}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-nipo-blue-light flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                    {c.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>

                {/* Details */}
                <ul className="space-y-1.5 mb-4">
                  {c.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Coupon code */}
                {"code" in c && c.code && (
                  <div className="bg-muted/50 rounded-lg px-4 py-2.5 mb-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Kupon Kodu:</span>
                    <span className="font-mono font-bold text-sm text-primary tracking-wider">{c.code}</span>
                  </div>
                )}

                {/* Countdown */}
                <div className="mb-4">
                  <CountdownTimer endDate={c.endDate} />
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="gap-1 flex-1" asChild>
                    <Link to="/urunler">Ürünleri Gör <ArrowRight className="w-3.5 h-3.5" /></Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/iletisim">Teklif Al</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Campaigns;
