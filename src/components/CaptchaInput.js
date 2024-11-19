// CaptchaInput.js
import React from "react";

const CaptchaInput = ({ userInput, setUserInput, submitCaptcha }) => (
  <div>
    <input
      type="text"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />
    <button onClick={submitCaptcha}>Submit</button>
  </div>
);

export default CaptchaInput;
