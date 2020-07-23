<template>
  <Layout>
    <h1>Blog Posts</h1>
    <Card
      v-for="post in $page.allPost.edges"
      :key="post.node.id"
      :post="post.node"
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
    title: 'Home',
  },
};
</script>

<page-query>
query posts {
	allPost {
    edges {
      node {
        id,
        title,
        description,
        tags,
        date,
        path,
      }
    }
  }  
}
</page-query>

<style></style>
