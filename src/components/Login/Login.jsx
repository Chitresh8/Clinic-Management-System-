import { useState, useRef } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    console.log(email, password);
    emailRef.current.focus();
    passwordRef.current.focus();
  };

  return (
    <div className="login">
      <h1>Login Form</h1>
      <input
        type="email"
        name="email"
        onChange={emailChangeHandler}
        value={email}
        ref={emailRef}
      />
      <input
        type="password"
        name="password"
        onChange={passwordChangeHandler}
        value={password}
        ref={passwordRef}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
