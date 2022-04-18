"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Jane",
          lastName: "Doe",
          userName: "JDoe",
          about: "jane likes does",
          email: "demo@demo.com",
          password: "1234",
          // createdAt: new Date(),
          // updatedAt: new Date(),
        },
        {
          firstName: "Jackson",
          lastName: "Michael",
          userName: "jack",
          about: "Micahel Jackson",
          email: "Michael@jackson.com",
          password: "1234",
          // createdAt: new Date(),
          // updatedAt: new Date(),
        },
        {
          firstName: "Ocelot",
          lastName: "Cat",
          userName: "Ocat",
          about: "I like cats",
          email: "catLover@demo.com",
          password: "1234",
          // createdAt: new Date(),
          // updatedAt: new Date(),
        },
        {
          firstName: "Steve",
          lastName: "Jobs",
          userName: "SJobs",
          about: "Lets get dirty",
          email: "Steve@Jobs.com",
          password: "1234",
          // createdAt: new Date(),
          // updatedAt: new Date(),
        },
        {
          firstName: "Barbara",
          lastName: "strisand",
          userName: "Bsand",
          about: "has really dry hands",
          email: "Barb@rocks.com",
          password: "1234",
          // createdAt: new Date(),
          // updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
