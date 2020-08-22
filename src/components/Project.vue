<template>
  <div class="project__card">
    <g-image class="project__img" :src="project.thumbnail" />

    <div class="project__body">
      <h1>{{ project.title }}</h1>
      <h3 class="project__description">{{ project.description }}</h3>
      <div class="project__links">
        <g-link :to="project.github">Github</g-link>
        <g-link :to="project.demo">Demo</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.project__card {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: $border-medium;
  margin-bottom: 1em;

  .project__img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .project__body {
    padding: 20px;

    .project__description {
      max-width: 80%;
    }
  }

  .project__links {
    display: flex;
    justify-content: flex-end;
    a {
      text-decoration: none;
      background: $primary;
      color: #fff;
      padding: 2px 20px;
      border-radius: 2px;
      margin-right: 5px;
    }
  }
}
</style>
