import "./Form.css";
import React, { useState } from "react";

function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(" ");

  const [colorUserName, setColorUserName] = useState("");
  const [colorEmail, setColorEmail] = useState("");
  const [colorPassword, setColorPassword] = useState("");
  const [colorConfirmPassword, SetColorConfirmPassword] = useState("");

  const validateForm = (event) => {
    event.preventDefault();
    if (userName.length >= 8) {
      setErrorUserName("");
      setColorUserName("green");
    } else {
      setErrorUserName("Please Insert More Than 8 Alphabets");
      setColorUserName("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setColorEmail("green");
    } else {
      setErrorEmail("Email is Valid");
      setColorEmail("red");
    }
    if (password.length >= 8) {
      setErrorPassword("");
      setColorPassword("green");
    } else {
      setErrorPassword("Please Insert More Than 8 Alphabets");
      setColorPassword("red");
    }
    if (confirmPassword != "" && confirmPassword === password) {
      setErrorConfirmPassword("");
      SetColorConfirmPassword("green");
    } else {
      setErrorConfirmPassword("Verify Password Valid");
      SetColorConfirmPassword("red");
    }
  };

  return (
    <div className="inputForm">
      <form className="form" onSubmit={validateForm}>
        <h1 className="header">Registration Form</h1>
        <div className="formControl">
          <label for="userName">User Name</label>
          <input
            type="text"
            placeholder="Insert User Name"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            style={{ borderColor: colorUserName }}
          />
          <small style={{ color: colorUserName }}>{errorUserName}</small>
        </div>
        <div className="formControl">
          <label for="email">E-mail</label>
          <input
            type="text"
            placeholder="Insert e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ borderColor: colorEmail }}
          />
          <small style={{ color: colorEmail }}>{errorEmail}</small>
        </div>
        <div className="formControl">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Insert password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ borderColor: colorPassword }}
          />
          <small style={{ color: colorPassword }}>{errorPassword}</small>
        </div>
        <div className="formControl">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Insert password again"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            style={{ borderColor: colorConfirmPassword }}
          />
          <small style={{ color: colorConfirmPassword }}>
            {errorConfirmPassword}
          </small>
        </div>
        <button className="submit" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
