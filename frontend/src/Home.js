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
            <Link to="/page2"><button1>click me!</button1></Link>
        </div>
     
        </section>

        //Need help trying to get the submit bar on here
    
   








)


}

export default Home;