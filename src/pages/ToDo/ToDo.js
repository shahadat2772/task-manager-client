import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import Loader from "../Shared/Loader/Loader";
import RequireAuth from "../Shared/RequireAuth/RequireAuth";
import { useQuery } from "react-query";
import EachTodoRow from "./EachTodoRow";
import { globalContext } from "../../App";
const Todo = () => {
  const [tasks, tasksReFetch] = useContext(globalContext);

  const [user, loading] = useAuthState(auth);

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

                {tasks?.map((task) => (
                  <EachTodoRow
                    refetch={tasksReFetch}
                    key={task._id}
                    task={task}
                  ></EachTodoRow>
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
