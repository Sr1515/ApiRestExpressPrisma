import PostController from "../controllers/post.controller.js";

const postRoutes = app => {
    app.post('/post', PostController.store)
    app.get('/post', PostController.index)
    app.get('/post/:id', PostController.show)
    app.put('/post/:id', PostController.update)
    app.delete('/post/:id', PostController.delete)

}

export default postRoutes