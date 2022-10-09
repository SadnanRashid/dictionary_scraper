const express = require("express");
const cors = require("cors");
const get = require("./test");

const app = express();
app.use(cors());
app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
});

app.get("/dictionary/get-info", async (req, res) => {
  let title = req.query.title;
  const result = await get.getInfos("dead");
  console.log(await get.getInfos("dead"));
  res.send(get.sh());
});
