// // working dont do anthing

// // import React, { useState } from "react";
// // import styled from "styled-components";
// // import { useNavigate } from "react-router-dom";
// // import { BiLogInCircle } from "react-icons/bi";
// // import { RiLockPasswordLine } from "react-icons/ri";

// const Login = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ email: "", password: "" });

//   const handleInputs = (e) => {
//     console.log(e);
//     let name = e.target.name;
//     let value = e.target.value;
//     setUser({ ...user, [name]: value });
//   };
//   const PostData = async (e) => {
//     e.preventDefault();
//     const { email, password } = user;
//     if (!email || !password) {
//       // Display an error message to the user and prevent the request
//       window.alert("Please enter both email and password.");
//       return;
//     }
//     try {
//       const res = await fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (data.status === 400) {
//         window.alert("Invalid Login");
//         console.log("Invalid Login");
//       } else {
//         window.alert(" Login done");
//         console.log(" Login done");
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Wrapper>
//       <div className="login">
//         <div className="container grid grid-two-column">
//           <div className="data">
//             <h1>Login</h1>
//             <form method="POST">
//               <div className="form-group ">
//                 <label htmlFor="email">
//                   <BiLogInCircle />
//                 </label>
//                 <input
//                   type="email"
//                   value={user.email}
//                   id="email"
//                   name="email"
//                   onChange={handleInputs}
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>

//               <div className="form-group ">
//                 <label htmlFor="password">
//                   <RiLockPasswordLine />
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={user.password}
//                   id="password"
//                   onChange={handleInputs}
//                   placeholder="Password"
//                   required
//                 />
//               </div>

//               <div className="form-button">
//                 <input
//                   type="submit"
//                   name="login"
//                   value="login"
//                   onClick={PostData}
//                 />
//               </div>
//             </form>
//           </div>
//           <div className="image">
//             <figure>
//               <img src="/images/hero.jpg" alt="" />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 7rem 0;
//   display: flex;
//   margin: 0 auto 0;
//   width: 80%;
//   align-items: center;
//   justify-content: center;

//   .login {
//     width: 100%;
//     justify-content: flex-start;
//     padding: 3rem;
//     background-color: ${({ theme }) => theme.colors.container};
//   }
//   .data {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 5rem;
//   }

//   form {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     // justify-content: space-evenly;
//     flex-grow: 1;
//     padding-bottom: 1rem;
//     align-items: center;
//     gap: 2rem;
//   }
//   label {
//     font-size: 3rem;
//     /* text-align: center; */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 1rem;
//   }
//   input {
//     border-radius: 5px;
//   }

//   figure {
//     width: 100%;
//     height: 100%;
//     width: 100%;
//     display: flex;
//     height: 100%;
//     align-items: center;
//     justify-content: center;
//   }
//   img {
//     width: 100%;
//   }
//   .image {
//     width: 100%;
//     height: 100%;
//   }
//   .form-group {
//     display: flex;
//     width: max-content;
//     // grid-template-columns: repeat(2, 1fr);
//     gap: 0;
//   }
// `;
// export default Login;

