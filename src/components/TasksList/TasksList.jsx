import TaskItem from "components/TaskItem/TaskItem";
import { TasksContext } from "context/TasksContext";
import { useContext } from "react";
import "./style.css";

const TasksList = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <aside className="tasks">
      <h1 className="tasks__heading">Your tasks</h1>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <TaskItem key={task.id} data={task} />
        ))}
      </ul>
    </aside>
  );
};

export default TasksList;
