<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <g-link class="navbar__item" to="/">Conor Kelly</g-link>
    </div>

    <div class="navbar__pages">
      <g-link class="navbar__item" to="/skills">Skills</g-link>
      <g-link class="navbar__item" to="/blog">Blog</g-link>
      <g-link class="navbar__item" to="/contact">Contact</g-link>
      <g-image
        class="nav__theme-icon"
        src="/assets/theme--light.svg"
        v-on:click="setTheme('theme--light')"
        v-if="theme === 'theme--dark'"
      />
      <g-image
        class="nav__theme-icon"
        src="/assets/theme--dark.svg"
        v-on:click="setTheme('theme--dark')"
        v-if="theme === 'theme--light'"
      />
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    setTheme(theme) {
      this.toggleTheme(theme);
    },
    ...mapActions(['toggleTheme']),
  },
  computed: mapGetters(['theme']),
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1em;

  .navbar__logo {
    @media (max-width: $screen-sm) {
      display: none;
    }
  }

  .navbar__pages {
    display: flex;
    @media (max-width: $screen-sm) {
      width: 100%;
      justify-content: space-around;
    }
    .navbar__item {
      margin-right: 1em;
    }
  }

  .navbar__item {
    text-decoration: none;
    color: inherit;
    font-size: 1.5em;
    font-weight: bolder;
  }

  .nav__theme-icon {
    width: 25px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
