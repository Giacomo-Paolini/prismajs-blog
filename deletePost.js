const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.post.delete({
    where: {
        id: 3,
    },
}).then((deletedPost) => {
    console.log('Deleted post: ', deletedPost);
});