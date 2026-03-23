

# 5 Tema Demo Sayfaları — Güncellenmiş Plan

Nipo'nun marka renkleri (Koyu Mavi #004374, Pembe #FF456D, Yeşil #9CC33B) tüm temalarda korunacak. **Birincil renk her zaman #004374 olacak** — hiçbir temada turuncu, mor veya başka bir birincil renk kullanılmayacak. Referans sitelerin sadece **yerleşim ve UX pattern'leri** alınacak.

## Renk Kuralı (Tüm Temalar İçin)

| Rol | Renk | Kullanım |
|-----|------|----------|
| **Birincil** | #004374 (Koyu Mavi) | Header, butonlar, linkler, aktif durumlar |
| **İkincil** | #FF456D (Pembe) | CTA butonlar, badge'ler, vurgular |
| **Aksan** | #9CC33B (Yeşil) | Fiyat, stok durumu, başarı göstergeleri |
| **Arka plan** | Beyaz / Açık gri | Sayfa zemini |

## 5 Tema

| # | Rota | İlham | Layout Farkı |
|---|------|-------|-------------|
| 1 | `/demo/hepsiburada` | Hepsiburada | Yatay kategori ikonları, banner+sidebar, carousel |
| 2 | `/demo/bidolu` | Bidolubaski | Full-width slider, güven badge barı, temiz grid |
| 3 | `/demo/trendyol` | Trendyol | Minimal beyaz header, yuvarlak kampanya ikonları, yatay scroll |
| 4 | `/demo/amazon` | Amazon TR | Koyu mavi (#004374) üst bar, büyük arama, kategori grid kartları |
| 5 | `/demo/n11` | N11 | Mega slider, günün fırsatı countdown, fırsat banner'ları |

## Dosya Değişiklikleri

| Dosya | İşlem |
|-------|-------|
| `src/pages/DemoHepsiburada.tsx` | Yeni |
| `src/pages/DemoBidolu.tsx` | Yeni |
| `src/pages/DemoTrendyol.tsx` | Yeni |
| `src/pages/DemoAmazon.tsx` | Yeni |
| `src/pages/DemoN11.tsx` | Yeni |
| `src/App.tsx` | 5 demo rotası ekleme |
| `src/components/Footer.tsx` | Demo sayfa linklerini ekleme |

## Her Temanın Kısa Özeti

### 1. Hepsiburada Tarzı
- **Header**: #004374 arka plan, logo sol, arama ortada, hesap+sepet sağda, alt kategori tab barı
- **Hero**: Yuvarlak kategori ikonları satırı + büyük banner (sol 2/3) + küçük kart (sağ 1/3)
- **Ürünler**: Yatay carousel bölümleri, fiyat+indirim badge

### 2. Bidolubaski Tarzı
- **Header**: Beyaz, logo sol, arama ortada, nav linkler alt satırda
- **Hero**: Full-width slider + 4 güven badge'i (Kargo, Taksit, İade, Güvenli)
- **Ürünler**: Temiz 4'lü grid, büyük kartlar

### 3. Trendyol Tarzı
- **Header**: Minimal beyaz, ince #004374 üst çizgi, geniş arama
- **Hero**: Yuvarlak kampanya daireleri + yatay scroll ürün kartları
- **Ürünler**: Yatay scroll listeleri, farklı başlıklarla

### 4. Amazon Tarzı
- **Header**: Koyu #004374 tam genişlik üst bar, büyük arama, alt nav barı
- **Hero**: Full-width banner + 4'lü kategori kartları (resimli)
- **Ürünler**: Çoklu grid bölümleri

### 5. N11 Tarzı
- **Header**: #004374 üst bar, logo+arama+sepet, kategori menü butonu
- **Hero**: Büyük slider + yan 2 banner + günün fırsatı countdown
- **Ürünler**: Fırsat grid + kategori kartları + çok satanlar carousel

## Teknik
- Tüm demolar mevcut `products`, `categories`, `useCart()` kullanacak
- Ürün linkleri mevcut `/urunler/:slug`'a yönlenecek
- Her demo ~400 satır, bileşenler inline
- Sıralı uygulama: önce Hepsiburada, sonra diğerleri

