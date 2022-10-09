const express = require("express");
const cors = require("cors");
const get = require("./test");

const app = express();
app.use(cors());
app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
});

app.get("/dictionary/get-info", (req, res) => {
  let title = req.query.title;
  const result = get.getInfos("dead");
  console.log(result);
  res.send(get.getInfos("dead"));
});
