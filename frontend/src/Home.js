import React from "react";
import "./Home.css";
import gif from "./Orate.gif"

function Home(){
return(
    <section className = "orate-logo">
        <div>
            <img src = {gif} alt = "Logo" />
            
        </div>
        <div className="home">
            <h1> Homepage</h1>
            <Link to="/page2"><button> click me!</button></Link>
        </div>
     
        </section>

        //Need help trying to get the submit bar on here
    
   








)


}

export default Home;