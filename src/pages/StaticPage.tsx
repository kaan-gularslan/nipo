import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const pages: Record<string, { title: string; content: string[] }> = {
  kargo: {
    title: "Kargo Bilgileri",
    content: [
      "Siparişleriniz, ödeme onayından sonra 1-3 iş günü içinde kargoya verilmektedir. Baskılı özel üretim ürünlerde bu süre tasarım onayından itibaren 7-10 iş günüdür.",
      "Kargo ücretleri sipariş tutarına göre değişmektedir. 500₺ ve üzeri siparişlerde kargo ücretsizdir.",
      "Siparişleriniz Yurtiçi Kargo, Aras Kargo veya MNG Kargo ile gönderilmektedir. Kargo takip numaranız, sipariş kargoya verildikten sonra SMS ve e-posta ile bildirilir.",
      "Türkiye genelinde 81 ile teslimat yapılmaktadır. İstanbul içi siparişlerde aynı gün teslimat seçeneği mevcuttur (saat 14:00'e kadar verilen siparişler için).",
      "Kargo teslimatı sırasında paketinizi kontrol ediniz. Hasarlı veya eksik ürün tespit etmeniz halinde tutanak tutturarak tarafımıza bildiriniz.",
    ],
  },
  iade: {
    title: "İade Koşulları",
    content: [
      "Baskısız standart ürünlerde, teslim tarihinden itibaren 14 gün içinde iade kabul edilmektedir. İade edilecek ürünlerin kullanılmamış, orijinal ambalajında ve satılabilir durumda olması gerekmektedir.",
      "Baskılı özel üretim ürünlerde iade kabul edilmemektedir. Ancak üretim hatalı ürünler için değişim veya iade işlemi yapılmaktadır.",
      "İade sürecini başlatmak için info@nipo.com.tr adresine veya 0212 883 55 08 numaralı telefona başvurmanız gerekmektedir.",
      "İade kargo ücreti, ürün hatalı veya yanlış gönderilmiş ise Nipo Ambalaj tarafından karşılanır. Müşteri kaynaklı iadelerde kargo ücreti müşteriye aittir.",
      "İade onayından sonra ödemeniz 5-10 iş günü içinde iade edilir. Kredi kartıyla yapılan ödemelerde iade süresi bankanıza göre değişebilir.",
    ],
  },
  gizlilik: {
    title: "Gizlilik Politikası",
    content: [
      "Nipo Ambalaj olarak kişisel verilerinizin güvenliği bizim için son derece önemlidir. Bu gizlilik politikası, hangi bilgileri topladığımızı, nasıl kullandığımızı ve nasıl koruduğumuzu açıklamaktadır.",
      "Sitemizi ziyaret ettiğinizde veya sipariş verdiğinizde ad-soyad, e-posta, telefon, adres gibi kişisel bilgileriniz toplanmaktadır. Bu bilgiler yalnızca siparişlerinizin işlenmesi, teslimatın yapılması ve sizinle iletişim kurulması amacıyla kullanılmaktadır.",
      "Kişisel verileriniz üçüncü şahıslarla paylaşılmamaktadır. Yalnızca yasal zorunluluklar çerçevesinde yetkili mercilere bilgi verilebilir.",
      "Web sitemizde çerezler (cookies) kullanılmaktadır. Çerezler, site deneyiminizi iyileştirmek ve tercihlerinizi hatırlamak amacıyla kullanılır.",
      "Gizlilik politikamızla ilgili sorularınız için info@nipo.com.tr adresinden bize ulaşabilirsiniz.",
    ],
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    content: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, Nipo Ambalaj olarak veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda işlemekteyiz.",
      "Toplanan kişisel veriler: Ad-soyad, e-posta adresi, telefon numarası, adres bilgileri, sipariş geçmişi ve ödeme bilgileri.",
      "Kişisel verileriniz; sipariş işlemlerinin gerçekleştirilmesi, teslimat süreçlerinin yönetilmesi, müşteri ilişkileri yönetimi, yasal yükümlülüklerin yerine getirilmesi ve pazarlama faaliyetleri (onayınız dahilinde) amaçlarıyla işlenmektedir.",
      "KVKK'nın 11. maddesi gereğince; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme haklarına sahipsiniz.",
      "Haklarınızı kullanmak için info@nipo.com.tr adresine başvurabilirsiniz. Başvurunuz en geç 30 gün içinde değerlendirilecektir.",
    ],
  },
};

const StaticPage = ({ page }: { page: keyof typeof pages }) => {
  const data = pages[page];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: data.title }]} />
        <div className="max-w-3xl mx-auto py-8 mb-14">
          <h1 className="text-2xl md:text-3xl font-black text-foreground mb-8">{data.title}</h1>
          <div className="space-y-4">
            {data.content.map((p, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StaticPage;
