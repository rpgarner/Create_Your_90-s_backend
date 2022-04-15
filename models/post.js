"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: "userId",
      }),
        Post.hasMany(models.Comment, {
          foreignKey: "postId",
        });
    }
  }
  Post.init(
    {
      postName: {
        type:DataTypes.STRING,
        allowNull: false
      },
      releaseDate: {
       type: DataTypes.STRING,
       allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'userId',
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "users",
          Key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
    }
  );
  return Post;
};
