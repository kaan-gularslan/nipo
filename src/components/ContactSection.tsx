import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Adres", value: "Mimar Sinan Merkez Mh. İnönü Cd. No:95/3 Büyükçekmece / İSTANBUL", color: "bg-nipo-blue-light text-primary" },
  { icon: Phone, label: "Telefon", value: "+90 212 883 55 08", color: "bg-nipo-pink-light text-secondary" },
  { icon: Mail, label: "E-Posta", value: "info@nipo.com.tr", color: "bg-nipo-green-light text-accent" },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pzt-Cuma: 08:00-18:00 | Cmt: 09:00-14:00", color: "bg-nipo-blue-light text-primary" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nipo-pink-light text-secondary text-xs font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            İletişim
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mt-2">
            Bize <span className="text-gradient-nipo">Ulaşın</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
            Sorularınız, özel teklif talepleriniz veya siparişleriniz için bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {contactInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex gap-3.5 bg-card rounded-xl p-4 border border-border/60 hover:shadow-nipo-card transition-smooth group animate-slide-left delay-${Math.min(i + 1, 4)}`}
              >
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            className="lg:col-span-3 bg-card rounded-xl p-6 md:p-8 shadow-nipo-card border border-border/60 space-y-4 animate-slide-right"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-lg font-bold text-foreground">Teklif veya Bilgi Talebi</h3>
            <p className="text-xs text-muted-foreground -mt-2">Formu doldurun, en kısa sürede dönüş yapalım.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input placeholder="Adınız Soyadınız" className="rounded-lg bg-muted/30 border-border/60 focus:bg-card" />
              <Input placeholder="Firma Adı" className="rounded-lg bg-muted/30 border-border/60 focus:bg-card" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input type="email" placeholder="E-Posta" className="rounded-lg bg-muted/30 border-border/60 focus:bg-card" />
              <Input type="tel" placeholder="Telefon" className="rounded-lg bg-muted/30 border-border/60 focus:bg-card" />
            </div>
            <Input placeholder="Konu" className="rounded-lg bg-muted/30 border-border/60 focus:bg-card" />
            <Textarea placeholder="Mesajınız..." rows={4} className="rounded-lg bg-muted/30 border-border/60 focus:bg-card resize-none" />
            <Button className="w-full rounded-lg gap-2" size="lg">
              <Send className="w-4 h-4" />
              Mesaj Gönder
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
