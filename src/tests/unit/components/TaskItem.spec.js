import "@/plugins/vue-material";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import TaskItem from "@/components/TaskItem.vue";

const localVue = createLocalVue();

let wrapper;

describe("TaskItem.vue", () => {
  beforeEach(() => {
    wrapper = mount(TaskItem, {
      localVue,
      propsData: {
        task: {
          id: 0.192123123,
          title: "Title task",
          textInfo: "Text task",
          select: "important",
        },
      },
    });
  });

  describe("Correct display of the text transmitted via props", () => {
    it("should title be displayed as 'Title task'", () => {
      expect(wrapper.find(".task__title").text()).toBe("Title task");
    });

    it("should priority be displayed as 'Срочная задача'", () => {
      expect(wrapper.find(".task__priority").text()).toBe("Срочная задача");
    });

    it("should textInfo be displayed as 'Text task'", () => {
      expect(wrapper.find(".task__text-info").text()).toBe("Text task");
    });
  });

  describe("Checking computed: priority()", () => {
    it("By props.task.select = 'important', should return 'Срочная задача'", async () => {
      await wrapper.setProps({ task: { select: "important" } });

      expect(wrapper.vm.priority).toEqual("Срочная задача");
    });

    it("By props.task.select = 'normal', should return 'Обычный приоритет'", async () => {
      await wrapper.setProps({ task: { select: "normal" } });

      expect(wrapper.vm.priority).toEqual("Обычный приоритет");
    });
  });

  describe("removeTask()", () => {
    localVue.use(Vuex);

    let wrapper;
    let actions;
    let store;

    beforeEach(() => {
      actions = {
        removeTask: jest.fn((id) => id),
      };

      store = new Vuex.Store({
        actions,
      });

      wrapper = mount(TaskItem, {
        store,
        localVue,
        propsData: {
          task: {
            id: 0.192123123,
            title: "Title task",
            textInfo: "Text task",
            select: "important",
          },
        },
      });
    });

    it("when you click on the button transmitted ID is equal to the ID of props.task.id", () => {
      const propsTaskID = wrapper.props().task.id;
      const deleteBtn = wrapper.find(".task__btn-delete");

      deleteBtn.trigger("click");

      expect(actions.removeTask).toBeCalled();
      expect(actions.removeTask.mock.calls[0][1]).toBe(propsTaskID);
    });

    it("when calling the function transmitted ID is equal to the ID of props.task.id", () => {
      const propsTaskID = wrapper.props().task.id;

      wrapper.vm.removeTask(propsTaskID);

      expect(actions.removeTask).toBeCalled();
      expect(actions.removeTask.mock.calls[0][1]).toBe(propsTaskID);
    });
  });
});
