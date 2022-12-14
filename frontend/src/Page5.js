import React from "react";
import "./page5.css";

function Page5(){
    return(
        <section>
                <div class="container-fluid">
                        <h1 class="mt-5">Page 5</h1>
                        <input type="text" placeholder="Search Contact..."></input>
                        <center><h2>hello</h2></center>

                        {/* all of these buttons should direct to the phone book page */}
                        <button className="Call-Button" type="button">Call</button>
                        <button className="Video-Button" type="button">Video Call</button>
                        <button className= "Message-Button" type="button">Message</button>
                </div>
        </section>


    );

    
}
export default Page5;