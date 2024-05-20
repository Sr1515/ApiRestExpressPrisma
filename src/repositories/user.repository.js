import { prisma } from "../database/prisma.js";


class UserRepository {

    async create(data) {
        const user = await prisma.user.create({
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

    async findAll() {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                posts: true, 
            }
        })
        return users
    }

    async findById(id) {
        const user = await prisma.user.findUnique({
            where: {
                id
            },
        })
        return user
    }

    async update(id, data) {
        const user = await prisma.user.update({
            where: {
                id
            }, 
            data
        })
        return user
    }

    async delete(id) {
        await prisma.user.delete({
            where: {
                id
            }
        })
        return
    }
}

export default new UserRepository()

