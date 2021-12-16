// **********************  vdo- 33 REACT HOOKS***************************

// import React from 'react'
// import './App.css';

//  we cannot change state of the value in react
// ex - count =1 is  initial state , after count++ value will 2, but count did not change his state...
//   this is the main problem in functional component

// count increase in console but not value increase

//   let  count= 1;
// const inno= () => {

//   console.log('clicked' ,count++);
// }

// function App() {
//   return (<>
// <div className="container">
// <h1 className="heading"> 0 </h1>
// <button className=" btn" onClick={inno}>Click</button>
// </div>
// </>

//   )

// }
// export default App;

// for solve this problem we use react hooks

// import React, { useState } from 'react'
// import './App.css';

// // const state= useState();       // we  cannot use hooks outside of body in funtional  component

// //  console.log(state) ;

// // let  count= 1;
// // const inno= () => {

// //   console.log('clicked' ,count++);
// // }

// function App() {

// // const state= useState();
// // console.log(state) ;

// // const [count ] = useState(15)
// // const [initial value ] = useState(15)

// const [count, setCount ] = useState(1)

// // const [inital value, function(updated value) ] = useState(initailvalue)

// const inno= () => {
//   setCount(count +1 )
//  console.log('clicked' + setCount);
// }
//   return (<>
// <div className="container">
// <h1 className="heading"> {count} </h1>
// <button className=" btn" onClick={inno}>Click</button>
// </div>
// </>

//   )

// }
// export default App;

//********************************** */ vdo-34  REACT HOOKS CHALLANGE 1 ******************************

// import React, { useState } from 'react'
// import './App.css';

// let time = new Date().toLocaleTimeString();
// console.log();
// function App() {

// const [count, setCount] = useState(time);

// const inno= () => {
//   time= new Date().toLocaleTimeString();
//   setCount(time)
//  console.log('clicked' + setCount);
// }
//   return (<>
// <div className="container">
// <h1 className="heading"> {count} </h1>
// <button className=" btn" onClick={inno}>Click</button>
// </div>
// </>

//   )

// }
// export default App;

// *************************** vdo- 35   REACT HOOKS MINI PROJECT  **********************************

// import React, {useState} from 'react'
// import './App.css';

// let  time= new Date().toLocaleTimeString();

// function App(){
//   const [clock , setClock] = useState(time);

//   // const local=()=>{

//   // }

// setInterval( ()=>{
//   time= new Date().toLocaleTimeString()
//   setClock(time);
// }, 1000 )

// return<>
// <div className="container">
//   <h1 className='heading'>{clock}</h1>
//   {/* <button onDrop={local}>Click</button> */}
// </div>

// </>

// }

// export default App;

// *************************** vdo-36 EVENT HENDLING  *********************************************

// import React,{useState} from 'react'
// import './App.css';

// function App(){
//   let bgcolor = 'red';
//   let value ='hello';
//   const [color, setColor] = useState(bgcolor)
//   const [Click, setClick] = useState(value)

//   const btn=()=>{

//      let bgcolor= '#3368ca'
//    let value= 'by-by' ;
//      setColor(bgcolor)
//     setClick(value)
//   }

//   const dclick =()=>{
//         setClick('chala ja bsdk');
//         setColor(bgcolor);
//   };

// return<>

// <div className="container" style={{backgroundColor: color}}>

//   <button className="btn" onClick={btn} onDoubleClick={dclick}>{Click}</button>
// </div>
// </>

// }

// export default App;

//   ************************** vdo- 37 FORMS ************************************************

// import React,{useState} from 'react'
// import './App.css';

// function App(){
//   const [name, setName] = useState("")
//   const [text, setText] = useState("")

//  const change =(event)=>{
//    setText(event.target.value)

//   }
//   const btnclick =()=>{
//     setName(text)
//   }

// return<>
// <div className="container">
//   <h1 className="heading"> hello world.. {name} </h1>
//   <input type="text" placeholder= 'enter Your Name' onChange={change} value={text} />
//   <button className="btn" onClick={btnclick}>Click</button>
// </div>
// </>

