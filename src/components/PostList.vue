<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red;">Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active,
.post-list-move {
  transition: all 0.3s ease-out;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
