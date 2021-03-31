<template>
  <div class="card" @click="addToCart(id)">
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
    ...mapActions(["addToCart"]),
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
