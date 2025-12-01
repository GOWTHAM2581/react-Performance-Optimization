import React, { useEffect, useMemo, useState } from 'react'

const App = () => {
  const[number,setNumber] = useState(0);
  const[dark,setDark] = useState(false);

  const themeStyle = useMemo(()=>{
    return {
    backgroundColor:dark?"black":"white",   // memorization memory optimization inclease efficiency
    color:dark?"white":"black"
  }
  },[dark])
  // const[doubleNumber,setDoubleNumber] = useState(0)  // exrta state Varible 
  // useEffect(()=>{                                    // memory consumptions
  //   setDoubleNumber(slowFunction(number))
  // },[number])
   
  // const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)                    //which can be done by single hook
  },[number])

  return (
    <>
       <input type='number' value={number} 
       onChange={(e)=>setNumber(e.target.value)}/>
       <button onClick={()=>setDark((curr)=>!curr)} >Toggle Theme</button>
       <h1 style={themeStyle}>{doubleNumber}</h1>
    </>
  )
}

export default App;

function slowFunction(num){
   for(let i=0;i<1000000000;i++){}
   return num*2
}
