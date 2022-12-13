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


        <Link to="/page2"><div className="button1">
            CLICK ME!
        </div></Link>
     
        </section>

        //Need help trying to get the submit bar on here
    
   








)


}

export default Home;