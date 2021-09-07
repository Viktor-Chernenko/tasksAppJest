import { mutations } from "@/store/tasks";
import faker from "faker/dist/faker.min.js";

describe("Store.tasks.mutations", () => {
  let value;
  let state;

  beforeEach(() => {
    state = {
      tasks: [
        {
          id: faker.datatype.number(),
          select: "important",
          textInfo: faker.lorem.sentences(),
          title: faker.lorem.words(),
        },
      ],
    };

    value = {
      id: faker.datatype.number(),
      select: "important",
      textInfo: faker.lorem.sentences(),
      title: faker.lorem.words(),
    };
  });

  describe("addNewTask", () => {
    it("we check whether the passed task is added to state.tasks", () => {
      mutations.addNewTask(state, value);

      const checkState = state.tasks.some((task) => task === value);

      expect(checkState).toBeTruthy();
    });
  });

  describe("removeTask", () => {
    it("we pass the ID of the first task, check whether it is deleted from store. tasks", () => {
      const taskID = state.tasks[0].id;

      mutations.removeTask(state, taskID);
      const checkState = state.tasks.some((task) => task.id === taskID);

      expect(checkState).toBeFalsy();
    });

    it("we pass the fake ID, check whether the number of items in store.tasks does not change", () => {
      const fakeID = `fake ID: ${faker.datatype.number()}`;
      const startLengthStateTasks = state.tasks.length;

      mutations.removeTask(state, fakeID);

      const endLengthStateTasks = state.tasks.length;
      expect(startLengthStateTasks).toBe(endLengthStateTasks);
    });
  });
});
