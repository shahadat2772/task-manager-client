import React from "react";
import toast from "react-hot-toast";

const EachTodoRow = ({ task, refetch, completedTasksReFetch }) => {
  const handleComplete = (task) => {
    fetch("http://localhost:5000/addToComplete", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        const [deleteResult, addResult] = data;
        console.log(deleteResult, addResult);
        if (deleteResult.deletedCount > 0 && addResult.insertedId) {
          refetch();
          completedTasksReFetch();
          toast.success("Task completed!");
        }
      });
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
          onChange={() => handleComplete(task)}
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
