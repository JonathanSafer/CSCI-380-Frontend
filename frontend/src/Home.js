import React from 'react';
import "./Home.css";
import { Button } from "bootstrap";

function Home(){

    const handleClick = () => {
        console.log('hello');
    }

    return(
        <section>
                <div class="Home">
                    <h1> Homepage</h1>
                    <button onClick={handleClick}>Click Me!</button>
                </div>
        </section>
    );

}export default Home;