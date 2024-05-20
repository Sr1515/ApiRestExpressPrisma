import userRoutes from "./user.routes.js"; 
import postRoutes from "./post.routes.js";

const routes = app => {
    userRoutes(app)
    postRoutes(app)
}

export default routes