// }
// export default App;

// //   ************************** vdo-38 FORMS-2 ************************************************
// import React,{useState} from 'react'
// import "./App.css";

// const App =()=>{
//   const [name, setName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [text, setText] = useState('')
//   const [lastText, setLastText] = useState('')

// const change=(event)=>{
//  setText(event.target.value)
// }

// const lastChange=(event)=>{
//   setLastText(event.target.value)
// }

// const btnclick=(event)=>{
// event.preventDefault();
//   setName(text)
//   setLastName(lastText)
// }

// // note :- if  we use form key keyword, the data will disapere when page were load(bcz form deafault behaiver is, it refresh full page load)
// // if we want to solve this error the we use
// // on Submit and pass object

// // and if we want ti access this object  data then we use event

// // in  event also a method  event.preventDefault() {dafalut behaivier, means form jo page ko load kr rha he vo nhi krega}

//   return<>
//   {/* <form onSubmit={btnclick}>
//  <div className="container">
//   <h1 className="heading"> hello world.. {name} </h1>
//   <input type="text" placeholder= 'enter Your Name' onChange={change} value={text} />
//   <button className="btn" >Click</button>
// </div>
//   </form> */}

// {/* if we want to use multiple input type */}

//   <form onSubmit={btnclick}>
//  <div className="container">
//   <h1 className="heading"> hello world.. {name} {lastName} </h1>
//   <input type="text" placeholder= 'enter Your Name' onChange={change} value={text} />
//   <input type="text" placeholder= 'enter Your  last Name' onChange={lastChange} value={lastText} />
//   <button className="btn" >Click</button>
// </div>
//   </form>

//   </>
// }

// export default App;

//    *********************** SIMPLIFY CODE ***********************************************

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: "",
//     lname: "",
//   });

//   const change = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);
//     // console.log(event.target.placeholder);

//     let value = event.target.value;
//     let name = event.target.name;
//     setFullName((prevalue) => {
//       if (name === "fname") {
//         // prevalue , use state obje ka initi. data ko acces kr rha he
//         return {
//           fname: value,
//           lname: prevalue.lname,
//         };
//       } else if (name === "lname") {
//         // prevalue , use state obje ka initi. data ko acces kr rha he
//         return {
//           fname: prevalue.fname,
//           lname: value,
//         };
//       }
//     });
//   };

//   const btnclick = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//       <form onSubmit={btnclick}>
//         <div className="container">
//           <h1 className="heading">
//             {" "}
//             hello world.. {fullName.fname} {fullName.lname}
//           </h1>
//           <input
//             type="text"
//             placeholder="enter Your Name"
//             name="fname"
//             onChange={change}
//             value={fullName.fname}
//           />
//           <input
//             type="text"
//             placeholder="enter Your  last Name"
//             name="lname"
//             onChange={change}
//             value={fullName.lname}
//           />
//           <button className="btn">Click</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default App;

//    *********************** REACT CHALLANGE  ***********************************************

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: " ",
//     lname: " ",
//     email: " ",
//     city: " ",
//   });

//   const btnclick = (event) => {
//     event.preventDefault();
//   };

//   const change = (event) => {
//     setFullName((prevalue) => {
//       // console.log(event.target.placeholder);
//       let value = event.target.value;
//       let data = event.target.name;
//       // or  we use object desturcturing

//       // const {value,data}= event.target;

//       if (data === "fname") {
//         return {
//           fname: value,
//           lname: prevalue.lname,
//           email: prevalue.email,
//           city: prevalue.city,
//         };
//       } 
//       else if (data === "lname") {
//         return {
//           fname: prevalue.fname,
//           lname: value,
//           email: prevalue.email,
//           city: prevalue.city,
//         };
//       } else if (data === "email") {
//         return {
//           fname: prevalue.fname,
//           lname: prevalue.lname,
//           email: value,
//           city: prevalue.city,
//         };
//       } else if (data === "city") {
//         return {
//           fname: prevalue.fname,
//           lname: prevalue.lname,
//           email: prevalue.email,
//           city: value,
//         };
//       }
//     });
//   };

