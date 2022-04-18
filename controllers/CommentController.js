////////////////////imports//////////////////
const { Comment, Post, User } = require("../models");

////////////////////controller variables//////////////////

const getAllComments = async (req, res) => {
  try {
    const getComments = await Comment.findAlsswwl({
      order: [["createdAt", "DESC"]],
    });
    res.json(getComments);
  } catch (error) {
    throw error;
  }
};

const GetCommentDetails = async (req, res) => {
  try {
    const postId = parseInt(req.params.post_id);
    const CommentDetails = await Comment.findOne({
      where: { postId: postId },
      include: [{ model: Post }],
    });
    res.send(CommentDetails);
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

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id);
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true,
    });
    res.send(updatedComment);
  } catch (error) {
    throw error;
  }
};

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id);
    await Comment.destroy({ where: { id: commentId } });
    res.send({ message: `Comment with id ${commentId} has been deleted` });
  } catch (error) {
    throw error;
  }
};

////////////////////exports//////////////////

module.exports = {
  getAllComments,
  GetCommentDetails,
  newComment,
  UpdateComment,
  DeleteComment,
};
