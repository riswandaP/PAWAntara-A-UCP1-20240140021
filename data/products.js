// data/products.js
// Data produk dummy (in-memory). Di Sprint 2 ini akan diganti/dihubungkan
// dengan REST API CRUD penuh + penyimpanan permanen (SQLite/PostgreSQL).

const products = [
  {
    id: 1,
    name: "Beras Premium 5kg",
    category: "sembako",
    price: 68000,
    stock: 42,
  },
  {
    id: 2,
    name: "Minyak Goreng 2L",
    category: "sembako",
    price: 34000,
    stock: 30,
  },
  {
    id: 3,
    name: "Gula Pasir 1kg",
    category: "sembako",
    price: 15500,
    stock: 60,
  },
  {
    id: 4,
    name: "Telur Ayam 1kg",
    category: "protein",
    price: 28000,
    stock: 25,
  },
  {
    id: 5,
    name: "Tepung Terigu 1kg",
    category: "sembako",
    price: 12000,
    stock: 50,
  },
  {
    id: 6,
    name: "Kecap Manis 600ml",
    category: "bumbu",
    price: 18500,
    stock: 20,
  },
  {
    id: 7,
    name: "Garam Dapur 500gr",
    category: "bumbu",
    price: 4000,
    stock: 80,
  },
  {
    id: 8,
    name: "Susu Kental Manis",
    category: "minuman",
    price: 11000,
    stock: 35,
  },
];

module.exports = products;
