
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'steve', password: 'pass'},
        {id: 2, username: 'frank', password: 'pass'},
        {id: 3, username: 'e', password: 'pass'}
      ]);
    });
};
