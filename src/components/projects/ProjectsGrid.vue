<script>
import feather from "feather-icons";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

export default {
  components: { ProjectSingle },
  data: () => {
    return {
      projects,
    };
  },
  props: {
    maxProjects: {
      type: Number,
      default: Infinity,
    },
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
    limitedProjects() {
      return this.filteredProjects.slice(0, this.maxProjects);
    },
  },

  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ $root.t.projectsPortfolio }}
      </p>
    </div>
    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in limitedProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>
