const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {
  generateMessage,
  generateLocationMessage
} = require('./utils/message');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(__dirname,'../public')));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.emit('newMessage',generateMessage(
    'Admin',
    'Welcome to the chat app'
  ));

  socket.broadcast.emit('newMessage',generateMessage(
    'Admin',
    'New user joined'
  ));

  socket.on('createMessage',(newMessage, callback)=>{
    console.log('createMessage',newMessage);
    io.emit("newMessage", generateMessage(
      newMessage.from,
      newMessage.text
    ));
    callback('This is from the server');
  })

  socket.on('createLocationMessage',(coords)=>{
    io.emit("newLocationMessage",generateLocationMessage(
      'Admin: ',
      coords.latitude,
      coords.longitude
    ));
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  })
});

server.listen(port, ()=>{
  console.log(`Server is up on ${port}`);
});
