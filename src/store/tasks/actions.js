const actions = {
  addNewTask({ commit }, value) {
    if (value === null || Array.isArray(value) || typeof value != "object")
      return false;

    commit("addNewTask", value);
  },

  removeTask(context, id) {
    context.commit("removeTask", id);
  },
};

export default actions;
