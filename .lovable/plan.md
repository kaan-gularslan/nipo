

# Kurumsal Kimlik Sayfası + Tema Korunması Planı

## Amaç
1. Nipo'nun mevcut kurumsal kimliğini korumak (footer demo switcher'ı kaldırmak)
2. Kurumsal kimlik kılavuzunu sergileyen yeni bir `/kurumsal-kimlik` sayfası oluşturmak

## Kurumsal Kimlik Bilgileri (PDF'den)

| Öge | Detay |
|-----|-------|
| **Ana Renkler** | Koyu Mavi (R:0 G:67 B:116), Pembe (R:255 G:69 B:109), Yeşil (R:156 G:195 B:59) |
| **Font** | Montserrat (Ana), Calibri (Yardımcı/resmi yazışmalar) |
| **Slogan** | "Markana Renk Kat!" |
| **Logo Hikayesi** | "Nipo" ismindeki "O" harfi boya kutusu olarak betimlenmiş, 3 damlacık logo ile bütünleştirilmiş |
| **Min Logo Boyut** | Kısa kenar en az 25mm |
| **Kurumsal Materyaller** | Kartvizit, antetli kağıt, zarf, dosya, fatura, makbuz, bloknot, not kağıdı, mail imza |
| **Tanıtım Ürünleri** | Kupa, USB, karton çanta, bez çanta, kalem, ajanda, saat, anahtarlık, mouse pad |
| **Outdoor/Indoor** | Kol banner, yelken bayrak, araç kaplama, yaka ipi |

---

## Dosya Değişiklikleri

| Dosya | İşlem |
|-------|-------|
| `src/pages/CorporateIdentity.tsx` | **Yeni** — Kurumsal kimlik kılavuzu sayfası |
| `src/components/Footer.tsx` | **Güncelleme** — 5 demo switcher kaldırılacak, sadece Klasik footer kalacak |
| `src/App.tsx` | **Güncelleme** — `/kurumsal-kimlik` rotası ekleme |

---

## Kurumsal Kimlik Sayfası İçeriği

### Bölüm 1: Hero
- Sayfa başlığı: "Kurumsal Kimlik Kılavuzu"
- Alt metin: Marka tutarlılığı mesajı
- Breadcrumb

### Bölüm 2: Kurumsal Renkler
- 3 ana renk kartı (Koyu Mavi, Pembe, Yeşil)
- Her kart: büyük renk bloğu + RGB/CMYK/HEX değerleri
- Her rengin %100'den %10'a kadar tonları (renk paleti şeridi)

### Bölüm 3: Tipografi
- Montserrat font ailesi gösterimi (Thin, Light, Medium, ExtraBold, Black)
- Her ağırlıkta örnek metin
- Calibri yardımcı font bilgisi

### Bölüm 4: Logo Kullanımı
- Logo hikayesi (O harfi = boya kutusu + 3 damlacık)
- Açık/koyu zemin kullanım kuralları
- Minimum boyut bilgisi (25mm)
- Siyah-beyaz kullanım

### Bölüm 5: Kurumsal Slogan
- "Markana Renk Kat!" büyük tipografi ile gösterim
- Kullanım kuralları

### Bölüm 6: Kurumsal Materyaller Grid
- Kartvizit, antetli kağıt, zarf, dosya, fatura gibi materyallerin kart grid'i
- Her kart: ikon + isim + baskı özellikleri

### Bölüm 7: Tanıtım Ürünleri Grid
- Kupa, USB, çanta, kalem, ajanda vb.
- Kart yapısında listeleme

---

## Footer Düzeltmesi
Footer'daki 5 demo switcher tamamen kaldırılacak. Sadece **FooterClassic** (Demo 1) kalacak. Switcher bar ve diğer 4 footer varyasyonu silinecek.

