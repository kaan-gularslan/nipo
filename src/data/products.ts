import kutuImg from "@/assets/products/kutu-cesitleri.jpg";
import cantaImg from "@/assets/products/kagit-cantalar.jpg";
import gidaImg from "@/assets/products/gida-ambalaj.jpg";
import etiketImg from "@/assets/products/etiket-baski.jpg";
import koruyucuImg from "@/assets/products/koruyucu-ambalaj.jpg";
import strecImg from "@/assets/products/streç-bant.jpg";

export interface Product {
  id: number;
  name: string;
  slug: string;
  categoryId: string;
  categoryLabel: string;
  price: number;
  oldPrice: number | null;
  img: string;
  badge: string | null;
  rating: number;
  description: string;
  minOrder: number;
  unit: string;
}

export const products: Product[] = [
  { id: 1, name: "Pizza Kutusu 26cm Baskılı", slug: "pizza-kutusu-26cm-baskili", categoryId: "oluklu-kutu", categoryLabel: "Kutu", price: 3.20, oldPrice: 4.50, img: kutuImg, badge: "Çok Satan", rating: 4.8, description: "26cm çapında, E dalga oluklu mukavvadan üretilmiş baskılı pizza kutusu. Gıdayla temas için uygundur. Isıyı koruyarak pizzanın taze kalmasını sağlar.", minOrder: 500, unit: "adet" },
  { id: 2, name: "Lahmacun Kutusu Kraft", slug: "lahmacun-kutusu-kraft", categoryId: "oluklu-kutu", categoryLabel: "Kutu", price: 2.80, oldPrice: null, img: kutuImg, badge: null, rating: 4.5, description: "Kraft renkli lahmacun kutusu. Yüksek gramajlı oluklu mukavvadan üretilmiştir. Isı yalıtımı sağlar.", minOrder: 500, unit: "adet" },
  { id: 3, name: "E-Ticaret Kargo Kutusu (20x15x10)", slug: "e-ticaret-kargo-kutusu-20x15x10", categoryId: "oluklu-kutu", categoryLabel: "Kutu", price: 4.50, oldPrice: 5.90, img: kutuImg, badge: "İndirimli", rating: 4.9, description: "E-ticaret gönderileri için ideal boyutta kargo kutusu. Çift oluklu yapısıyla ürünlerinizi güvenle taşır.", minOrder: 100, unit: "adet" },
  { id: 4, name: "Hamburger Kutusu Baskılı", slug: "hamburger-kutusu-baskili", categoryId: "oluklu-kutu", categoryLabel: "Kutu", price: 1.90, oldPrice: null, img: kutuImg, badge: null, rating: 4.3, description: "Baskılı hamburger kutusu. Gıda onaylı kartondan üretilmiştir. Markanıza özel tasarım uygulanabilir.", minOrder: 1000, unit: "adet" },
  { id: 5, name: "Kraft Çanta 26x32 (Baskılı)", slug: "kraft-canta-26x32-baskili", categoryId: "baski-canta", categoryLabel: "Çanta", price: 5.50, oldPrice: 7.00, img: cantaImg, badge: "Yeni", rating: 4.7, description: "26x32cm boyutlarında baskılı kraft kağıt çanta. Bükümlü sap, 120gr kraft kağıt. Mağaza ve butikler için idealdir.", minOrder: 500, unit: "adet" },
  { id: 6, name: "Karton Çanta Lüks (Laminasyonlu)", slug: "karton-canta-luks-laminasyonlu", categoryId: "baski-canta", categoryLabel: "Çanta", price: 8.90, oldPrice: null, img: cantaImg, badge: null, rating: 4.6, description: "Laminasyonlu lüks karton çanta. Mat veya parlak selefon seçeneğiyle markanızı ön plana çıkarır. İp saplıdır.", minOrder: 250, unit: "adet" },
  { id: 7, name: "Karton Bardak 8oz (Baskılı)", slug: "karton-bardak-8oz-baskili", categoryId: "bardak", categoryLabel: "Bardak", price: 0.65, oldPrice: 0.90, img: gidaImg, badge: "Çok Satan", rating: 4.8, description: "8oz (240ml) baskılı karton bardak. Tek cidar, PE kaplı, sıcak içecekler için uygundur. Kahve zincirleri için ideal.", minOrder: 2000, unit: "adet" },
  { id: 8, name: "Gıda Kasesi Kraft 750ml", slug: "gida-kasesi-kraft-750ml", categoryId: "gida-kabi", categoryLabel: "Kase", price: 1.40, oldPrice: null, img: gidaImg, badge: null, rating: 4.4, description: "750ml kraft gıda kasesi. Salata, pilav, makarna gibi yemekler için idealdir. Kapak ayrı satılır.", minOrder: 500, unit: "adet" },
  { id: 9, name: "Barkod Etiketi 40x20mm (Rulo)", slug: "barkod-etiketi-40x20mm-rulo", categoryId: "etiket", categoryLabel: "Etiket", price: 45.00, oldPrice: 55.00, img: etiketImg, badge: "İndirimli", rating: 4.5, description: "40x20mm boyutlarında termal barkod etiketi. Rulo başına 2000 adet. Termal yazıcılarla uyumludur.", minOrder: 10, unit: "rulo" },
  { id: 10, name: "Ürün Etiketi Özel Tasarım", slug: "urun-etiketi-ozel-tasarim", categoryId: "etiket", categoryLabel: "Etiket", price: 0.12, oldPrice: null, img: etiketImg, badge: null, rating: 4.6, description: "Özel tasarım ürün etiketi. Kuşe, kraft veya şeffaf seçeneklerle üretilir. Markanıza özel baskı.", minOrder: 5000, unit: "adet" },
  { id: 11, name: "Balonlu Naylon 100cm (50m Rulo)", slug: "balonlu-naylon-100cm-50m-rulo", categoryId: "strec-bant", categoryLabel: "Koruyucu", price: 185.00, oldPrice: 220.00, img: koruyucuImg, badge: null, rating: 4.7, description: "100cm genişliğinde, 50 metre uzunluğunda balonlu naylon. Kırılacak eşya ambalajı için idealdir.", minOrder: 5, unit: "rulo" },
  { id: 12, name: "Köpük Levha 100x200cm", slug: "kopuk-levha-100x200cm", categoryId: "strec-bant", categoryLabel: "Koruyucu", price: 28.00, oldPrice: null, img: koruyucuImg, badge: null, rating: 4.3, description: "100x200cm boyutlarında PE köpük levha. 2mm kalınlık. Mobilya, cam ve hassas ürünlerin korunmasında kullanılır.", minOrder: 50, unit: "adet" },
  { id: 13, name: "Streç Film 17mic 500m", slug: "strec-film-17mic-500m", categoryId: "strec-bant", categoryLabel: "Streç", price: 95.00, oldPrice: 120.00, img: strecImg, badge: "Çok Satan", rating: 4.9, description: "17 mikron kalınlığında, 500 metre uzunluğunda streç film. Palet sarma ve ürün paketleme için idealdir.", minOrder: 6, unit: "rulo" },
  { id: 14, name: "Koli Bandı Şeffaf 45mm", slug: "koli-bandi-seffaf-45mm", categoryId: "strec-bant", categoryLabel: "Bant", price: 12.50, oldPrice: null, img: strecImg, badge: null, rating: 4.4, description: "45mm genişliğinde şeffaf koli bandı. 100 metre uzunluk. Güçlü yapışma özelliğiyle koli kapatmada idealdir.", minOrder: 36, unit: "adet" },
  { id: 15, name: "Maskeleme Bandı 48mm", slug: "maskeleme-bandi-48mm", categoryId: "strec-bant", categoryLabel: "Bant", price: 18.00, oldPrice: 22.00, img: strecImg, badge: "Yeni", rating: 4.2, description: "48mm genişliğinde maskeleme bandı. Boya işlerinde ve yüzey korumada kullanılır. Kalıntı bırakmaz.", minOrder: 36, unit: "adet" },
  { id: 16, name: "Peçete Baskılı 33x33 (1000 Adet)", slug: "pecete-baskili-33x33-1000-adet", categoryId: "pecete", categoryLabel: "Peçete", price: 320.00, oldPrice: 380.00, img: gidaImg, badge: "İndirimli", rating: 4.6, description: "33x33cm boyutlarında baskılı peçete. 1 koli 1000 adet. Restoran, kafe ve organizasyonlar için idealdir.", minOrder: 5, unit: "koli" },
  { id: 17, name: "Islak Mendil Tekli (Baskılı)", slug: "islak-mendil-tekli-baskili", categoryId: "islak-mendil", categoryLabel: "Islak Mendil", price: 0.35, oldPrice: 0.45, img: gidaImg, badge: null, rating: 4.3, description: "Tekli baskılı ıslak mendil. Restoran ve kafeler için hijyenik çözüm. Markanıza özel baskı yapılır.", minOrder: 5000, unit: "adet" },
  { id: 18, name: "Amerikan Servis Baskılı", slug: "amerikan-servis-baskili", categoryId: "amerikan-servis", categoryLabel: "Amerikan Servis", price: 0.18, oldPrice: null, img: gidaImg, badge: null, rating: 4.5, description: "Baskılı amerikan servis. 70gr kuşe kağıt üzerine 4 renk baskı. Restoranlar ve kafeler için şık sunum.", minOrder: 5000, unit: "adet" },
  { id: 19, name: "Kasap Kağıdı Baskılı (70x100cm)", slug: "kasap-kagidi-baskili-70x100cm", categoryId: "kasap-kagit", categoryLabel: "Kasap Kağıdı", price: 0.55, oldPrice: 0.70, img: kutuImg, badge: "Yeni", rating: 4.4, description: "70x100cm boyutlarında baskılı kasap kağıdı. Gıdayla temasa uygun, yağ geçirmez özellikte.", minOrder: 2000, unit: "adet" },
  { id: 20, name: "Şeker Poşeti Toz Dolum (Baskılı)", slug: "seker-poseti-toz-dolum-baskili", categoryId: "toz-dolum", categoryLabel: "Toz Dolum", price: 0.08, oldPrice: null, img: gidaImg, badge: null, rating: 4.2, description: "Baskılı şeker poşeti. Toz dolum makinelerine uyumlu. Kafe, restoran ve otel kullanımına uygundur.", minOrder: 10000, unit: "adet" },
  { id: 21, name: "Poşet Baskılı Orta Boy", slug: "poset-baskili-orta-boy", categoryId: "poset", categoryLabel: "Poşet", price: 0.25, oldPrice: 0.32, img: cantaImg, badge: null, rating: 4.1, description: "Orta boy baskılı taşıma poşeti. LDPE malzeme, dayanıklı. Market, mağaza ve eczaneler için uygundur.", minOrder: 5000, unit: "adet" },
  { id: 22, name: "Karton Kutu Düz (30x20x15)", slug: "karton-kutu-duz-30x20x15", categoryId: "karton-kutu", categoryLabel: "Karton Kutu", price: 3.80, oldPrice: null, img: kutuImg, badge: null, rating: 4.5, description: "30x20x15cm boyutlarında düz karton kutu. Depolama, taşıma ve kargo gönderimi için uygundur.", minOrder: 100, unit: "adet" },
  { id: 23, name: "Yağlı Kağıt Baskılı (35x50cm)", slug: "yagli-kagit-baskili-35x50cm", categoryId: "baski-kagit", categoryLabel: "Baskılı Kağıt", price: 0.22, oldPrice: 0.28, img: gidaImg, badge: "Çok Satan", rating: 4.7, description: "35x50cm boyutlarında baskılı yağlı kağıt. Gıdayla temas için onaylı. Döner, hamburger ve sandviç sarmada idealdir.", minOrder: 5000, unit: "adet" },
  { id: 24, name: "Karton Bardak 12oz Soğuk İçecek", slug: "karton-bardak-12oz-soguk-icecek", categoryId: "bardak", categoryLabel: "Bardak", price: 0.85, oldPrice: null, img: gidaImg, badge: null, rating: 4.5, description: "12oz (360ml) soğuk içecek bardağı. PE kaplı, sızdırmaz. Meşrubat, limonata ve smoothie servisi için idealdir.", minOrder: 2000, unit: "adet" },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (categoryId: string): Product[] =>
  products.filter((p) => p.categoryId === categoryId);

export const formatPrice = (price: number): string =>
  `₺${price.toFixed(2).replace(".", ",")}`;

export const getDiscountPercent = (price: number, oldPrice: number): number =>
  Math.round((1 - price / oldPrice) * 100);
