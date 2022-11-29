import React, { useState } from 'react';
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
    const [clicks, setClicks] = useState(0);
    const increment = () => {
        setClicks(clicks + 1);
    }
    return(
        <section>
                <div className="container-fluid">
                        <h1 className="mt-5">Page 4</h1>
                        <input type="text" placeholder="Search Contact..."></input>

                        {/* all of these buttons should direct to the phone book page */}
                        <Link to="/page5?req=call"><button className="button1">Call</button></Link>
                        <Link to="/page5?req=video"><button type="button">Video Call</button></Link>
                        <Link to="/page5?req=message"><button onClick={() => increment()} type="button">Message</button></Link>
                        {/*<h1 className="mt-5">{clicks}</h1>*/}
                </div>
        </section>
    );
}
export default Page4;