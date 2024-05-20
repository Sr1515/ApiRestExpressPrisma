import UserController from "../controllers/user.controller.js"

const userRoutes = app => {
    app.post('/user', UserController.store)
    app.get('/user', UserController.index)
    app.get('/user/:id', UserController.show)
    app.put('/user/:id', UserController.update)
    app.delete('/user/:id', UserController.delete)

    /// follow and unfollow user routes
    app.post('/user/:id/follow/:idFollowed', UserController.followUser)
    app.delete('/user/:id/unfollow/:idUnfollow', UserController.unfollowUser)
}


export default userRoutes