import React from "react";
import CustomRoutes from "./Routes/CustomRoutes";
import "./App.css";

function App() {
  return (
    <div className="outer-pokedex">
      <div className="main-content">
        <CustomRoutes />
      </div>
    </div>
  );
}

export default App;
