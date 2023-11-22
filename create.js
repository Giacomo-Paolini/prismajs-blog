const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.post.createMany({
    data: [
        {
            title: 'Tutorial Prisma',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--CjKO-o86--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0ft17awzlb6rywbhghkm.png',
            slug: titleToSlug('Tutorial Prisma'),
            content: 'Prisma is an awesome tool blablablablabla',
            published: true,
        },
        {
            title: 'Tutorial Nodejs',
            image: 'https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png',
            slug: titleToSlug('Tutorial Nodejs'),
            content: 'Nodejs is an awesome tool blablablablabla',
            published: true,
        },
        {
            title: 'Tutorial Expressjs',
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png',
            slug: titleToSlug('Tutorial Expressjs'),
            content: 'Expressjs is an awesome tool blablablablabla',
            published: true,
        }
    ],
}).then((newPost) => {
    console.log('Created new post: ', newPost);
});

function titleToSlug(title) {
    const slug = title.toLowerCase().replace(' ', '-');
    return slug;
}