module.exports = {
  siteName: 'Kelly',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        pathPrefix: '/blog',
        template: './src/templates/Post.vue',
        refs: {
          // Example 2: Create a Tag collection by reference `tags` field.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
        plugins: [
          [
            'gridsome-plugin-remark-shiki',
            { theme: 'Material-Theme-Palenight', skipInline: true },
          ],
        ],
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project',
        baseDir: './content/projects',
      },
    },
  ],

  templates: {
    Tag: '/tag/:id',
  },
};
