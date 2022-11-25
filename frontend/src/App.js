import { Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./orate.svg"
import Page2 from "./Page2"
import User from "./User";
import Home from "./Home";
import Page4 from "./Page4";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Ignore this Jonathan.. working on it</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Under Construction
        </a>
      </header>
    
    
      <Routes>
        <Route path="/" index element={<>Under constuction </>}/>
        <Route path= '/page2' element={<Page2/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path='/User' element={<User/>}/> 
        <Route path='/page4' element={<Page4/>}/> 
      </Routes>
    </div>
    
  );

}

export default App;
