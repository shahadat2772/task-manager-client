import React from "react";

const EachTodoRow = ({ task }) => {
  console.log(task);
  const { taskName, date, time } = task;

  //   Converting to 12 hour
  const timeString12hr = new Date(
    "2001-09-01T" + time + "Z"
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <tr className="hover">
      <td>{taskName}</td>
      <td>{date}</td>
      <td>{timeString12hr}</td>
      <td>EDIT</td>
      <td>COM</td>
    </tr>
  );
};

export default EachTodoRow;
