

# Site Geneli Tema Demo Sistemi — Nipo Renkleriyle

## Konsept
5 farklı e-ticaret layout stili, hepsi Nipo'nun 3 ana rengini (Mavi #004374, Pembe #FF456D, Yeşil #9CC33B) kullanacak. Fark: renklerin ağırlık dağılımı, tonları, radius, shadow ve layout stili değişecek. Yabancı renk (turuncu, sarı vb.) kullanılmayacak.

## 5 Tema

| # | Ad | İlham | Renk Dağılımı |
|---|-----|-------|---------------|
| 1 | **Nipo Klasik** | Mevcut | Mavi header, pembe CTA, yeşil aksan, yuvarlatılmış (0.75rem) |
| 2 | **Pembe Pazar** | Hepsiburada | Pembe dominant header/CTA, mavi aksan, yeşil badge, keskin köşe (0.25rem) |
| 3 | **Yeşil Atölye** | Bidolubaski | Yeşil dominant header, mavi slider vurgusu, pembe CTA, orta radius (0.5rem) |
| 4 | **Mavi Minimal** | Trendyol | Beyaz arka plan, mavi ince header, pembe CTA küçük, yeşil fiyat, minimal shadow, radius 0.5rem |
| 5 | **Koyu Nipo** | Amazon | Çok koyu mavi header (#001a30), pembe-yeşil vurgular, keskin köşe (0.125rem), shadow yok |

## Dosya Değişiklikleri

| Dosya | İşlem |
|-------|-------|
| `src/context/ThemeContext.tsx` | **Yeni** — tema state, localStorage, `data-theme` toggle |
| `src/index.css` | **Güncelleme** — 4 yeni `[data-theme="..."]` blokları, Nipo renk tonları |
| `src/components/Footer.tsx` | **Güncelleme** — tema seçici bar (5 buton) |
| `src/App.tsx` | **Güncelleme** — ThemeProvider wrapping |

## Teknik Detay

### CSS Override Stratejisi
Her tema `[data-theme="X"]` selektörüyle `:root` değişkenlerini override eder. Nipo'nun 3 renginin farklı HSL tonları kullanılır:

- **Pembe Pazar**: `--primary: 347 100% 63.5%` (pembe header), `--secondary: 205 100% 30%` (mavi CTA)
- **Yeşil Atölye**: `--primary: 77 55% 35%` (koyu yeşil header), `--secondary: 347 100% 63.5%` (pembe CTA)
- **Mavi Minimal**: `--primary: 205 100% 30%` (açık mavi header), düşük shadow, geniş beyaz alan
- **Koyu Nipo**: `--primary: 205 100% 12%` (çok koyu mavi), `--background: 205 20% 8%` (koyu arka plan)

Bileşen kodu değişmez — semantic Tailwind sınıfları (`bg-primary`, `text-foreground`) CSS değişkenlerinden beslenir.

