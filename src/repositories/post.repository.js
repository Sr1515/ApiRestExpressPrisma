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
        
    }

    async update(id, data) {
        
    }

    async delete(id) {
        
    }
}


export default new PostRepository()