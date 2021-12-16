import React from 'react'
import './App.css';
import Compo3 from './Compo3';
import  { Create } from './App'



const  Compo2=()=> {
  return<>
  <Compo3/>
   {/* consumer understand only function it does not understand statments */}

   <Create.Consumer >{(api)=>{
     return <h1>hello world {api}</h1>
   }} 
     </Create.Consumer>                     
</>

}
export default Compo2;
