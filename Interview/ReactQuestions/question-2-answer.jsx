import React, { useState } from "react";

const CorrectInputComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

const CorrectParentComponent = () => {
  return (
    <div>
      <h2>Correct Input Component State Management</h2>
      <CorrectInputComponent />
    </div>
  );
};

/*























*/

/* Encapsulation and Reusability: By managing its own state, the InputComponent becomes self-contained and reusable. It can be used anywhere in the application without worrying about its parent's state or any side effects from other components.

Simplicity and Clarity: Keeping the state management localized to the input component makes the code cleaner and more straightforward. The logic for handling the input value is contained within the component, making it easier to understand and maintain.

Preventing Unnecessary Re-renders: When the state of the input is managed inside the input component, any changes to the input value will only cause a re-render of the input component itself, not the entire parent component or other unrelated components. This optimization reduces the rendering workload and improves performance.

Isolation of Concerns: Managing state internally allows the input component to focus solely on handling the input logic without being coupled to the logic of its parent component. This separation of concerns promotes better code organization and makes the codebase more maintainable.*/
