import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

// import DropdownMobileMenu from "../DropdownMobileMenu";

const Header = () => {
  return (
    <MainHeader>
      <NavLink className="logo" to="/">
        <Logo src="/images/Klogo.png" alt="my logo image" />
      </NavLink>

      {/* <DropdownMobileMenu /> */}

      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.container};
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center vertically */
  position: fixed;
  width: 100%;
  box-shadow: 0 8px 6px -6px grey;
  z-index: ${({ theme }) => theme.zIndex.zFixed};

  .logo {
    height: 100%;
    display: flex;
    margin-left: 3rem;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    // flex-direction: column; /* Stack items vertically */
    // justify-content: center; /* Center horizontally */
  }
`;

const Logo = styled.img`
  width: max-content;
  height: 5rem;
  // display: flex;
  // margin: 1rem auto 0;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 0; /* Remove top margin */
  }
`;

export default Header;
