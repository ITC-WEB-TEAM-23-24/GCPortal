import "./App.css";
import SideBar from "./Components/sideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Overall from "./pages/Overall";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/Overall" element={<Overall />} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
