<template>
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
        <input class="form__item" type="text" name="name" placeholder="Name" />
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
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.contact-wrapper {
  padding-bottom: 5vh;
  .contact__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
      text-align: center;
    }

    .form__item {
      margin-bottom: 1em;
      background: inherit;
      color: inherit;
      border: none;
      border-bottom: 1px solid #ccc;
      padding: 10px;
      &:focus {
        border-bottom: 1px solid $primary;
        transition: 0.8s;
        outline: none;
      }
    }

    .submit-form {
      display: flex;
      justify-content: flex-end;
      button {
        background: #fff;
        color: $primary;
        border: 1px solid $primary;
        padding: 0.7em 1em;
        width: 100px;
        border-radius: 3px;

        &:hover {
          cursor: pointer;
          background: $primary;
          color: #fff;
        }
      }
    }
  }
}
</style>
