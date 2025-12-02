import React,{useState,useEffect} from 'react'

export const List = ({getNumber}) => {

    const [item, setitem] = useState([])

    useEffect(()=>{
        setitem(getNumber())
        console.log("number setted");
    },[getNumber])
  return (
    <div>
        {item.map((data,index)=>{
            return <p key={index}>{data}</p>
        })}
    </div>
  )
}
