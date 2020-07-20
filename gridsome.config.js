module.exports = {
  siteName: 'Kelly',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        pathPrefix: '/post',
        template: './src/templates/Post.vue',
        plugins: [
          [
            'gridsome-plugin-remark-shiki',
            { theme: 'Material-Theme-Palenight', skipInline: true },
          ],
        ],
      },
    },
  ],
}
