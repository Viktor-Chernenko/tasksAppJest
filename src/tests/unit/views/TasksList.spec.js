import "@/plugins/vue-material";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import faker from "faker/dist/faker.min.js";
import TaskItem from "@/components/TaskItem.vue";
import NoData from "@/components/NoData.vue";
import TasksList from "@/views/TasksList.vue";

describe("TasksList.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getTasks: () => {
        return [
          {
            id: faker.datatype.number(),
            select: "important",
            textInfo: faker.lorem.sentences(),
            title: faker.lorem.words(),
          },

          {
            id: faker.datatype.number(),
            select: "important",
            textInfo: faker.lorem.sentences(),
            title: faker.lorem.words(),
          },
        ];
      },
    };

    store = new Vuex.Store({
      getters,
    });

    wrapper = mount(TasksList, { store, localVue });
  });

  it("displayed TaskItem to equal getTasks().length, hide NoData", () => {
    const lengthItemsGetTasks = getters.getTasks().length;
    const lengthTaskItem = wrapper.findAllComponents(TaskItem).length;

    expect(lengthTaskItem).toBe(lengthItemsGetTasks);
  });

  it("if from getTasks() empty should show NoData, TaskItem hide", () => {
    getters.getTasks = () => [];

    expect(wrapper.findAllComponents(NoData).isVisible()).toBeTruthy();
  });
});
