import TaskItem from "components/TaskItem/TaskItem";
import tasks from "data/tasks";
import "./style.css";

const TasksList = () => {
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
