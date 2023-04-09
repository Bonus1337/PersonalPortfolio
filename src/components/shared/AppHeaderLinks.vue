<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <router-link
      to="/projects"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      aria-label="Projects"
      >{{ $root.t.projects }}</router-link
    >
    <router-link
      to="/about"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="About Me"
      >{{ $root.t.about }}</router-link
    >
    <router-link
      to="/contact"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >{{ $root.t.contact }}</router-link
    >
    <!-- Language buttons -->
    <div
      class="sm:hidden flex border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
      <button
        class="language-button mr-2 text-secondary-dark dark:text-ternary-light"
        :class="{ active: $root.language === 'pl' }"
        @click="$root.changeLanguage('pl')"
      >
        PL
      </button>
      <button
        class="language-button text-secondary-dark dark:text-ternary-light"
        :class="{ active: $root.language === 'en' }"
        @click="$root.changeLanguage('en')"
      >
        EN
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal", "isOpen"],
};
</script>

<style scoped>
.language-button {
  padding: 8px 12px;
  border-radius: 9999px;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
}
.language-button:hover {
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
.language-button.active {
  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
  color: white;
}
.dark .language-button.active {
  color: white;
}
</style>
