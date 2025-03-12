import React, { useState } from 'react';

function RandomNumberPage() {
  const [number, setNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generate random number 1-100
    setNumber(randomNum);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Random Number Generator</h1>
      <button
        onClick={generateRandomNumber}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Generate Random Number
      </button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
}

export default RandomNumberPage;