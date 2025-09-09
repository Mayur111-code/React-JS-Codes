import React, { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
      }}
    >
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch
      </button>
    </div>
  );
}

export default Theme;
