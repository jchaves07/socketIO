import express from 'express';
import cors from 'cors';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server, {
    allowRequest: (req, callback) => {
      const noOriginHeader = req.headers.origin === undefined;
      callback(null, noOriginHeader);
    }
  });
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {


    res.sendFile(__dirname + '/public/index.html');
  });
  app.get('/test', (req, res) => {
    io.emit('probando api emisor', { valor: '111' });
    res.sendStatus(200);
  });
  
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      socket.broadcast.emit('hola' + msg);
    });
  });
  server.listen(port, () => {
    console.log('listening on *:3000');
  });

