const db = require('../data/db-config.js');

module.exports = {
    getUsers,
    addUser,
    getUserBy,
}

function getUsers() {
    return db('users');
}
function addUser(user) {
    return db('users')
        .insert(user)
        // .then(newProject => getProjectsByID(newProject[0].id));
}
function getUserBy(value) {
    return db('users')
        .where(value)
        .first();
}

// function addResource(resource) {
//     return db('resources')
//         .insert(resource)
//         // .then(newResource => getResourceByID(newResource[0].id));
// }
// function addTask(task) {
//     return db('tasks')
//         .insert(task)
//         // .then(newTask => getTaskByID(newTask[0].id));
// }