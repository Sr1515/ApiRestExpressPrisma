import UserController from "../controllers/user.controller.js"

const userRoutes = app => {
    app.post('/user', UserController.store)
    app.get('/user', UserController.index)
    app.get('/user/:id', UserController.show)
    app.put('/user/:id', UserController.update)
    app.delete('/user/:id', UserController.delete)

    app.post('/user/:id/follow/:idFollowed', UserController.followUser);
}


export default userRoutes