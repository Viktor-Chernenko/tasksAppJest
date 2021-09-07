import localStorageApp from "@/localStorage";
const { localTasks } = localStorageApp;

const mutations = {
  addNewTask(state, value) {
    state.tasks.push(value);
    localTasks.setTasks(state.tasks);
  },

  removeTask(state, id) {
    let TaskIndex;
    state.tasks.forEach((task, index) => {
      if (task.id === id) {
        TaskIndex = index;
        state.tasks.splice(TaskIndex, 1);
        localTasks.setTasks(state.tasks);
      }
    });
  },
};

export default mutations;
