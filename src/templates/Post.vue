<template>
  <Layout>
    <div class="project__header">
      <h1 class="project__title">{{ $page.post.title }}</h1>
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

<style lang="scss"></style>
