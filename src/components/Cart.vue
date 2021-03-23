<template>
  <main>
    <h2>Корзина</h2>
    <div v-for="item in data">
      <CartItem :item="item" />
    </div>
  </main>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  data() {
    return {
      data: [
        {
          name: "Trousers",
          price: 39000,
          img: "./images/Trousers.jpg",
        },
        {
          name: "Boots",
          price: 14000,
          img: "./images/Boots.jpg",
        },
        {
          name: "Jacket",
          price: 59000,
          img: "./images/Jacket.jpg",
        },
      ],
    };
  },
  components: {
    CartItem,
  },
};
</script>

<style>
</style>
