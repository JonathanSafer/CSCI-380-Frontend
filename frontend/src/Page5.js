import React from "react";
import "./page5.css";

function Page5(){
    return(
        <section>
                <div class="container-fluid">
                        <h1 class="mt-5">Page 5</h1>
                        <input type="text" placeholder="Search Contact..."></input>
                        
                        

                        {/* all of these buttons should direct to the phone book page */}
                        <button type="button">Call</button>
                        <button type="button">Video Call</button>
                        <button type="button">Message</button>
                </div>
        </section>


    );

    
}
export default Page5;