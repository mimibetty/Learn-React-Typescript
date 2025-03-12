import React, { useState } from 'react';

function IncrementPage() {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber((prev) => prev + 10);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Increment Number by 10</h1>
      <div
        style={{
          width: '100px',
          height: '50px',
          border: '1px solid #ddd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        {number}
      </div>
      <button
        onClick={incrementNumber}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add 10
      </button>
    </div>
  );
}

export default IncrementPage;