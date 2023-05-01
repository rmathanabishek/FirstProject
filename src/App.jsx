import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";

export default function App() {
  return (
    <div>
      <NavBar />
      <MainContent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
