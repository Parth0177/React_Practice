import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
  const [count,setCount] = useState(0)
  const add= ()=>{
    if(count===35){
      setCount(count=35)
    }else{
      setCount(count+1)
    }
  }
  const sub =()=>{
    if(count===0){
      setCount(count=0)
    }else{
      setCount(count-1)
    }
  }
  return (
    <div className='Box'>
      <h1>To Add 1 Press Add && To Substract 1 Press Sub (Range is from 1-35)</h1>
      <p>The Initial Value is <span>{count}</span></p>
      <div className='Buttons'>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
      </div>
    </div>
  )
}

export default Counter