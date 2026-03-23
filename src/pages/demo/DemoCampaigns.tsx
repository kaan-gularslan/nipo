import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Percent, Clock, ArrowRight, Zap, Gift } from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import { useState, useEffect } from "react";

const campaigns = [
  { title: "Toptan Alımlarda %25'e Varan İndirim!", desc: "1000 adet ve üzeri siparişlerinizde özel fiyat avantajları.", badge: "🔥 Sınırlı Süre", icon: Percent, gradient: "from-primary to-primary/70", endDate: new Date("2026-04-30"), details: ["1.000 adet: %10 indirim", "5.000 adet: %15 indirim", "10.000+ adet: %25 indirim"] },
  { title: "İlk Siparişe Özel %15 İndirim", desc: "Yeni müşterilerimize özel hoş geldin indirimi.", badge: "🎉 Yeni Üyelere Özel", icon: Gift, gradient: "from-secondary to-secondary/70", endDate: new Date("2026-06-30"), code: "HOSGELDIN15", details: ["Tüm ürün gruplarında geçerli", "Min. 200₺ sipariş tutarı"] },
  { title: "Kargo Bedava Kampanyası", desc: "500₺ ve üzeri siparişlerinizde kargo ücretsiz!", badge: "📦 Ücretsiz Kargo", icon: Clock, gradient: "from-accent to-accent/70", endDate: new Date("2026-12-31"), details: ["81 ile ücretsiz kargo", "Süresiz kampanya"] },
  { title: "Sezon Sonu İndirimli Ürünler", desc: "Seçili ürün gruplarında %40'a varan indirim.", badge: "⚡ Fırsat", icon: Zap, gradient: "from-primary to-secondary", endDate: new Date("2026-04-15"), details: ["Seçili kutularda %30", "Stokla sınırlı"] },
];

const CountdownTimer = ({ endDate }: { endDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = endDate.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
      return { days: Math.floor(diff / 86400000), hours: Math.floor((diff % 86400000) / 3600000), minutes: Math.floor((diff % 3600000) / 60000) };
    };
    setTimeLeft(calc());
    const t = setInterval(() => setTimeLeft(calc()), 60000);
    return () => clearInterval(t);
  }, [endDate]);
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className="text-muted-foreground">Kalan süre:</span>
      <span className="px-1.5 py-0.5 rounded bg-muted font-bold">{timeLeft.days}g</span>
      <span className="px-1.5 py-0.5 rounded bg-muted font-bold">{timeLeft.hours}s</span>
      <span className="px-1.5 py-0.5 rounded bg-muted font-bold">{timeLeft.minutes}d</span>
    </div>
  );
};

const DemoCampaigns = () => {
  const { demoLink } = useDemo();
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-black text-foreground mt-2">Güncel Kampanyalar</h1>
        <p className="text-muted-foreground text-sm mt-2">Fırsatları kaçırmayın!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {campaigns.map((c, i) => (
          <article key={i} className="bg-card rounded-2xl border border-border overflow-hidden card-hover group">
            <div className={`h-1.5 bg-gradient-to-r ${c.gradient}`} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><c.icon className="w-6 h-6 text-primary" /></div>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">{c.badge}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
              <ul className="space-y-1.5 mb-4">
                {c.details.map((d) => <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-accent" />{d}</li>)}
              </ul>
              {"code" in c && c.code && (
                <div className="bg-muted/50 rounded-lg px-4 py-2.5 mb-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Kupon:</span>
                  <span className="font-mono font-bold text-sm text-primary">{c.code}</span>
                </div>
              )}
              <div className="mb-4"><CountdownTimer endDate={c.endDate} /></div>
              <div className="flex gap-2">
                <Button size="sm" className="gap-1 flex-1" asChild><Link to={demoLink("/urunler")}>Ürünleri Gör <ArrowRight className="w-3.5 h-3.5" /></Link></Button>
                <Button size="sm" variant="outline" asChild><Link to={demoLink("/iletisim")}>Teklif Al</Link></Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default DemoCampaigns;
