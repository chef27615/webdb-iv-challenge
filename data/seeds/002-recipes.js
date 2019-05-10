
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {name:'egg', dish_id:1},//1
    {name:'mayo', dish_id:1},//2
    {name:'miriqua', dish_id:1},//3
    {name:'cabbage',dish_id:2},//4
    {name:'salt n pepper',dish_id:2},//5
    {name:'lichee',dish_id:2},//6
    {name:'gill',dish_id:3},//7
    {name:'beef paddie',dish_id:3},//8
    {name:'good fire',dish_id:3},//9
    {name:'cold hard rice',dish_id:4},//10
    {name:'sqectash',dish_id:4},//11
    {name:'chinese mirror',dish_id:4},//12

  ])
};
