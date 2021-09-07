import { state } from "@/store/tasks";

describe("state", () => {
  describe("state.tasks", () => {
    it("check is defined state.tasks", () => {
      expect(state.tasks).toBeDefined();
    });
  });
});
