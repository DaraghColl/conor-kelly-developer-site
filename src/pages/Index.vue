<template>
  <div>
    <Navbar />

    <section id="landing-section" class="landing">
      <h1>Conor Kelly</h1>
      <h3>Full Stack Developer</h3>
      <div class="landing-links">
        <g-image class="link" src="/assets/github.svg" />
        <g-image class="link" src="/assets/linkedin.svg" />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.landing {
  background-color: $primary;
  color: $white;
  display: grid;
  place-items: center;
  font-size: 3.5vw;
  padding-bottom: 2em;
  h1 {
    margin-bottom: 0;
  }
  h3 {
    margin-top: 0;
  }

  .landing-links {
    display: flex;
    .link {
      width: 8vw;
      max-width: 40px;
      margin: 0 10px;
    }
  }
}
</style>
