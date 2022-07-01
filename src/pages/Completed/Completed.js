import React, { useContext, useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../firebase.init";
import Loader from "../Shared/Loader/Loader";
import RequireAuth from "../Shared/RequireAuth/RequireAuth";

import { globalContext } from "../../App";
import EachCompletedTaskRow from "./EachCompletedTaskRow";

const Completed = () => {
  const [user, loading] = useAuthState(auth);
  const [tasks, tasksReFetch, completedTasks, completedTasksReFetch] =
    useContext(globalContext);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="pt-[64px]">
      {user ? (
        <div className="completedContainer">
          <div className="overflow-x-auto mt-8 px-6">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 2 --> */}

                {completedTasks?.map((completedTask) => (
                  <EachCompletedTaskRow
                    completedTask={completedTask}
                  ></EachCompletedTaskRow>
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

export default Completed;
