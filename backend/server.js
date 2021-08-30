const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index', { title: "Slasher Server Status..." });
})

function keepAlive() {
  app.listen(port, () => {
    console.log("Server is ready");
  })
}

module.exports = keepAlive;
