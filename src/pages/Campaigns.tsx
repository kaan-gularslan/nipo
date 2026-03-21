import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tag, Percent, Clock, ArrowRight } from "lucide-react";

const campaigns = [
  {
    title: "Toptan Alımlarda %25'e Varan İndirim!",
    desc: "1000 adet ve üzeri siparişlerinizde özel fiyat avantajlarından yararlanın.",
    badge: "🔥 Sınırlı Süre",
    icon: Percent,
    gradient: "from-primary to-nipo-blue",
  },
  {
    title: "İlk Siparişe Özel %15 İndirim",
    desc: "Yeni müşterilerimize özel hoş geldin indirimi. Kod: HOSGELDIN15",
    badge: "🎉 Yeni Üyelere Özel",
    icon: Tag,
    gradient: "from-secondary to-nipo-pink",
  },
  {
    title: "Kargo Bedava Kampanyası",
    desc: "500₺ ve üzeri siparişlerinizde kargo tamamen ücretsiz!",
    badge: "📦 Ücretsiz Kargo",
    icon: Clock,
    gradient: "from-accent to-nipo-green",
  },
];

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-fade-up">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">Kampanyalar</span>
            <h1 className="text-2xl md:text-4xl font-black text-foreground mt-2">
              Güncel <span className="text-gradient-nipo">Kampanyalar</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((c, i) => (
              <article
                key={i}
                className={`bg-card rounded-2xl border border-border overflow-hidden card-hover group animate-fade-up delay-${Math.min(i + 1, 3)}`}
              >
                {/* Colored top strip */}
                <div className={`h-1.5 bg-gradient-to-r ${c.gradient}`} />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-nipo-blue-light flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-3">
                    {c.badge}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                  <Button size="sm" className="gap-1">
                    Detayları Gör <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Campaigns;
