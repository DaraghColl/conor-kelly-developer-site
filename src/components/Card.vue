<template>
  <div class="card" :class="'slide-in'">
    <!-- <g-image class="card__img" :src="product.image" /> -->
    <h1>{{ post.title }}</h1>
    <h3>{{ post.description }}</h3>
    <div class="card__footer">
      <div>
        <button class="card__tag" v-for="tag in post.tags" :key="tag">
          {{ tag }}
        </button>
      </div>
      <div>
        <g-link class="card__link" :to="post.path">Read More</g-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
  props: ['post'],
};
</script>

<style lang="scss">
.card {
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 1em;

  .card__img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
    transition: 0.7s;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;

    .card__link {
      background-color: #0099cc;
      color: #fff;
      border: 1px solid #0099cc;
      padding: 0.3em 0.6em;
      border-radius: 3px;
      text-decoration: none;
      transition: 0.4s;

      &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #0099cc;
        border: 1px solid #0099cc;
        transition: 0.4s;
      }
    }

    .card__tag {
      background-color: #f5f8fa;
      border: 1px solid #f5f8fa;
      padding: 0.5em;
      border-radius: 5px;
      margin-right: 5px;
      min-width: 100px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
