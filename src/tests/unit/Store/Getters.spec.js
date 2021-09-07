import { getters } from "@/store/tasks";
import faker from "faker/dist/faker.min.js";

describe("Store.Tasks.getters", () => {
  let state;
  let tasks;

  beforeEach(() => {
    state = {
      tasks: [
        {
          id: faker.datatype.number(),
          select: "normal",
          textInfo: faker.lorem.sentences(),
          title: faker.lorem.words(),
        },
      ],
    };

    tasks = getters.getTasks(state);
  });

  describe("getTasks()", () => {
    it("Should to be not empty value", () => {
      expect(tasks).not.toHaveLength(0);
    });

    it("Should to be Array", () => {
      expect(Array.isArray(tasks)).toBeTruthy();
    });

    it("Should to be array 'state.tasks'", () => {
      expect(tasks).toEqual(state.tasks);
    });
  });
});
