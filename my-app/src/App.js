import "./App.css";
import Dashboard from "./Components/Dashboard";
import Dashboard2 from "./Components/Dashboard2";
import Hostel from "./Components/Hostel";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
   
        <Routes>
        <Route path='/' element={<Hostel/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Dashboard2' element={<Dashboard2/>} />
        </Routes>
     
    </>
  );
}

export default App;
