import React,{useCallback, useState} from 'react'
import { List } from './List'

export const UseCallback = () => {
    const [number, setnumber] = useState(0)
    const [Theme, setTheme] = useState(false)
    
    const getNumber = useCallback(()=>{
        return [number+1,number+2,number+3]
    },[number])

    const themeStyle ={
        backgroundColor:Theme?"white":"black",
        color:Theme?"black":"white"
    }

  return (
    <div style={themeStyle}>
        <input
        type='number'
        value={number}
        onChange={(e)=>setnumber(parseInt(e.target.value) || 0)}
        />
        <button onClick={()=>setTheme((curr)=>!curr)}>Toggle Theme</button>
        <List getNumber={getNumber}/>
    </div>
  )
}
