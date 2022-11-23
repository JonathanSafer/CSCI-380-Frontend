import React, {useState} from "react";
import "./Page2.css";

function Page2(){

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [visible, setVisibility] = useState();

    const HandleClick = async () => {
        setIsLoading(true);
        try {
            const rawNum = document.getElementById("phoneNumber").value;
            const phoneNumber = parseInt(rawNum);
            if(!Number.isInteger(phoneNumber)){
                console.log(`ERROR: ${rawNum} is not a valid phone number`);
                return
            }
            
            //send POST request for text to be sent to phone number
            const response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                body: JSON.stringify({
                    number: phoneNumber,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = await response.json();
    
            console.log('result is: ', JSON.stringify(result, null, 4));
    
            setData(result);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const CheckNumber = async () => {
        if(document.getElementById("phoneNumber").value.length >= 10){
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    };

    return(
        <section>
                <div class="EnterNumber">
                        <h1>Page 2</h1>
                        <input type="text" id="phoneNumber" placeholder="Enter your phone number..." onChange={() => CheckNumber()}></input>
                             
                </div>

                <div className= "EnterButton">
                <button style={{ visibility: visible ? 'visible' : 'hidden'}} onClick={() => HandleClick()}>Enter</button>
                </div>
                {isLoading && <h2>Loading...</h2>}
                {err && <h2>{err}</h2>}
                {data && (
                    <div>
                        <h2>Phone Number: {data.number}</h2>
                    </div>
                )}
        </section>
    );
}

export default Page2;