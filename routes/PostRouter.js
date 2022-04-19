const Router = require("express").Router();
const controllers = require("../controllers/PostController");
const middleware = require('../middleware')

Router.get("/recent", controllers.GetRecentPosts);
Router.get("/:postId", controllers.GetPostDetails);
Router.post(
    "/:user_id",
    middleware.stripToken,
    middleware.verifyToken, 
    controllers.CreatePost);
Router.put("/:post_id", 
    middleware.stripToken,
    middleware.verifyToken, 
    controllers.UpdatePost);
Router.delete("/:post_id",
    middleware.stripToken,
    middleware.verifyToken, 
    controllers.DeletePost);

module.exports = Router;
