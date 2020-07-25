<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <g-link class="navbar__item" to="/">Conor Kelly</g-link>
    </div>

    <div class="navbar__pages">
      <g-link class="navbar__item" to="/skills">Skills</g-link>
      <g-link class="navbar__item" to="/blog">Blog</g-link>
      <g-link class="navbar__item" to="/contact">Contact</g-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.navbar {
  background: $primary;
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;

  .navbar__pages {
    .navbar__item {
      margin-right: 1em;
    }
  }

  .navbar__item {
    text-decoration: none;
    color: $white;
  }
}
</style>
