import React, {useState} from "react";
import "./Page2.css";

function Page2(){

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        try {
          const response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                body: JSON.stringify({
                    name: 'John Smith',
                    job: 'manager',
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

    return(
        <section>
                <div class="EnterNumber">
                        <h1>Page 2</h1>
                        <input type="text" placeholder="Enter your phone number..."></input>
                             
                </div>

                <div class= "EnterButton">
                <button onClick={() => handleClick()}>Enter</button>
                </div>
                {isLoading && <h2>Loading...</h2>}
                {err && <h2>{err}</h2>}
                {data && (
                    <div>
                        <h2>Name: {data.name}</h2>
                        <h2>Job: {data.job}</h2>
                    </div>
                )}
        </section>
    );
}

export default Page2;