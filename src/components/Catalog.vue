<template>
  <main>
    <div v-for="item in data">
      <CatalogItem :item="item" />
    </div>
  </main>
</template>

<script>
import CatalogItem from "./CatalogItem";

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
    CatalogItem,
  },
};
</script>

<style>
</style>
