import { Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page2 from "./Page2"
import User from "./User";
import Home from "./Home";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";



function App() {
return (
       <>
    

      <Routes>

        <Route path="/" index element={<Home/> } />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/User' element={<User />} />
        <Route path='/page4' element={<Page4 />} />
      </Routes>
      
    
</>


   
)
}
export default App;
