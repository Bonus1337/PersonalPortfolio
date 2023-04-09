<script>
export default {
  props: ["client"],
};
</script>

<template>
  <div>
    <a :href="client.url" target="_blank">
      <img
        :src="client.img"
        :alt="client.title"
        class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
      />
    </a>
  </div>
</template>

<style scoped>
img {
  transition: all 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.1);
}
</style>