//   return (
//     <>
//       <form onSubmit={btnclick}>
//         <div className="container">
//           <h1 className="heading">
          
//             hello world.. {fullName.fname}
//             {fullName.lname}
//             {fullName.email}
//             {fullName.city}
//           </h1>
//           <input
//             type="text"
//             placeholder="enter Your Name"
//             name="fname"
//             onChange={change}
//             value={fullName.fname}
//           />
//           <input
//             type="text"
//             placeholder="enter Your  Last Name"
//             name="lname"
//             onChange={change}
//             value={fullName.lname}
//           />
//           <input
//             type="email"
//             placeholder="Example@gmail.com"
//             name="email"
//             onChange={change}
//             value={fullName.email}
//           />
//           <input
//             type="text"
//             placeholder="Enter Youe City"
//             name="city"
//             onChange={change}
//             value={fullName.city}
//           />
//           <button className="btn">Click</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default App;



// ***************************************** VDO-41 SDREAD OPRETOR ******************************************************

// it  is use to simplyfy array or objects

//  to understand spread.js file





// ***************************************** VDO-42 METERIAL OPRATOR ******************************************************


// import React from 'react'
// import './App.css'
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import LockIcon from '@material-ui/icons/Lock';

// const App=()=>{
// return<>
//    <div className="container">
//           <h1 className="heading"> hello world..</h1>
//            <div><PeopleAltIcon/>
//            <input type="text" placeholder="enter Your Name"/></div>
//            <div>< LockIcon /><input type="password" placeholder="enter Your password"/></div>
//           <div> <input type="submit" className='btn' placeholder=""/></div>
//     </div>
//   </>

// }

// export default App;



// ***************************************** VDO-43 SIMPLYFY CODE FROM 100 TO 2 LINE CODE ******************************************************


// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: " ",
//     lname: " ",
//     email: " ",
//     city: " ",
//     country:"",
//   });

//   const btnclick = (event) => {
//     event.preventDefault();
//   };

//   const change = (event) => {
//     setFullName((prevalue) => {

//       let value = event.target.value;
//       let data = event.target.name;
//       // or  we use object desturcturing

//       // const {data, value} = event.target;

// return{
// ...prevalue,
// [data]:value,
// }



      // if (data === "fname") {
      //   return {
      //     fname: value,
      //     lname: prevalue.lname,
      //     email: prevalue.email,
      //     city: prevalue.city,
      //   };
      // } 
      // else if (data === "lname") {
      //   return {
      //     fname: prevalue.fname,
      //     lname: value,
      //     email: prevalue.email,
      //     city: prevalue.city,
      //   };
      // } else if (data === "email") {
      //   return {
      //     fname: prevalue.fname,
      //     lname: prevalue.lname,
      //     email: value,
      //     city: prevalue.city,
      //   };
      // } else if (data === "city") {
      //   return {
      //     fname: prevalue.fname,
      //     lname: prevalue.lname,
      //     email: prevalue.email,
      //     city: value,
      //   };
//       // }
//     });
//   };

//   return (
//     <>
//       <form onSubmit={btnclick}>
//         <div className="container">
//           <h1 className="heading">
          
//             hello world.. {fullName.fname}
//             {fullName.lname}
//             {fullName.email}
//             {fullName.city}
//           </h1>
//           <input
//             type="text"
//             placeholder="enter Your Name"
//             name="fname"
//             onChange={change}
//             value={fullName.fname}
//           />
//           <input
//             type="text"
//             placeholder="enter Your  Last Name"
//             name="lname"
//             onChange={change}
//             value={fullName.lname}
//           />
//           <input
//             type="email"
//             placeholder="Example@gmail.com"
//             name="email"
//             onChange={change}
//             value={fullName.email}
//           />
//           <input
//             type="text"
//             placeholder="Enter Youe City"
//             name="city"
//             onChange={change}
//             value={fullName.city}
//           />
//           <input
//             type="text"
//             placeholder="Enter Your Country "
//             name="country"
//             onChange={change}
//             value={fullName.country}
//           />
//           <button className="btn">Click</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default App;




