const express = require('express');

const UserRouter = require('./users/user-router.js');
const AuthRouter = require('./auth/auth-router.js');

const server = express();
server.use(express.json());

server.use('/api/', AuthRouter);
server.use('/api/users', UserRouter);


const PORT = process.env.PORT || 5021;
server.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = server;