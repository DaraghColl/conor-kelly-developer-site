<template>
  <div :class="theme">
    <Navbar />
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
import { mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
  },
  methods: {},
  computed: mapGetters(['theme']),
  created() {
    localStorage.setItem('theme', this.theme);
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
  min-height: 100vh;
}
</style>
