import logo from './logo.svg';
import './App.css';
import UseState from "./Hooks/UseState";
import Cont from "./Cont"
import Head from './Pro/Head';
import Cards from './Pro/Card';
import Prac from './Hooks/Prac';
import { createContext,useState } from 'react';


const aryan = createContext();
function App() {
  const [list,setList] = useState([])
const getdata=(input)=>{
    setList([...list,input])
    
}



 return(
  
  
   <div className='container'><Head getdata={getdata} /><br></br><Cards list={list} setList={setList}/></div>
 
   
 );

    // return <UseState/>;
//
  /* <Cont/>
  <Prac/>; */
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
export {aryan};
