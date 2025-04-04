import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Additem from "./components/Additem/Additem";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Additem />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
