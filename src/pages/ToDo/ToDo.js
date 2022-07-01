import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import Loader from "../Shared/Loader/Loader";
import RequireAuth from "../Shared/RequireAuth/RequireAuth";
import { useQuery } from "react-query";
import EachTodoRow from "./EachTodoRow";
const Todo = () => {
  const [user, loading] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  const email = user?.email;

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/getTask/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setTasks(data);
          }
        });
    }
  }, [email]);

  console.log(tasks);

  return (
    <div className="pt-[64px]">
      {user ? (
        <div className="todoContainer">
          <div className="overflow-x-auto mt-8 px-6">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Edit</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 2 --> */}

                {tasks.map((task) => (
                  <EachTodoRow task={task}></EachTodoRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <RequireAuth></RequireAuth>
      )}
    </div>
  );
};

export default Todo;
