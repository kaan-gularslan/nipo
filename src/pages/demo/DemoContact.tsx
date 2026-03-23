import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Adres", value: "Mimar Sinan Merkez Mh. İnönü Cd. No:95/3 Büyükçekmece / İSTANBUL", color: "bg-primary/10 text-primary" },
  { icon: Phone, label: "Telefon", value: "+90 212 883 55 08", color: "bg-secondary/10 text-secondary" },
  { icon: Mail, label: "E-Posta", value: "info@nipo.com.tr", color: "bg-accent/10 text-accent" },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pzt-Cuma: 08:00-18:00 | Cmt: 09:00-14:00", color: "bg-primary/10 text-primary" },
];

const DemoContact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Hata", description: "Zorunlu alanları doldurun.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Mesajınız Gönderildi ✓" });
  };

  const updateField = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-black text-foreground">Bize Ulaşın</h1>
        <p className="text-muted-foreground text-sm mt-2">Sorularınız için bize yazın.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 mb-10">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex gap-3.5 bg-card rounded-xl p-4 border border-border/60 group">
              <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center shrink-0`}><item.icon className="w-4 h-4" /></div>
              <div>
                <div className="font-semibold text-foreground text-sm">{item.label}</div>
                <div className="text-muted-foreground text-xs mt-0.5">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="lg:col-span-3 bg-card rounded-xl p-10 border border-border/60 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5"><CheckCircle className="w-8 h-8 text-accent" /></div>
            <h3 className="text-xl font-bold text-foreground mb-2">Mesajınız Alındı!</h3>
            <p className="text-sm text-muted-foreground mb-6">En kısa sürede dönüş yapacağız.</p>
            <Button onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }} variant="outline">Yeni Mesaj Gönder</Button>
          </div>
        ) : (
          <form className="lg:col-span-3 bg-card rounded-xl p-6 md:p-8 border border-border/60 space-y-4" onSubmit={handleSubmit} noValidate>
            <h3 className="text-lg font-bold text-foreground">Teklif veya Bilgi Talebi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input placeholder="Adınız Soyadınız *" value={form.name} onChange={(e) => updateField("name", e.target.value)} />
              <Input placeholder="Firma Adı" value={form.company} onChange={(e) => updateField("company", e.target.value)} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input type="email" placeholder="E-Posta *" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
              <Input type="tel" placeholder="Telefon" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
            </div>
            <Input placeholder="Konu" value={form.subject} onChange={(e) => updateField("subject", e.target.value)} />
            <Textarea placeholder="Mesajınız... *" rows={4} value={form.message} onChange={(e) => updateField("message", e.target.value)} className="resize-none" />
            <Button className="w-full gap-2" size="lg" type="submit"><Send className="w-4 h-4" /> Mesaj Gönder</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DemoContact;
