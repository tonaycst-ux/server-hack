const http=require('http');
const server=http.createServer();
const {Server} =require('socket.io');

const io=new Server(server,()=>{
    console.log("socket.io created");
});
let caps=false;
io.on("connection",(socket)=>{
    socket.on("message",(msg)=>{
              io.emit("message",msg);
    });

})

server.listen(process.env.port||3000,()=>{
    console.log("Server Started");
});