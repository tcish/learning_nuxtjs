<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
      dignissimos commodi quam reprehenderit doloremque ex eveniet consectetur
      aspernatur dolorum quis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
      dignissimos commodi quam reprehenderit doloremque ex eveniet consectetur
      aspernatur dolorum quis!
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/text?name=shuvo", {
  method: "post",
  body: {
    age: 30,
  },
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>