import React from 'react'
import './App.css';
import Compo4 from './Compo4';
import {CreateValue} from './App';



function Compo3() {
  return <>
  
    <CreateValue.Consumer>{(val)=>{

return <h1>{val}</h1>
}}   
  </CreateValue.Consumer>
<Compo4/>
</>
}

export default Compo3;
