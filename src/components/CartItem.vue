<template>
  <div class="cart">
    <img :src="getCartItem.img" alt="image" />
    {{ getCartItem.name }}
    {{ getCartItem.price }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters(["getData"]),
    getCartItem() {
      return this.getData[this.id];
    },
  },
};
</script>

<style>
</style>
