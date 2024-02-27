import React, { useState } from 'react';



function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card text-center">
        <div className="card-header">
          <h1>Counter</h1>
        </div>
        <div className="card-body">
          <h2 className="card-title display-1">{count}</h2>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mx-2" onClick={handleIncrement}>
              Increment
            </button>
            <button className="btn btn-danger mx-2" onClick={handleDecrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;
