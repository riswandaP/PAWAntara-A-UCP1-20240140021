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
// HALAMAN PRODUK + FILTER
// ================================

router.get("/produk", (req, res) => {
    const { kategori, search } = req.query;

    let filteredProducts = products;

    // Filter berdasarkan kategori
    if (kategori) {
        filteredProducts = filteredProducts.filter(product =>
            product.category.toLowerCase() === kategori.toLowerCase()
        );
    }

    // Filter berdasarkan pencarian nama produk
    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    res.render("produk", {
        title: "Produk",
        activePage: "produk",
        products: filteredProducts,
        kategori: kategori || "",
        search: search || ""
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