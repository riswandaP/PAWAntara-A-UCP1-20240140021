const path = require("path");
const express = require("express");
const pageRoutes = require("./routes/pages");

const app = express();
const PORT = process.env.PORT || 3000;

// View engine EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static assets
app.use(express.static(path.join(__dirname, "public")));

// Routing halaman
app.use("/", pageRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});