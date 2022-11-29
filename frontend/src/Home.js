import React from "react";
import "./Home.css";
import gif from "./Orate.gif"

function Home(){

    const handleClick = () => {
        console.log('hello');
    }
    return(
        <div>
            <section className = "orate-logo">
                <div>
                    <img src = {gif} alt = "Logo" />
                </div>

        
            </section>
            <section>
                <div class="Home">
                    <h1> Homepage</h1>
                    <button onClick={handleClick}>Click Me!</button>
                    {/*Link to Page2*/}
                    <Link to="/Page2"><button className="button"> </button></Link>
                </div>
            </section>
          </div>

          //Need help trying to get the submit bar on here
    )
}

export default Home;
