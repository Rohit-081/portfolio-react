import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="nav-container">
        <a href="/" className="navbar-logo">
          <h4 className="folio">
            PORT<span>FOLIO.</span>
          </h4>
        </a>
        <ul className="nav-menu">
          <li className="nav-items">
            <a className="nav-links" href="/">
              Home
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-links" href="/#about">
              About
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-links" href="/#services">
              Services
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-links" href="/#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-links" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  background-color: var(--background-color);
  height: 80px;
  position: sticky;
  font-family: "Poppins", sans-serif;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .navbar-logo {
      font-family: "Oswald", sans-serif;
      font-weight: 700;
      display: flex;
      align-items: center;
      color: #fff;
      justify-self: start;
      margin-left: 20px;
      cursor: pointer;
      text-decoration: none;
      font-size: 40px;

      .folio {
        color: #fff;
        justify-self: start;
        margin-left: 20px;
        cursor: pointer;
        text-decoration: none;
        font-size: 40px;

        span {
          color: #f9004d;
        }
      }
    }

    .nav-menu {
      display: grid;
      grid-template-columns: repeat(5, auto);
      grid-gap: 10px;
      list-style: none;
      text-align: center;
      width: 80vw;
      justify-content: end;
      margin-right: 2rem;

      .nav-links {
        color: #fff;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        height: 100%;
        transition: all 1s ease-in-out;
      }
    }
  }
`;

export default Navbar;
