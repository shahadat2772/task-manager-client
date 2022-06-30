import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        {/* <Router></Router> */}

        <Home></Home>
      </div>
    </div>
  );
}

export default App;
