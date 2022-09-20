import BusinessContextItem from "components/BusinessContextItem";
import tasks from "data/tasks";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const BusinessContextList = () => {
  const { taskId } = useParams();

  const items = useMemo(() => {
    const index = tasks.findIndex((item) => item.id === parseInt(taskId));
    if (index !== -1) {
      return tasks[index].businessContexts;
    }
    return [];
  }, [taskId]);

  return (
    <section className="business-context__list-container">
      <ul className="business-context__list">
        {items.map((item) => (
          <BusinessContextItem key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
};

export default BusinessContextList;
