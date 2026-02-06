const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Webhook received at:", new Date().toISOString());
  res.status(200).send("OK"); // YCloud needs this
});

app.get("/", (req, res) => {
  res.send("Server is live");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
