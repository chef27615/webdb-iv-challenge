
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {name: 'ing 1'},//1
    {name: 'ing 2'},//2
    {name: 'ing 3'},//3
    {name: 'ing 4'},//4
  ]);
};
