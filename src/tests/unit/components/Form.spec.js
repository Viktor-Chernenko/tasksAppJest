import "@/plugins/vue-material";
import { createLocalVue, mount } from "@vue/test-utils";
import FormApp from "@/components/FormApp.vue";

describe("FormApp.vue", () => {
  let localVue;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();

    wrapper = mount(FormApp, {
      localVue,
    });
  });

  describe("the data passed to the Input of the task is passed to the date property:", () => {
    it("title", async () => {
      const testText = "test task/title";
      const item = wrapper.find(".title");

      await item.setValue(testText);

      expect(item).toBeTruthy();
      expect(wrapper.vm._data.title).toBe(testText);
    });

    it("textInfo", async () => {
      const testText = "test task/text";
      const item = wrapper.find(".text-info");

      await item.setValue(testText);

      expect(item).toBeTruthy();
      expect(wrapper.vm._data.textInfo).toBe(testText);
    });
  });

  describe("computed: creatingTask", () => {
    it("is the resulting ID type Number", () => {
      expect(typeof wrapper.vm.creatingTask.id).toBe("number");
    });

    let result;

    beforeEach(async () => {
      // filling out the form
      await wrapper.find(".title").setValue("test task/title");
      await wrapper.find(".text-info").setValue("test task/text");

      result = wrapper.vm.creatingTask;
    });

    it("Should return an object", () => {
      expect(result).toBeTruthy();
      expect(typeof result).toBe("object");
      expect(result).not.toBe(null);
      expect(Array.isArray(result)).toBeFalsy();
    });

    it("Should return an object with properties: (id, title, textInfo, select)", () => {
      expect(Object.keys(result)).toContain(
        "id",
        "title",
        "textInfo",
        "select"
      );
    });

    it("Should return an object which has no empty values", () => {
      const isResultNotEmpty = Object.values(result).every((item) =>
        Boolean(String(item).length)
      );

      expect(isResultNotEmpty).toBeTruthy();
    });
  });
});
