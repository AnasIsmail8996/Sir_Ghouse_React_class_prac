


// import './App.css';
// const loder = false;
// function App() {
//   function foo(a){
//     console.log(a)
//   }
//   return (
//     <div>
// {loder ? <h5>Loading...</h5> : <h4>Anas_ISmail</h4>}
// <button onClick={()=>foo('Simt')}>Click</button>
//     </div>
//   );
// }

// export default App;


// import {    SCHOOL_NAME, STUDENT_NAME} from './uitils/constant'
// import  * as constant from './uitils/constant'
// import Button from './Uitils/constant';
// import {QRCode} from 'antd';
// function App(){
 
// const foo =(name)=>{
//   console.log(name)
// }
 


// return(

// <div>
// <QRCode color='pink' value={'03218996191'} />
// <Button value='Anas'   color='pink'  foo={foo} />
/* <Button value='Ismail' color='purple' />
<Button value='HZ' /> */


/* <h3>{SCHOOL_NAME}</h3>
<h3>{STUDENT_NAME}</h3> */

//</div>

// )

// }


// export default App;


// import React from "react";

//  import {useState , useEffect } from "react";
//  import Button from "./Button/index";


//  function App(){
//    const [data, setData]= useState('')
//      const [showButton, setShowButton]= useState(true)



// useEffect(()=>{
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>setData(json))
// },[])
//  console.log('data', data);



//  useEffect(()=>{

// console.log(setShowButton);
//  },[setShowButton])
// return(

//     <div>
// {showButton && <Button /> }


// <br/>
// <button onClick={()=>setShowButton(false)}>Hide</button>
//     </div>
// )

// }



//  export default App;



// yaha se new kamm tha baqi hain

// import React from "react";

// import Button from "./Button/index";
// import { useState, useRef } from "react";



// function App(){
// const [counter, setCounter] =useState(0)
// const useRefDocH =useRef(null)
//   return(

// <div>

//   <Button />

//   <br/>
//   <br/>
//   <br/>
//   <h1 ref={useRefDocH}>{counter}</h1>

// <button onClick={()=> {
//   console.log(useRefDocH.current);
// }}>Increment_2</button>

//   <button onClick={()=>setCounter(counter + 1)}>Increment</button>
//   {/* <button  onClick={()=>setCounter(oldValue =>oldValue + 1)}>Increment</button> */}
// </div>

//   )
// }


//  export default App;


//yaha se calss number 44 part 1 & 2 start howah



import React from "react";
import Child from "./components/Button/Child";
import { useState, useCallback} from "react";

function App(){

const [count, setCount] = useState(0)
const [show, setShow] = useState(false)

const getData =useCallback(()=>{
  return ['one','two']
},[show])

console.log('Rerender');

  return(

    <div>

<Child getData={getData} />
<h1>{count}</h1>

<button onClick={()=>setCount(oldVlaue => oldVlaue + 1)}>Increment</button>

<button disabled={count < 1}  onClick={()=>setCount(oldVlaue => oldVlaue -1)}>Decrement</button>
   <button onClick={()=>setShow(!show)}>{show ? 'hello' : 'go'}</button>
    </div>
  )
}

export default App;