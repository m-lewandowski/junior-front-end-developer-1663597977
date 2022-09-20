import userImg from "assets/Frame-47.png";
import tasks from "data/tasks";
import dayjs from "dayjs";
import { getDateDifference } from "utils/getDateDifference";
import "./style.css";

const BusinessContextContent = () => {
  const [task] = tasks;
  const { businessContexts } = task;
  const [data] = businessContexts;
  return (
    <section className="business-context-content">
      <div className="business-context-content__container">
        <h1 className="business-context-content__heading">{data.title}</h1>
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
              <span>{getDateDifference(data.created_at)}</span>
              &#8226;
              <span>{dayjs([data.created_at]).format("H:mm")}</span>
            </div>
          </div>
        </div>
        <div className="business-context-content__text">
          {data.content.split("\n").map((item, index) => (
            <p className="business-context-content__paragraph" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessContextContent;
