

# Demo Sayfaları Geliştirme Planı

## Mevcut Durum

5 demo sayfası mevcut ve çalışıyor. Ancak hepsi birbirine çok benziyor — aynı renk şeması, benzer kart yapıları, benzer bölüm düzeni. Gerçek referans sitelerden yeterince farklılaşmamış. Her biri "bitmiş site" hissi vermesi için ciddi iyileştirme gerekiyor.

## Her Demo İçin Tespit ve Geliştirme

### 1. Hepsiburada Demo (`/demo/hepsiburada`)
**Eksikler**: Banner alanı statik (slider yok), sidebar daha zengin olmalı, "Süper Fırsatlar" countdown bölümü yok, flaş kampanya barı yok.

**Yapılacaklar**:
- Üst kısma kayan kampanya barı (marquee efekti: "Ücretsiz Kargo | Taksit İmkanı | Hızlı Teslimat")
- Hero banner'a slider eklenmesi (3 slayt, otomatik geçiş)
- Sidebar kartlarına görsel gradient ve ikon zenginliği
- "Süper Fırsatlar" bölümüne countdown timer
- "Çok Satanlar" yatay carousel bölümü
- Güven badge barı (Kargo, Taksit, İade, Güvenli)
- Alt banner: "Toplu Sipariş Teklif Al" CTA bölümü

### 2. Bidolu Demo (`/demo/bidolu`)
**Eksikler**: Slider otomatik geçmiyor, "Neden Bizi Seçmelisiniz" bölümü yok, ürün kartları diğer demolarla aynı görünüyor, newsletter bölümü yok.

**Yapılacaklar**:
- Slider'a otomatik geçiş (5sn interval)
- Trust badge'lere hover animasyonu ve daha büyük ikonlar
- "Neden Nipo?" bölümü (4 kart: Kalite, Hız, Fiyat, Destek)
- Ürün kartlarına "Hızlı Görüntüle" hover overlay
- Alt kısma newsletter signup bölümü
- Müşteri yorumları / referans logoları bölümü
- Ürün kartlarında rating yıldızları daha belirgin

### 3. Trendyol Demo (`/demo/trendyol`)
**Eksikler**: Kampanya daireleri fonksiyonel değil, kategori tab'ları ürünleri filtrelemiyor, "Senin İçin" kişiselleştirilmiş bölüm yok.

**Yapılacaklar**:
- Kategori tab'larına aktif filtreleme fonksiyonu (ürünleri kategoriye göre filtrele)
- "Senin İçin Önerilenler" sonsuz scroll benzeri bölüm
- İndirim banner kartlarına hover efekti ve Link eklenmesi
- Ürün kartlarına "Sepete Ekle" butonu (şu an yok, sadece link var)
- "Süper Fiyat" flaş indirim barı (üst kısımda)
- Kampanya dairelerine animasyon (pulse/bounce)
- Footer'ı beyaz yerine açık gri yaparak diğerlerinden farklılaştırma

### 4. Amazon Demo (`/demo/amazon`)
**Eksikler**: Header'daki select dropdown çalışmıyor, "Son Görüntülenen" bölümü statik, kategori kartları emoji ile sınırlı, "Lightning Deals" progress barları statik.

**Yapılacaklar**:
- Header select'ine gerçek kategori filtreleme
- Kategori kartlarına ürün görseli (emoji yerine gradient + ikon)
- "Günün Fırsatları" progress bar'larına animasyon
- "Sana Özel" bölümü (farklı ürünlerle)
- "Tekrar Sipariş Ver" bölümü
- Alt kısma "Nipo'yu Tanıyın" bilgi kartları (4'lü grid)
- Footer'a "Başa Dön" butonunu daha belirgin yapma

### 5. N11 Demo (`/demo/n11`)
**Eksikler**: Slider otomatik geçmiyor, countdown gerçek bir bitiş saatine bağlı değil, fırsat ürünleri bölümü sade, "Haftanın Yıldızları" yok.

**Yapılacaklar**:
- Slider'a otomatik geçiş
- "Haftanın Yıldızları" büyük kart bölümü (2'li grid, büyük görseller)
- Fırsat ürünleri kartlarına "Kalan Stok" progress barı
- "Marka Vitrinleri" bölümü (kategori bazlı büyük banner kartlar)
- Kategori grid'ini daha renkli yapma (her karta hafif background rengi)
- Alt banner: "Toplu Siparişe Özel Fiyat" bölümü
- Countdown'a "Saat:Dakika:Saniye" etiketleri

---

## Dosya Değişiklikleri

| Dosya | İşlem |
|-------|-------|
| `src/pages/DemoHepsiburada.tsx` | Yeniden yazılacak — slider, marquee, countdown, güven barı |
| `src/pages/DemoBidolu.tsx` | Yeniden yazılacak — auto slider, neden bölümü, newsletter |
| `src/pages/DemoTrendyol.tsx` | Yeniden yazılacak — tab filtreleme, sepete ekle, flaş bar |
| `src/pages/DemoAmazon.tsx` | Yeniden yazılacak — kategori görselleri, animasyonlu deals |
| `src/pages/DemoN11.tsx` | Yeniden yazılacak — auto slider, stok barı, marka vitrini |

## Farklılaşma Özeti

```text
Hepsiburada  → Yoğun bilgi, marquee bar, koyu mavi header, sidebar layout
Bidolu       → Temiz/minimal, beyaz header, büyük kartlar, trust-first yaklaşım
Trendyol     → Beyaz/minimal, yuvarlak ikonlar, yatay scroll, tab filtreleme
Amazon       → Koyu header, search-first, card-based layout, progress deals
N11          → Koyu header, mega slider + yan bannerlar, countdown, stok barı
```

Sıralı uygulama: Hepsiburada → Bidolu → Trendyol → Amazon → N11

