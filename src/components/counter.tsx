import React from 'react';
import { useState } from 'react';

export const Counter = () => {
  const initialCount = 0;
  let [count, setCount] = useState(initialCount);
  return (
    <div
      className='p-4 grid max-w-xl w-screen'
    >
        <h1 className='text-center py-2'>Counter: { count }</h1>
        <button
            className='p-4 bg-blue-500'
            onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};
