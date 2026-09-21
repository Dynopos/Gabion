# Gabion Wall Malaysia — Landing Page

Landing page statik satu halaman untuk **Gubah Bina Sdn. Bhd.**, kontraktor
pakar gabion wall / tembok penahan. HTML, CSS dan JavaScript tulen — tiada
framework, tiada langkah build.

## Maklumat syarikat (dari Sijil Pendaftaran SSM)

| Perkara | Butiran |
|---|---|
| Nama berdaftar | GUBAH BINA SDN. BHD. |
| No. pendaftaran SSM | 201901025225 (1334554-P) |
| Tarikh diperbadankan | 17 Julai 2019 |
| Jenis | Limited by shares · Private limited |
| Status | Existing |
| Alamat berdaftar & perniagaan | Lot 2091, Kg. Padang Kota, Daerah Kota, 15100 Kota Bharu, Kelantan |
| Aktiviti berdaftar | Construction · Transportation · Wholesale of a variety of goods |
| Telefon / WhatsApp | +60 14-598 8988 |
| E-mel | afiqmustapha988@gmail.com |

Nombor SSM dipaparkan di **announce bar, seksyen Tentang, seksyen Kenapa
Gubah Bina, FAQ, seksyen Hubungi, footer** dan di dalam JSON-LD.

## Struktur fail

```
index.html              Halaman utama (semua seksyen)
assets/css/style.css    Design system + responsif (1440px → 290px)
assets/js/main.js       Menu mobile, scroll reveal, scroll-spy, FAQ, borang → WhatsApp
assets/img/             Gambar projek sebenar + logo
robots.txt              Arahan crawler
sitemap.xml             Peta laman
```

## Reka bentuk

Gaya premium dan moden:

- **Tipografi** — `Outfit` (paparan) + `Inter` (teks), skala besar, `letter-spacing` negatif
- **Warna** — jenama `#E8471F` dari logo, skala neutral hangat, aksen emas `#C9A227` untuk elemen kredensial
- **Hero** — imej penuh skrin, lapisan gradien radial, tajuk bergradien, penunjuk skrol
- **Header** — sticky dengan `backdrop-filter`, sempadan muncul bila skrol
- **Gerakan** — scroll reveal berperingkat (IntersectionObserver), hover lift pada kad, garis aksen pada kad
- Semua animasi dimatikan di bawah `prefers-reduced-motion`

## Seksyen halaman

Announce bar (SSM) → header → hero → jalur statistik → 01 Apa Itu Gabion →
02 Perkhidmatan (6 kad) → 03 Gabion vs Konkrit → 04 Projek → 05 Proses →
06 Harga → 07 Kenapa Gubah Bina (kredensial SSM) → 08 FAQ → kawasan liputan →
borang sebut harga → footer → butang WhatsApp terapung.

## SEO

- Tajuk, meta description, canonical, Open Graph + Twitter Card
- JSON-LD `LocalBusiness` / `GeneralContractor` (termasuk `identifier` no. SSM,
  `foundingDate`, alamat penuh) + `FAQPage`
- Satu `<h1>`, hierarki heading teratur, semua `<img>` ada `alt` + `width`/`height`
- Imej hero `preload` + `fetchpriority="high"`, selebihnya `loading="lazy"`
- `robots.txt` + `sitemap.xml`, `lang="ms"`

## Yang masih perlu ditukar sebelum go-live

| Perkara | Lokasi | Nilai semasa |
|---|---|---|
| ~~Domain~~ | — | ✅ Selesai — `gabionwall.com.my` (ikut fail `CNAME`) |
| Julat harga | Seksyen `#harga` + JSON-LD `priceRange` | RM250 / RM320 / RM450 per m² |
| Waranti 5 tahun | Jalur statistik + pakej Retaining Wall | Sahkan tempoh sebenar |
| Waktu operasi | Footer + JSON-LD `openingHoursSpecification` | Isnin–Sabtu, 8 pagi – 6 petang |

> **Tiada testimoni dipaparkan.** Seksyen testimoni rekaan telah dibuang dan
> digantikan dengan kredensial SSM yang boleh disahkan. Tambah testimoni hanya
> apabila ada ulasan pelanggan sebenar.

Nombor telefon disimpan di tiga tempat: pemalar `WA_NUMBER` dalam
`assets/js/main.js`, pautan `wa.me/` dan pautan `tel:` dalam `index.html`.
Tukar kesemuanya bersama jika nombor berubah.

## Cara jalankan secara setempat

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Deploy

Fail statik sahaja — GitHub Pages, Netlify, Vercel, Cloudflare Pages atau
hosting cPanel biasa. Tiada proses build diperlukan.
