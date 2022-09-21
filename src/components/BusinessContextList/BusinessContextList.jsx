import BusinessContextItem from "components/BusinessContextItem";
import { TasksContext } from "context/TasksContext";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const BusinessContextList = () => {
  const { tasks } = useContext(TasksContext);

  const { taskId } = useParams();

  const items = useMemo(() => {
    const index = tasks.findIndex((item) => item.id === parseInt(taskId));
    if (index !== -1) {
      return tasks[index].businessContexts;
    }
    return [];
  }, [taskId, tasks]);

  return (
    <section className="business-context__list-container">
      <ul className="business-context__list">
        {items.map((item) => (
          <BusinessContextItem
            key={item.id}
            data={item}
            taskId={parseInt(taskId)}
          />
        ))}
      </ul>
    </section>
  );
};

export default BusinessContextList;
