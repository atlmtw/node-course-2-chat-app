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

  socket.emit('newMessage',{
    from:'Admin',
    text:'Welcome to the chat app',
    createdAt:new Date().getTime()
  });

  socket.broadcast.emit('newMessage',{
    from:'Admin',
    text:'New User Joined',
    createdAt:new Date().getTime()
  });

  socket.on('createMessage',(newMessage)=>{
    io.emit("newMessage", {
      from: newMessage.from,
      text: newMessage.text,
      createdAt:new Date().getTime()
    })

    //everyone but this socket is what broadcast does
    // socket.broadcast.emit('newMessage',{
    //   from:newMessage.from,
    //   text:newMessage.text,
    //   createdAt:new Date().getTime()
    // });
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  })
});

server.listen(port, ()=>{
  console.log(`Server is up on ${port}`);
});
