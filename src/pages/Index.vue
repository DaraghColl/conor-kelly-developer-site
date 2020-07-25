<template>
  <Layout>
    <section id="landing-section" class="landing">
      <h1>Conor Kelly</h1>
      <h3>Full Stack Developer</h3>
      <g-image class="landing__link" src="/assets/github.svg" />
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
};
</script>

<style lang="scss">
.landing {
  display: grid;
  place-items: center;
  font-size: 3.5vw;
  h3 {
    margin-top: 0;
  }

  .landing__link {
    max-width: 50px;
  }
}
</style>
