import { useEffect, useState } from "react";

const Component = (props) => {
  const [i, seti] = useState(7);
 
  return (
    <><div>Hello World! {i} </div>
   <button onClick={() => seti(i+1)}>increment</button>
   </>)
  };

  export default Component;