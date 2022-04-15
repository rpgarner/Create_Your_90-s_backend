const { Comment, User } = require("../models");

const getAllComments = async (req, res) => {
  try {
    const getComments = Comment.findAll();
    res.send(getComments);
  } catch (error) {
    throw error;
  }
};

const newComment = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id);
    let postId = parseInt(req.params.post_id);
    let CommentBody = {
      ownerId: ownerId,
      postId: postId,
      ...req.body,
    };
    let createComment = await Comment.create(CommentBody);
    res.send(createComment);
  } catch (error) {
    throw error;
  }
};
// Work Here
// Work Here

// Dont forget to export your functions
module.exports = {
  getAllComments,
  newComment,
};
