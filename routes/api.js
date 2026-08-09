// routes/api.js
// Fondasi REST API. Sprint 1 baru menyediakan endpoint baca (read-only).
// Sprint 2: tambahkan POST /api/products, PUT /api/products/:id,
// DELETE /api/products/:id, serta middleware auth untuk melindunginya.

const express = require("express");
const router = express.Router();
const products = require("../data/products");

// GET /api/products -> seluruh data produk dalam format JSON
// Format response mengikuti kontrak minimal di Bagian 7: { status, data }
router.get("/products", (req, res) => {
  res.json({
    status: "success",
    data: products,
  });
});

module.exports = router;
