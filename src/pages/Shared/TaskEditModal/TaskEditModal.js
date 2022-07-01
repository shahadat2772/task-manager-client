import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
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

    const id = taskToEdit._id;
    const taskName = e.target.taskName.value;
    const time = e.target.time.value;
    const date = e.target.date.value;
    const email = user.email;

    const updatedTaskDetails = {
      taskName,
      time,
      date,
      email,
    };

    // Checking if the task is same as before
    if (
      taskName === taskToEdit.taskName &&
      time === taskToEdit.time &&
      date === taskToEdit.date
    ) {
      toast.error("Make change to update.");
      return;
    } else {
      // Updating on server
      fetch(`https://degrassi-eh-53604.herokuapp.com/updateTask/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updatedTaskDetails }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            tasksReFetch();
            setTaskToEdit(null);
            document.getElementById("taskEditModal").click();
            toast.success("Task updated successfully.");
          } else {
            toast.success("Something terrible happened!");
          }
        });
    }
  };

  return (
    <div>
      <input type="checkbox" id="taskEditModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-4 relative">
          <label
            onClick={() => setTaskToEdit(null)}
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
                name="taskName"
                defaultValue={taskToEdit?.taskName}
                required
                id="taskName"
                type="text"
                placeholder="Type what to be done."
                className="input input-bordered w-[85%] mx-auto block"
              />
              <div className="timeAndDateInput mt-3 flex justify-center gap-[3%]">
                <input
                  name="time"
                  defaultValue={taskToEdit?.time}
                  id="time"
                  type="time"
                  placeholder="Type what to be done."
                  className="input input-bordered w-[41%] block"
                />
                <input
                  name="date"
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
