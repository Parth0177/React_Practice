import React from 'react'
import { useState } from 'react'

const Tables = () => {
  const [Number, setNumber]= useState('');
  const [Table, setTable]= useState([]);

  const generateTable =()=>{
    const num = parseInt(Number)
    if(!isNaN(num)){
      const result=[];
      for (let i=1;i<=10;i++){
        result.push(`${num}x ${i}= ${num*i}`);

      }
      setTable(result);
    }else{
      alert("Please enter a valid number");
      setTable([]);
    }
  }

  return (
    <div>
      <input type="number" value={Number} placeholder='Enter the no.' onChange={(e)=>{
        setNumber(e.target.value);
      }} />
      <button onClick={generateTable}>Generate</button>

      <ul>
        {Table.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default Tables