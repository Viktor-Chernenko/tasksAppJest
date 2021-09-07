import { actions } from "@/store/tasks";
import faker from "faker/dist/faker.min.js";

describe("Store.tasks.actions", () => {
  let commit;
  let value;

  beforeEach(() => {
    value = {
      id: faker.datatype.number(),
      select: "important",
      textInfo: faker.lorem.sentences(),
      title: faker.lorem.words(),
    };

    commit = jest.fn();
  });

  describe("addNewTask", () => {
    it("When passed ('addNewTask', value), commit must be called  with args ('addNewTask', value)", () => {
      actions.addNewTask({ commit }, value);

      expect(commit).toHaveBeenCalledWith("addNewTask", value);
    });

    it("When passed ('addNewTask', not an object), addNewTask return: false", () => {
      expect(actions.addNewTask({ commit }, "test")).toBe(false);
      expect(actions.addNewTask({ commit }, [1, 2, 3])).toBe(false);
    });
  });

  describe("removeTask", () => {
    it("When passed ('addNewTask', value.id), commit must be called  with args ('removeTask', value.id)", () => {
      actions.removeTask({ commit }, value.id);

      expect(commit).toHaveBeenCalledWith("removeTask", value.id);
    });
  });
});
