const express = require('express');

const UserRouter = require('./users/userRouter.js');

const server = express();

server.use(express.json());
server.use('/api/users', UserRouter);


const PORT = process.env.PORT || 5020;
server.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = server;