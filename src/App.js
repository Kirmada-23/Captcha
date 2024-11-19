import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [coinBalance, setCoinBalance] = useState(0);

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const fetchCaptcha = async () => {
    const response = await axios.get("/api/captcha");
    setCaptcha(response.data.captcha);
  };

  const submitCaptcha = async () => {
    const response = await axios.post("/api/validate", { userInput });
    if (response.data.valid) {
      setCoinBalance(response.data.newBalance);
      fetchCaptcha();
    } else {
      alert("Incorrect CAPTCHA");
    }
  };

  return (
    <div className="container">
      <div className="captcha-image">
        <img src={`data:image/svg+xml;base64,${btoa(captcha)}`} alt="CAPTCHA" />
      </div>
      <div className="captcha-info">Special Alpha Numeric Case Sensitive</div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter Captcha"
        />
        <button onClick={submitCaptcha}>Submit</button>
      </div>
      <div className="coin-balance">
        <div className="coin">{coinBalance}</div>
      </div>
      <div className="note">
        <p>* All words are case sensitive.</p>
        <p>* Calculative CAPTCHAs must be solved.</p>
        <p>* Length of CAPTCHAs will be between 6 to 12 characters.</p>
        <p>* The result can also be negative number e.g. (5-8=-3).</p>
      </div>
    </div>
  );
}

export default App;
