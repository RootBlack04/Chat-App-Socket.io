const express = require("express");
const { Socket } = require("socket.io");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set("views", "Views");
app.use(express.static("Views"));

app.get("/", (req, res) => {
  return res.render("index.html");
});

io.on("connection", (socket) => {
  socket.on("send-message", (data) => {
    // socket.emit("send-message", data);
    // io.sockets.emit("send-message", data);
    socket.broadcast.emit("send-message", data);
  });
});

server.listen(5000, () => {
  console.log("your site is on : http://127.0.0.1:5000");
});
