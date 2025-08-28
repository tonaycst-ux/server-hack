const http = require('http');
const server = http.createServer();
const { Server } = require('socket.io');
require('dotenv').config();
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("Received:", msg);
    io.emit("message", msg); // broadcast
  });
});

const PORT = process.env.PORT || 3000;   // ✅ use env PORT
server.listen(PORT, "0.0.0.0", () => {   // ✅ bind to 0.0.0.0
  console.log(`Server started on port ${PORT}`);
});
