import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Adres", value: "Mimar Sinan Merkez Mh. İnönü Cd. No:95/3\nBüyükçekmece / İSTANBUL" },
  { icon: Phone, label: "Telefon", value: "+90 212 883 55 08" },
  { icon: Mail, label: "E-Posta", value: "info@nipo.com.tr" },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pzt - Cuma: 08:00 - 18:00\nCmt: 09:00 - 14:00" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">İletişim</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2">
            Bize <span className="text-gradient-nipo">Ulaşın</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-nipo-blue-light flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  <div className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center mt-6">
              <span className="text-muted-foreground text-sm">📍 Büyükçekmece, İstanbul</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-nipo border border-border space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-bold text-foreground mb-2">Teklif veya Bilgi Talebi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Adınız Soyadınız" />
              <Input placeholder="Firma Adı" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="E-Posta Adresiniz" />
              <Input type="tel" placeholder="Telefon Numaranız" />
            </div>
            <Input placeholder="Konu" />
            <Textarea placeholder="Mesajınız..." rows={4} />
            <Button className="w-full" size="lg">
              Mesaj Gönder
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
