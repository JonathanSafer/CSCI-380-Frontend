import React from "react";
import "./Home.css";
import gif from "./Orate.gif"

function Home(){

    const handleClick = () => {
        console.log('hello');
    }
    return(
        <section className = "orate-logo">
            <div>
                <img src = {gif} alt = "Logo" />
            </div>

     
          </section>
          <section>
              <div class="Home">
                  <h1> Homepage</h1>
                  <button onClick={handleClick}>Click Me!</button>
              </div>
          </section>

          //Need help trying to get the submit bar on here
    )
}

export default Home;
