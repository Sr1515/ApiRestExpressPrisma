import UserController from "../controllers/user.controller.js"

const userRoutes = app => {
    app.post('/user', UserController.store)
}


export default userRoutes