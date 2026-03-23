import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Adres", value: "Mimar Sinan Merkez Mh. İnönü Cd. No:95/3 Büyükçekmece / İSTANBUL", color: "bg-nipo-blue-light text-primary" },
  { icon: Phone, label: "Telefon", value: "+90 212 883 55 08", color: "bg-nipo-pink-light text-secondary" },
  { icon: Mail, label: "E-Posta", value: "info@nipo.com.tr", color: "bg-nipo-green-light text-accent" },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pzt-Cuma: 08:00-18:00 | Cmt: 09:00-14:00", color: "bg-nipo-blue-light text-primary" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Ad Soyad zorunludur";
    else if (form.name.trim().length > 100) errs.name = "Maksimum 100 karakter";
    if (!form.email.trim()) errs.email = "E-posta zorunludur";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Geçerli bir e-posta giriniz";
    if (!form.phone.trim()) errs.phone = "Telefon zorunludur";
    else if (!/^[0-9\s\+\-\(\)]{7,20}$/.test(form.phone.trim())) errs.phone = "Geçerli bir telefon giriniz";
    if (!form.message.trim()) errs.message = "Mesaj zorunludur";
    else if (form.message.trim().length > 1000) errs.message = "Maksimum 1000 karakter";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    toast({ title: "Mesajınız Gönderildi ✓", description: "En kısa sürede size dönüş yapacağız." });
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "İletişim" }]} />

        <div className="text-center mt-4 mb-10 animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nipo-pink-light text-secondary text-xs font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            İletişim
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-foreground mt-2">
            Bize <span className="text-gradient-nipo">Ulaşın</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
            Sorularınız, özel teklif talepleriniz veya siparişleriniz için bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mb-10">
          {/* Info cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {contactInfo.map((item, i) => (
              <div key={item.label} className={`flex gap-3.5 bg-card rounded-xl p-4 border border-border/60 hover:shadow-nipo-card transition-smooth group animate-slide-left delay-${Math.min(i + 1, 4)}`}>
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
          {submitted ? (
            <div className="lg:col-span-3 bg-card rounded-xl p-10 shadow-nipo-card border border-border/60 flex flex-col items-center justify-center text-center animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-nipo-green-light flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Mesajınız Alındı!</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                Talebiniz ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.
              </p>
              <Button onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }} variant="outline" className="rounded-full">
                Yeni Mesaj Gönder
              </Button>
            </div>
          ) : (
            <form className="lg:col-span-3 bg-card rounded-xl p-6 md:p-8 shadow-nipo-card border border-border/60 space-y-4 animate-slide-right" onSubmit={handleSubmit} noValidate>
              <h3 className="text-lg font-bold text-foreground">Teklif veya Bilgi Talebi</h3>
              <p className="text-xs text-muted-foreground -mt-2">Formu doldurun, en kısa sürede dönüş yapalım.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Input placeholder="Adınız Soyadınız *" value={form.name} onChange={(e) => updateField("name", e.target.value)} className={`rounded-lg bg-muted/30 border-border/60 focus:bg-card ${errors.name ? "border-destructive" : ""}`} maxLength={100} />
                  {errors.name && <p className="text-[10px] text-destructive mt-1">{errors.name}</p>}
                </div>
                <Input placeholder="Firma Adı" value={form.company} onChange={(e) => updateField("company", e.target.value)} className="rounded-lg bg-muted/30 border-border/60 focus:bg-card" maxLength={100} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Input type="email" placeholder="E-Posta *" value={form.email} onChange={(e) => updateField("email", e.target.value)} className={`rounded-lg bg-muted/30 border-border/60 focus:bg-card ${errors.email ? "border-destructive" : ""}`} maxLength={255} />
                  {errors.email && <p className="text-[10px] text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Input type="tel" placeholder="Telefon *" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className={`rounded-lg bg-muted/30 border-border/60 focus:bg-card ${errors.phone ? "border-destructive" : ""}`} maxLength={20} />
                  {errors.phone && <p className="text-[10px] text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>
              <Input placeholder="Konu" value={form.subject} onChange={(e) => updateField("subject", e.target.value)} className="rounded-lg bg-muted/30 border-border/60 focus:bg-card" maxLength={200} />
              <div>
                <Textarea placeholder="Mesajınız... *" rows={4} value={form.message} onChange={(e) => updateField("message", e.target.value)} className={`rounded-lg bg-muted/30 border-border/60 focus:bg-card resize-none ${errors.message ? "border-destructive" : ""}`} maxLength={1000} />
                {errors.message && <p className="text-[10px] text-destructive mt-1">{errors.message}</p>}
                <p className="text-[10px] text-muted-foreground mt-1 text-right">{form.message.length}/1000</p>
              </div>
              <Button className="w-full rounded-lg gap-2" size="lg" type="submit">
                <Send className="w-4 h-4" />
                Mesaj Gönder
              </Button>
            </form>
          )}
        </div>

        {/* Google Maps */}
        <div className="rounded-xl overflow-hidden border border-border/60 mb-14 animate-fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5!2d28.58!3d41.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBüyükçekmece%2C+İstanbul!5e0!3m2!1str!2str!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nipo Ambalaj Konum"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
