

# Demo Sayfaları Düzeltme + Admin Paneli Planı

## Test Sonuçları — Tespit Edilen Sorunlar

### Hero Görselleri
Tüm 5 demo sayfasının hero görselleri AI tarafından üretilmiş ve üzerlerinde anlamsız yazılar var ("SLAL BLARVE NOANG", "SELMΛPEGGAL", "SEUPOVIAL CARA" vb.). Bu görseller profesyonel görünmüyor. Çözüm: Hero bölümlerini görsel bağımlılığından kurtarmak — gradient arka plan + ürün görselleri (mevcut `products` data'daki gerçek ürün fotoğrafları) kullanarak tasarlamak.

### N11 Demo Nav Bar
Kategori linkleri hep "Baskılı" olarak kısaltılmış, çünkü `cat.name.split(" ")[0]` kullanılıyor — düzeltilecek.

### Genel Fonksiyon Sorunları
- Demo sayfalarındaki "Hesabım", "Favorilerim" linkleri çalışmıyor (href yok)
- Arama çubuğu fonksiyonel değil
- Mobil menü bazı demolarda eksik

---

## Plan

### Aşama 1: Hero Bölümlerini Yeniden Tasarla (5 dosya)
AI-generated görselleri kaldır. Her demo için farklı bir CSS-tabanlı hero yaklaşımı:

| Demo | Hero Yaklaşımı |
|------|---------------|
| **Hepsiburada** | Gradient arka plan (#004374 → #FF456D) + sağ tarafta ürün görselleri grid + sol tarafta slider metni |
| **Bidolu** | Açık tonlarda gradient + büyük tipografi + alt kısımda ürün görselleri carousel |
| **Trendyol** | Pembe-mavi gradient banner + yuvarlak kampanya ikonları overlay |
| **Amazon** | Koyu mavi gradient + ortada büyük CTA metin + alt kısımda kategori kartları |
| **N11** | İki renkli split layout (mavi + beyaz) + sağda ürün görseli + solda slider metni |

Mevcut `src/assets/products/` klasöründeki gerçek ürün fotoğrafları kullanılacak.

### Aşama 2: Demo Sayfaları Fonksiyon Düzeltmeleri
- N11 nav bar'daki kategori isimlerini düzelt (kısaltma yerine slug-based kısa isim)
- Tüm demolardaki "Hesabım" linklerini `/kurumsal` veya uygun bir sayfaya yönlendir
- Arama çubuğuna basit ürün filtresi ekle (mevcut ürünlerde arama)
- Mobil menü tutarlılığı

### Aşama 3: Admin Paneli
Basit bir client-side admin paneli (localStorage tabanlı, backend yok):

**Rota**: `/admin` (şifre korumalı — basit localStorage pin)

**Sayfalar**:
- **Dashboard**: Toplam ürün, kategori, sipariş sayısı (mock data), grafik
- **Ürün Yönetimi**: Ürün listesi tablo, ekleme/düzenleme/silme (localStorage'a kayıt)
- **Kategori Yönetimi**: Kategori listesi, ekleme/düzenleme
- **Sipariş Yönetimi**: Mock sipariş listesi, durum güncelleme
- **Ayarlar**: Site başlığı, iletişim bilgileri

**Bileşenler**:
- `src/pages/Admin.tsx` — Ana admin layout (sidebar + içerik alanı)
- `src/pages/admin/AdminDashboard.tsx`
- `src/pages/admin/AdminProducts.tsx`
- `src/pages/admin/AdminCategories.tsx`
- `src/pages/admin/AdminOrders.tsx`
- `src/pages/admin/AdminSettings.tsx`
- `src/context/AdminContext.tsx` — Admin state yönetimi

**UI**: Shadcn sidebar, tablo, form bileşenleri kullanılacak. Koyu mavi (#004374) tema.

### Dosya Değişiklikleri

| Dosya | İşlem |
|-------|-------|
| `src/pages/DemoHepsiburada.tsx` | Hero yeniden tasarım + fonksiyon düzeltmeleri |
| `src/pages/DemoBidolu.tsx` | Hero yeniden tasarım + fonksiyon düzeltmeleri |
| `src/pages/DemoTrendyol.tsx` | Hero yeniden tasarım + fonksiyon düzeltmeleri |
| `src/pages/DemoAmazon.tsx` | Hero yeniden tasarım + fonksiyon düzeltmeleri |
| `src/pages/DemoN11.tsx` | Hero yeniden tasarım + nav düzeltmesi + fonksiyon düzeltmeleri |
| `src/pages/Admin.tsx` | Yeni — Admin paneli ana layout |
| `src/pages/admin/AdminDashboard.tsx` | Yeni — Dashboard |
| `src/pages/admin/AdminProducts.tsx` | Yeni — Ürün yönetimi |
| `src/pages/admin/AdminCategories.tsx` | Yeni — Kategori yönetimi |
| `src/pages/admin/AdminOrders.tsx` | Yeni — Sipariş yönetimi |
| `src/pages/admin/AdminSettings.tsx` | Yeni — Ayarlar |
| `src/App.tsx` | Admin rotaları ekleme |
| `src/assets/hero-*.jpg` (5 dosya) | Silinecek — artık kullanılmayacak |

### Uygulama Sırası
1. Hero düzeltmeleri (5 demo sayfası)
2. Fonksiyon düzeltmeleri
3. Admin paneli (dashboard → ürünler → kategoriler → siparişler → ayarlar)

