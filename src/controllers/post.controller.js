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

    async show(req, res) {
        try {
            const post = await PostRepository.findById(Number(req.params.id))
            res.status(200).send(post)
        } catch (e) {
            res.status(404).send(e)
        }
    }

    async update(req, res) {
        try {
            const id = Number(req.params.id)
            const post = await PostRepository.update(id, req.body)
            res.status(200).send(post)
        } catch (e) {
            res.status(400).send(e)
        }
    }

    async delete(req, res) {
        try {
            await PostRepository.delete(Number(req.params.id))
            res.status(200).send()
        } catch (e) {
            res.status(400).send(e)
        }
    }
}

export default new PostController()