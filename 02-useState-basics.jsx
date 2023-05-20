import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleCickEvent = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h4>you clicked: {count}</h4>
      <button type="button" className="btn" onClick={handleCickEvent}>
        Increase
      </button>
    </>
  );
};

export default UseStateBasics;
