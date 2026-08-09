const express = require("express");
const products = require("../data/products");

const router = express.Router();

// GET /api/products
// Mengembalikan seluruh data produk dalam format JSON
router.get("/products", (req, res) => {
    res.json(products);
});

module.exports = router;