var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('createMessage',{
    from:'Mason Wong 2',
    text:'I created a message for you'
  })
});

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
  console.log('New Message', message);
})
