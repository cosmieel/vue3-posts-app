<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="scss" scoped>
.btn {
  background: transparent;
  padding: 20px 40px;
  border: 2px solid teal;
  color: teal;
  cursor: pointer;
  transition: background 0.2s ease-out, color 0.2s ease-out,
    border-color 0.2s ease-out;

  &:hover {
    background: rgba(teal, 0.05);
  }

  &._delete {
    &:hover {
      background: rgba(red, 0.05);
    }
  }
  &._light {
    color: white;
    border-color: white;

    &:hover {
      background: white;
      color: teal;
      border-color: teal;
    }
  }
}
</style>
