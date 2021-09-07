const localStorageApp = {
  localTasks: {
    getTasks() {
      return JSON.parse(localStorage.getItem("tasks"));
    },

    setTasks(tasks) {
      if (!(tasks instanceof Array)) return;

      localStorage.setItem("tasks", JSON.stringify(tasks));
    },

    removeTasks() {
      localStorage.removeItem("tasks");
    },
  },
};

export default localStorageApp;
