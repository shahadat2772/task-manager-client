import "./App.css";
import Todo from "./pages/Todo/Todo";
import Navbar from "./pages/Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Completed from "./pages/Completed/Completed";
import Calendar from "./pages/Calendar/Calendar";
import AddModal from "./pages/Shared/AddModal/AddModal";
import AddTaskButton from "./pages/Shared/AddTaskButton/AddTaskButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";
import { Toaster } from "react-hot-toast";
function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App relative">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route index="/todo" path="/todo" element={<Todo></Todo>}></Route>
          <Route path="/" element={<Todo></Todo>}></Route>
          <Route path="/completed" element={<Completed></Completed>}></Route>
          <Route path="/calendar" element={<Calendar></Calendar>}></Route>
        </Routes>
      </div>
      {/* Modal and Task adding button */}
      {user && !loading && <AddTaskButton></AddTaskButton>}
      {<AddModal></AddModal>}
      <Toaster></Toaster>
    </div>
  );
}

export default App;
