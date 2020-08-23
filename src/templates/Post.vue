<template>
  <Layout>
    <div class="post">
      <div class="post__header">
        <h1 class="post__title">{{ $page.post.title }}</h1>
        <div>
          <g-link class="post__link" to="/blog/">
            <g-image
              class="post__link-icon"
              src="/assets/arrow-left-blue.svg"
              alt="all posts"
            />All Posts
          </g-link>
        </div>
      </div>
      <div class="post__img-and-decription">
        <g-image
          class="post__img"
          :src="$page.post.thumbnail"
          alt="post image"
        />
        <h4 class="post__description">{{ $page.post.description }}</h4>
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
    title,
    description,
    thumbnail
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.post {
  .post__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: $screen-xs) {
      flex-direction: column;
      .post__title {
        margin-bottom: 0;
      }
    }
  }
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

  .post__img-and-decription {
    display: grid;
    place-items: center;
    .post__img {
      width: 100%;
      max-width: 400px;
    }
  }
}
</style>
