// server.js
// Fondasi server Express untuk Toko Sembako Ibu Aries.
// - View engine: EJS
// - Static assets: /public
// - Routing halaman: routes/pages.js
// - REST API read-only: routes/api.js

const path = require("path");
const express = require("express");

const pageRoutes = require("./routes/pages");
const apiRoutes = require("./routes/api");

const app = express();

const PORT = process.env.PORT || 3000;

// ================================
// VIEW ENGINE
// ================================

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ================================
// STATIC ASSETS
// ================================

app.use(express.static(path.join(__dirname, "public")));

// ================================
// BODY PARSER
// ================================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================
// ROUTING HALAMAN
// ================================

app.use("/", pageRoutes);

// ================================
// REST API
// ================================

app.use("/api", apiRoutes);

// ================================
// 404 HANDLER
// ================================

app.use((req, res) => {
    res.status(404).render("404", {
        title: "Halaman Tidak Ditemukan",
        activePage: ""
    });
});

// ================================
// ERROR HANDLER
// ================================

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).send(
        "Terjadi kesalahan pada server."
    );
});

// ================================
// START SERVER
// ================================

app.listen(PORT, () => {
    console.log(
        `Server berjalan di http://localhost:${PORT}`
    );
});