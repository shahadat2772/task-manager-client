import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import Loader from "../Shared/Loader/Loader";
import RequireAuth from "../Shared/RequireAuth/RequireAuth";
import { useQuery } from "react-query";
import EachTodoRow from "./EachTodoRow";
import { globalContext } from "../../App";
import NoTaskYet from "../Shared/NoTaskYet/NoTaskYet";
const Todo = () => {
  const [
    tasks,
    tasksReFetch,
    completedTasks,
    completedTasksReFetch,
    taskToEdit,
    setTaskToEdit,
  ] = useContext(globalContext);

  const [user, loading] = useAuthState(auth);

  return (
    <div className="pt-[64px]">
      {user && tasks?.length !== 0 && (
        <div className="todoContainer">
          <div className="overflow-x-auto mt-6 px-6 pb-[80px]">
            <h2 className="text-2xl  pb-5 md:w-[88%] w-[100%] mx-auto">
              Tasks <span className="text-primary">to-do</span>
            </h2>
            <table className="table w-[88%] mx-auto">
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
                {tasks?.map((task) => (
                  <EachTodoRow
                    taskToEdit={taskToEdit}
                    setTaskToEdit={setTaskToEdit}
                    completedTasksReFetch={completedTasksReFetch}
                    refetch={tasksReFetch}
                    key={task._id}
                    task={task}
                  ></EachTodoRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {user && tasks.length === 0 && (
        <NoTaskYet text={"No task added yet"}></NoTaskYet>
      )}
      {!user && <RequireAuth></RequireAuth>}
    </div>
  );
};

export default Todo;
