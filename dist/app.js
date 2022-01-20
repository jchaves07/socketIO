"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app);
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(server);
const port = 3000;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
io.on('connection', (socket) => {
    console.log('a user connected');
});
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});
server.listen(port, () => {
    console.log('listening on *:3000');
});
//# sourceMappingURL=app.js.map