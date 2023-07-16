import React from "react";
import "./App.css";
import SideBar from "./Components/sideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Overall from "./pages/Overall";
import Genre1 from "./pages/Genre1";
import Genre2 from "./pages/Genre2";
import Genre3 from "./pages/Genre3";

import Gc from "./pages/Gc";
import Dashboard from "./Components/Dashboard";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import Nav from './Components/Nav';
import GC_Genre1 from "./Components/GC_Genre1";
import GC_Genre2 from "./Components/GC_Genre2";
import GC_Genre3 from "./Components/GC_Genre3";

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
            <Route path="/GC/Genre1/:name" element={<Gc />} />
            <Route path="/GC/Genre2/:name" element={<Gc />} />
            <Route path="/GC/Genre3/:name" element={<Gc />} />
            <Route path="/GC/Genre1" element={<GC_Genre1 />} />
            <Route path="/GC/Genre2" element={<GC_Genre2 />} />
            <Route path="/GC/Genre3" element={<GC_Genre3 />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Card2" element={<Card2 />} />
            <Route path="/Nav" element={<Nav />} />
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
