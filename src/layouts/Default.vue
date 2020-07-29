<template>
  <div :class="theme">
    <Navbar :theme="theme" v-on:setThemeEmit="setTheme" />
    <div class="layout">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      theme: 'theme--light',
    };
  },
  methods: {
    setTheme(theme) {
      this.theme = theme;
    },
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: #f5f8fa;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
