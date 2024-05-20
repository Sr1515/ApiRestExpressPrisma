import PostController from "../controllers/post.controller.js";

const postRoutes = app => {
    app.post('/post', PostController.store)
    app.get('/post', PostController.index)

}

export default postRoutes