
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').insert([
    {name:'egg salad'},//1
    {name:'cold slaw salad'},//2
    {name:'grill hamburger'},//3
    {name:'fried rice'}//4
    
  ]);
};
