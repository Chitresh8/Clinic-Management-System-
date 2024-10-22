import { useState, useRef } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  const formHandleSubmit = (event) => {
    event.preventDefault();
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    emailRef.current.focus();
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    passwordRef.current.focus();
  };

  const loginHandler = () => {
    const errorMessage =
      email === "chitresh@gmail.com" && password === "abcd1234" ? (
        <p style={{ color: "green" }}>Welcome to Home Page</p>
      ) : (!email && !password) || (email === "" && password === "") ? (
        <p style={{ color: "red" }}>Enter Email Id and Password</p>
      ) : email && !password ? (
        <p style={{ color: "red" }}>Password is not entered.Please enter</p>
      ) : !email && password ? (
        <p style={{ color: "red" }}>Email is not entered.Please enter</p>
      ) : (
        <p style={{ color: "red" }}>Invalid Credentials..!</p>
      );
    setError(errorMessage);
    console.log("Password==>", password);
  };

  const handleEmailKeyPress = (e) => {
    if (e.key === "Enter") {
      passwordRef.current.focus();
    }
  };

  const handlePasswordKeyPress = (e) => {
    if (e.key === "Enter") {
      buttonRef.current.focus();
    }
  };

  return (
    <div className="login">
      <form onSubmit={formHandleSubmit}>
        <h1>Login Form</h1>
        <input
          type="email"
          name="email"
          onChange={emailChangeHandler}
          value={email}
          ref={emailRef}
          onKeyDown={handleEmailKeyPress}
        />
        <input
          type="password"
          name="password"
          onChange={passwordChangeHandler}
          value={password}
          ref={passwordRef}
          onKeyDown={handlePasswordKeyPress}
        />
        <button
          type="submit"
          onClick={loginHandler}
          ref={buttonRef}
        >
          Login
        </button>
        <h3>{error}</h3>
      </form>
    </div>
  );
};
