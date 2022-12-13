import React from "react";
import "./Home.css";
import gif from "./Orate.gif"
import {Link } from "react-router-dom";

function Home(){
return(
    <section className = "orate-logo">
        <div>
            <img src = {gif} alt = "Logo" />
            
        </div>


        <div className="button1">
           <h1>Homepage</h1>
          <center><Link to="/page2"><button>click me!</button></Link></center>
        </div>
     
        </section>

        //Need help trying to get the submit bar on here
    
   








)


}

export default Home;