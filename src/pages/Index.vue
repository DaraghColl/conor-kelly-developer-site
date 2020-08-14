<template>
  <Layout>
    <div>
      <section id="landing-section" class="landing">
        <h1>Conor Kelly</h1>
        <h5>Full Stack Developer</h5>
        <div class="landing-links">
          <div v-if="theme === 'theme--dark'">
            <g-image class="link" src="/assets/github.svg" />
            <g-image class="link" src="/assets/linkedin.svg" />
          </div>
          <div v-if="theme === 'theme--light'">
            <g-image class="link" src="/assets/github-dark.svg" />
            <g-image class="link" src="/assets/linkedin-dark.svg" />
          </div>
        </div>
      </section>

      <!-- skills -->
      <section id="skills-section" class="skills">
        <h1 class="section-heading">Skills</h1>
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

      <!-- projects -->
      <section id="project-section" class="project">
        <h1 class="section-heading">Projects</h1>
        <div class="grid">
          <div
            class="project__card"
            v-for="project in $page.allProject.edges"
            :key="project.id"
          >
            <g-image class="project__img" :src="project.node.thumbnail" />

            <div class="project__body">
              <h1>{{ project.node.title }}</h1>
              <h3 class="project__description">
                {{ project.node.description }}
              </h3>
              <div class="project__links">
                <g-link :to="project.node.github">Github</g-link>
                <g-link :to="project.node.demo">Demo</g-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- contact -->
      <section id="contact-section" class="contact">
        <h1 class="section-heading">Contact</h1>
        <div class="contact-wrapper">
          <form
            class="contact__form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              class="form__item"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              class="form__item"
              type="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              class="form__item"
              name="message"
              placeholder="Message"
            ></textarea>
            <div class="submit-form">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
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
  padding-bottom: 2em;
  @media (max-width: $screen-xl) {
    font-size: 2em;
  }
  @media (max-width: $screen-sm) {
    font-size: 1.5em;
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
      max-width: 150px;
      margin-bottom: 2em;
      @media (max-width: $screen-xl) {
        max-width: 100px;
      }
      @media (max-width: $screen-sm) {
        max-width: 50px;
      }
    }
  }
}

/** projects **/
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
      background: #aa66cc;
      color: #fff;
      padding: 2px 20px;
      border-radius: 2px;
      margin-right: 5px;
    }
  }
}

/** contact **/
.contact-wrapper {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1em;
  .contact__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
      text-align: center;
    }

    .form__item {
      margin-bottom: 1em;
      background-color: #f5f6f8;
      border: 1px solid #f5f6f8;
      padding: 10px;
      border-radius: 5px;
      &:focus {
        border: 2px solid #0099cc;
        outline: none;
      }
    }

    .submit-form {
      display: flex;
      justify-content: flex-end;
      button {
        background: #fff;
        color: #0099cc;
        border: 1px solid #0099cc;
        padding: 0.7em 1em;
        width: 100px;
        border-radius: 3px;

        &:hover {
          cursor: pointer;
          background: #0099cc;
          color: #fff;
        }
      }
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
