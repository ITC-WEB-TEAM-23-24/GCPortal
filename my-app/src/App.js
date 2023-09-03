import "./App.css";
// import Dashboard from "./Components/Dashboard";
// import Dashboard2 from "./Components/Dashboard2";
import Dashboard3 from "./Components/Dashboard3";
// import Hostel from "./Components/Hostel";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
   
        <Routes>
        {/* <Route path='/' element={<Hostel/>} /> */}
        <Route path='/' element={<Dashboard3/>} />
        {/* <Route path='/Dashboard2' element={<Dashboard2/>} /> */}
        {/* <Route path='/Dashboard3' element={<Dashboard3/>} /> */}
        </Routes>
     
    </>
  );
}

export default App;
