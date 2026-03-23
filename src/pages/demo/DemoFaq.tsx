import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  { id: "siparis", label: "Sipariş & Ödeme" },
  { id: "uretim", label: "Üretim & Baskı" },
  { id: "kargo", label: "Kargo & Teslimat" },
  { id: "iade", label: "İade & Değişim" },
];

const faqs = [
  { q: "Minimum sipariş miktarı nedir?", a: "Ürüne göre değişir. Baskılı ürünlerde min. 1000 adet, baskısız ürünlerde 100 adet.", cat: "siparis" },
  { q: "Ödeme seçenekleri nelerdir?", a: "Kredi kartı, havale/EFT ve kapıda ödeme seçenekleri mevcuttur.", cat: "siparis" },
  { q: "Toptan alımlarda indirim var mı?", a: "Evet, 1000+ adet siparişlerde %10'dan başlayan, %25'e varan indirimler.", cat: "siparis" },
  { q: "Baskılı ambalaj için tasarım desteği var mı?", a: "Evet, profesyonel tasarım ekibimiz ücretsiz destek sağlar.", cat: "uretim" },
  { q: "Hangi baskı teknikleri kullanılıyor?", a: "Ofset baskı, flekso baskı ve dijital baskı.", cat: "uretim" },
  { q: "Teslimat süresi ne kadardır?", a: "Baskısız: 1-3 iş günü, baskılı: 7-10 iş günü.", cat: "kargo" },
  { q: "Kargo ücreti ne kadar?", a: "500₺ üzeri ücretsiz. Altında 29,90₺.", cat: "kargo" },
  { q: "İade politikanız nedir?", a: "Baskısız ürünlerde 14 gün iade. Baskılı özel üretim iade edilmez, hatalı ürünler değiştirilir.", cat: "iade" },
];

const DemoFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const filtered = selectedCat ? faqs.filter((f) => f.cat === selectedCat) : faqs;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <HelpCircle className="w-8 h-8 text-primary mx-auto mb-2" />
          <h1 className="text-2xl md:text-4xl font-black text-foreground">Sık Sorulan Sorular</h1>
          <p className="text-muted-foreground text-sm mt-2">Merak ettiklerinize hızlıca cevap bulun.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => { setSelectedCat(null); setOpenIndex(0); }} className={`px-3 py-1.5 rounded-full text-xs font-semibold ${!selectedCat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            Tümü ({faqs.length})
          </button>
          {faqCategories.map((cat) => (
            <button key={cat.id} onClick={() => { setSelectedCat(cat.id); setOpenIndex(0); }} className={`px-3 py-1.5 rounded-full text-xs font-semibold ${selectedCat === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-2.5 mb-14">
          {filtered.map((faq, i) => (
            <div key={`${faq.q}-${selectedCat}`} className={`bg-card rounded-xl border overflow-hidden ${openIndex === i ? "border-primary/20 shadow-md" : "border-border/60"}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                <span className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${openIndex === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{i + 1}</span>
                  <span className={`font-semibold text-sm ${openIndex === i ? "text-primary" : "text-foreground"}`}>{faq.q}</span>
                </span>
                {openIndex === i ? <ChevronUp className="w-4 h-4 text-primary" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIndex === i ? "200px" : "0px", opacity: openIndex === i ? 1 : 0 }}>
                <div className="px-5 pb-4 pl-[60px] text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoFaq;
