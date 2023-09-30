import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  //send otp
  const sendOtp = (e) => {
    e.preventDefault();
    if (!phoneNumber && phoneNumber === "") {
      toast.error("phone number please!");
    } else {
      toast.success("OTP sent successfully!");
    }
  };
  return (
    <Wrapper>
      <div class="login-container">
        <div className="image-container">
          <figure>
            <img src="/images/hero.jpg" alt="display" className="image-style" />
          </figure>
        </div>

        <div class="login-data">
          <h1 class="title">Login / Sign up</h1>
          <div class="phone-input-container">
            <label for="mobile-number">Mobile Number</label>
            <div class="input-box">
              <div class="flag">🇮🇳</div>
              <div class="country-code">+91</div>
              <input
                type="tel"
                name="mobile-number"
                pattern="[0-9]{10}"
                required
                id="mobile-number"
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                // onChange={handlePhoneNumberChange}
              />
            </div>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" id="terms-and-conditions" />
            <label for="terms-and-conditions">
              <span>Accept Terms and Conditions</span>
            </label>
          </div>

          <Button class="send-button" onClick={sendOtp}>
            Send
          </Button>
          <ToastContainer />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 3rem 0rem;
  .login-container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;

    grid-template-rows: 1fr;
    grid-column-gap: 14px;
    gap: 65px;
  }

  .image-container {
    figure {
      width: 100%;
    }
    .image-style {
      width: 100%;
    }
  }
  .login-data {
    margin: 12rem 0 0 0;
    width: 100%;
    height: max-content;

    .title {
      font-size: 4rem;
      font-weight: 700;
    }
  }
  .phone-input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-block: 2rem;
    font-family: Arial, sans-serif;
  }

  label {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  .input-box {
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
  }

  .flag {
    font-size: 24px;
    margin-right: 10px;
  }

  .country-code {
    font-size: 20px;
    margin-right: 10px;
    color: #555;
  }

  input[type="text"] {
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 5px;
  }

  .input-box:focus-within {
    border-color: ${({ theme }) => theme.colors.first};
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  #terms-and-conditions {
    margin-right: 10px;
  }

  .send-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }

  /* Style the checkbox label */
  label[for="terms-and-conditions"] {
    cursor: pointer;
  }
`;
export default Login;
