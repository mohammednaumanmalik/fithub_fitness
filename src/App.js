import "./App.css";
import Parent from "./Components/Parent";
// import Fetchdata from "./Components/Fetchdata";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Join from "./Components/Join";

function App() {
  return (
    <>
      <BrowserRouter basename="">
        <div>
          {" "}
          <Parent />
        </div>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
