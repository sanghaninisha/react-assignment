import React, { useState } from 'react';

function LiveInputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update state with input value
  };

  return (
    <div>
      <form>
        <label>
          Enter Text: 
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default LiveInputForm;
