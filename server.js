const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
});

app.get("/dictionary/get-info", (req, res) => {
  let title = req.query.title;
  res.send("hello");
});