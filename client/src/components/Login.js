import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputs = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (!email || !password) {
      // Display an error message to the user and prevent the request
      window.alert("Please enter both email and password.");
      return;
    }
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.status === 400) {
        window.alert("Invalid Login");
        console.log("Invalid Login");
      } else {
        window.alert(" Login done");
        console.log(" Login done");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="login">
        <div className="container grid grid-two-column">
          <div className="data">
            <h1>Login</h1>
            <form method="POST">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  value={user.email}
                  id="email"
                  name="email"
                  onChange={handleInputs}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  id="password"
                  onChange={handleInputs}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-button">
                <input
                  type="submit"
                  name="login"
                  value="login"
                  onClick={PostData}
                />
              </div>
            </form>
          </div>
          {/* <div className="image">
          <figure>
            <img src="../public/images/hero.jpg" alt="" />
          </figure>
        </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 7rem 0;
  display: flex;
  margin: 0 auto 0;
  width: 80%;
  align-items: center;
  justify-content: center;

  .login {
    width: 100%;
    justify-content: flex-start;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.container};
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    // justify-content: space-evenly;
    flex-grow: 1;
    padding-bottom: 1rem;
    gap: 2rem;
  }
  label {
    margin-top: 0;
  }

  input[type="submit"] {
    border-radius: 6px;
    margin-inline: auto;
  }
  figure {
    width: 100%;
    height: 100%;
  }
  .image {
    width: 100%;
    height: 100%;
  }
`;
export default Login;
