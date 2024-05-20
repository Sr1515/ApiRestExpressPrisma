import bcrypt from 'bcrypt'
import UserRepository from '../repositories/user.repository.js'

class UserController {

    async store(req, res) {
        try {
            const hashPassword = await bcrypt.hash(req.body.password, 10)
            req.body.password = hashPassword

            const user = await UserRepository.create(req.body)
            res.status(201).send(user)
        } catch (e) {
            res.status(400).send(e)
        }
    }

    async index(req, res) {
        try {
            const users = await UserRepository.findAll()
            res.status(200).send(users)
        } catch (e) {
            res.status(400).send(e)
        }
    }

    async show(req, res) {
        try {
            const user = await UserRepository.findById(Number(req.params.id))
            res.status(200).send(user)
        } catch (e) {
            res.status(404).send(e)
        }
    }

    async update(req, res) {
        try {
            const id = Number(req.params.id)
            const user = await UserRepository.update(id, req.body)
            res.status(200).send(user)
        } catch (e) {
            res.status(400).send(e)
        }
    }

    async delete(req, res) {
        try {
            await UserRepository.delete(Number(req.params.id))
            res.status(200).send()
        } catch (e) {
            res.status(400).send(e)
        }
    }
}

export default new UserController()