<template>
  <div class="post">
    <div class="post__body">
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">
        Открыть
      </my-button>
      <my-button class="_delete" @click="$emit('remove', post)">
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  background: #fff;

  &__btns {
    display: flex;
    margin-left: 30px;
  }
}
</style>
