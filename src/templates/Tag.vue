<template>
  <Layout>
    <h1>Blog Posts</h1>
    <div v-for="post in $page.tag.belongsTo.edges" :key="post.node.id">
      <h1>{{ post.node.title }}</h1>
    </div>
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
  components: {
    Card,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>

<page-query>
  query Tag ($id: ID!) {
    tag: tag (id: $id) {
      id
      belongsTo( order: DESC) {
        edges {
          node {
            ... on Post {
              title
              description
              date
            }
          }
        }
      }
    }
  }
</page-query>

<style></style>
