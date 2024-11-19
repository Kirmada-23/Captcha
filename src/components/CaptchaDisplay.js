// CaptchaDisplay.js
import React from "react";

const CaptchaDisplay = ({ captcha }) => (
  <div>
    <img src={`data:image/svg+xml;base64,${btoa(captcha)}`} alt="CAPTCHA" />
  </div>
);

export default CaptchaDisplay;
