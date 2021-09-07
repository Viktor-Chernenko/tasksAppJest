<template v-if="task.length">
  <md-card>
    <md-card-header class="task">
      <div class="md-title task__title">{{ task.title }}</div>
    </md-card-header>

    <md-card-content>
      <span class="priority task__priority">{{ priority }}</span>
      <span class="task__text-info">{{ task.textInfo }}</span>
    </md-card-content>

    <md-card-actions>
      <md-button class="accent task__btn-delete" @click="removeTask(task.id)"
        >Удалить</md-button
      >
    </md-card-actions>
  </md-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Task",

  props: {
    task: {
      type: Object,
    },
  },

  methods: {
    ...mapActions(["removeTask"]),
  },

  computed: {
    priority() {
      return this.task.select == "important"
        ? "Срочная задача"
        : "Обычный приоритет";
    },
  },
};
</script>

<style lang="scss" scoped>
.priority {
  display: block;
  margin-bottom: 10px;
}
</style>
