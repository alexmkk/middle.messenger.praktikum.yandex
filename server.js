const fallback = require("express-history-api-fallback");
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("./dist"));
app.use(fallback("./dist/index.html", { root: __dirname }));

app.listen(process.env.PORT || PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
