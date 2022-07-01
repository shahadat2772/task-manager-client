import React, { useContext } from "react";
import { async } from "@firebase/util";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
// import "./taskEditModal.css";
import toast from "react-hot-toast";
import { globalContext } from "../../../App";
const TaskEditModal = () => {
  const [user, loading] = useAuthState(auth);

  const [
    tasks,
    tasksReFetch,
    completedTasks,
    completedTasksReFetch,
    taskToEdit,
    setTaskToEdit,
  ] = useContext(globalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const time = document.getElementById("time").value;
    const date = document.getElementById("date").value;
    const email = user.email;

    const updatedTaskDetails = {
      taskName,
      time,
      date,
      email,
      status: "todo",
    };
    console.log(updatedTaskDetails);

    // Sending the task to server

    // fetch("http://localhost:5000/addTask", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ updatedTaskDetails }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       document.getElementById("taskName").value = "";
    //       document.getElementById("time").value = "";
    //       document.getElementById("date").value = "";
    //       document.getElementById("taskEditModal").click();
    //       toast.success("Task added successfully.");
    //       // tasksReFetch();
    //     } else {
    //       toast.success("Something terrible happened!");
    //     }
    //   });
  };

  return (
    <div>
      <input type="checkbox" id="taskEditModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-4 relative">
          <label
            htmlFor="taskEditModal"
            className="btn btn-sm btn-circle btn-outline btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-medium text-lg text-center">
            Edit the task here.
          </h3>
          <div className="modalContent">
            <form onSubmit={(e) => handleSubmit(e)} className="form">
              <input
                defaultValue={taskToEdit?.taskName}
                required
                id="taskName"
                type="text"
                placeholder="Type what to be done."
                className="input input-bordered w-[85%] mx-auto block"
              />
              <div className="timeAndDateInput mt-3 flex justify-center gap-[3%]">
                <input
                  defaultValue={taskToEdit?.time}
                  id="time"
                  type="time"
                  placeholder="Type what to be done."
                  className="input input-bordered w-[41%] block"
                />
                <input
                  defaultValue={taskToEdit?.date}
                  id="date"
                  type="date"
                  placeholder="Type what to be done."
                  className="input input-bordered w-[41%] block"
                />
              </div>
              <input
                type="submit"
                value={"Update"}
                className="input input-bordered btn btn-outline btn-primary rounded-[50px] px-[40px] block mt-6 ml-auto mr-[8%]"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;