// new workinggg usee as a register

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { FaTimes, FaCheck, FaInfoCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [validation, setValidation] = useState({
//     email: false,
//     password: false,
//   });
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setValidation({ ...validation, [name]: false });
//     setErrMsg("");
//   };

//   const handleValidation = () => {
//     const { email, password } = formData;
//     const validEmail = emailRegex.test(email);
//     const validPassword = passwordRegex.test(password);
//     setValidation({ email: validEmail, password: validPassword });
//   };

//   useEffect(() => {
//     handleValidation();
//   }, [formData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     if (!validation.email || !validation.password) {
//       setErrMsg("Invalid email or password");
//       return;
//     }

//     try {
//       const res = await fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (data.status === 400) {
//         setErrMsg("Invalid Login");
//       } else {
//         setSuccess(true);
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Wrapper>
//       {success ? (
//         <div className="success">
//           <h1>Success!</h1>
//         </div>
//       ) : (
//         <div className="form_section">
//           <div className="login container">
//             <p
//               className={errMsg ? "errmsg" : "offscreen"}
//               aria-live="assertive"
//             >
//               {errMsg}
//             </p>

//             <h1>Login</h1>

//             <form method="POST">
//               <label htmlFor="email">
//                 Email:
//                 <span className={validation.email ? "valid" : "hide"}>
//                   <FaCheck />
//                 </span>
//                 <span className={validation.email ? "hide" : "invalid"}>
//                   <FaTimes />
//                 </span>
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 aria-invalid={!validation.email ? "true" : "false"}
//                 aria-describedby="emailnote"
//               />
//               <p
//                 id="emailnote"
//                 className={validation.email ? "offscreen" : "instructions"}
//               >
//                 <FaInfoCircle />
//                 4 to 24 characters. <br />
//                 must begin with a letter. <br />
//                 letters, numbers, underscores, hyphens allowed.
//               </p>

//               <label htmlFor="password">
//                 Password:
//                 <span className={validation.password ? "valid" : "hide"}>
//                   <FaCheck />
//                 </span>
//                 <span className={validation.password ? "hide" : "invalid"}>
//                   <FaTimes />
//                 </span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//                 aria-invalid={!validation.password ? "true" : "false"}
//                 aria-describedby="passwordnote"
//               />
//               <p
//                 id="passwordnote"
//                 className={validation.password ? "offscreen" : "instructions"}
//               >
//                 <FaInfoCircle />
//                 8 to 24 characters. <br />
//                 must include uppercase and lowercase letters, a number, and a
//                 special character. <br />
//                 Allowed special characters: !@#$%*
//               </p>

//               <input
//                 type="submit"
//                 onClick={handleSubmit}
//                 disabled={!validation.email || !validation.password}
//                 value="Login"
//               />
//             </form>
//           </div>
//         </div>
//       )}
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 3rem;
//   height: 100vh;
//   .form_section {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .login {
//     width: max-content;
//     /* max-width: 420px; */
//     /* min-height: 420px; */
//     height: max-content;
//     display: flex;
//     flex-direction: column;
//     -webkit-box-pack: start;
//     justify-content: flex-start;
//     padding: 4rem;
//     background-color: ${({ theme }) => theme.colors.container};
//   }
//   h1 {
//     text-align: center;
//   }
//   form {
//     padding: 2rem;
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     flex-grow: 1;
//     padding-bottom: 1rem;
//   }

//   a,
//   a:visited {
//     color: #fff;
//   }
//   input[type="submit"] {
//     margin: 1rem auto 0;
//   }
//   input[type="text"],
//   input[type="password"],
//   button,
//   textarea {
//     text-transform: none;
//     font-family: ${({ theme }) => theme.font.fontFamily};
//     font-size: 2rem;
//     padding: 0.25rem;
//     border-radius: 0.5rem;
//   }

//   label,
//   button {
//     margin-top: 1rem;
//   }

//   button {
//     padding: 0.5rem;
//   }

//   .instructions {
//     font-size: 0.75rem;
//     border-radius: 0.5rem;
//     background: ${({ theme }) => theme.colors.container};
//     color: ${({ theme }) => theme.colors.black};
//     padding: 0.25rem;
//     position: relative;
//     // bottom: -10px;
//   }

//   .instructions > svg {
//     margin-right: 0.25rem;
//   }

//   .offscreen {
//     position: absolute;
//     left: -9999px;
//   }

//   .hide {
//     display: none;
//   }

//   .valid {
//     color: limegreen;
//     margin-left: 0.25rem;
//   }

//   .invalid {
//     color: red;
//     margin-left: 0.25rem;
//   }

//   .errmsg {
//     background-color: lightpink;
//     color: firebrick;
//     font-weight: bold;
//     padding: 0.5rem;
//     margin-bottom: 0.5rem;
//   }

//   .line {
//     display: inline-block;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     height: auto;
//     .login {
//       width: auto;

//       height: auto;
//       display: flex;
//       flex-direction: column;
//       -webkit-box-pack: start;
//       justify-content: flex-start;
//       padding: 4rem;
//       background-color: ${({ theme }) => theme.colors.container};
//     }
//     .form {
//       gap: 2rem;
//     }
//     .form_section {
//       display: flex;
//       justify-content: center;
//       margin-block: 14rem;
//     }
//   }
// `;
// export default Login;

import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import styled from "styled-components";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <Wrapper>
      <div className="login-container">
        <Toaster toastOptions={{ duration: 5000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="login-success-text">👍Login Success</h2>
        ) : (
          <div className="form-container">
            <h1 className="form-heading">
              Welcome to <br /> Kraftopia
            </h1>
            {showOTP ? (
              <>
                <div className="icon-container">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label className="form-label">Enter your OTP</label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="otp-container"
                ></OtpInput>
                <button onClick={onOTPVerify} className="form-button">
                  {loading ? (
                    <CgSpinner size={20} className="button-spinner" />
                  ) : (
                    <span>Verify OTP</span>
                  )}
                </button>
              </>
            ) : (
              <>
                <div className="icon-container">
                  <BsTelephoneFill size={30} />
                </div>
                <label className="form-label">Verify your phone number</label>
                <PhoneInput
                  onlyCountries={[
                    { iso2: "in", dialCode: "91", name: "India" },
                  ]}
                  defaultCountry={"in"}
                  value={ph}
                  onChange={setPh}
                  className="phone-input"
                />
                <button
                  onClick={onSignup}
                  className={`form-button ${
                    loading ? "button-spinner-spinning" : ""
                  }`}
                >
                  {loading ? (
                    <CgSpinner size={20} className="button-spinner" />
                  ) : (
                    <span>Send code via SMS</span>
                  )}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding-block: 4rem 0rem;

  .react-tel-input .phone-input {
    width: 100%;
    font-size: 1rem;
    // padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
  }
  .react-tel-input .form-control {
    width: 100%;
  }

  .login-container {
    background: #38a169;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .login-success-text {
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .form-container {
    width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.5rem;
    padding: 3rem;
    background-color: white;
    margin: 0 auto;
    text-align: center;
  }

  .form-heading {
    color: black;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .icon-container {
    background-color: white;
    color: #38a169;
    width: 5rem;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 50%;
  }

  .form-label {
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .otp-container {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .button-spinner {
    height: 3rem;
    margin: 0 auto 0;
    display: flex;
    animation: 1s linear 0s infinite normal none running spin;
    width: 3rem;
    align-items: center;
  }
  .button-spinner-spinning {
    // display : none ;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .form-container {
      width: 65%;
    }
  }
`;
export default Login;
