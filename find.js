const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.post.findUnique({
    where: {
        slug: 'tutorial-prisma',
    },
}).then((post) => {
    console.log('Find unique post: ', post);
});

prisma.post.findMany({
}).then((posts) => {
    console.log('Find all post: ', posts);
});