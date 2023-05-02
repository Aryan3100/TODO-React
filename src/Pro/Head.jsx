import React from 'react'
import {  Form, Input,Button} from 'semantic-ui-react'
import { useState } from 'react'
import '../App.css';



function Head(props) {
    const [input,setInput] = useState("")
    function handles(){
        props.getdata(input)
        setInput('')
    }
  
  return (
    <Form className="Input">
        <Input focus placeholder="Enter your work to do...." onChange={(e)=>setInput(e.target.value)} value={input}/>

        <Button className='btn' circular icon='arrow right' onClick={()=>(input==='')?(alert('Please Enter Something')):(handles())} />
    </Form>
  
  )
}

export default Head