import React, { useState } from "react";


const Prac = () => {


   const lista = ["aryan","prval","deraj","noman"]
    const [list,setlist] = useState([]);
    const [input, setInput] = useState("");
        const add = () => {
        setlist([...list,input,])
        setInput("")
    }
    const eras = () => {
            setlist([]);
    }
    
    
    const name = list.map((amd,index)=><h1 key={index}>{amd} this is the key {index+1}</h1>)
    //uiqe id is present than use index if not than 
    
  return (
      <div className="aryan">
        <input type="text" onChange={(e)=> setInput(e.target.value)} value={input}/>
        <button onClick={add}>on add</button>
        <button onClick={eras}>erase</button>
       
        
      {lista.map((love,index) => <h1 key={index}>{love}</h1>)}   
        {name}
        </div>
  );

}

export default Prac;