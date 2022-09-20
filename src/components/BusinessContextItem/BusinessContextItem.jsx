import dayjs from "dayjs";
import "./style.css";

const BusinessContextItem = ({
  data: { author, created_at, isUnread, title, content, id },
}) => {
  const active = id === 2;
  return (
    <li
      className={`business-context-item${
        isUnread ? " business-context-item--unread" : ""
      }${active ? " business-context-item--active" : ""}`}
    >
      <div className="business-context-item__info">
        {isUnread && (
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
