import React, { useState } from "react";
import NavLogo from "../../images/navlogo.svg";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useSpring, animated, useTransition } from "react-spring";

export const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const NavDiv = styled.div`
    position: fixed;
    width: 90%;
    margin: 0 auto;
    padding: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 50;
  `;

  const HeadLogo = styled.div`
    min-width: 80px;
    min-height: 80px;
  `;

  const NavDropDown = styled(animated.div)`
    position: sticky;
    left: 10vw;
    top: 0;

    padding: 100px;
    background: #524763;
    height: 100vh;
    width: 100vw;
    z-index: 20;

    a {
      display: block;
      text-align: left;
      font-size: 4rem;
      color: white;
      text-decoration: none;
      transition: 0.3s ease border;
      border-bottom: solid 4px transparent;
      &:hover {
        border-bottom: solid 4px #82d8d8;
      }
    }
  `;

  const MobileMenu1 = styled(animated.div)`
    background-color: #fff;
    height: 4px;
    width: 35px;
    margin: 10px 0;
    z-index: 20;
  `;
  const MobileMenu2 = styled(animated.div)`
    background-color: #fff;
    height: 4px;
    width: 35px;
    margin: 10px 0;
    z-index: 20;
  `;
  const menuAnimation1 = useSpring({
    transform: isNavOpen
      ? `translateY(2px) rotate(45deg)`
      : ` translateY(0px) rotate(0deg)`
  });
  const menuAnimation2 = useSpring({
    transform: isNavOpen
      ? `translateY(-12px) rotate(135deg)`
      : ` translateY(0px) rotate(0deg)`
  });
  const navAnimation = useTransition(isNavOpen, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <NavDiv>
      <HeadLogo>
        <Link to="/">
          <img src={NavLogo} alt="LakaLogo" />
        </Link>
      </HeadLogo>
      <div style={{ zIndex: 30 }} onClick={() => setNavOpen(!isNavOpen)}>
        <MobileMenu1 style={menuAnimation1}></MobileMenu1>
        <MobileMenu2 style={menuAnimation2}></MobileMenu2>
      </div>
      {navAnimation.map(({ item, key, props }) =>
        item ? (
          <NavDropDown style={props}>
            <NavLink to="/" onClick={() => setNavOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/projects" onClick={() => setNavOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/about" onClick={() => setNavOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setNavOpen(false)}>
              Contact
            </NavLink>
          </NavDropDown>
        ) : null
      )}
    </NavDiv>
  );
};
