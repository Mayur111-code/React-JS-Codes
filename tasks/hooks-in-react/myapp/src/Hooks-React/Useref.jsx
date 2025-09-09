// import React from 'react'
// import { useRef, useState} from 'react'


// const Useref = () => {
//     const inputRef = useRef(null);

//     const[text, setText]=useState("");

//     const handlefoucs = () =>{
// inputRef.current.focus();
// console.log("input value is", inputRef.current.value);

// setText(inputRef.current.value);

// inputRef.current.value= "hello from useref!"

//     };

// const esr = userrf(i value);//syntax

//   return (
//     <div>

// <hr />
// <hr />
// <h1> {text} </h1>

// <div>
//     <input ref={inputRef} type="text" placeholder=' type something' />
//     <br />

//     <button onClick={()=>handlefoucs()}>Input btn</button>
// </div>




//     </div>
//   )
// }

// export default Useref


import React, { useRef, useState } from 'react';

const Useref = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const handlefoucs = () => {
    inputRef.current.focus();
    console.log("input value is", inputRef.current.value);
    setText(inputRef.current.value);
    inputRef.current.value = "hello from useref!";
  };

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#f4f7fb",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "#333",
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {text}
      </h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="type something"
        style={{
          width: "280px",
          padding: "10px 14px",
          fontSize: "16px",
          border: "2px solid #ccc",
          borderRadius: "8px",
          outline: "none",
          marginBottom: "15px",
        }}
      />

      <button
        onClick={handlefoucs}
        style={{
          padding: "10px 20px",
          background: "#4a90e2",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Input btn
      </button>
    </div>
  );
};

export default Useref;
