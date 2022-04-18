"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("comments", 
    [
      {
        description: 'Miss thje good ole,days or playing pokemon on Game boy',
        likes: 2,
        name: 'Jenna',
        userId: 5,
        postId: 5,
      },
      {
        description: `N'SYNC is everything, way better then backstreet boys` ,
        likes: 22,
        name: 'Angie',
        userId: 2,
        postId: 18,
      },
      {
        description: 'I still watch friends, this show never gets old',
        likes: 7,
        name: 'Koa',
        userId: 1,
        postId: 19,
      },
      {
        description: 'Still lost on the oregon trail, could never beat this game so hard. ',
        likes: 1,
        name: 'Ryan',
        userId: 4,
        postId: 21,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comments");
  },
};
