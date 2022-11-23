const Page3=()=>{
//fetch('http://localhost:3000/page3',{ 
  //  method: 'POST',
    //headers: { "Content-type": "application/json"},
    //body: JSON.stringfy(id)
//})

//}
return(
    <><><label for="Name">Verification</label><input type="text" id='Verification' maxLength="4"></input></>
    <button type="button">Submit</button></>

)}
var inputValue= document.getElementById('verification').value; 
console.log(inputValue);
export default Page3; 