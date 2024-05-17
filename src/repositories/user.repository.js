import { prisma } from "../database/prisma.js";


class UserRepository {

    async createUser(data) {
        const user = prisma.user.create({
            data,
            select: {
                id: true,
                name: true,
                email: true,
                posts: true,
                password: true,
                followers: true,
                following: true,
                follows: true
            }
        })
        return user
    }
}

export default new UserRepository()

