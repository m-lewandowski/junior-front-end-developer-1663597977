import { ArrowIcon, CheckIcon, LockIcon } from "assets/icons";
import { NavLink } from "react-router-dom";
import "./style.css";

const statuses = {
  BLOCKED: {
    classSuffix: "blocked",
    icon: <LockIcon />,
  },
  COMPLETED: {
    classSuffix: "completed",
    icon: <CheckIcon />,
  },
  NEW: {
    classSuffix: "new",
    icon: <ArrowIcon />,
  },
};

const TaskItem = ({ data: { id, title, status } }) => {
  const { classSuffix, icon } = statuses[status];

  return (
    <li>
      <NavLink
        to={status !== "BLOCKED" ? `/tasks/${id}` : "#"}
        className={`task-item task-item--${classSuffix}`}
      >
        <div
          className={`task-item__icon-wrapper task-item__icon-wrapper--${classSuffix}`}
        >
          {icon}
        </div>
        <span className={`task-item__title task-item__title--${classSuffix}`}>
          {title}
        </span>
      </NavLink>
    </li>
  );
};

export default TaskItem;
