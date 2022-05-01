import React, { useState } from 'react';
import './Counter.css'
function Counter(props) {
  const [count, setcount] = useState(10)

  const increamentCounter = () => {
    setcount(() => count + 1)
  }

  const decreamentCounter = () => {
    if(count === 0){
      count = 0;
    } else{
      setcount (() => count - 1)
    }
  }

  return (
    <div>
      <button className='same' onClick={() => decreamentCounter()}>-</button>
      <span>{count}</span>
      <button className='same' onClick={() => increamentCounter()}>+</button>
    </div>
  );
}

export default Counter;