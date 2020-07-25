<template>
  <div class="card" :class="'slide-in'">
    <!-- <g-image class="card__img" :src="product.image" /> -->
    <h1>{{ post.title }}</h1>
    <h3 class="card__description">{{ post.description }}</h3>
    <div
      class="card__footer"
      :class="{
        'tag-view': page === 'blog',
        'no-tag-view': page === 'tag',
      }"
    >
      <div class="card__tags-wrapper" v-if="page === 'blog'">
        <g-link
          class="card__tag"
          v-for="tag in post.tags"
          :key="tag.id"
          :to="tag.path"
        >
          <div class="card__tag-flex">
            <g-image class="card__tag-icon" src="/assets/tag.svg" />
            {{ tag.title }}
          </div>
        </g-link>
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
  props: ['post', 'page'],
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

  .card__description {
    max-width: 80%;
  }

  .card__footer {
    display: flex;
    align-items: center;

    .card__link {
      background-color: #0099cc;
      color: #fff;
      border: 2px solid #0099cc;
      font-weight: bold;
      padding: 0.4em;
      border-radius: 3px;
      text-decoration: none;
      transition: 0.4s;

      &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #0099cc;
        border: 2px solid #0099cc;
        transition: 0.4s;
      }
    }
    .card__tags-wrapper {
      display: flex;
    }
    .card__tag {
      background-color: #f5f8fa;
      border: 1px solid #f5f8fa;
      text-decoration: none;
      color: #000;
      padding: 0.5em;
      border-radius: 5px;
      margin-right: 5px;
      min-width: 100px;
      font-weight: bold;
      transition: 0.4s;

      &:hover {
        cursor: pointer;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        transition: 0.4s;
      }

      .card__tag-flex {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card__tag-icon {
        width: 15px;
        transform: rotate(-110deg);
        margin-right: 0.5em;
      }
    }
  }

  .tag-view {
    justify-content: space-between;
  }

  .no-tag-view {
    justify-content: flex-end;
  }
}
</style>
