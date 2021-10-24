<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
      v-focus
      v-model="post.title"
      class="form__input"
      placeholder="Название"
    />
    <my-input v-model="post.body" class="form__input" placeholder="Описание" />
    <my-button class="form__btn" @click="createPost" type="button">
      Создать
    </my-button>
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;

  &__input {
    width: 100%;
    margin-top: 15px;
  }

  &__btn {
    max-width: 320px;
    align-self: flex-end;
    margin-top: 15px;
  }
}
</style>
