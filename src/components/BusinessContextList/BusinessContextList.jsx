import BusinessContextItem from "components/BusinessContextItem";
import tasks from "data/tasks";
import "./style.css";

const BusinessContextList = () => (
  <section className="business-context__list-container">
    <ul className="business-context__list">
      {tasks[0].businessContexts.map((item) => (
        <BusinessContextItem key={item.id} data={item} />
      ))}
    </ul>
  </section>
);

export default BusinessContextList;
