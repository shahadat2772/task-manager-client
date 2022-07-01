import React from "react";

const EachCompletedTaskRow = ({ completedTask }) => {
  const { taskName, time, date } = completedTask;

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
    <tr className="">
      <td>{taskName}</td>
      <td>{date}</td>
      <td>{timeString12hr}</td>
      <td>Completed</td>
    </tr>
  );
};

export default EachCompletedTaskRow;
