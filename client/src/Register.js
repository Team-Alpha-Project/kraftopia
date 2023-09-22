import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Button } from "./styles/Button";
import { FaTimes, FaCheck, FaInfoCircle } from "react-icons/fa";

// import axios from "./api/axios";

const user_reg = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
const email_reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const password_reg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
// const register_URL = "/regsiter";

const Register = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUser] = useState("");
  const [vaildName, setVaildName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [vaildEmail, setVaildEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [vaildPwd, setVaildPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchpwd] = useState("");
  const [vaildMatch, setVaildMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = user_reg.test(username);
    // console.log(result);
    // console.log(user);
    setVaildName(result);
  }, [username]);

  useEffect(() => {
    const result = email_reg.test(email);
    // console.log(result);
    // console.log(email);
    setVaildEmail(result);
  }, [email]);

  useEffect(() => {
    const result = password_reg.test(pwd);
    // console.log(result);
    // console.log(pwd);
    setVaildPwd(result);
    const match = pwd === matchPwd;
    setVaildMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    console.log(e);
    console.log(username);
    console.log(email);
    console.log(pwd);
    console.log(matchPwd);
    setSuccess(true);
  };
  // e.preventDefault();
  // if button enabled with js hack
  // const v1 = email_reg.test(email);
  // const v2 = password_reg.test(pwd);
  // if (!v1 || !v2) {
  //   setErrMsg("invalid entry");
  //   return;
  // }
  // try {
  //   const response = await axios.post(
  //     register_URL,
  //     JSON.strigify({ username, email, pwd }),
  //     {
  //       headers: { "Content-Type": "application/json" },
  //       withCredentials: true,
  //     }
  //   );
  //   console.log(response.data);
  //   console.log(response.accessToken);
  //   console.log(JSON.strigify(response));
  //   setSuccess(true);
  //   // clear the input fields
  //   setUser("");
  //   setEmail("");
  //   setPwd("");
  //   setMatchpwd("");
  // } catch (err) {
  //   if (!err?.response) {
  //     setErrMsg("No Server responds");
  //   } else if (err.response?.status === 409) {
  //     setErrMsg("Username Taken");
  //   } else {
  //     setErrMsg("Registration Failed");
  //   }
  //   errRef.current.focus();
  // }
  // };

  return (
    <Wrapper>
      {success ? (
        <section className="success">
          <h1>Success!</h1>
          <p>
            <a href="/login">Sign In</a>
          </p>
        </section>
      ) : (
        <section className="register container">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Register</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <span className={vaildName ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={vaildName || !username ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={vaildName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && username && !vaildName
                  ? "instuctions"
                  : "offscreen"
              }
            >
              <FaInfoCircle />
              4 to 24 characters. <br />
              must begin with a letter. <br />
              letters, numbers,underscores,hyphens allowed.
            </p>

            <label htmlFor="email">
              Email:
              <span className={vaildEmail ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={vaildEmail || !email ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={vaildEmail ? "false" : "true"}
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="emailnote"
              className={
                emailFocus && email && !vaildEmail ? "instuctions" : "offscreen"
              }
            >
              <FaInfoCircle />
              4 to 24 characters. <br />
              must begin with a letter. <br />
              letters, numbers,underscores,hyphens allowed.
            </p>

            <label htmlFor="password">
              Password:
              <span className={vaildPwd ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={vaildPwd || !pwd ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={vaildPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && pwd && !vaildPwd ? "instuctions" : "offscreen"
              }
            >
              <FaInfoCircle />
              8 to 24 characters. <br />
              must include uppercase and lowercase letters,a number,and a
              special characters . <br />
              Allowed special characters:
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollor sign">$</span>
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirmPassword">
              Confirm Password:
              <span className={vaildMatch && matchPwd ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={vaildMatch || !matchPwd ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              onChange={(e) => setMatchpwd(e.target.value)}
              required
              aria-invalid={vaildMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !vaildMatch ? "instuctions" : "offscreen"
              }
            >
              <FaInfoCircle />
              the password doesn't match. <br />
            </p>

            <Button
              disabled={
                !vaildName || !vaildEmail || !vaildMatch || !vaildPwd
                  ? true
                  : false
              }
            >
              Sign Up
            </Button>
          </form>
          <p>
            Already registered? <br />
          </p>
        </section>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 3rem;
  height: 100vh;

  .register {
    width: 100%;
    max-width: 420px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    padding-bottom: 1rem;
  }

  a,
  a:visited {
    color: #fff;
  }

  input[type="text"],
  input[type="password"],
  button,
  textarea {
    text-transform: none;
    font-family: "Nunito", sans-serif;
    font-size: 22px;
    padding: 0.25rem;
    border-radius: 0.5rem;
  }

  label,
  button {
    margin-top: 1rem;
  }

  button {
    padding: 0.5rem;
  }

  .instructions {
    font-size: 0.75rem;
    border-radius: 0.5rem;
    background: #000;
    color: #fff;
    padding: 0.25rem;
    position: relative;
    bottom: -10px;
  }

  .instructions > svg {
    margin-right: 0.25rem;
  }

  .offscreen {
    position: absolute;
    left: -9999px;
  }

  .hide {
    display: none;
  }

  .valid {
    color: limegreen;
    margin-left: 0.25rem;
  }

  .invalid {
    color: red;
    margin-left: 0.25rem;
  }

  .errmsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .line {
    display: inline-block;
  }
`;
export default Register;
