import BusinessContext from "components/BusinessContext";
import Layout from "components/Layout";
import TasksList from "components/TasksList";

function App() {
  return (
    <Layout>
      <TasksList />
      <BusinessContext />
    </Layout>
  );
}

export default App;
