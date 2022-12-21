import React from 'react';
import {Link } from "react-router-dom";
import "./Page4.css";

// function mount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('https://reqres.in/api/posts', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }

function Page4(){
    return(
        <section>
                <div class="container-fluid">
                        
                        <input type="text" placeholder="Search Contact..."></input>
                        
                       </div> 
                <div class="buttons">
                        {/* all of these buttons should direct to the phone book page */}
                        <button type="button">Call</button>
                        <button type="button">Video Call</button>
                        <button type="button">Message</button>
                </div>
        </section>


    );
}
export default Page4;