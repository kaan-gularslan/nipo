

# Footer Demo Switcher Planı

Footer'ın alt kısmına küçük bir "tema değiştirici" bar eklenecek. Kullanıcı 5 farklı footer tasarımı arasında geçiş yapabilecek. Seçim `localStorage`'da saklanacak.

## 5 Footer Tasarımı

1. **Klasik (Mevcut)** — Koyu mavi arka plan, 5 sütun grid, newsletter üstte
2. **Minimal** — Tek satır: logo + linkler + sosyal medya yan yana, newsletter yok, çok kompakt
3. **Mega Footer** — 2 katmanlı: üstte büyük CTA banner + altta 4 sütun, gradient arka plan
4. **Karanlık Cam (Dark Glass)** — Siyah/transparan glassmorphism, blur efektli, merkezi logo, linkler 2 satırda yatay
5. **Renkli Bloklar** — Her bölüm (ürünler, kurumsal, iletişim) farklı renk bloğunda (mavi, pembe, yeşil), yan yana kartlar

## Teknik Yaklaşım

- `Footer.tsx` tek dosyada kalacak
- `useState` ile aktif demo numarası tutulacak (`localStorage` persist)
- Her demo ayrı bir fonksiyon/bileşen olarak render edilecek
- Footer'ın en altına küçük bir "Demo Seçici" bar: 5 buton (1-5 arası), aktif olan vurgulu
- Tüm demolar aynı veri ve linkleri kullanacak (DRY: ortak veri nesnesi)

## Dosya Değişiklikleri

| Dosya | İşlem |
|-------|-------|
| `src/components/Footer.tsx` | Yeniden yazılacak — 5 demo + switcher |

