<template>
  <nav class="navbar">
    <div class="navbar__title" @click="$router.push('/')">Posts</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')" class="navbar__btn _light">
        Посты
      </my-button>
      <my-button @click="$router.push('/store')" class="navbar__btn _light">
        Посты (vuex store)
      </my-button>
      <my-button class="navbar__btn _light" @click="$router.push('/about')">
        Описание приложения
      </my-button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 10px 40px;
  color: #fff;
  background: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: 24px;
    line-height: 1;
    font-family: sans-serif;
    cursor: pointer;
  }

  &__btn {
    margin: 0 10px;
  }
}
</style>
