import React from "react";
import "./page3.css";

function Page3(){
//fetch('http://localhost:3000/page3',{ 
  //  method: 'POST',
    //headers: { "Content-type": "application/json"},
    //body: JSON.stringfy(id)
//})

//}
return(
    <div>
        <center><input className= 'verification'type="text" id='Verification' maxLength="4" placeholder="Verification"></input></center>
        <button onClick="clickFunc()" className= 'Submit' type="button">Submit</button>
    </div>

)
function clickFunc(){

var inputValue= document.getElementById('Verification').value; 
console.log(inputValue);
}

}
export default Page3; 