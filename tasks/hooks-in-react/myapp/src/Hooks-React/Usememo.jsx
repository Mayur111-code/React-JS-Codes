import React, { useState, useMemo } from "react";

function Usememo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // Memoize the calculation ✅
  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h1>Count: {count}</h1>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default Usememo;

// usememo(fuction,[])
// const memovizedvalue  = usemeo(()={

// },[dep])