<script>
import Button from "../reusable/Button.vue";
import FormInput from "../reusable/FormInput.vue";
import FormTextarea from "../reusable/FormTextarea.vue";
export default {
  components: {
    Button,
    FormInput,
    FormTextarea,
  },
  data() {
    return {
      name: "",
      emailFrom: "",
      subjectTopic: "",
      messageUser: "",
    };
  },
  computed: {
    fullName() {
      return this.$root.t.fullName;
    },
    email() {
      return this.$root.t.email;
    },
    message() {
      return this.$root.t.message;
    },
    sendMessage() {
      return this.$root.t.send;
    },
  },
};
</script>
<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        {{ $root.t.contactForm }}
      </p>
      <form
        class="font-general-regular space-y-7"
        action="https://formspree.io/f/xqkogejl"
        method="post"
      >
        <FormInput v-model="name" :label="fullName" inputIdentifier="name" />
        <FormInput
          v-model="emailFrom"
          :label="email"
          inputIdentifier="email"
          inputType="email"
        />
        <FormTextarea
          v-model="messageUser"
          :label="message"
          textareaIdentifier="message"
        />

        <div>
          <Button
            :title="sendMessage"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
