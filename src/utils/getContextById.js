export const getContextById = (tasks, taskId, contextId) => {
  const taskIndex = tasks.findIndex((x) => x.id === parseInt(taskId));
  if (taskIndex !== -1) {
    const contextIndex = tasks[taskIndex].businessContexts.findIndex(
      (x) => x.id === contextId
    );
    if (contextIndex !== -1) {
      return tasks[taskIndex].businessContexts[contextIndex];
    }
  }
  return null;
};
