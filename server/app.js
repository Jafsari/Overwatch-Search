const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const auth = require('./middleware/auth');
const app = express();
var socket = require('socket.io');
const Chatkit = require('pusher-chatkit-server')

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/auth",authRoutes);
app.use("/api/users",auth.loginRequired,userRoutes)

app.use((req,res,next) => {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err);
})

app.use((err,req,res,next) => {
    return res.status(err.status || 500).json({
        message: err.message,
        error: app.get("env") === "development" ? err : {}
    });
});

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:aa51485c-a0ad-47c4-9ffa-c31f5b4b0672',
    key: 'e664f49b-d96c-40fa-8084-46dc9423d0ff:lDg2FCJs6f0Y1cWNl9i8FjxgiDEEuOqzpoGl002E0Qg=',
     })

    app.post('/users', (req, res) => {
      const { username } = req.body
      chatkit
        .createUser({ 
    	id: username, 
    	name: username 
         })
        .then(() => res.sendStatus(201))
        .catch(error => {
          if (error.error_type === 'services/chatkit/user_already_exists') {
            res.sendStatus(200)
          } else {
            res.status(error.status).json(error)
          }
        })
    })

    app.post('/authenticate', (req, res) => {
          const authData = chatkit.authenticate({ userId: req.query.user_id })
          res.status(authData.status).send(authData.body)
        })
    

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

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log('Server is listening')
})