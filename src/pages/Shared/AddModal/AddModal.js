import { async } from "@firebase/util";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import "./AddModal.css";
import toast from "react-hot-toast";
import { globalContext } from "../../../App";
const AddModal = () => {
  const [user, loading] = useAuthState(auth);
  const [tasks, tasksReFetch] = useContext(globalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskName = e.target.taskName.value;
    const time = e.target.time.value;
    const date = e.target.date.value;
    const email = user.email;

    const taskDetails = {
      taskName,
      time,
      date,
      email,
    };

    // Sending the task to server
    fetch("https://degrassi-eh-53604.herokuapp.com/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ taskDetails }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          document.getElementById("taskName").value = "";
          document.getElementById("time").value = "";
          document.getElementById("date").value = "";
          document.getElementById("AddModal").click();
          toast.success("Task added successfully.");
          tasksReFetch();
        } else {
          toast.success("Something terrible happened!");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="AddModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-4 relative">
          <label
            htmlFor="AddModal"
            className="btn btn-sm btn-circle btn-outline btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-medium text-lg text-center">
            Add a new task here.
          </h3>
          <div className="modalContent">
            <form onSubmit={(e) => handleSubmit(e)} className="form">
              <input
                required
                name="taskName"
                id="taskName"
                type="text"
                placeholder="Type what to be done."
                className="input input-bordered w-[85%] mx-auto block"
              />
              <div className="timeAndDateInput mt-3 flex justify-center gap-[3%]">
                <input
                  name="time"
                  id="time"
                  type="time"
                  placeholder="Type what to be done."
                  className="input input-bordered w-[41%] block"
                />
                <input
                  name="date"
                  id="date"
                  type="date"
                  placeholder="Type what to be done."
                  className="input input-bordered w-[41%] block"
                />
              </div>
              <input
                type="submit"
                className="input input-bordered btn btn-outline btn-primary rounded-[50px] px-[40px] block mt-6 ml-auto mr-[8%]"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
