import React from "react";
import toast from "react-hot-toast";

const EachTodoRow = ({
  task,
  refetch,
  completedTasksReFetch,
  taskToEdit,
  setTaskToEdit,
}) => {
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

        if (deleteResult.deletedCount > 0 && addResult.insertedId) {
          refetch();
          completedTasksReFetch();
          toast.success("Task completed!");
        }
      });
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
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
      <td>{date || "Not set yet"}</td>
      <td>
        {(timeString12hr === "Invalid Date" && "Not set yet") || timeString12hr}
      </td>
      <td>
        <label
          htmlFor="taskEditModal"
          onClick={() => handleEdit(task)}
          className="btn btn-outline btn-xs btn-primary"
        >
          EDIT
        </label>
      </td>
      <td className="flex items-center">
        <input
          onChange={() => handleComplete(task)}
          className="w-6 h-6 btn btn-primary border-4"
          type="checkbox"
          name=""
          id=""
        />
      </td>
    </tr>
  );
};

export default EachTodoRow;
