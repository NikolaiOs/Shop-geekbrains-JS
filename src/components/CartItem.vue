<template>
  <div class="cart">
    <img :src="item.img" alt="image" />
    {{ item.name }}
    {{ item.price }}
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
</style>
