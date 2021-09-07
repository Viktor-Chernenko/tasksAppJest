import localStorageApp from "@/localStorage";
const { localTasks } = localStorageApp;

const state = {
  tasks: localTasks.getTasks() || [],
};

export default state;
