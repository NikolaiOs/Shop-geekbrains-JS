<template>
  <main>
    <h2>Корзина</h2>
    <div v-for="item in getItemsInCart" :key="item.id">
      <CartItem :id="item.id" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default {
  computed: {
    ...mapGetters(["getItemsInCart"]),
  },
  components: {
    CartItem,
  },
};
</script>

<style>
</style>
