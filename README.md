# Gabion Wall Malaysia — Landing Page (Gubah Bina)

Landing page statik satu halaman untuk perkhidmatan **gabion wall / tembok penahan**,
dibina menggunakan HTML, CSS dan JavaScript tulen — tiada framework, tiada langkah build.

## Struktur fail

```
index.html              Halaman utama (semua seksyen)
assets/css/style.css    Gaya penuh + responsif (desktop → 320px)
assets/js/main.js       Menu mobile, scroll-spy, FAQ, borang → WhatsApp
assets/img/             Gambar projek sebenar + logo
robots.txt              Arahan crawler
sitemap.xml             Peta laman
```

## Seksyen halaman

1. Hero — tajuk utama, CTA WhatsApp, lencana kepercayaan
2. Jalur kelebihan (jaminan, kru sendiri, gred mesh, jadual)
3. Apa Itu Gabion Wall — penerangan teknikal
4. Perkhidmatan — 6 kad servis
5. Gabion vs Konkrit — jadual perbandingan
6. Projek — galeri kerja sebenar
7. Proses — 5 langkah
8. Harga — 3 pakej
9. Testimoni pelanggan
10. FAQ — accordion (dengan skema `FAQPage`)
11. Kawasan liputan
12. Borang sebut harga → hantar terus ke WhatsApp
13. Footer + butang WhatsApp terapung

## SEO

- `<title>`, meta description, canonical, Open Graph + Twitter Card
- JSON-LD: `LocalBusiness` / `GeneralContractor` + `FAQPage`
- Satu `<h1>` sahaja, hierarki heading teratur
- Semua `<img>` ada `alt` deskriptif, `width`/`height` (elak layout shift)
- Imej hero `preload` + `fetchpriority="high"`, imej lain `loading="lazy"`
- `robots.txt` + `sitemap.xml`
- Bahasa: `lang="ms"`

## Perkara yang perlu ditukar sebelum go-live

Nilai di bawah adalah **placeholder** dan mesti digantikan dengan maklumat rasmi:

| Perkara | Lokasi | Nilai semasa |
|---|---|---|
| Nombor WhatsApp | `assets/js/main.js` (`WA_NUMBER`), semua pautan `wa.me/` dan `tel:` dalam `index.html` | `601111496842` |
| E-mel | `index.html` (borang, footer, JSON-LD) | `enquiry@gabionwall.my` |
| Alamat pejabat | `index.html` (seksyen Hubungi, footer, JSON-LD) | 848C Kg Kelar Joha, Pasir Mas |
| Domain | `canonical`, `og:url`, `og:image`, `sitemap.xml`, `robots.txt` | `https://gabionwall.my/` |
| Statistik hero | `index.html` (`.hero__badges`) | 15+ tahun, 300+ projek |
| Julat harga | Seksyen `#harga` + JSON-LD `priceRange` | RM250 / RM320 / RM450 |
| Testimoni | Seksyen `#testimoni` | Contoh — ganti dengan ulasan sebenar |

> **Penting:** testimoni dan statistik adalah contoh. Gantikan dengan data sebenar
> sebelum laman disiarkan, supaya tidak mengelirukan pelanggan.

## Cara jalankan secara setempat

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Deploy

Fail statik sahaja — boleh terus dihos di GitHub Pages, Netlify, Vercel,
Cloudflare Pages atau mana-mana hosting cPanel biasa. Tiada proses build diperlukan.
