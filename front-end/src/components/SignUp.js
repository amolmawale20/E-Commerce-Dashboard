// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/");
//   };

//   const [formErr, setFormErr] = useState({});

//   JSON.stringify({
//     name: name,
//     email: email,
//     password: password,
//   });
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     //console.log(email);
//   };
//   const validate = () => {
//     let allErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const isValidEmail = emailRegex.test(email);

//     if (name.length == 0) {
//       allErrors.nameErr = "Name field is required";
//     } else {
//       allErrors.nameErr = "";
//     }
//     if (!isValidEmail) {
//       allErrors.emailErr = "Please enter a valid Email";
//     } else {
//       allErrors.emailErr = "";
//     }
//     if (password.length == 0) {
//       allErrors.passwordErr = "Please enter a valid Password";
//     } else {
//       allErrors.passwordErr = "";
//     }
//     return allErrors;
//   };

//   const handleLogin = async () => {
//         console.warn("name,email, password", name,email, password);
//         let result = await fetch("http://localhost:5000/register", {
//           method: "post",
//           body: JSON.stringify({ name,email, password }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         result = await result.json();
//         console.warn(result);

//     localStorage.setItem("user", JSON.stringify(result.result));
//     localStorage.setItem("token", JSON.stringify(result.auth));
//     //used to store data in localstorage

//     setFormErr(validate());

//     console.log(
//       "error",
//       formErr.nameErr.length == 0 &&
//         formErr.emailErr.length == 0 &&
//         formErr.passwordErr.length == 0
//     );
//     if (
//       formErr.nameErr.length == 0 &&
//       formErr.emailErr.length == 0 &&
//       formErr.passwordErr.length == 0
//     ) {
//       console.log("Valid data");
//       navigate("/");
//     } else {
//       console.log("Hello world");
//     }
//   };
//   return (
//     <div className="register">
//       <h1>Register</h1>
//       <div>
//         <input
//           className="inputBox"
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter Your Name"
//         />
//         <span className="form-error" style={{ color: "red" }}>{formErr.nameErr}</span>
//       </div>

//       <div>
//         <input
//           className="inputBox"
//            type="email"
//           value={email}
//           onChange={(e) => handleEmail(e)}
//           placeholder="Enter Email"
//         />
//         <span className="form-error"  style={{ color: "red"}}>{formErr.emailErr}</span>
//       </div>
//       <div>
//         <input
//           className="inputBox"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter Password"
//         />
//         <span className="form-error" style={{ color: "red" }}>{formErr.passwordErr}</span>
//       </div>

// <button onClick={handleLogin} className="appButton" type="button">
//        SignUP
//        </button>
//     </div>
//   );
// };
// export default SignUp;

//------------------------------------------------------------------------------------

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//   const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordType, setPasswordType] = useState("password");

//   const togglePasswordVisibility = (event) => {
//     if (event.type === "mousedown") {
//       setShowPassword(true);
//       setPasswordType("text");
//     } else {
//       setShowPassword(false);
//       setPasswordType("password");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordPattern =
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//     if (!name) {
//       setError("Please enter your name");
//       return;
//     } else if (!email) {
//       setError("Please enter your email");
//       return;
//     } else if (!password) {
//       setError("Please enter your password");
//       return;
//     } else if (!emailPattern.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     } else if (!passwordPattern.test(password)) {
//       setError(
//         "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
//       );
//       return;
//     }

//     // Validate input
//     if (!name || !email || !password) {
//       setError("Please enter your name, email, and password.");
//       return;
//     }

//     // Save user info to database
//     const response = await fetch("http://localhost:5000/register", {
//       method: "POST",
//       body: JSON.stringify({ name, email, password }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       alert("User created successfully!");
//     } else {
//       setError("Failed to create user.");
//     }
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value.toLowerCase())}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <div className="password-input">
//             <input
//               type={passwordType}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               className="toggle-password"
//               onMouseDown={togglePasswordVisibility}
//               onMouseUp={togglePasswordVisibility}
//             >
//               <FontAwesomeIcon
//                 icon={faEye}
//                 className={showPassword ? "hidden" : ""}
//                 aria-hidden="true"
//               />
//               {/* <FontAwesomeIcon
//                 icon={faEyeSlash}
//                 className={showPassword ? "" : "hidden"}
//                 aria-hidden="true"
//               /> */}
//               <span className="sr-only">
//                 {showPassword ? "Hide password" : "Show password"}
//               </span>
//             </button>
//           </div>
//         </label>

//         <br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;

import React, { useState } from "react";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  JSON.stringify({
    name: name,
    email: email,
    password: pass,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passError) {
      console.log(email);
      console.log(pass);
    }
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;

    setEmail(value.toLowerCase()); // convert email to lowercase
    const isValidEmail = setEmailError(
      value
        ? /\S+@\S+\.\S+/.test(value)
          ? ""
          : "Email address is invalid"
        : "Email address is required"
    );
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let allErrors = {};
    if (name.length == 0) {
      allErrors.nameErr = "Name field is required";
    } else {
      allErrors.nameErr = "";
    }
    if (!isValidEmail) {
      allErrors.emailErr = "Please enter a valid Email";
    } else {
      allErrors.emailErr = "";
    }
    if (!passwordPattern == 0) {
      allErrors.passwordErr = "Please enter a valid Password";
    } else {
      allErrors.passwordErr = "";
    }
    if (!name || !email || !pass) {
      setError("Please enter your name, email, and password.");
      return;
      return allErrors;
    }
    const handlePassChange = (e) => {
      const { value } = e.target;
      setPass(value);
      setPassError(
        value
          ? value.length >= 8
            ? ""
            : "Password must be at least 8 characters long"
          : "Password is required"
      );
    };
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        {emailError && <p className="error">{emailError}</p>}
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={handlePassChange}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        {passError && <p className="error">{passError}</p>}
        <button className="link-btn" type="submit">
          Sign Up
        </button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default SignUp;
