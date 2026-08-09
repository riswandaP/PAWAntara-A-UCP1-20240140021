// routes/pages.js
// Semua route yang me-render halaman (EJS) ada di sini.

const express = require("express");
const router = express.Router();
const products = require("../data/products");

// GET / -> Beranda
router.get("/", (req, res) => {
  // Preview beberapa produk saja (misal 4 produk pertama) untuk hero/section preview
  const previewProducts = products.slice(0, 4);

  res.render("index", {
    title: "Beranda - Toko Sembako Ibu Aries",
    activePage: "home",
    previewProducts,
  });
});

// GET /produk -> Daftar semua produk + filter lewat query string
router.get("/produk", (req, res) => {
  const { kategori, search } = req.query;

  let filteredProducts = products;

  // Filter berdasarkan kategori (?kategori=sembako)
  if (kategori) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === kategori.toLowerCase()
    );
  }

  // Filter berdasarkan nama produk (?search=beras)
  if (search) {
    const keyword = search.toLowerCase();
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(keyword)
    );
  }

  // Daftar kategori unik untuk dropdown filter di view
  const categories = [...new Set(products.map((p) => p.category))];

  res.render("produk", {
    title: "Produk - Toko Sembako Ibu Aries",
    activePage: "produk",
    products: filteredProducts,
    categories,
    currentKategori: kategori || "",
    currentSearch: search || "",
  });
});

// GET /produk/:id -> Detail 1 produk (route dinamis)
router.get("/produk/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    // Bukan error server (500). Tetap render halaman dengan status 404
    // dan pesan yang ramah untuk pengguna.
    return res.status(404).render("produk-not-found", {
      title: "Produk Tidak Ditemukan - Toko Sembako Ibu Aries",
      activePage: "produk",
      requestedId: req.params.id,
    });
  }

  res.render("produk-detail", {
    title: `${product.name} - Toko Sembako Ibu Aries`,
    activePage: "produk",
    product,
  });
});

// GET /tanya-ai -> Halaman chat + form (logic balasan belum dikerjakan di sprint ini)
router.get("/tanya-ai", (req, res) => {
  res.render("tanya-ai", {
    title: "Tanya AI - Toko Sembako Ibu Aries",
    activePage: "tanya-ai",
  });
});

module.exports = router;
