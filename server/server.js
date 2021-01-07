const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (client) => {
  client.emit("init", { data: "hello world" });
});

io.listen(3000);
