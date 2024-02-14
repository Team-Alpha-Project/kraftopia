import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const BACKEND_URL = "http://localhost:5000";

const userLogin = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      return { status: 200, data: await response.json() };
    } else {
      const responseData = await response.json();
      return { status: response.status, response: responseData };
    }
  } catch (error) {
    return { status: 500, response: { error: "Internal login Server Error" } };
  }
};

const Auth = () => {
  const [spinner, setSpinner] = useState(false);

  const [inputdata, setInputdata] = useState({
    username: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, phoneNumber } = inputdata;

    if (username === "") {
      toast.error("Enter Your Username");
    } else if (phoneNumber === "") {
      toast.error("Enter Your Phone Number");
    } else {
      setSpinner(true);

      const response = await userLogin(inputdata);

      if (response.status === 200) {
        setSpinner(false);

        navigate("/user/otp", { state: phoneNumber });
      } else {
        setSpinner(false);
        toast.error(response.response.error);
      }
    }
  };

  return (
    <Wrapper>
      <div className="form_data">
        <div className="form_heading">
          <h1>Login</h1>
          <p style={{ textAlign: "center" }}>
            Welcome back! Please enter your username and phone number to log in.
          </p>
        </div>
        <form>
          <div className="form_input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id=""
              onChange={handleChange}
              placeholder="Enter Your Username"
            />
          </div>
          <div className="form_input">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id=""
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
            />
          </div>

          <button className="btn" onClick={handleSubmit}>
            Login
            {spinner ? <span>{/* <Spinner animation="border" /> */}</span> : ""}
          </button>
        </form>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 3rem;

  .form_data {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .form_heading h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .form_heading p {
    font-size: 16px;
    text-align: center;
    color: #555;
  }

  .form_input {
    margin-bottom: 15px;
  }

  .form_input label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  .form_input input[type="text"],
  .form_input input[type="tel"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn .spinner {
    margin-left: 10px;
  }

  .Toastify__toast-container {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 9999;
  }

  @media (max-width: 768px) {
    .form_data {
      max-width: 100%;
    }
  }
`;
export default Auth;
