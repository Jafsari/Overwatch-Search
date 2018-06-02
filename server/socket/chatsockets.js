
var socket = require('socket.io');
const express = require('express');
const app = express();
server = app.listen(5000, function(){
    console.log('server is running on port 5000')
});
let io = socket(server);
var competitive = io.of('/competitive');
var general = io.of('/general');
var grandmaster = io.of('/grandmaster');
var master = io.of('/master');
var diamond = io.of('/diamond');


competitive.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('disconnect', function(){
        console.log('user disconnected');
      });

    socket.on('SEND_MESSAGE', function(data){
        competitive.emit('RECEIVE_MESSAGE', data);
    })
});

general.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('disconnect', function(){
        console.log('user disconnected');
      });

    socket.on('SEND_MESSAGE', function(data){
        general.emit('RECEIVE_MESSAGE', data);
    })
});

grandmaster.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('disconnect', function(){
        console.log('user disconnected');
      });

    socket.on('SEND_MESSAGE', function(data){
        grandmaster.emit('RECEIVE_MESSAGE', data);
    })
});

master.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('disconnect', function(){
        console.log('user disconnected');
      });

    socket.on('SEND_MESSAGE', function(data){
        master.emit('RECEIVE_MESSAGE', data);
    })
});

diamond.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('disconnect', function(){
        console.log('user disconnected');
      });

    socket.on('SEND_MESSAGE', function(data){
        diamond.emit('RECEIVE_MESSAGE', data);
    })
});

