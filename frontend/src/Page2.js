import React from "react";
import "./Page2.css";
import { Button } from "bootstrap";

function Page2(){
    return(
        <section>
                <div class="EnterNumber">
                        <h1>Page 2</h1>
                        <input type="text" maxlength = '10' placeholder="Enter number..." required></input>
                <small>Possible error</small>       
                </div>       
                <div>
                <button>Enter</button>
                </div>
        </section>
    );
}

export default Page2;