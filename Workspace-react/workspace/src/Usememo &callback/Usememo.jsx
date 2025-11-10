import React, { useMemo, useState } from "react";

function ExpensiveComponent() {
  const [number, setNumber] = useState(5);
  const [theme, setTheme] = useState("light");

  const doubleNumber = useMemo(() => {
    console.log("🔄 Calculating...");
    return slowDouble(number);
  }, [number]); // runs only when number changes

  const style = {
    background: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <div style={style}>
      <h3>Number: {doubleNumber}</h3>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

function slowDouble(n) {
  console.log("⏳ Slow calculation...");
  for (let i = 0; i < 1000000000; i++)  // fake delay
  return n * 2;
}

export default ExpensiveComponent