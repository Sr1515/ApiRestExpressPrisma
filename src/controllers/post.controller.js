import PostRepository from "../repositories/post.repository.js";

class PostController {

    async store(req, res) {
        try {
            const post = await PostRepository.create(req.body)
            res.status(201).send(post)
        } catch (e) {
            res.status(400).send(e)
        }
    }

    async index(req, res) {
        try {
            const posts = await PostRepository.findAll()
            res.status(200).send(posts)
        } catch (e) {
            res.status(400).send(e)
        }
    }




}

export default new PostController()