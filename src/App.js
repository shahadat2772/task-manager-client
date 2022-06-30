import logo from "./logo.svg";
import "./App.css";
import Todo from "./pages/Todo/Todo";
import Navbar from "./pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Completed from "./pages/Completed/Completed";
import Calendar from "./pages/Calendar/Calendar";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/todo" index="/todo" element={<Todo></Todo>}></Route>
          <Route path="/completed" element={<Completed></Completed>}></Route>
          <Route path="/calendar" element={<Calendar></Calendar>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
