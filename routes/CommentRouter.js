const Router = require("express").Router();
const controller = require("../controllers/CommentController");

Router.get("/recent", controller.getAllComments);
Router.post("/:user_id/:post_id", controller.newComment);
Router.put("/:comment_id", controller.UpdateComment);
Router.delete("/:comment_id", controller.DeleteComment);

module.exports = Router;
