<template>
  <Layout>
    <h1>Posts by Tag</h1>

    <Card
      v-for="post in $page.tag.belongsTo.edges"
      :key="post.node.id"
      :post="post.node"
      :page="'tag'"
    />
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
  components: {
    Card,
  },
  metaInfo: {
    title: 'Tag View',
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
