"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "bob",
          lastName: "wright",
          userName: "bobby",
          about: "I really like to write",
          email: "dem@demo.com",
          password: "1234",

        },
        // {
        //   firstName: "Jackson",
        //   lastName: "Michael",
        //   userName: "jack",
        //   about: "Micahel Jackson",
        //   email: "Michael@jackson.com",
        //   password: "1234",

        // },
        // {
        //   firstName: "Ocelot",
        //   lastName: "Cat",
        //   userName: "Ocat",
        //   about: "I like cats",
        //   email: "catLover@demo.com",
        //   password: "1234",

        // },
        // {
        //   firstName: "Steve",
        //   lastName: "Jobs",
        //   userName: "SJobs",
        //   about: "Lets get dirty",
        //   email: "Steve@Jobs.com",
        //   password: "1234",

        // },
        // {
        //   firstName: "Barbara",
        //   lastName: "strisand",
        //   userName: "Bsand",
        //   about: "has really dry hands",
        //   email: "Barb@rocks.com",
        //   password: "1234",
          
   
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
