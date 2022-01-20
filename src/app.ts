import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {


    res.sendFile(__dirname + '/public/index.html');
  });
  app.post('/test', (req, res) => {
    io.emit('probando api emisor', req.body);
    res.sendStatus(200);
  });
  

  server.listen(port, () => {
    console.log('listening on *:3000');
  });

