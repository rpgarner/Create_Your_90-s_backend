const Router = require("express").Router();
const controller = require("../controllers/CommentController");
const middleware = require('../middleware')

Router.get("/recent", controller.getAllComments);
Router.get("/:post_id", controller.GetAllCommentsByPostPk);
Router.post("/:user_id/:post_id", 
    middleware.stripToken,
    middleware.verifyToken,
    controller.newComment);
Router.put("/:comment_id", 
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateComment);
Router.delete("/:comment_id", 
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteComment);

module.exports = Router;
