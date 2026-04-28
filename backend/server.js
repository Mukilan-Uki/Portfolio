const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    message: "Portfolio backend running",
    frontend: "/",
  });
});

app.listen(port, () => {
  console.log(`Portfolio backend listening on http://localhost:${port}`);
});
