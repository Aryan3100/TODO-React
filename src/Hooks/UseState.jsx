import React,{useState} from "react";

const UseState = () => {
 const [count ,setCount]= useState(0);
    return(  
     
     <div className="container">
        <button onClick={() => setCount(count+1)} className="btn">+</button>
        <h1>{count}</h1>
        <button onClick={() => (count ==0) ? setCount(0) : setCount(count-1)} className="btn">-</button>
     </div>
    )
} 

export default UseState;