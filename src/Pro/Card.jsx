import React from 'react'
import '../App.css'



const Cards = ({ list, setList }) => {

    const del=(id)=>{
       const fil = list.filter((elem, i)=> id!==i)
       
setList(fil)
    }

    return (<div>
        
            {list.map((amd,id) => <ol className="ui segment" key={id}>
            
         <span>{amd}</span>  
           <button className=" ui button right floated size mini"onClick={()=>del(id)}> Delete</button>
          </ol>

          
            )}
        
    </div>)
}

export default Cards
