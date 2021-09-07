<template>
  <div class="container">
    <form-app />
  </div>
</template>

<script>
import FormApp from "@/components/FormApp.vue";

export default {
  components: {
    FormApp,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15px;
}
</style>
