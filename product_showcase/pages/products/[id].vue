<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum.
      Placeat deserunt sunt eos impedit praesentium magni fuga, quibusdam alias
      veniam assumenda expedita iure magnam cupiditate suscipit exercitationem
      omnis provident!
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style>
</style>