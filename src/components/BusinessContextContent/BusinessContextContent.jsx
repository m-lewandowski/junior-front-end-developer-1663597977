import userImg from "assets/Frame-47.png";
import { TasksContext } from "context/TasksContext";
import dayjs from "dayjs";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getContextById } from "utils/getContextById";
import { getDateDifference } from "utils/getDateDifference";
import "./style.css";

const BusinessContextContent = () => {
  const { taskId } = useParams();
  const { tasks, selectedContext, loading } = useContext(TasksContext);

  const context = getContextById(tasks, taskId, selectedContext);

  if (context && !loading) {
    return (
      <section className="business-context-content">
        <div className="business-context-content__container">
          <h1 className="business-context-content__heading">{context.title}</h1>
          <div className="business-context-content__details">
            <div className="business-context-content__author-img-wrapper">
              <img
                src={userImg}
                alt="user"
                className="business-context-content__author-img"
              />
            </div>
            <div className="business-context-content__text-details">
              <span className="business-context-content__author-name">
                Kirsten Aniston
              </span>
              <div className="business-context-content__datetime">
                <span>&#8226;</span>
                <span>{getDateDifference(context.created_at)}</span>
                &#8226;
                <span>{dayjs([context.created_at]).format("H:mm")}</span>
              </div>
            </div>
          </div>
          <div className="business-context-content__text">
            {context.content.split("\n").map((item, index) => (
              <p className="business-context-content__paragraph" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default BusinessContextContent;
