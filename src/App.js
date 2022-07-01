import "./App.css";
import Todo from "./pages/Todo/Todo";
import Navbar from "./pages/Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Completed from "./pages/Completed/Completed";
import AddModal from "./pages/Shared/AddModal/AddModal";
import AddTaskButton from "./pages/Shared/AddTaskButton/AddTaskButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";
import { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import Loader from "./pages/Shared/Loader/Loader";
import { createContext, useEffect, useState } from "react";
import TaskEditModal from "./pages/Shared/TaskEditModal/TaskEditModal";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
export const globalContext = createContext();

function App() {
  const [user, userLoading] = useAuthState(auth);
  const email = user?.email;

  // State for editing a task
  const [taskToEdit, setTaskToEdit] = useState(null);
  // Loader state for tasks
  const [tasksLoading, setTasksLoading] = useState(false);
  // Tasks state
  const [tasksTodo, setTasksTodo] = useState([]);
  // Tasks refetch initiator
  const [tasksInt, setTasksInt] = useState(true);

  // Loader state for tasks
  const [completedTasksLoading, setCompletedTasksLoading] = useState(false);
  // Tasks state
  const [completedTasks, setCompletedTasks] = useState([]);
  // Tasks refetch initiator
  const [completedTasksInt, setCompletedTasksInt] = useState(true);

  // Loading tasks
  useEffect(() => {
    if (email) {
      setTasksLoading(true);
      fetch(`https://degrassi-eh-53604.herokuapp.com/getTask/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setTasksTodo(data);
          setTasksLoading(false);
        });
    }
  }, [email, tasksInt]);
  // Task refetch function
  const tasksReFetch = () => {
    setTasksInt(!tasksInt);
  };

  useEffect(() => {
    if (email) {
      setCompletedTasksLoading(true);
      fetch(
        `https://degrassi-eh-53604.herokuapp.com/getCompletedTasks/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCompletedTasks(data);
          setCompletedTasksLoading(false);
        });
    }
  }, [email, completedTasksInt]);

  // Completed Task refetch function
  const completedTasksReFetch = () => {
    setCompletedTasksInt(!completedTasksInt);
  };

  return (
    <div className="App relative">
      <globalContext.Provider
        value={[
          tasksTodo,
          tasksReFetch,
          completedTasks,
          completedTasksReFetch,
          taskToEdit,
          setTaskToEdit,
          tasksLoading,
          completedTasksLoading,
          userLoading,
          user,
        ]}
      >
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Todo></Todo>}></Route>
            <Route path="/completed" element={<Completed></Completed>}></Route>
            <Route
              path="/calendar"
              element={<CalendarPage></CalendarPage>}
            ></Route>
          </Routes>
        </div>
        <footer className="footer footer-center p-4 text-base-content bg-[blueviolet]">
          <div>
            <p className="text-[#ffffffe3]">
              Copyright © 2022 - All right reserved by TaskManager
            </p>
          </div>
        </footer>
        {/* Modal and Task adding bu tton */}
        {user && !userLoading && <AddTaskButton></AddTaskButton>}
        {<AddModal></AddModal>}
        {taskToEdit && <TaskEditModal taskToEdit={taskToEdit}></TaskEditModal>}
      </globalContext.Provider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
