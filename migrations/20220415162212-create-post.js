"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      postName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      images: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        reference: {
          model: "users",
          key: "id",
        },
      },
      createdAt: {
        // field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        // field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts");
  },
};
