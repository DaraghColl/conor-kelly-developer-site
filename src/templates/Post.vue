<template>
  <Layout>
    <div class="post">
      <h1 class="post__title">{{ $page.post.title }}</h1>
      <div>
        <g-link class="post__link" to="/blog/">
          <g-image
            class="post__link-icon"
            src="/assets/arrow-left-blue.svg"
          />All Posts
        </g-link>
      </div>
    </div>

    <div class="project__content">
      <div class="markdown-body">
        <VueRemarkContent />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .post__link {
    color: $primary;
    padding: 0.4em;
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    .post__link-icon {
      width: 30px;
    }
  }
}
</style>
