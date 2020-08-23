<template>
  <Layout>
    <h1>Posts</h1>
    <div class="grid">
      <Card
        v-for="post in $page.allPost.edges"
        :key="post.node.id"
        :post="post.node"
        :page="'blog'"
      />
    </div>

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
	allPost(perPage: 10, page: $page, sortBy: "date", order: DESC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id,
        title,
        description,
        thumbnail,  
          tags {
            title,
            path
          }
        date(format: "YYYY-MM-DD"),
        path,
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
.pagination {
  display: flex;
  justify-content: flex-end;
  a {
    text-decoration: none;
    font-size: 1.3vw;
    margin-right: 0.5em;
    font-weight: bold;
    color: inherit;
  }
}
</style>
