import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="error">
          <h1 className="error_title">404</h1>
          <h2 className="error_title_description">UH OH! You're lost.</h2>
          <p>
            the page you are lookin for does not exist. how you got here is a
            mystery. but you can click the button below to go back to the home
            page.
          </p>
          <NavLink to="/">
            <Button>go back to Home page</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 14.8rem 0;

  .error {
    row-gap: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .error_title_description {
    font-weight: ${({ theme }) => theme.fontWeight.SemiBold};
    font-size: ${({ theme }) => theme.font.biggest};
  }
  .error p {
    color: ${({ theme }) => theme.colors.text};
    text-transform: lowercase;
  }
`;

export default Error;
