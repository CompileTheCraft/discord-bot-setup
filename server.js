import express from 'express';

const server = express();
const port = process.env.PORT || 8001;

server.all("/", (req, res) => {
  res.status(200).send("Slasher#8121 is running");
})

function keepAlive() {
  server.listen(port, () => {
    console.log("Server is ready");
  })
}

export default keepAlive;