import React from "react";
import "./Page2.css";
import { Button } from "bootstrap";

function Page2(){
    return(
        <section>
                <div class="EnterNumber">
                        <h1>Page 2</h1>
                        <input type="text" placeholder="Enter your phone number..."></input>
                             
                </div>

                <div class= "EnterButton">
                <Button>Enter</Button>
                </div>
        </section>
    );
}

export default Page2;