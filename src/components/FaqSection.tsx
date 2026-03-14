import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
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
    <section id="faq" className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold text-secondary uppercase tracking-widest">S.S.S</span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mt-2">
            Sık Sorulan <span className="text-gradient-nipo">Sorular</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-sm text-foreground">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-4 h-4 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
