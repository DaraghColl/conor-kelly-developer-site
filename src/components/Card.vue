<template>
  <div class="card" :class="'slide-in'">
    <g-link :to="post.path">
      <g-image class="card__img" :src="post.thumbnail" alt="post image" />
      <div class="card__body">
        <div>
          <h1 class="card__title">{{ post.title }}</h1>
          <h3 class="card__description">{{ post.description }}</h3>
        </div>
        <div class="card__tags-wrapper" v-if="page === 'blog'">
          <g-link
            class="card__tag"
            v-for="tag in post.tags"
            :key="tag.id"
            :to="tag.path"
          >
            <div class="card__tag-flex">
              <g-image
                class="card__tag-icon"
                src="/assets/tag.svg"
                alt="tag icon"
              />
              {{ tag.title }}
            </div>
          </g-link>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['post', 'page'],
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.card {
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: $border-medium;
  margin-bottom: 1em;

  .card__img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .card__body {
    padding: 1.3em;

    .card__title {
      margin-top: 0;
      margin-bottom: 0;
    }

    .card__description {
      max-width: 80%;
      height: 60px;
      margin-top: 0.2em;
    }

    .card__tags-wrapper {
      display: flex;
    }
    .card__tag {
      background-color: $off-white;
      border: 1px solid $off-white;
      text-decoration: none;
      color: $black;
      padding: 0.5em;
      border-radius: $border-medium;
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

  @media (max-width: $screen-xs) {
    flex-direction: column-reverse;
    .card__tags-wrapper {
      margin-top: 20px;
    }
  }

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
}
</style>
