import BusinessContext from "components/BusinessContext";
import Layout from "components/Layout";
import TasksList from "components/TasksList";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "context/TasksContext";

function App() {
  const { tasks, setSelectedContext, loading } = useContext(TasksContext);

  const navigate = useNavigate();
  const { taskId } = useParams();

  useEffect(() => {
    const index = tasks.findIndex((x) => x.id === parseInt(taskId));
    if (index === -1 || tasks[index].status === "BLOCKED") {
      navigate(`/tasks/${tasks[0].id}`, { replace: true });
    } else if (!loading) {
      const { businessContexts } = tasks[index];
      const firstAlreadyReadContext = businessContexts.find((x) => !x.isUnread);
      setSelectedContext(firstAlreadyReadContext?.id || null);
    }
  }, [taskId, loading]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <TasksList />
      <BusinessContext />
    </Layout>
  );
}

export default App;
