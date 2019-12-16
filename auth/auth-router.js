const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model.js');
const auth = require('./auth-model.js');

const router = express.Router();

// | POST   | /api/register | Creates a `user` using the information sent inside the `body` of the request. 
// **Hash the password** before saving the user to the database.                                                                                                                                                         |

// | POST   | /api/login    | Use the credentials sent inside the `body` to authenticate the user. 
// On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id. If login fails, respond with the correct status code and the message: 'You shall not pass!' |

// | GET    | /api/users    | If the user is logged in, respond with an array of all the users contained in the database. 
// If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'.      

router.post('/register', (req, res) => {
    let { username, password } = req.body;
  
    if(username && password){
        const hash = bcrypt.hashSync(password, 14);
        Users.addUser({ username, password: hash })
          .then(user => {
                console.log(res.data)
                res.status(200).json({ message: `User created successfully` });
          })
          .catch(error => {
              console.log(error);
            res.status(500).json(error);
          });
    }
  }); 

router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.getUserBy({ username })
      .then(user => {
        // check that passwords match
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          // we will return 401 if the password or username are invalid
          // we don't want to let attackers know when they have a good username
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
          console.log(error);
        res.status(500).json(error);
      });
  }); 



module.exports = router;