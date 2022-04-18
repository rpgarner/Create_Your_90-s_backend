const { Comment, User } = require("../models");

const getAllComments = async (req, res) => {
  try {
    const getComments = await Comment.findAll({ order: [["createdAt", "DESC"]] });
    res.json(getComments);
  } catch (error) {
    throw error;
  }
};

const newComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let postId = parseInt(req.params.post_id);
    let CommentBody = {
      userId,
      postId,
      ...req.body,
    };
    let createComment = await Comment.create(CommentBody);
    res.send(createComment);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllComments,
  newComment,
};
