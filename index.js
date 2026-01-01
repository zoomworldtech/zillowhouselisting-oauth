const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/callback", async (req, res) => {
  const code = req.query.code;
  res.send("Authorization successful. You can close this window.");
});

app.listen(process.env.PORT || 8888);
