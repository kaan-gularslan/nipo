import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tag, Percent, Clock, ArrowRight } from "lucide-react";

const campaigns = [
  {
    title: "Toptan Alımlarda %25'e Varan İndirim!",
    desc: "1000 adet ve üzeri siparişlerinizde özel fiyat avantajlarından yararlanın.",
    badge: "🔥 Sınırlı Süre",
    icon: Percent,
  },
  {
    title: "İlk Siparişe Özel %15 İndirim",
    desc: "Yeni müşterilerimize özel hoş geldin indirimi. Kod: HOSGELDIN15",
    badge: "🎉 Yeni Üyelere Özel",
    icon: Tag,
  },
  {
    title: "Kargo Bedava Kampanyası",
    desc: "500₺ ve üzeri siparişlerinizde kargo tamamen ücretsiz!",
    badge: "📦 Ücretsiz Kargo",
    icon: Clock,
  },
];

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">Kampanyalar</span>
            <h1 className="text-2xl md:text-4xl font-black text-foreground mt-2">
              Güncel <span className="text-gradient-nipo">Kampanyalar</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-nipo transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-nipo-blue-light flex items-center justify-center mb-4">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Campaigns;
