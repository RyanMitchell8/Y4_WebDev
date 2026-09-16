import "dotenv/config";
import express from "express";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL || "*");
  next();
});

app.use(express.static("public"));

const notes = [
  { id: 1, text: "Buy 50 liters of milk" },
  { id: 2, text: "Finish the deployment tutorial" },
  { id: 3, text: "Water the plants" },
];

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

