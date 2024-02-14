import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { ToastContainer, toast } from "react-toastify";
import { registerUser } from "../../services/Apis";

const Login = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");

  const [inputData, setInputData] = useState({
    PhoneNumber: "",
  });

  // set input value
  //handle input
  const handleChange = (e) => {
    const { value } = e.target;
    setInputData({ ...inputData, value });
    // setPhoneNumber({ ...inputData,[name]: value })
  };

  //send otp
  const sendOtp = async (e) => {
    e.preventDefault();
    if (!PhoneNumber && PhoneNumber === "") {
      toast.error("phone number please!");
    } else {
      const res = await registerUser(inputData);
      console.log(res);
    }
  };
  return (
    <Wrapper>
      <div className="login-container">
        <div className="image-container">
          <figure>
            <img src="/images/hero.jpg" alt="display" className="image-style" />
          </figure>
        </div>

        <div className="login-data">
          <h1 className="title">Login / Sign up</h1>
          <div className="phone-input-container">
            <label htmlFor="PhoneNumber">Mobile Number</label>
            <div className="input-box grid grid-three-column">
              <div className="flag">
                <figure>
                  <img
                    src="/images/indiaFlag.png"
                    className="flagImage"
                    alt=""
                  />
                </figure>
              </div>
              <div className="country-code">+91</div>
              <input
                type="tel"
                name="PhoneNumber"
                pattern="[0-9]{10}"
                required
                id="PhoneNumber"
                placeholder="Enter your mobile number"
                value={PhoneNumber}
                // onChange={(e) => setPhoneNumber(e.target.value)}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="terms-and-conditions" />
            <label htmlFor="terms-and-conditions">
              <span>Accept Terms and Conditions</span>
            </label>
          </div>

          <Button className="send-button" onClick={sendOtp}>
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
    // margin-top: 12rem;
    figure {
      width: 100%;
    }
    .image-style {
      width: 100%;
    }
  }
  .login-data {
    margin: 15rem auto 0;
    // width: 100%;
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
    font-family: ${({ theme }) => theme.font.fontFamily};
  }
  .flagImage {
    width: 4rem;
    display: flex;
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
    gap: 0;
    width: max-content;

    input {
      width: 28rem;

      border: none;
      border-radius: 5px;
      outline: none;
    }
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
    width: max-content;
    margin-bottom: 20px;
    align-items: flex-start;
  }

  #terms-and-conditions {
    margin-right: 10px;
  }

  .send-button {
    font-size: 16px;
  }

  label[for="terms-and-conditions"] {
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .image-container {
      // margin-top: 0rem;
    }
    .login-container {
      display: block !important ;

      .login-data {
        padding: 3rem;
        margin-top: 5rem;
        .input-box {
          width: 100%;
          input {
            width: 100%;
            border: none;
            border-radius: 5px;
            outline: none;
          }
          input::placeholder {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .login-container {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 0;
      height: 100%;

      .image-container {
        // margin-top: 0rem;
        width: 100%;
        figure {
          width: 100%;
        }
        .image-style {
          width: 50%;
        }
      }

      .login-data {
        padding: 3rem;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;

        .title {
          text-align: start;
        }
        .input-box {
          input {
            width: 80%;
            border: none;
            border-radius: 5px;
            outline: none;
            // padding:0;
          }
          input::placeholder {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
`;
export default Login;
