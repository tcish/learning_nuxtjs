<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri);

// ? to refetch if it not fetch each time
// const { data: product } = await useFetch(uri, { key: id });

definePageMeta({
  layout: "products",
});
</script>

<style>
</style>