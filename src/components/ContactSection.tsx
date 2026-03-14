import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Adres", value: "Mimar Sinan Merkez Mh. İnönü Cd. No:95/3 Büyükçekmece / İSTANBUL" },
  { icon: Phone, label: "Telefon", value: "+90 212 883 55 08" },
  { icon: Mail, label: "E-Posta", value: "info@nipo.com.tr" },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pzt-Cuma: 08:00-18:00 | Cmt: 09:00-14:00" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold text-secondary uppercase tracking-widest">İletişim</span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mt-2">
            Bize <span className="text-gradient-nipo">Ulaşın</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-3 bg-card rounded-xl p-4 border border-border">
                <div className="w-10 h-10 rounded-lg bg-nipo-blue-light flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  <div className="text-muted-foreground text-xs">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card rounded-xl p-6 md:p-8 shadow-nipo border border-border space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-lg font-bold text-foreground">Teklif veya Bilgi Talebi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input placeholder="Adınız Soyadınız" />
              <Input placeholder="Firma Adı" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input type="email" placeholder="E-Posta" />
              <Input type="tel" placeholder="Telefon" />
            </div>
            <Input placeholder="Konu" />
            <Textarea placeholder="Mesajınız..." rows={4} />
            <Button className="w-full" size="lg">Mesaj Gönder</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
