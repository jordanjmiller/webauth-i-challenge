const express = require('express');
const session = require('express-session');
const connectSessionKnex = require('connect-session-knex');
const KnexSessionStore = connectSessionKnex(session);
const db = require('./data/db-config.js')
const UserRouter = require('./users/user-router.js');
const AuthRouter = require('./auth/auth-router.js');

const server = express();
server.use(express.json());
// configure express-session middleware
server.use(
    session({
      name: 'notsession', // default is connect.sid
      secret: 'nobody tosses a dwarf!',
      cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false, // only set cookies over https. Server will not send back a cookie over http.
      }, // 1 day in milliseconds
      httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
      resave: false,
      saveUninitialized: false,
      store: new KnexSessionStore({
        knex: db,
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60,
      })
    })
  );



server.use('/api/', AuthRouter);
server.use('/api/users', UserRouter);


const PORT = process.env.PORT || 5021;
server.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = server;