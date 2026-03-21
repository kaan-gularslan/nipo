import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Minimum sipariş miktarı nedir?", a: "Ürüne göre minimum sipariş miktarları değişmektedir. Baskılı ürünlerde minimum 1000 adet, baskısız standart ürünlerde ise minimum 100 adet sipariş kabul edilmektedir." },
  { q: "Baskılı ambalaj için tasarım desteği var mı?", a: "Evet, profesyonel tasarım ekibimiz sizin için ücretsiz tasarım desteği sağlamaktadır. Logonuzu ve isteklerinizi bize iletmeniz yeterlidir." },
  { q: "Teslimat süresi ne kadardır?", a: "Baskısız standart ürünlerde 1-3 iş günü, baskılı ürünlerde tasarım onayından sonra 7-10 iş günü içinde teslimat yapılmaktadır." },
  { q: "Ödeme seçenekleri nelerdir?", a: "Kredi kartı, havale/EFT ve kapıda ödeme seçenekleri mevcuttur. Kurumsal müşterilerimize vadeli ödeme imkanı sunmaktayız." },
  { q: "İade ve değişim politikanız nedir?", a: "Baskısız standart ürünlerde 14 gün içinde iade kabul edilmektedir. Baskılı özel üretim ürünlerde iade kabul edilmemektedir, ancak üretim hatalı ürünler değiştirilir." },
  { q: "Toptan alımlarda indirim var mı?", a: "Evet, 1000 adet üzeri siparişlerde %10'dan başlayan, miktar arttıkça %25'e varan indirimler uygulanmaktadır. Detaylı teklif için bizimle iletişime geçin." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 md:py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 animate-fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nipo-blue-light text-primary text-xs font-bold mb-3">
            <HelpCircle className="w-3 h-3" />
            S.S.S
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mt-2">
            Sık Sorulan <span className="text-gradient-nipo">Sorular</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Merak ettiklerinize hızlıca cevap bulun.</p>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border overflow-hidden transition-smooth animate-fade-up delay-${Math.min(i + 1, 6)} ${
                openIndex === i ? "border-primary/20 shadow-nipo-card" : "border-border/60"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-smooth ${
                    openIndex === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {i + 1}
                  </span>
                  <span className={`font-semibold text-sm transition-smooth ${openIndex === i ? "text-primary" : "text-foreground"}`}>{faq.q}</span>
                </span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-smooth ${
                  openIndex === i ? "bg-primary/10 text-primary" : "bg-transparent text-muted-foreground"
                }`}>
                  {openIndex === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0px",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <div className="px-5 pb-4 pl-[60px] text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
