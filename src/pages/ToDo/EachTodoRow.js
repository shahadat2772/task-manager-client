import React from "react";

const EachTodoRow = ({ task, tasksReFetch }) => {
  const handleComplete = () => {
    console.log("CEHCKED");
  };

  const handleEdit = () => {
    console.log("CLICKED");
  };

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
    <tr className="">
      <td>{taskName}</td>
      <td>{date}</td>
      <td>{timeString12hr}</td>
      <td>
        <button
          onClick={() => handleEdit()}
          className="btn btn-outline btn-xs btn-primary"
        >
          EDIT
        </button>
      </td>
      <td className="flex items-center">
        <input
          onChange={() => handleComplete()}
          className="text-primary w-6 h-6"
          type="checkbox"
          name=""
          id=""
        />
      </td>
    </tr>
  );
};

export default EachTodoRow;
