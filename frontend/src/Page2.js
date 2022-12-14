import React, {useState} from "react";
import "./Page2.css";

function Page2(){

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [visible, setVisibility] = useState();
    const [error1, setError1] = useState();
    const phoneNumberLength = 10;

    const HandleClick = async () => {
        setIsLoading(true);
        try {
            const rawNum = document.getElementById("phoneNumber").value;
            let phoneNumber = parseInt(rawNum);
            if(!Number.isInteger(phoneNumber)){
                console.log(`ERROR: ${rawNum} is not a valid phone number`);
                return
            }
            phoneNumber = "+1" + phoneNumber.toString()
            
            //send POST request for text to be sent to phone number
            const response = await fetch('http://node-express-env.eba-ma23kuxx.us-west-2.elasticbeanstalk.com/send', {
                method: 'POST',
                body: JSON.stringify({
                    phone: phoneNumber,
                    message: "hello my name is",
                    name: "Damian"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": 'application/json',
                    "X-POST-380": "sonyl"
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
        if(isNum && document.getElementById("phoneNumber").value.length >= phoneNumberLength){
            setVisibility(true);
        } else {
            setVisibility(false);
        }
        setError1(!isNum);
    };

    return(
        <section className= "Style">
                <div className="EnterNumber">
                        <input id="phoneNumber" type='text' maxLength={phoneNumberLength}  placeholder="Enter number..." required onChange={() => CheckNumber()}></input>
                        <button style={{ visibility: visible ? 'visible' : 'hidden'}} onClick={() => HandleClick()}>Enter</button>
                        <h2 id="err" style={{ visibility: error1 ? 'visible' : 'hidden'}}>Phone number may only contain numbers</h2>  
                </div>       
                {isLoading && <h2>Loading...</h2>}
                {err && <h2>{err}</h2>}
                {data && (
                    <div>
                        <h2>Phone Number: {data.message}</h2>
                    </div>
                )}
        </section>
    );
}

export default Page2;