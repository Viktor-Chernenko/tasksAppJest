<template>
  <div class="md-layout md-gutter form-box">
    <div class="md-layout-item md-size-2">
      <form
        class="md-layout form-box__item"
        @submit.prevent="addNewTask(creatingTask)"
      >
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">Новая задача</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="title">Заголовок</label>
                  <md-input name="title" class="title" v-model="title" />
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field class="select">
                  <label for="select">Приоритет</label>
                  <md-select v-model="select" name="select" md-dense>
                    <md-option></md-option>
                    <md-option value="normal">Обычная</md-option>
                    <md-option value="important">Важная</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>

            <md-field>
              <label>Описание задачи</label>
              <md-textarea
                name="textInfo"
                class="text-info"
                v-model="textInfo"
              ></md-textarea>
            </md-field>
          </md-card-content>

          <md-card-actions>
            <md-button type="submit" class="md-raised md-primary btn"
              >Создать задачу</md-button
            >
          </md-card-actions>
        </md-card>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormApp",

  data: () => ({ title: "", textInfo: "", select: "normal" }),

  methods: {
    ...mapActions(["addNewTask"]),
  },

  computed: {
    creatingTask() {
      return {
        id: Math.random(),
        title: this.title,
        textInfo: this.textInfo,
        select: this.select,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form-box {
  width: 100%;

  &__item {
    justify-content: center;
  }

  .text-info {
    resize: none !important;
  }
}
</style>
