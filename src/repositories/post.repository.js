import { prisma } from "../database/prisma.js";


class PostRepository {

    async create(data) {
        const post = await prisma.post.create({
            data
        })
        return post
    }

    async findAll() {
        const posts = await prisma.post.findMany({
            select: {
                id: false,
                title: true,
                content: true,
                published: true,
                createdAt: false,
                updatedAt: false
            }
        })
        return posts
    }

    async findById(id) {
        const post =  await prisma.post.findUnique({
            where: {
                id
            }
        })
        return post
    }

    async update(id, data) {
        const post = await prisma.post.update({
            where: {
                id
            },
            data
        })
        return post
    }

    async delete(id) {
       await prisma.post.delete({
            where: {
                id
            }
        })
        return
    }
}


export default new PostRepository()