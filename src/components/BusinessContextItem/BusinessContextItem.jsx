import { TasksContext } from "context/TasksContext";
import dayjs from "dayjs";
import { useContext } from "react";
import "./style.css";

const BusinessContextItem = ({
  data: { author, created_at, isUnread, title, content, id },
  taskId,
}) => {
  const { selectedContext, setSelectedContext, handleReadItem, loading } =
    useContext(TasksContext);

  const active = selectedContext === id;

  const handleClick = () => {
    if (isUnread) {
      handleReadItem(taskId, id);
    }
    setSelectedContext(id);
  };

  return (
    <li
      className={`business-context-item${
        isUnread && !loading ? " business-context-item--unread" : ""
      }${active ? " business-context-item--active" : ""}`}
      onClick={handleClick}
    >
      <div className="business-context-item__info">
        {isUnread && !loading && (
          <span className="business-context-item__new-label">new</span>
        )}
        <span>{author}</span>
        &#8226;
        <span>{dayjs(created_at).format("MMM D")}</span>
      </div>
      <h3
        className={`business-context-item__heading${
          isUnread ? " business-context-item__heading--new" : ""
        }`}
      >
        {title}
      </h3>
      <p className="business-context-item__message-preview">
        {content.length > 90 ? `${content.slice(0, 90)}...` : content}
      </p>
    </li>
  );
};

export default BusinessContextItem;
