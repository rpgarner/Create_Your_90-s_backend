////////////////////imports//////////////////

const { User, Post, Comment } = require("../models");

////////////////////controller variables//////////////////

const { Op, literal, fn, col } = require("sequelize");

const GetPopularPosts = async (req, res) => {
  try {
    const popular = await Post.findAll({
      order: [["likes", "DESC"]],
      attributes: [
        "id",
        "description",
        "likes",
        "postName",
        "releaseDate",
        "images"[(fn("COUNT", col("comments.id")), "commentCount")],
      ],
      where: { likes: { [Op.gt]: 3 } },
      include: [
        { model: User, attributes: ["userName", "id"] },
        { model: Comment, attributes: [] },
      ],
    });
    res.send(popular);
  } catch (error) {
    throw error;
  }
};

const GetRecentPosts = async (req, res) => {
  try {
    const recents = await Post.findAll({ order: [["createdAt", "DESC"]] });
    res.json(recents);
  } catch (error) {
    throw error;
  }
};

const GetPostDetails = async (req, res) => {
  try {
    const postDetails = await Post.findByPk(req.params.postId);
    res.send(postDetails);
  } catch (error) {
    throw error;
  }
};

const CreatePost = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let postBody = {
      userId,
      ...req.body,
    };
    const newPost = await Post.create(postBody);
    res.send(newPost);
  } catch (error) {
    throw error;
  }
};

const UpdatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id);
    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true,
    });
    res.send(updatedPost);
  } catch (error) {
    throw error;
  }
};

const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id);
    await Post.destroy({ where: { id: postId } });
    res.send({ message: `Post with id ${postId} has been deleted` });
  } catch (error) {
    throw error;
  }
};

////////////////////exports//////////////////

module.exports = {
  GetPopularPosts,
  GetRecentPosts,
  GetPostDetails,
  CreatePost,
  UpdatePost,
  DeletePost,
};
