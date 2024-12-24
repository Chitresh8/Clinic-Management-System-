// import { useState, useRef } from "react";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const buttonRef = useRef(null);

//   const formHandleSubmit = (event) => {
//     event.preventDefault();
//   };

//   const emailChangeHandler = (event) => {
//     setEmail(event.target.value);
//   };

//   const passwordChangeHandler = (event) => {
//     setPassword(event.target.value);
//   };

//   const loginHandler = () => {
//     if (!email && !password) {
//       setError("Enter Email Id and Password");
//     } else if (email && !password) {
//       setError("Password is not entered. Please enter");
//     } else if (!email && password) {
//       setError("Email is not entered. Please enter");
//     } else if (email === "chitresh@gmail.com" && password === "abcd1234") {
//       setError("Welcome to Home Page");
//     } else {
//       setError("Invalid Credentials..!");
//     }
//   };

//   const handleEmailKeyPress = (e) => {
//     if (e.key === "Enter") {
//       passwordRef.current.focus();
//     }
//   };

//   const handlePasswordKeyPress = (e) => {
//     if (e.key === "Enter") {
//       buttonRef.current.focus();
//       loginHandler();
//     }
//   };

//   return (
//     <div className="login">
//       <form onSubmit={formHandleSubmit}>
//         <h1>Login Form</h1>
//         <input
//           type="email"
//           name="email"
//           onChange={emailChangeHandler}
//           value={email}
//           ref={emailRef}
//           onKeyDown={handleEmailKeyPress}
//         />
//         <input
//           type="password"
//           name="password"
//           onChange={passwordChangeHandler}
//           value={password}
//           ref={passwordRef}
//           onKeyDown={handlePasswordKeyPress}
//         />
//         <button type="submit" ref={buttonRef}>
//           Login
//         </button>
//         {error && <h3 style={{ color: error === "Welcome to Home Page" ? "green" : "red" }}>{error}</h3>}
//       </form>
//     </div>
//   );
// };

// code optimzation

// essages.

// Use useCallback for Handlers: This can help prevent unnecessary re-renders if the handlers are passed down to child components.

// Use useEffect for Side Effects: If you need to perform side effects based on state changes, consider using useEffect.

// Here’s the optimized code:

// javascript
// Insert Code
// Run
// Copy code
import { useState, useRef, useCallback } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  const formHandleSubmit = (event) => {
    event.preventDefault();
    loginHandler();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const loginHandler = useCallback(() => {
    const { email, password } = formData;

    if (!email && !password) {
      setError("Enter Email Id and Password");
    } else if (email && !password) {
      setError("Password is not entered. Please enter");
    } else if (!email && password) {
      setError("Email is not entered. Please enter");
    } else if (email === "chitresh@gmail.com" && password === "abcd1234") {
      setError("Welcome to Home Page");
    } else {
      setError("Invalid Credentials..!");
    }
  }, [formData]);

  const handleKeyPress = (e, nextRef) => {
    if (e.key === "Enter") {
      nextRef.current.focus();
      if (nextRef === buttonRef) {
        loginHandler();
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={formHandleSubmit}>
        <h1>Login Form</h1>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          ref={emailRef}
          onKeyDown={(e) => handleKeyPress(e, passwordRef)}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          ref={passwordRef}
          onKeyDown={(e) => handleKeyPress(e, buttonRef)}
        />
        <button
          type="submit"
          ref={buttonRef}
        >
          Login
        </button>
        {error && (
          <h3
            style={{
              color: error === "Welcome to Home Page" ? "green" : "red",
            }}
          >
            {error}
          </h3>
        )}
      </form>
    </div>
  );
};
