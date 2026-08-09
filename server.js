const path = require("path");
const express = require("express");

const pageRoutes = require("./routes/pages");

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
// ROUTING
// ================================

app.use("/", pageRoutes);

// ================================
// START SERVER
// ================================

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});