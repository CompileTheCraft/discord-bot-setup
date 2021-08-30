const express = require("express");

const server = express();
const port = process.env.PORT || 8001;

server.all("/", (req, res) => {
  res.status(200).send("<button>Slasher#8121 is running</button>. Server Status: Ok");
})

function keepAlive() {
  server.listen(port, () => {
    console.log("Server is ready");
  })
}

module.exports = keepAlive;
