import { createContext, useEffect, useState } from "react";
import tasksData from "data/tasks";

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);
  const [selectedContext, setSelectedContext] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedReadItems = localStorage.getItem("readItems");
    if (storedReadItems) {
      const readItems = JSON.parse(storedReadItems);
      const tasksTemp = [...tasks];
      readItems.forEach((item) => {
        const taskIndex = tasksTemp.findIndex((x) => x.id === item.taskId);
        if (taskIndex !== -1) {
          item.contexts.forEach((context) => {
            const contextIndex = tasksTemp[
              taskIndex
            ].businessContexts.findIndex((x) => x.id === context);
            if (contextIndex !== -1) {
              tasksTemp[taskIndex].businessContexts[
                contextIndex
              ].isUnread = false;
            }
          });
        }
      });
      setTasks(tasksTemp);
      setLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleReadItem = (taskId, contextId) => {
    setTasks((prevState) => {
      const temp = [...prevState];
      const taskIndex = temp.findIndex((x) => x.id === taskId);
      if (taskIndex !== -1) {
        const contextIndex = temp[taskIndex].businessContexts.findIndex(
          (x) => x.id === contextId
        );
        if (contextIndex !== -1) {
          temp[taskIndex].businessContexts[contextIndex].isUnread = false;
        }
      }
      return temp;
    });
    const storedReadItems = localStorage.getItem("readItems");
    if (storedReadItems) {
      const readItems = JSON.parse(storedReadItems);
      const index = readItems.findIndex((x) => x.taskId === taskId);
      if (index !== -1) {
        readItems[index].contexts.push(contextId);
      } else {
        readItems.push({ taskId, contexts: [contextId] });
      }
      localStorage.setItem("readItems", JSON.stringify(readItems));
    } else {
      localStorage.setItem(
        "readItems",
        JSON.stringify([{ taskId, contexts: [contextId] }])
      );
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleReadItem,
        selectedContext,
        setSelectedContext,
        loading,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
