const express = require("express");
const products = require("../data/products");

const router = express.Router();

// ================================
// BERANDA
// ================================

router.get("/", (req, res) => {
    res.render("index", {
        title: "Beranda",
        activePage: "beranda"
    });
});

// ================================
// HALAMAN PRODUK
// ================================

router.get("/produk", (req, res) => {
    res.render("produk", {
        title: "Produk",
        activePage: "produk",
        products: products
    });
});

// ================================
// DETAIL PRODUK
// ================================

router.get("/produk/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(
        product => product.id === id
    );

    if (!product) {
        return res.status(404).render("produk-not-found", {
            title: "Produk Tidak Ditemukan",
            activePage: "produk"
        });
    }

    res.render("produk-detail", {
        title: product.name,
        activePage: "produk",
        product: product
    });
});

module.exports = router;