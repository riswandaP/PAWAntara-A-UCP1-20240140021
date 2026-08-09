# Toko Sembako Ariesta — UCP 1 (Sprint 1)

**Nama:** Muhammad Riswanda Putra Nugraha
**NIM:** 20240140021

## Deskripsi Project

Website Toko Sembako Ariesta milik Ibu Aries. Sprint 1 ini membangun
fondasi aplikasi: struktur halaman (server-rendered dengan EJS),
styling responsif (Flexbox/Grid + media query + hamburger menu), dan
server Express dasar dengan routing dinamis serta 1 endpoint REST API
read-only untuk data produk.

Data produk masih berupa array dummy in-memory. REST API penuh (CRUD),
autentikasi login admin/kasir, dan endpoint balasan "Tanya AI" dummy
akan dikerjakan di Sprint 2.

## Cara Menjalankan Project Secara Lokal

```bash
npm install
npm run dev      # menjalankan server via nodemon (auto-restart)
# atau
npm start        # menjalankan server biasa
```

Server berjalan di: `http://localhost:3000`

## Struktur Folder

```
├── server.js              # entry point, setup Express + EJS + middleware
├── routes/
│   ├── pages.js            # route halaman (SSR EJS)
│   └── api.js               # route REST API
├── data/
│   └── products.js          # data dummy produk (array of object)
├── views/                    # file EJS + partials (navbar/footer)
├── public/css, public/js      # static assets
```

## Daftar Endpoint API (Sprint 1)

| Method | Endpoint         | Deskripsi                                 | Akses  | Contoh Response                                                                 |
|--------|------------------|--------------------------------------------|--------|----------------------------------------------------------------------------------|
| GET    | `/api/products`  | Ambil seluruh data produk sembako (dummy)  | Publik | `{ "status": "success", "data": [ { "id": 1, "name": "Beras Premium 5kg", "category": "sembako", "price": 68000, "stock": 42 } ] }` |

> Endpoint CRUD penuh (`POST`/`PUT`/`DELETE /api/products`), `/api/login`,
> `/api/logout`, dan `/api/chat` akan ditambahkan di Sprint 2 sesuai
> kontrak di Bagian 7 dokumen UCP.

## Daftar Halaman (Server-Side Render EJS)

| Route          | Deskripsi                                                                 |
|----------------|------------------------------------------------------------------------------|
| `GET /`         | Beranda — hero section + preview 4 produk pertama                          |
| `GET /produk`    | Daftar semua produk (tabel), mendukung filter `?kategori=` dan `?search=`  |
| `GET /produk/:id` | Detail 1 produk berdasarkan id di URL; jika id tidak ditemukan, tampil halaman "Produk tidak ditemukan" (bukan crash) |
| `GET /tanya-ai`  | Tampilan chat + form pertanyaan (belum ada logika balasan)                 |

## Penjelasan Tampilan (UI)

- **Navbar** — sama di semua halaman lewat partial `navbar.ejs`. Di
  layar mobile (≤640px), menu berubah jadi tombol hamburger yang bisa
  dibuka/tutup lewat vanilla JS (`addEventListener` + toggle class
  `is-open`), bukan cuma disembunyikan CSS.
- **Beranda** — hero section berisi headline & CTA ke halaman Produk,
  diikuti grid preview produk (CSS Grid, responsif jadi 1 kolom di
  mobile).
- **Produk** — form filter (kategori & pencarian nama) yang mengirim
  query string ke server, lalu tabel produk hasil filter.
- **Detail Produk** — kartu detail 1 produk dengan breadcrumb navigasi
  kembali ke daftar produk.
- **Produk tidak ditemukan** — halaman khusus (status 404) dengan
  pesan ramah dan tombol kembali, saat id di URL tidak valid.
- **Tanya AI** — jendela chat statis (bubble pesan sambutan) + form
  dengan `<label for="pertanyaan">` terhubung ke `<textarea>`, belum
  ada logika balasan (menunggu Sprint 2).
- **Footer** — sama di semua halaman lewat partial `footer.ejs`.

Styling memakai CSS custom (Flexbox untuk navbar & hero, CSS Grid
untuk grid produk & info detail) dengan 2 breakpoint media query
(900px & 640px) untuk desktop, tablet, dan mobile.

## Screenshoot 
<img width="1919" height="1079" alt="Screenshot 2026-08-09 205752" src="https://github.com/user-attachments/assets/083a6432-1f5a-4ef8-8e19-9762acb7a9b7" />

<img width="1918" height="1076" alt="Screenshot 2026-08-09 205952" src="https://github.com/user-attachments/assets/a5f78140-dccb-48c1-9004-f3585cabe465" />

<img width="1919" height="1078" alt="Screenshot 2026-08-09 210030" src="https://github.com/user-attachments/assets/4be81f21-7706-4494-943f-d7f7e5bbde14" />

<img width="1919" height="1079" alt="Screenshot 2026-08-09 210101" src="https://github.com/user-attachments/assets/1f063f3f-456e-4cb4-a647-51996726ff2f" />

<img width="1919" height="1079" alt="Screenshot 2026-08-09 210241" src="https://github.com/user-attachments/assets/d36228f7-fc58-44b3-9d36-6a153a5aca62" />

<img width="1919" height="1079" alt="Screenshot 2026-08-09 210128" src="https://github.com/user-attachments/assets/ab4342ce-5c21-45d7-a367-fb1fb2a0e6c5" />
