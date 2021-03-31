<template>
  <main>
    <h1>Товары</h1>
    <div v-for="id in getItemsOnPage" :key="id">
      <CatalogItem :id="id" />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CatalogItem from "./CatalogItem.vue";

export default {
  methods: {
    ...mapActions(["requestData"]),
  },
  computed: {
    ...mapGetters(["getItemsOnPage"]),
  },
  created() {
    this.requestData();
  },
  components: {
    CatalogItem,
  },
};
</script>

<style>
</style>
