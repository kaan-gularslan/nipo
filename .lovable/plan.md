

# Nipo Ambalaj Sitesi — Kapsamlı Analiz ve Uygulama Planı

## Mevcut Durum Analizi

### Çalışan Sayfalar
- **/** (Ana Sayfa): Hero slider + kategori sidebar + ürünler + hakkımızda
- **/urunler**: Ürün listesi (sadece ProductsSection bileşenini gösteriyor)
- **/kurumsal**: Hakkımızda bölümü (sadece AboutSection)
- **/sss**: Sık sorulan sorular (çalışıyor)
- **/iletisim**: İletişim formu (çalışıyor, ama form submit etmiyor)
- **/kampanyalar**: Kampanya kartları (çalışıyor)

### Tespit Edilen Sorunlar ve Eksiklikler

**Kritik:**
1. **Ürün detay sayfası yok** — Ürün kartlarına tıklanınca hiçbir yere gitmiyor
2. **Kategori filtreleme yok** — Sidebar ve kategori kartları hep /urunler'e yönlendiriyor, filtreleme çalışmıyor
3. **Sepet fonksiyonu yok** — "Sepete Ekle" butonları hiçbir şey yapmıyor, sepet sayacı her zaman 0
4. **404 sayfası Türkçe değil** ve Header/Footer içermiyor
5. **Footer'daki linkler** (Kariyer, Blog, Kargo Bilgileri, İade Koşulları, Gizlilik, KVKK) `href="#"` ile boş

**Orta:**
6. **Kurumsal sayfası** çok kısa — sadece AboutSection, sayfa başlığı ve breadcrumb yok
7. **Ürünler sayfası** ana sayfadaki ürün bölümüyle tamamen aynı, sayfa başlığı/breadcrumb/filtreleme yok
8. **Kampanyalar sayfası** içerik az, detay sayfası yok
9. **İletişim formu** sadece `preventDefault` yapıyor, harita yok
10. **Mobil menüde** aktif sayfa gösterimi yok

---

## Uygulama Planı (6 Aşama)

### Aşama 1: Veri Katmanı ve Altyapı
Tüm ürün, kategori ve sayfa verilerini merkezi bir yerde tutacak veri yapısı oluşturulacak.

- `src/data/products.ts` — Tüm ürünler, kategoriler, slug'lar
- `src/data/categories.ts` — Kategori listesi, slug, icon, açıklama
- `src/context/CartContext.tsx` — Sepet state yönetimi (React Context + localStorage)

### Aşama 2: Ürün Detay ve Kategori Sayfaları
- `/urunler/:slug` — Ürün detay sayfası (görsel galeri, açıklama, fiyat, miktar seçimi, sepete ekle, ilgili ürünler)
- `/kategori/:slug` — Kategori sayfası (filtreleme, sıralama, ürün grid)
- Ürünler sayfasına (`/urunler`) sayfa başlığı, breadcrumb ve kategori filtresi eklenmesi
- Tüm ürün kartlarına ve kategori kartlarına doğru Link yönlendirmesi

### Aşama 3: Sepet Fonksiyonu
- Sepet context'i Header'a bağlanması (sepet sayacı dinamik)
- `/sepet` — Sepet sayfası (ürün listesi, miktar güncelleme, silme, toplam)
- "Sepete Ekle" butonlarının çalışır hale gelmesi
- Sepete ekleme bildirimi (toast)

### Aşama 4: Sayfa İçerikleri Zenginleştirme
- **Kurumsal** (`/kurumsal`): Sayfa başlığı, firma hikayesi, vizyon/misyon, ekip, üretim tesisi bilgileri
- **Kampanyalar** (`/kampanyalar`): Daha detaylı kampanya kartları, süre sayacı
- **İletişim** (`/iletisim`): Google Maps embed, form validasyonu, başarı bildirimi
- **SSS** (`/sss`): Kategori bazlı filtreleme

### Aşama 5: Eksik Sayfalar ve Linkler
- **404 sayfası**: Türkçeleştirme, Header/Footer ekleme, markaya uygun tasarım
- Footer'daki boş linkler için statik sayfalar: Kargo Bilgileri, İade Koşulları, Gizlilik Politikası, KVKK
- `/kargo-bilgileri`, `/iade-kosullari`, `/gizlilik`, `/kvkk` rotaları

### Aşama 6: Navigasyon ve UX İyileştirmeleri
- Header'da aktif sayfa gösterimi (aktif link stili)
- Mobil menüde aktif sayfa vurgusu
- Breadcrumb bileşeni (tüm alt sayfalara)
- Sayfa geçişlerinde scroll-to-top
- Header'daki arama çubuğuna basit ürün arama fonksiyonu

---

## Uygulama Sırası

Her aşama bir "hedef" olarak sırayla uygulanacak. Aşama 1 temeli oluşturur, diğer aşamalar bu temel üzerine inşa edilir.

```text
Aşama 1 (Veri + Sepet Context)
    ↓
Aşama 2 (Ürün Detay + Kategori)
    ↓
Aşama 3 (Sepet Sayfası)
    ↓
Aşama 4 (Sayfa İçerikleri)
    ↓
Aşama 5 (Eksik Sayfalar)
    ↓
Aşama 6 (UX İyileştirmeleri)
```

Her aşama tamamlandığında test edilecek, sonraki aşamaya geçilecek. Toplam ~15 dosya oluşturulacak veya düzenlenecek.

