import { Routes, Route} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page2 from "./Page2"
import User from "./User";
import Home from "./Home";
import Page4 from "./Page4";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<>Hi </>}/>
        <Route path= '/page2' element={<Page2/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path='/User' element={<User/>}/> 
        <Route path='/page4' element={<Page4/>}/> 
      </Routes>
    </>
  );
}

export default App;
