import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  { id: "siparis", label: "Sipariş & Ödeme" },
  { id: "uretim", label: "Üretim & Baskı" },
  { id: "kargo", label: "Kargo & Teslimat" },
  { id: "iade", label: "İade & Değişim" },
];

const faqs = [
  { q: "Minimum sipariş miktarı nedir?", a: "Ürüne göre minimum sipariş miktarları değişmektedir. Baskılı ürünlerde minimum 1000 adet, baskısız standart ürünlerde ise minimum 100 adet sipariş kabul edilmektedir.", cat: "siparis" },
  { q: "Ödeme seçenekleri nelerdir?", a: "Kredi kartı, havale/EFT ve kapıda ödeme seçenekleri mevcuttur. Kurumsal müşterilerimize vadeli ödeme imkanı sunmaktayız.", cat: "siparis" },
  { q: "Toptan alımlarda indirim var mı?", a: "Evet, 1000 adet üzeri siparişlerde %10'dan başlayan, miktar arttıkça %25'e varan indirimler uygulanmaktadır. Detaylı teklif için bizimle iletişime geçin.", cat: "siparis" },
  { q: "Fatura kesiliyor mu?", a: "Evet, tüm siparişlerinize e-fatura veya e-arşiv fatura düzenlenmektedir. Kurumsal müşterilerimize irsaliyeli fatura da kesilebilir.", cat: "siparis" },
  { q: "Baskılı ambalaj için tasarım desteği var mı?", a: "Evet, profesyonel tasarım ekibimiz sizin için ücretsiz tasarım desteği sağlamaktadır. Logonuzu ve isteklerinizi bize iletmeniz yeterlidir.", cat: "uretim" },
  { q: "Hangi baskı teknikleri kullanılıyor?", a: "Ofset baskı, flekso baskı ve dijital baskı tekniklerini kullanıyoruz. Ürün tipine ve tiraja göre en uygun baskı yöntemini sizinle birlikte belirliyoruz.", cat: "uretim" },
  { q: "Numune talep edebilir miyim?", a: "Evet, mevcut ürünlerimizden ücretsiz numune gönderimi yapılmaktadır. Özel üretim numuneleri için ise tasarım onayından sonra numune üretimi yapılır.", cat: "uretim" },
  { q: "Teslimat süresi ne kadardır?", a: "Baskısız standart ürünlerde 1-3 iş günü, baskılı ürünlerde tasarım onayından sonra 7-10 iş günü içinde teslimat yapılmaktadır.", cat: "kargo" },
  { q: "Hangi kargo firmalarıyla çalışıyorsunuz?", a: "Yurtiçi Kargo, Aras Kargo ve MNG Kargo ile çalışmaktayız. Büyük siparişler için ambar veya nakliye firmasıyla gönderim de yapılmaktadır.", cat: "kargo" },
  { q: "Kargo ücreti ne kadar?", a: "500₺ ve üzeri siparişlerde kargo ücretsizdir. 500₺ altı siparişlerde ise 29,90₺ sabit kargo ücreti uygulanmaktadır.", cat: "kargo" },
  { q: "İade ve değişim politikanız nedir?", a: "Baskısız standart ürünlerde 14 gün içinde iade kabul edilmektedir. Baskılı özel üretim ürünlerde iade kabul edilmemektedir, ancak üretim hatalı ürünler değiştirilir.", cat: "iade" },
  { q: "Hasarlı ürün gelirse ne yapmalıyım?", a: "Kargo teslimatı sırasında hasar tespit ederseniz tutanak tutturarak tarafımıza bildirin. Fotoğraflı bildirim sonrasında ürünleriniz yeniden gönderilir.", cat: "iade" },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const filtered = selectedCat ? faqs.filter((f) => f.cat === selectedCat) : faqs;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Sık Sorulan Sorular" }]} />

        <div className="max-w-3xl mx-auto">
          <div className="text-center mt-4 mb-8 animate-fade-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nipo-blue-light text-primary text-xs font-bold mb-3">
              <HelpCircle className="w-3 h-3" />
              S.S.S
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-foreground mt-2">
              Sık Sorulan <span className="text-gradient-nipo">Sorular</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-2">Merak ettiklerinize hızlıca cevap bulun.</p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2 mb-6 animate-fade-up">
            <button
              onClick={() => { setSelectedCat(null); setOpenIndex(0); }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth ${
                !selectedCat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Tümü ({faqs.length})
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCat(cat.id); setOpenIndex(0); }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth ${
                  selectedCat === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label} ({faqs.filter((f) => f.cat === cat.id).length})
              </button>
            ))}
          </div>

          <div className="space-y-2.5 mb-14">
            {filtered.map((faq, i) => (
              <div
                key={`${faq.q}-${selectedCat}`}
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
                  style={{ maxHeight: openIndex === i ? "200px" : "0px", opacity: openIndex === i ? 1 : 0 }}
                >
                  <div className="px-5 pb-4 pl-[60px] text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
