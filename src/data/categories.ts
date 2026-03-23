export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: "baski-kagit", name: "Baskılı Kağıt Grubu", slug: "baski-kagit", icon: "📄", description: "Yağlı kağıt, milaj kağıdı ve baskılı ambalaj kağıtları", productCount: 12 },
  { id: "amerikan-servis", name: "Amerikan Servis", slug: "amerikan-servis", icon: "🍽️", description: "Restoran ve kafeler için baskılı amerikan servisler", productCount: 8 },
  { id: "kasap-kagit", name: "Kasap Kağıtları", slug: "kasap-kagit", icon: "🥩", description: "Et ve şarküteri ürünleri için özel kasap kağıtları", productCount: 6 },
  { id: "baski-canta", name: "Baskılı Çanta Grubu", slug: "baski-canta", icon: "👜", description: "Kraft çanta, karton çanta ve lüks çanta çeşitleri", productCount: 15 },
  { id: "oluklu-kutu", name: "Baskılı Oluklu Kutu Grubu", slug: "oluklu-kutu", icon: "📦", description: "Pizza, lahmacun, pide kutuları ve e-ticaret kutuları", productCount: 20 },
  { id: "islak-mendil", name: "Baskılı Islak Mendil Grubu", slug: "islak-mendil", icon: "🧻", description: "Restoran ve otel için baskılı ıslak mendiller", productCount: 5 },
  { id: "poset", name: "Baskılı Poşet Grubu", slug: "poset", icon: "🛍️", description: "Baskılı taşıma poşetleri ve ambalaj poşetleri", productCount: 10 },
  { id: "toz-dolum", name: "Baskılı Toz Dolum Grubu", slug: "toz-dolum", icon: "☕", description: "Şeker, tuz, kahve gibi toz ürünler için dolum poşetleri", productCount: 7 },
  { id: "bardak", name: "Baskılı Bardak Grubu", slug: "bardak", icon: "🥤", description: "Karton bardak, soğuk içecek bardağı çeşitleri", productCount: 12 },
  { id: "gida-kabi", name: "Baskılı Gıda Kabı Grubu", slug: "gida-kabi", icon: "🥡", description: "Paket servis kapları, salata kasesi, çorba kasesi", productCount: 14 },
  { id: "pecete", name: "Baskılı Peçete Grubu", slug: "pecete", icon: "🧴", description: "Baskılı kağıt peçeteler, bar peçeteleri", productCount: 9 },
  { id: "etiket", name: "Baskılı Etiket Grubu", slug: "etiket", icon: "🏷️", description: "Barkod etiketi, ürün etiketi, özel tasarım etiketler", productCount: 18 },
  { id: "karton-kutu", name: "Karton Kutu Grubu", slug: "karton-kutu", icon: "🗃️", description: "Düz karton kutular, kilitli kutular, hediye kutuları", productCount: 16 },
  { id: "strec-bant", name: "Streç Film & Bant", slug: "strec-bant", icon: "📋", description: "Streç film, koli bandı, maskeleme bandı", productCount: 11 },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
