const express  = require('express');
const http = require('http');
const path = require('path');
const app = express();
const {Server} = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on('connection', (socket)=>{
    // console.log('A new User connected', socket.id);
    socket.on('user-message', (message) =>{
        io.emit("message", message)   // If any mesage coming from frontend from anyuser give ot everyone
    });
});

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve("./public/index.html"));
});

server.listen(9000, ()=>{
    console.log('server startded on 9000');
})

