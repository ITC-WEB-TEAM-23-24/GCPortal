import React from "react";
import "./App.css";
import SideBar from "./Components/sideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Overall from "./pages/Overall";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <SideBar />
        <Routes>
          <Route path="/Overall" element={<Overall />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
