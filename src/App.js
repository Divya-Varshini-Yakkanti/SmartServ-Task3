import logo from "./logo.svg";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import picture from "./pic.png";

import "./styles.css";

function App() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "divyavarshini65@gmail.com",
      password: "SmartServTest@123",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(uname.value)) {
      setErrorMessages({ name: "uname", message: "Invalid email format" });
      return;
    }

    // Validate password format
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@])[A-Za-z0-9@]{8,}$/;
    if (!passwordPattern.test(pass.value)) {
      setErrorMessages({ name: "pass", message: "Invalid password format" });
      return;
    }

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (pass.value !== "SmartServTest@123") {
      // Invalid password
      setErrorMessages({ name: "pass", message: "Invalid password" });
    } else {
      setIsSubmitted(true);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label style={{ color: "white" }}>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label style={{ color: "white" }}>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <img
          src={picture}
          alt="Logo"
          width="70"
          height="70"
          style={{ marginLeft: "60px" }}
        />
        <div className="title">
          <span style={{ color: "#56E728", marginLeft:"25px" }}>SMART</span>
          <span style={{ color: "white" }}> SERV</span>
        </div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
