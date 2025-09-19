const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Настройки
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Главная страница
app.get("/", (req, res) => {
  res.render("index", { title: "Knowledge Platform" });
});

// Чат
app.get("/chat", (req, res) => {
  res.render("chat");
});

// Отзывы
app.get("/reviews", (req, res) => {
  res.render("reviews", { reviews: reviews });
});

app.post("/reviews", (req, res) => {
  const { name, text } = req.body;
  reviews.push({ name, text });
  res.redirect("/reviews");
});

// ИИ помощник (заглушка)
app.get("/ai", (req, res) => {
  res.render("ai", { answer: null });
});

app.post("/ai", (req, res) => {
  const { question } = req.body;
  let answer = "ИИ пока отвечает только шаблонно: " + question;
  res.render("ai", { answer });
});

// Запуск сервера
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Хранилище отзывов
let reviews = [];
