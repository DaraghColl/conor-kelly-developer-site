<template>
  <Layout>
    <h1>Posts by Tag</h1>
    <div class="grid">
      <Card
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
        :post="post.node"
        :page="'tag'"
      />
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
              id,
              title,
              description,
              thumbnail,  
                tags {
                  title,
                  path
                }
              date,
              path,
            }
          }
        }
      }
    }
  }
</page-query>

<style lang="scss">
@import '~/styles/variables.scss';

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  @media (max-width: $screen-sm) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
