

# Mobil Uyumluluk Planı

## Tespit Edilen Sorunlar

### Ana Site
- **Header**: Zaten responsive, mobil menü mevcut. Sorun yok.
- **HeroSection**: `min-h-[300px] md:min-h-[524px]` — mobilde iyi, ancak metin boyutları (`text-3xl`) küçük ekranlarda büyük kalabilir.
- **Footer**: Newsletter formu mobilde `w-64` sabit — taşabilir. Grid `grid-cols-2` mobilde sıkışık.
- **Products/Category sidebar**: `lg:w-64` ile gizleniyor ama mobilde sidebar gösterilmiyor — kullanıcı kategorilere erişemiyor.
- **Cart**: Mobilde sepet öğeleri (`flex gap-4`) dar ekranlarda sıkışıyor.
- **Admin**: Login ekranı iyi. Panel sidebar zaten mobil overlay var. İçerik sayfaları (`AdminSettings`, `AdminProducts`) tablo/gridler mobilde taşabilir.

### Demo Sayfaları
- **Mobile menu `fixed top` değerleri**: Her header farklı yükseklikte, ama `top-[50px]`, `top-[52px]`, `top-[56px]`, `top-[60px]` gibi hardcoded — bazen menü header'ın altında tam oturmuyor.
- **HepsiburadaHeader**: Top bar ve marquee mobilde gereksiz alan kaplıyor. Kategori ikonları scroll yapılıyor — bu iyi.
- **BidoluHeader**: Trust badges mobilde `grid-cols-2` — iyi ama metin uzun olabilir.
- **TrendyolHeader**: Tab bar `hidden lg:block` — mobilde kategori erişimi yok (sadece mobile menu'den).
- **N11Header**: Kategori bar `hidden lg:block` — aynı sorun.
- **AmazonHeader**: Location/search `hidden md:block` — mobilde arama yok (sadece menüden).
- **Demo anasayfaları**: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` — çoğu zaten responsive. N11 `lg:grid-cols-6` mobilde `grid-cols-2` — iyi.
- **DemoProducts sidebar**: `lg:w-64` sidebar mobilde gizli — kategori filtresi erişilemiyor.
- **DemoCart**: Layout zaten responsive.
- **DemoProductDetail**: Grid `md:grid-cols-2` — mobilde tek sütun, iyi.

## Çözüm Planı

### 1. Ana Site Düzeltmeleri

**Footer** (`src/components/Footer.tsx`):
- Newsletter input'u `w-64` → `w-full md:w-64`
- Grid `grid-cols-2` → mobilde tek sütun brand alanı `col-span-2 md:col-span-1`

**Products & Category sidebar** (`src/pages/Products.tsx`, `src/pages/Category.tsx`):
- Mobilde sidebar'ı yatay scroll kategori şeridi olarak göster (demo sayfalarındaki gibi)
- `lg:` altında horizontal chip/pill kategori listesi

**HeroSection** (`src/components/HeroSection.tsx`):
- Slider nav butonları mobilde küçült (`w-9 h-9` → `w-8 h-8`)
- Metin `text-3xl md:text-[3.2rem]` → `text-2xl sm:text-3xl md:text-[3.2rem]`

### 2. Demo Header Düzeltmeleri (5 dosya)

**Tüm demo header'lar**:
- Mobile menu `fixed top-[XXpx]` → dinamik olarak header yüksekliğine göre ayarla veya `top-0 pt-[header-height]` pattern'i kullan
- Mobil arama çubuğu: Tüm header'larda mobilde arama erişilebilir olsun (zaten çoğunda var)
- Top bar'ları (`bg-primary/95`) mobilde `hidden` yap — gereksiz alan

**HepsiburadaHeader**: Marquee + top bar mobilde gizle, mobile menu top değerini düzelt
**BidoluHeader**: Trust badges mobilde ikon + label only (desc gizle), mobile menu top düzelt
**TrendyolHeader**: Mobil menüye tab'ları ekle (zaten var), top düzelt
**AmazonHeader**: Mobil menüye arama + location ekle (arama zaten var), top düzelt  
**N11Header**: Mobil menüye kategoriler ekle (zaten var), top düzelt

### 3. Demo Sayfa Düzeltmeleri

**DemoProducts** (`src/pages/demo/DemoProducts.tsx`):
- Sidebar `lg:w-64` mobilde horizontal scroll chip listesi olarak göster
- Sort select mobilde tam genişlik

**DemoCart** (`src/pages/demo/DemoCart.tsx`):
- Sepet öğelerinde görsel boyutu `w-20 h-20 md:w-24 md:h-24` — zaten iyi
- Sipariş özeti mobilde sticky değil normal olsun

**Demo anasayfaları** (5 dosya):
- Countdown timer sayıları mobilde wrap olmaması için `flex-wrap` veya küçük boyut
- CTA bölümleri padding `p-8 md:p-12` → `p-5 md:p-8 lg:p-12`
- Hero slider yüksekliği tutarlı: `h-48 sm:h-56 md:h-72 lg:h-80`

### 4. Admin Panel Mobil

**AdminSettings**: Form grid'leri `grid-cols-2` → `grid-cols-1 sm:grid-cols-2`
**AdminProducts/AdminOrders**: Tablo mobilde yatay scroll (`overflow-x-auto`)
**AdminDashboard**: Stat kartları `grid-cols-4` → `grid-cols-2 md:grid-cols-4`

### Dosya Listesi

| Dosya | Değişiklik |
|-------|-----------|
| `src/components/HeroSection.tsx` | Mobil metin boyutu, buton boyutu |
| `src/components/Footer.tsx` | Newsletter input genişliği |
| `src/pages/Products.tsx` | Mobil kategori chip listesi |
| `src/pages/Category.tsx` | Mobil kategori chip listesi |
| `src/pages/Cart.tsx` | Sipariş özeti mobil sticky kaldır |
| `src/components/demo/headers/HepsiburadaHeader.tsx` | Top bar gizle, menu top düzelt |
| `src/components/demo/headers/BidoluHeader.tsx` | Trust badge desc gizle, menu top |
| `src/components/demo/headers/TrendyolHeader.tsx` | Menu top düzelt |
| `src/components/demo/headers/AmazonHeader.tsx` | Menu top düzelt |
| `src/components/demo/headers/N11Header.tsx` | Menu top düzelt |
| `src/pages/DemoHepsiburada.tsx` | Hero/CTA padding, countdown wrap |
| `src/pages/DemoBidolu.tsx` | Hero yükseklik, CTA padding |
| `src/pages/DemoTrendyol.tsx` | Hero yükseklik, grid responsive |
| `src/pages/DemoAmazon.tsx` | Hero yükseklik, card grid |
| `src/pages/DemoN11.tsx` | Hero yükseklik, countdown wrap |
| `src/pages/demo/DemoProducts.tsx` | Mobil kategori chip listesi |
| `src/pages/demo/DemoCart.tsx` | Sticky kaldır mobilde |
| `src/pages/admin/AdminSettings.tsx` | Form grid responsive |
| `src/pages/admin/AdminProducts.tsx` | Tablo scroll |
| `src/pages/admin/AdminOrders.tsx` | Tablo scroll |
| `src/pages/admin/AdminDashboard.tsx` | Stat grid responsive |

