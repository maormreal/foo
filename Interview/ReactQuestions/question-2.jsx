import React, { useState } from "react";

const IncorrectInputComponent = ({ inputValue, onInputChange }) => {
  return (
    <div>
      <input type="text" value={inputValue} onChange={onInputChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>My form</h2>
      <IncorrectInputComponent inputValue={inputValue} onInputChange={handleInputChange} />
      <IncorrectInputComponent inputValue={secondInputValue} onInputChange={setSecondInputValue} />
    </div>
  );
};

/*



*/
