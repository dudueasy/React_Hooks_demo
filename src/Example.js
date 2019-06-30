// this component showcases Hooks API: useState,  useEffect
import React, {useState, useEffect} from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `button is clicked ${count} times`;
  });

  return (
    <>
      <p>You clicked {count} times</p>
      <div>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
        </div>
      <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        -
      </button>
      </div>
    </>
  );
}

export {Example};