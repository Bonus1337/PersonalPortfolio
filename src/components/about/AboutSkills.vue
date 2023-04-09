<script>
import AboutSkillSingle from "./AboutSkillSingle.vue";

export default {
  components: {
    AboutSkillSingle,
  },
  data: () => {
    return {
      skills: [
        {
          id: 1,
          title: "HTML",
          img: require("@/assets/images/skills/HTML.png"),
        },
        {
          id: 2,
          title: "CSS",
          img: require("@/assets/images/skills/CSS.png"),
        },
        {
          id: 3,
          title: "Bootstrap",
          img: require("@/assets/images/skills/Bootstrap.png"),
        },
        {
          id: 4,
          title: "Tailwind",
          img: require("@/assets/images/skills/Tailwind.png"),
        },
        {
          id: 5,
          title: "Vue.js",
          img: require("@/assets/images/skills/JS.png"),
        },
        {
          id: 6,
          title: "Angular.js",
          img: require("@/assets/images/skills/Vue.png"),
        },
        {
          id: 7,
          title: "TypeScript",
          img: require("@/assets/images/skills/TS.png"),
        },
        {
          id: 8,
          title: "JavaScript",
          img: require("@/assets/images/skills/Angular.png"),
        },
        {
          id: 9,
          title: "React.js",
          img: require("@/assets/images/skills/React.png"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ $root.t.skills }}
    </p>
    <div
      class="flex flex-wrap justify-center sm:grid-cols-4 mt-10 sm:mt-14 gap-2"
    >
      <AboutSkillSingle
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </div>
</template>
