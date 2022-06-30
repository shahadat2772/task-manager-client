import logo from "./logo.svg";
import "./App.css";
import Todo from "./pages/Todo/Todo";
import Navbar from "./pages/Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Completed from "./pages/Completed/Completed";
import Calendar from "./pages/Calendar/Calendar";
import AddModal from "./pages/Shared/AddModal/AddModal";
function App() {
  return (
    <div className="App relative">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/todo" index="/todo" element={<Todo></Todo>}></Route>
          <Route path="/completed" element={<Completed></Completed>}></Route>
          <Route path="/calendar" element={<Calendar></Calendar>}></Route>
        </Routes>
      </div>
      <div className="addTaskButton">
        <label for="AddModal" className="button">
          {/* <FontAwesomeIcon className="plusIcon" icon={faPlus} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="plusIcon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add
        </label>
      </div>
      {<AddModal></AddModal>}
    </div>
  );
}

export default App;
