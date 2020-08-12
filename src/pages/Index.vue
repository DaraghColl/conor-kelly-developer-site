<template>
  <Layout>
    <div>
      <section id="landing-section" class="landing">
        <h1>Conor Kelly</h1>
        <h3>Full Stack Developer</h3>
        <div class="landing-links">
          <g-image class="link" src="/assets/github.svg" />
          <g-image class="link" src="/assets/linkedin.svg" />
        </div>
      </section>

      <!-- skills -->
      <section id="skills-section" class="skills">
        <h1 class="section-heading">Technologies</h1>
        <div class="skills__grid">
          <g-image class="dev-icon" src="/assets/nodejs.svg" />
          <g-image class="dev-icon" src="/assets/angular.svg" />
          <g-image class="dev-icon" src="/assets/python.svg" />
          <g-image class="dev-icon" src="/assets/java.svg" />
          <g-image class="dev-icon" src="/assets/python.svg" />
          <g-image class="dev-icon" src="/assets/nodejs.svg" />
          <g-image class="dev-icon" src="/assets/java.svg" />
          <g-image class="dev-icon" src="/assets/angular.svg" />
        </div>
      </section>
    </div>
  </Layout>
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

/** landing **/
.landing {
  display: grid;
  place-items: center;
  font-size: 2.5vw;
  padding-bottom: 2em;
  @media (max-width: $screen-sm) {
    font-size: 1.5em;
  }
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

/** skills **/
.skills {
  .skills__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    .dev-icon {
      max-width: 100px;
      margin-bottom: 2em;
      @media (max-width: $screen-sm) {
        max-width: 50px;
      }
    }
  }
}

.section-heading {
  text-align: center;
}
</style>
