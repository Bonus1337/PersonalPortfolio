<script>
import AboutMe from "@/components/about/AboutMe";
import AboutCounter from "@/components/about/AboutCounter";
import AboutClients from "@/components/about/AboutClients";
import feather from "feather-icons";
import AboutSkills from "@/components/about/AboutSkills";

export default {
  name: "About",
  components: {
    AboutMe,
    AboutCounter,
    AboutClients,
    AboutSkills,
  },
  data: () => {
    return {};
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe />
    </div>

    <!-- About counter -->
    <AboutCounter />
    <!-- About skills -->
    <div class="container mx-auto">
      <AboutSkills />
    </div>
    <!-- About counter -->
    <div class="container mx-auto">
      <AboutClients />
    </div>
  </div>
</template>

<style scoped></style>
