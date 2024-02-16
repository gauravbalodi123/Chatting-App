
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const socketio = require('socket.io')
const io = socketio(server);

app.use('/' , express.static(path.join(__dirname , 'public')));

const users = {};

io.on('connection' , (socket)=>{
    // console.log(socket.id);
    console.log(`someone got connected with ${socket.id}`);


    socket.on('send-msg' , (data)=>{
        // console.log(data);
        io.emit('received-msg',{
            msg:data.msg,
            // id:socket.id
            username : users[socket.id]
        })
    })

    socket.on('login' , (data)=>{
        // console.data(data);
        users[socket.id] = data.username;
    })


})



const port =  process.env.port || 3000 ;

server.listen(port , ()=>{
    console.log('conneced at 3000');
})



