<template>
  <Layout>
    <h1>Posts</h1>
    <Card
      v-for="post in $page.allPost.edges"
      :key="post.node.id"
      :post="post.node"
      :page="'blog'"
    />
    <Pager :info="$page.allPost.pageInfo" class="pagination" />
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue';
import { Pager } from 'gridsome';

export default {
  components: {
    Card,
    Pager,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>

<page-query>
query posts($page: Int) {
	allPost(perPage: 2, page: $page) @paginate {
        pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id,
        title,
        description,
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
</page-query>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: flex-end;
  a {
    text-decoration: none;
    font-size: 1.3vw;
    margin-right: 0.5em;
    font-weight: bold;
    color: #000;
  }
}
</style>
