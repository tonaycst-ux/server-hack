const http=require('http');
const server=http.createServer();
require("dotenv").config();
const {Server} =require('socket.io');

const io=new Server(server,()=>{
    cors: {
    origin: "*",
  }
    console.log("socket.io created");
});
let caps=false;
io.on("connection",(socket)=>{
    socket.on("message",(msg)=>{
              io.emit("message",msg);
    });

})

const PORT = process.env.PORT || 3000;   // ✅ use env PORT
server.listen(PORT, "0.0.0.0", () => {   // ✅ bind to 0.0.0.0
  console.log(`Server started on port ${PORT}`);
});
