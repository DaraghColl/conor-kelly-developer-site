<template>
  <Layout>
    <div>
      <section id="landing-section" class="landing">
        <h1>Conor Kelly</h1>
        <h5>Full Stack Developer</h5>
        <div class="landing-links">
          <div v-if="theme === 'theme--dark'">
            <g-image class="link" src="/assets/github.svg" alt="github link" />
            <g-image
              class="link"
              src="/assets/linkedin.svg"
              alt="linkedin link"
            />
          </div>
          <div v-if="theme === 'theme--light'">
            <g-image
              class="link"
              src="/assets/github-dark.svg"
              alt="github link"
            />
            <g-image
              class="link"
              src="/assets/linkedin-dark.svg"
              alt="linkedin link"
            />
          </div>
        </div>
      </section>

      <!-- skills -->
      <Skills />

      <!-- projects -->
      <section id="project-section" class="project">
        <h1 class="section-heading">Projects</h1>
        <div class="grid">
          <Project
            v-for="project in $page.allProject.edges"
            :key="project.id"
            :project="project.node"
          />
        </div>
      </section>

      <!-- contact -->
      <Contact />
    </div>
  </Layout>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Contact from '~/components/Contact.vue';
import Skills from '~/components/Skills.vue';
import Project from '~/components/Project';

import { mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
    Contact,
    Skills,
    Project,
  },
  metaInfo: {
    title: 'Home',
  },
  computed: mapGetters(['theme']),
};
</script>

<page-query>
query project {
  allProject {
    edges {
      node {
        title,
        description,
        thumbnail,
        github,
        demo
      }
    }
  }
}
</page-query>

<style lang="scss">
@import '~/styles/variables.scss';

/** landing **/
.landing {
  display: grid;
  place-items: center;
  font-size: 3em;
  padding-bottom: 1em;
  @media (max-width: $screen-xl) {
    font-size: 2em;
  }
  @media (max-width: $screen-sm) {
    font-size: 1.8em;
  }
  h1 {
    margin-bottom: 0;
  }
  h5 {
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  .landing-links {
    display: flex;
    .link {
      width: 10vw;
      max-width: 40px;
      margin: 0 10px;
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  @media (max-width: $screen-sm) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.section-heading {
  text-align: center;
}
</style>