// ***************************************** VDO-47 INSTALL NPM AND USE ******************************************************


// import React,{useState} from "react";
// import "./App.css";


// let value= 0;
// const App =()=>{
// const [incree, setIncree] = useState(value)

// const Plus=()=>{

//   setIncree( incree + 1)
//   }

// const minuse=()=>{
// if (incree > 0) {
//   return setIncree(incree - 1)
// }
// else{
//   alert('you dont give negetive value')
// }
// }


// return<> 
// <h1 style={{textAlign:'center'}}>hello world....{incree} </h1>
// <button className='btn' onClick={Plus} >++</button>
// <button className='btn' onClick={minuse}>--</button>
// </>


// }

// export default App;






// ***************************************** VDO-46 CHALLANGE-8 INCREMENT/ DECREMENT******************************************************




// import React  from "react";
// // import "./App.css";
// import Clock from  'react-digital-clock';
// const App =()=>{
// return<>
// <Clock />
//   </>


// }

// export default App;




// ***************************************** VDO-54 CONTEXT API ******************************************************

//  TO understand cotext api, we need some comopenent
 

// if parrent want to send data any child then we use cotnext api



// import React, { createContext }  from "react";
// // import Compo1 from './Compo1.jsx'
// import "./App.css";
// import Compo2 from "./Compo2.jsx";
// import Context from "./Context";



// const Create= createContext();
// const CreateValue= createContext();
// const CreateValueForContext= createContext();


// const App =()=>{
// return<>
// {/* <Compo1/> */}
// <Create.Provider value= "ganpat koli">
// <Compo2/>
//   </Create.Provider>
      
//   <CreateValue.Provider value= "tata by by khatam">
// <Compo2/>
//   </CreateValue.Provider>


//   <CreateValueForContext.Provider value= "this value for Context ">
// <Context/>
//   </CreateValueForContext.Provider>



// {/* <Compo2/> */}
// </>
// }

// export default App;
// export { Create };
// export { CreateValue,CreateValueForContext };






// ***************************************** VDO-55 USE CONTEXT IN HOOKS ******************************************************

// NOTE:- SEEE CONTEXT COMPOENENT

 

// import React, { createContext }  from "react";
// import './App.css';
// import Context from "./Context";

// const CreateValueForContext= createContext();

// function App() {
//   return<>
//   <CreateValueForContext.Provider value= "this value for Context ">
// <Context/>
//   </CreateValueForContext.Provider>
// </>
// }

// export default App;
// export { CreateValueForContext };





// ***************************************** VDO-55 USE CONTEXT IN HOOKS ******************************************************

// jn bhi render function call hota he tb tb useeffect effective hota he


// import React,{useEffect, useState} from 'react'
// import './App.css';

// function App() {
//   const [num, setNum]= useState(0)

//   // useEffect(()=>{
//   //   alert(`clicme no of time is ${num}`)
//   // })



//   // if we want to call use effect methda only one time then we create, EMPTT ARREY,  outside the use effect


//   useEffect(()=>{
//     alert(`clicme no of time is ${num}`)
//   }, [ num])
//    return <>
// <button onClick={()=>setNum(num + 1 )}> click me {num}</button>



//   </>


// }

// export default App;



// ***************************************** VDO-55 CHALLANGE-7 CHANGE WEBSITE TITLE NO******************************************************


import React,{useEffect, useState} from 'react'
import './App.css';

function App() {
  const [num, setNum]= useState(0)

  useEffect(()=>{
    document.title=`you click ${num}`

  }, [ num])
   return <>
<button onClick={()=>setNum(num + 1 )}> click me {num}</button>



  </>


}

export default App;




















// import React, { useState } from "react";
// import "./App.css";

// const App =()=>{
// return<>

  
// </>


// }

// export default App;

