// import React from "react";
import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0)
    
useEffect(()=>{
    document.title = `WhatsApp(${count})`
});

function updateState(){
    setCount(count+1)
};

function updateState1(){
    setCount(count-1)
};
  return (
    <div>
        <h1 style={{color:"white"}}>useState AND useEffect</h1>
        <h2 style={{color:"white"}}>
            {count}
        </h2>
        <button style={{ cursor:"pointer",backgroundColor:"red",margin:"10px",borderRadius:"8px",width:"10em", padding:"10px", fontSize:"15px"}} onClick={updateState1} >dec</button>
        <button style={{cursor:"pointer",backgroundColor:"#35f435",borderRadius:"8px",margin:"10px",width:"10em", padding:"10px", fontSize:"15px"}} onClick={updateState}>inc</button>

<h3 style={{color:"white"}}>👉what is useState hook <br />
The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.
  </h3>
  <h3 style={{color:"white"}}>👉what is useefect hook? <br />
  The useEffect Hook allows you to perform side effects in your components. like whenever the state changes then useEffect should perform something.</h3> <br />
  <h3 style={{color:"white"}}>👉what is useReducer hook? <br />
  useReducer is usually preferable to useState when we have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets us optimize performance for components that trigger deep updates because we can pass dispatch down instead of callbacks.</h3> <br />
  <h3 style={{color:"white"}}>👉what is contextApi hook? <br />
  its a built-in API, it makes it possible tp pass data from parent to children and avoid props drilling</h3> <br />
  <h3 style={{color:"white"}}>👉what is useRef hook? <br />
  useRef hook use to manupulating dom element</h3><br />
  <h3 style={{color:"white"}}> 👉what is useMemo hook? <br />
  useMemo used for render only one state</h3> <br />
  <h3 style={{color:"white"}}>👉what is useCallback hook? <br />
  usecallback returns memorized function
  memo returns memorized value only</h3>


    </div>
  )
}

export default Hooks