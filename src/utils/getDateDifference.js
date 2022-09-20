import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

export const getDateDifference = (date) => {
  const now = dayjs();
  const difference = now.diff(date.slice(0, 10), "day");
  const formattedDate = dayjs(date).format("Do MMMM");
  let daysAgo;
  if (difference === 0) {
    daysAgo = "Today";
  } else {
    daysAgo = difference === 1 ? "1 day ago" : `${difference} days ago`;
  }
  return `${daysAgo}, ${formattedDate}`;
};
