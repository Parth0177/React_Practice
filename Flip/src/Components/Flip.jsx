
import React, { useState } from 'react';

const Flip = () => {
  const [result, setResult] = useState(null);

  const flipCoin = () => {
    const outcomes = ['Heads', 'Tails'];
    const random = Math.floor(Math.random() * 2);
    setResult(outcomes[random]);
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Heads or Tails</h1>
      <button
        onClick={flipCoin}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Flip Coin
      </button>

      {result && (
        <div className="mt-6 text-2xl">
          <p>You got: <strong>{result}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Flip;
