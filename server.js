// server.js
// Fondasi server Express untuk Toko Sembako Ibu Aries (Sprint 1).
// - View engine: EJS
// - Static assets: /public
// - Routing halaman: routes/pages.js
// - Routing REST API (read-only): routes/api.js

const path = require("path");
const express = require("express");

const pageRoutes = require("./routes/pages");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

// Setup view engine EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS, JS, gambar)
app.use(express.static(path.join(__dirname, "public")));

// Parsing body (dibutuhkan nanti untuk form POST di sprint berikutnya)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
app.use("/", pageRoutes);
app.use("/api", apiRoutes);

// 404 handler untuk route yang sama sekali tidak ada
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Halaman Tidak Ditemukan",
    activePage: "",
  });
});

// Error handler umum, supaya server tidak crash kalau ada error tak terduga
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Terjadi kesalahan pada server.");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
