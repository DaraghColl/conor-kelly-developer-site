<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <g-link class="navbar__item" to="/">Conor Kelly</g-link>
    </div>

    <div class="navbar__pages">
      <!-- skills -->
      <span
        v-if="$route.path === '/'"
        href="#"
        class="navbar__item"
        v-scroll-to="'#skills-section'"
        >Skills</span
      >
      <g-link v-else to="/#skills-section" class="navbar__item">Skills</g-link>

      <!-- projects -->
      <span
        v-if="$route.path === '/'"
        href="#"
        class="navbar__item"
        v-scroll-to="'#project-section'"
        >Projects</span
      >
      <g-link v-else to="/#project-section" class="navbar__item"
        >Projects</g-link
      >

      <!-- contact -->
      <span
        v-if="$route.path === '/'"
        href="#"
        class="navbar__item"
        v-scroll-to="'#contact-section'"
        >Contact</span
      >
      <g-link v-else to="/#contact-section" class="navbar__item"
        >Contact</g-link
      >

      <!-- blog -->
      <g-link class="navbar__item" to="/blog">Blog</g-link>

      <!-- theme toggle -->
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
    cursor: pointer;
  }

  .nav__theme-icon {
    width: 25px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
