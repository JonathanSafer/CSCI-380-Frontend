function Page3(){
//fetch('http://localhost:3000/page3',{ 
  //  method: 'POST',
    //headers: { "Content-type": "application/json"},
    //body: JSON.stringfy(id)
//})

//}
return(
    <div>
        <input type="text" id='Verification' maxLength="4"></input>
        <button type="button">Submit</button>
        <button onClick="clickfunc"></button>
    </div>

)
function clickfunc (){

var inputValue= document.getElementById('Verification').value; 
console.log(inputValue);
}

}
export default Page3; 