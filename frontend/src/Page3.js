import React, {useState} from "react";
import "./Page2.css";

function Page3(){

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [visible, setVisibility] = useState();
    const [error1, setError1] = useState();
    const codeLength = 6;

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
        let value = document.getElementById("phoneNumber").value
        let pattern = /^\d+$/;
        let isNum = !value.length || pattern.test(value);
        if(isNum && document.getElementById("phoneNumber").value.length >= codeLength){
            setVisibility(true);
        } else {
            setVisibility(false);
        }
        setError1(!isNum);
    };

    return(
        <section className= "Style">
                <div className="EnterNumber">
                        <input id="phoneNumber" type='text' maxLength={codeLength}  placeholder="Enter number..." required onChange={() => CheckNumber()}></input>
                        <button style={{ visibility: visible ? 'visible' : 'hidden'}} onClick={() => HandleClick()}>Enter</button>
                        <h2 id="err" style={{ visibility: error1 ? 'visible' : 'hidden'}}>Your verification code will only contain numbers</h2>  
                </div>       
                {isLoading && <h2>Loading...</h2>}
                {err && <h2>{err}</h2>}
                {data && (
                    <div>
                        <h2>Received: {data.number}</h2>
                    </div>
                )}
        </section>
    );
}

export default Page3;