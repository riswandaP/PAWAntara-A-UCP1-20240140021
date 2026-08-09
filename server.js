const path = require("path");
const express = require("express");

const pageRoutes = require("./routes/pages");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", pageRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});