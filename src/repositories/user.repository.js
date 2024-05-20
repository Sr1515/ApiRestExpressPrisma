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
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                posts: false,
                followers: {
                    select: {
                        id: false,
                        followedId: false,
                        followerId: false,
                        follower: {
                            select: {
                                name: true,
                            }
                        },
                    }
                },
                follows: {
                    select: {
                        id: false,
                        followedId: false,
                        followerId: false,
                        followed: {
                            select: {
                                name: true,
                            }
                        },
                    }
                }
            }
        });
        return user;
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

    async follow(idFollower, idFollowed) {
        const follow = await prisma.follow.create({
            data: {
                followerId: idFollower,
                followedId: idFollowed
            }
        });
        return follow
    }

    async unfollow(idFollower, idFollowed) {
        await prisma.follow.delete({
            where: {
                followerId_followedId: {
                    followerId: idFollower,
                    followedId: idFollowed
                }
            }
        });
    }


}

export default new UserRepository()

