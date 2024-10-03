// untuk back endnya
import express from "express";
const app = express();
const port = 3000;
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import path from "path";

app.use(express.static(path.join(__dirname, "script")));
app.use(express.static(path.join(__dirname, "style")));
app.use(express.static(path.join(__dirname, "img")));

// menggunakan untuk halaman login
app.get("/", (req, res) => {
  res.sendFile("./view/login.html", { root: __dirname });
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "home.html"));
});

app.get("/penjualan", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "penjualan.html"));
});

app.get("/visitus", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "visitus.html"));
});

app.listen(port, () => {
  console.log("App Listening on Port:3000");
});

app.use((req, res) => {
  res.status(404);
  res.send("File Anda Tidak ditemukan");
});
