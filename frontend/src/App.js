import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component from "./Component";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<>Hi</>}/>
        <Route path="/Page2" element={<Component />} />
      </Routes>
    </>
  );
}

export default App;
