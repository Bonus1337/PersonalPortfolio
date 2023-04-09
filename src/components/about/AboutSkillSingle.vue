<script>
export default {
  props: ["skill"],
};
</script>

<template>
  <div>
    <img
      :src="skill.img"
      :alt="skill.title"
      class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
    />
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
