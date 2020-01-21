import React from "react";
import styled from "styled-components";
import AboutPot from "../../images/abtpotrait.png";
import { device } from "./../device/device";
import { Link } from "react-router-dom";

export const AboutComp = () => {
  const AboutWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    color: #fff;
    margin-top: 3vh;
    padding-bottom: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-family: "Raleway", sans-serif;
      font-size: 2em;
      position: relative;
      /* padding-bottom: 0.3em; */
      text-decoration: underline;
      text-decoration-color: #ff03ff;
    }

    p {
      font-family: "Raleway", sans-serif;
      width: 80%;
      font-size: 1.5em;
    }

    button {
      width: 150px;
      height: 45px;

      border: none;
      background-color: #4e0046;
      border-radius: 10px;
      color: #fff;
      font-size: 1.2em;
      text-transform: uppercase;
      background: linear-gradient(145deg, #332b44, #2b243a);
      box-shadow: 6px 6px 12px #13101a, -5px -5px 12px #4d4066;
      z-index: 10;
    }
    @media ${device.laptop} {
      p {
        width: 60%;
      }
    }
    @media ${device.laptopL} {
      h3 {
        font-size: 4rem;
      }
      p {
        width: 50%;
        font-size: 2.5rem;
      }
      img {
        width: 500px;
      }
      button {
        width: 250px;
        height: 65px;
      }
    }
  `;
  return (
    <AboutWrapper>
      <h3>About</h3>
      <div>
        <img src={AboutPot} alt="About" />
      </div>
      <p>
        I'm a self taught full stack developer. I have serious passion for
        creating intuitive, dynamic user experience and solve problems
        efficiently.
      </p>

      <div>
        <Link to="/about">
          <button>Read More</button>
        </Link>
      </div>
    </AboutWrapper>
  );
};
