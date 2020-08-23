<template>
  <section id="skills-section" class="skills">
    <h1 class="section-heading">Skills</h1>

    <div class="skills__grid">
      <g-image
        v-for="skill in skills"
        :key="skill.alt"
        class="dev-icon"
        :src="skill.icon"
        :alt="skill.alt"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icon: '/assets/nodejs.svg',
          alt: 'nodejs',
        },
        {
          icon: '/assets/angular.svg',
          alt: 'angular',
        },
        {
          icon: '/assets/python.svg',
          alt: 'python',
        },
        {
          icon: '/assets/java.svg',
          alt: 'java',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

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
</style>
