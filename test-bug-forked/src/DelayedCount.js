import React, { useState, useRef } from "react";

export default function DelayedCount() {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);
  countRef.current = count;

  function handleClickAsync() {
    // when set timout is scheduled, it's using the value of count at the time it was scheduled. It's relying ona  clusre to access count asynchronously.
    // When the component re-renders a new closure is created but that doesn't change the value that was initially closed over
    setTimeout(function delay() {
      setCount(countRef.current + 10);
      // state update is asynchronous in React so the old count is still there.
      // count will refer to the updated count 
      // this is called functional update -> it will receive the previous value and return an updated value
      // setCount((count) => count + 10);
    }, 2000);
  }

  function handleClickSync() {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase async</button>
      <button onClick={handleClickSync}>Increase sync</button>
    </div>
  );
}
