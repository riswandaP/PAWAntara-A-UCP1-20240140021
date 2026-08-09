const express = require("express");
const products = require("../data/products");

const router = express.Router();

// Beranda
router.get("/", (req, res) => {
    res.render("index", {
        title: "Beranda",
        activePage: "beranda"
    });
});

// Halaman Produk
router.get("/produk", (req, res) => {
    res.render("produk", {
        title: "Produk",
        activePage: "produk",
        products: products
    });
});

module.exports = router;