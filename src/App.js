import BusinessContext from "components/BusinessContext";
import Layout from "components/Layout";
import TasksList from "components/TasksList";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tasks from "data/tasks";

function App() {
  const navigate = useNavigate();
  const { taskId } = useParams();

  useEffect(() => {
    const index = tasks.findIndex((item) => item.id === parseInt(taskId));
    if (index === -1 || tasks[index].status === "BLOCKED") {
      navigate(`/tasks/${tasks[0].id}`, { replace: true });
    }
  }, [taskId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <TasksList />
      <BusinessContext />
    </Layout>
  );
}

export default App;
