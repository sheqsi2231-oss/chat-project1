const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("views"));
app.use(bodyParser.json());

// --- Простые ответы бота ---
const botReplies = {
  "привет": "Привет! 👋 Я твой помощник. Чем могу помочь?",
  "как пользоваться": "Очень просто! Пиши в чат, а если хочешь — оставь отзыв на главной.",
  "что это": "Это учебная платформа для общения и обмена знаниями.",
  "пока": "До встречи! 👋"
};

// API для общения с ботом
app.post("/bot", (req, res) => {
  const userMsg = req.body.message.toLowerCase();
  let reply = "Извини, я пока не знаю ответа 😅";

  for (const key in botReplies) {
    if (userMsg.includes(key)) {
      reply = botReplies[key];
      break;
    }
  }

  res.json({ reply });
});

// --- Маршруты страниц ---
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "chat.html"));
});

app.get("/reviews", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "reviews.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
