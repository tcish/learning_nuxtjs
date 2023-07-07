<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <Card :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");

// ? this is one way can add multiple page head title or meta and many more
// useHead({
//   title: "Product Showcase | Products",
// });
</script>

<style>
</style>