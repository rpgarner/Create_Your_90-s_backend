const { User, Post, Comment } = require("../models");

const { Op, literal, fn, col } = require("sequelize");

const GetPopularPosts = async (req, res) => {
  try {
    const popular = await Post.findAll({
      order: [["likes", "DESC"]], //Order By Likes in descending order
      attributes: [
        // Select Specific Attributes
        "id",
        "description",
        "likes",
        "postName",
        "releaseDate",
        "images"[(fn("COUNT", col("comments.id")), "commentCount")], //Count amount of associated comments
      ],
      where: { likes: { [Op.gt]: 3 } }, // Where likes is greater than 3000
      include: [
        { model: User, attributes: ["userName", "id"] },
        { model: Comment, attributes: [] }, //Leave attributes empty, we only need the model to execute the count
      ],
      //   group: ["user.Id", "post.id"], // Group the information by it's respective id
    });
    res.send(popular);
  } catch (error) {
    throw error;
  }
};

const GetRecentPosts = async (req, res) => {
  try {
    const recents = await Post.findAll({ order: [["created_at", "DESC"]] });
    res.send(recents);
  } catch (error) {
    throw error;
  }
};

const GetPostDetails = async (req, res) => {
  try {
    const postDetails = await Post.findByPk(req.params.post_id);
    res.send(postDetails);
  } catch (error) {
    throw error;
  }
};

const CreatePost = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id);
    let postBody = {
      ownerId,
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
    let DeletedTwert = await Post.destroy({ where: { id: postId } });
    res.send({ message: `Post with id ${postId} has been deleted` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetPopularPosts,
  GetRecentPosts,
  GetPostDetails,
  CreatePost,
  UpdatePost,
  DeletePost,
};
