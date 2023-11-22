const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.post.update({
    where: {
        id: 2,
    },
    data: {
        published: false,
    },
}).then((updatedPost) => {
    console.log('Updated post: ', updatedPost);
});