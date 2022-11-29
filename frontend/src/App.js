import { Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gif from "./Orate.gif"
import Page2 from "./Page2"
import User from "./User";
import Home from "./Home";
import Page3 from "./Page3";
import Page4 from "./Page4";



function App() {
return (
       <>
    

      <Routes>
<<<<<<< HEAD
        <Route path="/" index element={<>Hi </>}/>
        <Route path= '/page2' element={<Page2/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path='/User' element={<User/>}/> 
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/page4' element={<Page4/>}/> 
=======
        <Route path="/" index element={<Home/> } />
        <Route path='/page2' element={<Page2 />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/User' element={<User />} />
        <Route path='/page4' element={<Page4 />} />
>>>>>>> 3db1b8e475ea44fac8a11d2611120d9010bc89c5
      </Routes>
      
    
</>

   
)
}

export default App;
