import { ArrowIcon, CheckIcon, LockIcon } from "assets/icons";
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
    <li className="task-item">
      <div
        className={`task-item__icon-wrapper task-item__icon-wrapper--${classSuffix}`}
      >
        {icon}
      </div>
      <span className={`task-item__title task-item__title--${classSuffix}`}>
        {title}
      </span>
    </li>
  );
};

export default TaskItem;
