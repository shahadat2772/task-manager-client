import { async } from "@firebase/util";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import "./AddModal.css";
import toast from "react-hot-toast";

const AddModal = () => {
  const [user, loading] = useAuthState(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const time = document.getElementById("time").value;
    const date = document.getElementById("date").value;
    const email = user.email;

    const taskDetails = {
      taskName,
      time,
      date,
      email,
      status: "todo",
    };
    console.log(taskDetails);

    // Sending the task to server
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ taskDetails }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          document.getElementById("taskName").value = "";
          document.getElementById("time").value = "";
          document.getElementById("date").value = "";
          document.getElementById("AddModal").click();
          toast.success("Task added successfully.");
        } else {
          toast.success("Something terrible happened!");
        }
      });

    // Prepend any date. Use your birthday.
    // const timeString12hr = new Date(
    //   "1970-01-01T" + timeString + "Z"
    // ).toLocaleTimeString("en-US", {
    //   timeZone: "UTC",
    //   hour12: true,
    //   hour: "numeric",
    //   minute: "numeric",
    // });
    // console.log(taskName, timeString12hr, date);
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
                id="taskName"
                type="text"
                placeholder="Type what to be done."
                className="input input-bordered w-[85%] mx-auto block"
              />
              <div className="timeAndDateInput mt-3 flex justify-center gap-[3%]">
                <input
                  id="time"
                  type="time"
                  placeholder="Type what to be done."
                  className="input input-bordered w-[41%] block"
                />
                <input
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
          {/* <div className="modal-action">
            <label htmlFor="AddModal" className="btn">
              ADD
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddModal;
