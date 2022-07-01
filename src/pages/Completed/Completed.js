import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import Loader from "../Shared/Loader/Loader";
import RequireAuth from "../Shared/RequireAuth/RequireAuth";
import { globalContext } from "../../App";
import EachCompletedTaskRow from "./EachCompletedTaskRow";
import NoTaskYet from "../Shared/NoTaskYet/NoTaskYet";

const Completed = () => {
  const [user, loading] = useAuthState(auth);
  const [tasks, tasksReFetch, completedTasks, completedTasksReFetch] =
    useContext(globalContext);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="pt-[64px]">
      {user && completedTasks?.length !== 0 && (
        <div className="completedContainer">
          <div className="overflow-x-auto mt-8 px-6 pb-[80px]">
            <h2 className="text-2xl  pb-5 md:w-[88%] w-[100%] mx-auto">
              Completed <span className="text-primary">tasks</span>
            </h2>
            <table className="table w-[88%] mx-auto">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {completedTasks?.map((completedTask) => (
                  <EachCompletedTaskRow
                    key={completedTask._id}
                    completedTask={completedTask}
                  ></EachCompletedTaskRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {user && completedTasks?.length === 0 && (
        <NoTaskYet text={"No completed task yet"}></NoTaskYet>
      )}
      {!user && <RequireAuth></RequireAuth>}
    </div>
  );
};

export default Completed;
