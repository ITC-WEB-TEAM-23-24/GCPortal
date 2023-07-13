import React from "react";
import "./App.css";
import SideBar from "./Components/sideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Overall from "./pages/Overall";
import Genre1 from "./pages/Genre1";
import Genre2 from "./pages/Genre2";
import Genre3 from "./pages/Genre3";
import OngoingGC from "./pages/OngoingGC";
import Gc from "./pages/Gc";
import Hostel from "./Components/Hostel";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SideBar>
          <Routes>
            <Route path="/Overall" element={<Overall />} />
            <Route path="/" element={<Overall />} />
            <Route path="/Genre1" element={<Genre1 />} />
            <Route path="/Genre2" element={<Genre2 />} />
            <Route path="/Genre3" element={<Genre3 />} />
            <Route path="/Gc" element={<Gc />} />
            <Route path="/Hostel/" element={<Hostel />} />
            {/* <Route path="/OngoingGC" element={<OngoingGC />} /> */}
            {/* <Route path="/Hostel" element={<Hostel />} /> */}
            <Route path="/Dashboard/:name" element={<Dashboard />} />
          </Routes>
        </SideBar>
      </div>
    </Router>
  );
}

export default App;
