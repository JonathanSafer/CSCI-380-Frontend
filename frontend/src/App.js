import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component from "./Component";
import User from "./User";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<>Hi</>}/>
        <Route path="/Page2" element={<Component />} />
        <Route path="/Home" element={<Home/>}/>
        <Route path='/User' element={<User/>}/> 
      </Routes>
    </>
  );
}

export default App;
