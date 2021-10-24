<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__body"><slot></slot></div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
};
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(black, 0.5);
  display: flex;

  &__body {
    margin: auto;
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 600px;
    min-height: 50px;
    padding: 30px;
  }
}
</style>
