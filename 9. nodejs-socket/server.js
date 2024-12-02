const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

const server = http.createServer(app);

// initiate socket.io and attach it to the http server
const io = socketIo(server);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
