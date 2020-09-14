module.exports = {
  siteName: 'Conor Kelly',
  siteDescription: 'Conor Kelly Full Stack Developer',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project',
        baseDir: './content/projects',
        resolveAbsolutePaths: true,
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        pathPrefix: '/blog',
        resolveAbsolutePaths: true,

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
            {
              theme: 'Material-Theme-Palenight',
              skipInline: true,
            },
          ],
        ],
      },
    },
  ],

  templates: {
    Tag: '/tag/:id',
  },
};
