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
          <Route index="/todo" path="/todo" element={<Todo></Todo>}></Route>
          <Route path="/" element={<Todo></Todo>}></Route>
          <Route path="/completed" element={<Completed></Completed>}></Route>
          <Route path="/calendar" element={<Calendar></Calendar>}></Route>
        </Routes>
      </div>
      {<AddModal></AddModal>}
    </div>
  );
}

export default App;
