import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../../context/cart_context";
import { useAuth } from "../../context/Auth";
// import DropdownMenu from "../DropdownMenu ";
import { toast } from "react-toastify";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const [auth, setAuth] = useAuth();
  const [showDropdown, setShowDropdown] = useState(false); // Add state for dropdown visibility

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged Out Successfully");
  };

  const NavBar = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    display: flex;
    margin-right: 3rem;

    .profile_icon {
      color: Red;
    }
    .login {
      height: 100%;
      background-color: black;
    }

    .navbar-lists {
      display: flex;
      gap: 2rem;
      // margin-right: 4rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 700;
          text-transform: capitalize;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.first};
          border-bottom: 3px solid ${({ theme }) => theme.colors.first};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 2.5rem;
      }

      .cart-total--item {
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.first};
      }
    }
    .profile-icon {
      font-size: 2.5rem;
      cursor: pointer;
      display: none;
    }
    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }
    .proIcon {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .proIcon {
        display: block;
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.white};

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 3rem;
          height: 3rem;
          font-size: 2rem;
        }
      }
      .profile-icon {
        font-size: 5rem;
        cursor: pointer;
        display: inline-block;
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
    .active {
      color: ${({ theme }) => theme.colors.first};
    }
  `;

  return (
    <NavBar className="navbar_con">
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link home-link "
              activeClassName="active"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              activeClassName="active"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              activeClassName="active"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              activeClassName="active"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="navbar-link "
              activeClassName="active"
              onClick={() => setMenuIcon(false)}
            >
              Blog
            </NavLink>
          </li>

          {!auth.user ? (
            <>
              <li>
                <NavLink
                  to="/register"
                  className="navbar-link "
                  activeClassName="active"
                  onClick={() => setMenuIcon(false)}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="navbar-link "
                  activeClassName="active"
                  onClick={() => setMenuIcon(false)}
                >
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-link dropdown">
                <NavLink
                  className="navbar-link dropdown-toggle"
                  onClick={toggleDropdown}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {auth?.user?.name}
                </NavLink>
                {showDropdown && (
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="navbar-link dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="navbar-link dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
          {/* <li>
                  <NavLink to="/districts" className="navbar-link">Districts</NavLink>
                </li>
                <li>
                  <NavLink to="/categories" className="navbar-link">Categories</NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className="navbar-link">Blog</NavLink>
                </li> */}
        </ul>

        {/* two buttons for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NavBar>
  );
};

export default Nav;
