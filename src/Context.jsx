import React,{useContext} from 'react'
import './App.css';
 import { CreateValueForContext } from './App'

function Context() {
 const value1 = useContext(CreateValueForContext);

        return<>
   <h1> its belong from {value1}</h1>

  </>

}

export default Context;





