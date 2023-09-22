import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink className="home_link" to="/">
        Home
      </NavLink>
      /{title}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 3rem;
  // background-color: ${({ theme }) => theme.colors.container};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
      width: max-content;
    padding-left: 3rem;

  // padding-left: 4rem;

  a {
    font-size: 2rem;
  }
  .home_link{
    
    color:black;
  $hover{
    color:white;
  }
`;
export default PageNavigation;
