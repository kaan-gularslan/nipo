

# Demo Sayfaları — Tam Site Deneyimi Planı

## Sorun
Demo sayfalarındaki tüm linkler (`/urunler`, `/kategori/xxx`, `/sepet`, `/kampanyalar` vb.) ana sitenin sayfalarına yönlendiriyor. Kullanıcı bir demo temasından çıkıp ana siteye düşüyor.

## Çözüm: Nested Routes + Demo Layout Sistemi

Her demo kendi alt-rotalarına sahip olacak. Örnek:
```text
/demo/bidolu           → Ana sayfa (mevcut)
/demo/bidolu/urunler   → Ürünler (Bidolu teması)
/demo/bidolu/urunler/:slug → Ürün detay (Bidolu teması)
/demo/bidolu/kategori/:slug → Kategori (Bidolu teması)
/demo/bidolu/sepet     → Sepet (Bidolu teması)
/demo/bidolu/kampanyalar → Kampanyalar
/demo/bidolu/iletisim  → İletişim
/demo/bidolu/sss       → SSS
```

### Mimari

1. **DemoContext** — Aktif demo temasını tutar (`hepsiburada | bidolu | trendyol | amazon | n11`)
2. **DemoLayout bileşenleri** — Her demo için header + footer ayrı bileşen olarak çıkarılır
3. **Paylaşılan içerik sayfaları** — `DemoProducts`, `DemoCategory`, `DemoProductDetail`, `DemoCart`, `DemoCampaigns`, `DemoContact`, `DemoFaq` — içerik aynı, sadece layout (header/footer) demo'ya göre değişir
4. **Link güncelleme** — Tüm demo sayfalarındaki linkler göreceli hale gelir (ör. `/kategori/xxx` → `/demo/bidolu/kategori/xxx`)

### Dosya Yapısı

| Dosya | İşlem |
|-------|-------|
| `src/context/DemoContext.tsx` | **Yeni** — Demo tema context + `useDemo()` hook + `basePath` hesaplama |
| `src/components/demo/DemoLayout.tsx` | **Yeni** — Aktif temaya göre header/footer seçen wrapper |
| `src/components/demo/headers/` | **Yeni** — 5 ayrı header bileşeni (mevcut demo sayfalarından çıkarılacak) |
| `src/components/demo/footers/` | **Yeni** — 5 ayrı footer bileşeni |
| `src/pages/demo/DemoProducts.tsx` | **Yeni** — Temaya sarılmış ürünler sayfası |
| `src/pages/demo/DemoCategory.tsx` | **Yeni** — Temaya sarılmış kategori sayfası |
| `src/pages/demo/DemoProductDetail.tsx` | **Yeni** — Temaya sarılmış ürün detay |
| `src/pages/demo/DemoCart.tsx` | **Yeni** — Temaya sarılmış sepet |
| `src/pages/demo/DemoCampaigns.tsx` | **Yeni** — Temaya sarılmış kampanyalar |
| `src/pages/demo/DemoContact.tsx` | **Yeni** — Temaya sarılmış iletişim |
| `src/pages/demo/DemoFaq.tsx` | **Yeni** — Temaya sarılmış SSS |
| `src/pages/DemoHepsiburada.tsx` | Güncelle — Linkleri `/demo/hepsiburada/...` yapma, header/footer'ı bileşene çıkarma |
| `src/pages/DemoBidolu.tsx` | Aynı |
| `src/pages/DemoTrendyol.tsx` | Aynı |
| `src/pages/DemoAmazon.tsx` | Aynı |
| `src/pages/DemoN11.tsx` | Aynı |
| `src/App.tsx` | Güncelle — Demo nested route'ları ekleme |

### DemoContext Yapısı
```text
DemoContext {
  theme: "hepsiburada" | "bidolu" | "trendyol" | "amazon" | "n11"
  basePath: "/demo/bidolu"   // tüm linkler buna göre oluşturulur
  demoLink(path): string     // "/urunler" → "/demo/bidolu/urunler"
}
```

### App.tsx Route Yapısı
```text
/demo/:theme          → DemoIndex (mevcut ana sayfa bileşenlerini seçer)
/demo/:theme/urunler  → DemoProducts
/demo/:theme/urunler/:slug → DemoProductDetail
/demo/:theme/kategori/:slug → DemoCategory
/demo/:theme/sepet    → DemoCart
/demo/:theme/kampanyalar → DemoCampaigns
/demo/:theme/iletisim → DemoContact
/demo/:theme/sss      → DemoFaq
```

### Ana Sayfa Zenginleştirme
Her demo'nun ana sayfasına ek bölümler:
- **Hepsiburada**: "Son Görüntülenenler" carousel, "Markaların Tercihi" referans logoları, alt banner'lar
- **Bidolu**: Müşteri yorumları slider, "Nasıl Çalışır" 3-adım bölümü, blog kartları
- **Trendyol**: "Senin İçin" kişisel öneri bölümü, "Butik Fırsatlar" grid, marka highlight
- **Amazon**: "Tekrar Sipariş Ver" bölümü, "Nipo'yu Tanı" bilgi kartları, ilgi alanı önerileri
- **N11**: "Haftanın Yıldızları" büyük 2'li kart, "Marka Vitrinleri" banner, flash sale timer

### Uygulama Sırası
1. DemoContext + DemoLayout altyapısı
2. Header/Footer bileşenlerini çıkar (5 demo)
3. Paylaşılan alt sayfaları oluştur (Products, Category, ProductDetail, Cart, Campaigns, Contact, Faq)
4. Demo ana sayfalarını zenginleştir + linklerini güncelle
5. App.tsx route yapısını güncelle

