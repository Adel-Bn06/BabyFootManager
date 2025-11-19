const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors({  origin: "*", methods: ["GET", "POST", "PUT", "DELETE"]}));
app.use(express.json());

const http = require('http');
const {Server} = require('socket.io');

const server = http.createServer(app);
const io = new Server(server,{cors : {origin : "*" , methods: ["GET", "POST", "PUT", "DELETE"]}});

io.on("connection", ()=>{console.log("Connextion Réussite !")});


const BabyFootRoute = require('./Route/BabyFootRoute');
app.use('/api/BabyFoot', BabyFootRoute);



server.listen(3000, () => { console.log('serveur est démarré sur http://localhost:3000')});


module.exports.io = io ;



