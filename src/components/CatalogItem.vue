<template>
  <div class="card" @click="itemToCart(getItemData.id)">
    <img :src="getItemData.img" alt="image" />
    {{ getItemData.name }}
    {{ getItemData.price }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    id: Number,
  },
  methods: {
    ...mapActions(["addToCart", "requestBasket"]),
    itemToCart(itemId) {
      console.log(itemId);
      const itemToAdd = { id: itemId };
      this.addToCart(itemToAdd);
      this.requestBasket();
    },
  },
  computed: {
    ...mapGetters(["getData"]),
    getItemData() {
      return this.getData[this.id];
    },
  },
};
</script>

<style>
</style>
