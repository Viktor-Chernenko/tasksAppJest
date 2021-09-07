<template>
  <div class="md-layout md-gutter tasks-list">
    <template v-if="getTasks.length">
      <div
        class="md-layout-item tasks-list__item"
        v-for="(task, index) in getTasks"
        :key="index"
      >
        <task-Item :task="task" />
      </div>
    </template>
    <no-data />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskItem from "@/components/TaskItem.vue";
import NoData from "@/components/NoData.vue";

export default {
  components: {
    TaskItem,
    NoData,
  },

  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>

<style lang="scss" scoped>
.tasks-list {
  justify-content: space-between;

  &__item {
    max-width: 48%;
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .tasks-list {
    justify-content: center;
    flex-direction: column;

    &__item {
      max-width: 90%;
      margin: 0 auto 40px;
    }
  }
}
</style>
