import LocalStorageApp from "@/LocalStorage";

const { localTasks } = LocalStorageApp;

describe("LocalStorageApp.js", () => {
  describe("LocalStorageApp.localTasks", () => {
    let tasks;

    beforeEach(() => {
      localTasks.removeTasks();

      tasks = [
        {
          id: 1,
          title: "Title task 1",
          textInfo: "Text task 1",
          select: "important 1",
        },
        {
          id: 2,
          title: "Title task 2",
          textInfo: "Text task 2",
          select: "important 2",
        },
      ];
    });

    describe("setTasks()", () => {
      it("when sending valid data should send an array", () => {
        localTasks.setTasks(tasks);

        expect(localTasks.getTasks()).toEqual(tasks);
        expect(localTasks.getTasks() instanceof Array).toBeTruthy();
      });

      it("If you don't pass anything. Should return null", () => {
        localTasks.setTasks();

        expect(localTasks.getTasks()).toEqual(null);
      });

      it("Sending a not array. Should return null", () => {
        localTasks.setTasks("stat");

        expect(localTasks.getTasks()).not.toEqual("stat");
        expect(localTasks.getTasks()).toEqual(null);
      });
    });

    describe("getTasks()", () => {
      it("if there is a tasks property in localStorage, it will return an Array with the data", () => {
        localTasks.setTasks(tasks);

        expect(localTasks.getTasks()).toEqual(tasks);
        expect(localTasks.getTasks() instanceof Array).toBeTruthy();
      });
    });

    describe("removeTasks()", () => {
      it("after deletion removeTasks() should return null", () => {
        localTasks.setTasks(tasks);
        localTasks.removeTasks();

        expect(localTasks.getTasks()).toEqual(null);
      });
    });
  });
});
