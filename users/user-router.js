const express = require('express');

const users = require('./user-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    users.getUsers()
    .then(usersList => {
        res.status(200).json(usersList);
    })
    .catch(err => {
      console.log(err);
        res.status(500).json({ message: 'Failed to get users' });
    });
});
// router.get('/resources', (req, res) => {
//     projects.getResources()
//     .then(resourcesList => {
//         res.status(200).json(resourcesList);
//     })
//     .catch(err => {
//       console.log(err);
//         res.status(500).json({ message: 'Failed to get resources' });
//     });
// });
// router.get('/tasks', (req, res) => {
//     projects.getTasks()
//     .then(taskList => {
//         res.status(200).json(taskList);
//     })
//     .catch(err => {
//       console.log(err);
//         res.status(500).json({ message: 'Failed to get tasks' });
//     });
// });

// router.post('/', (req, res) => {
//   projects.addProject(req.body)
//   .then(project => {
//     res.status(201).json(project);
//   })
//   .catch (err => {
//     console.log(err);
//     res.status(500).json({ message: 'Failed to create new project' });
//   });
// });
// router.post('/resources', (req, res) => {
//   projects.addResource(req.body)
//   .then(resource => {
//     res.status(201).json(resource);
//   })
//   .catch (err => {
//     console.log(err);
//     res.status(500).json({ message: 'Failed to create new resource' });
//   });
// });
// router.post('/tasks', (req, res) => {
//   projects.addTask(req.body)
//   .then(task => {
//     res.status(201).json(task);
//   })
//   .catch (err => {
//     console.log(err);
//     res.status(500).json({ message: 'Failed to create new task' });
//   });
// });


module.exports = router;