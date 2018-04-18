const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(__dirname,'../public')));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage',(newMessage)=>{
    console.log('createMessage',newMessage);
    io.emit("newMessage", {
      from: newMessage.from,
      text: newMessage.text,
      createdAt:new Date().getTime()
    })
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  })
});

server.listen(port, ()=>{
  console.log(`Server is up on ${port}`);
});
