<template>
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
</template>

<script>
export default {};
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
