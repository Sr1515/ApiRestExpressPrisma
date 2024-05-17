import bcrypt from 'bcrypt'
import UserRepository from '../repositories/user.repository.js'

class UserController {

    async store(req, res) {
        try {
            const hashPassword = await bcrypt.hash(req.body.password, 10)
            req.body.password = hashPassword

            const user = await UserRepository.createUser(req.body)
            res.status(201).send(user)
        } catch (e) {
            res.status(400).send(e)
        }
    }
}

export default new UserController()