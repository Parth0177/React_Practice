//import React, { useState } from 'react'

////const Currency = () => {
//nst [currency, setCurrency]= useState();
////  const [result, setResult]= useState();

////  const convert= ()=>{
    //let USD=83.5;
  ////  let INR= currency* USD;
   // setResult(INR);
 // }
  //turn (
  //  <div className="container">
    //  <h1>Enter the amount you want to convert</h1>
  //    <input type="number" placeholder='Enter the number you want to convert' value={currency} />
 //     <button className="result" onClick={convert}>
        //nvert
//      </button>
      //iv className="show-result"
          // {result ? <h2>Converted Amount: {result} INR</h2> : <h2>Please enter a value to convert</h2>}
   //   </div>
 ////   </div>
  //)
//}//

////port default Currenc//y

import React, { useState } from 'react';

const Currency = () => {
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const USD = 83.5;
    const INR = parseFloat(currency) * USD;
    if (!isNaN(INR)) {
      setResult(INR.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h1>Enter the amount you want to convert</h1>
      <input
        type="number"
        placeholder="Enter the number you want to convert"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <button className="result" onClick={convert}>
        Convert
      </button>
      <div className="show-result">
        {result !== null ? (
          <h2>Converted Amount: ₹{result} INR</h2>
        ) : (
          <h2>Please enter a value to convert</h2>
        )}
      </div>
    </div>
  );
};

export default Currency;
