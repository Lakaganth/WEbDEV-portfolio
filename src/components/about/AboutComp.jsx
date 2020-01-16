import React from "react";
import styled from "styled-components";
import AboutPot from "../../images/abtpotrait.png";
import { device } from "./../device/device";

export const AboutComp = () => {
  const AboutWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    color: #fff;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-family: "Raleway", sans-serif;
      font-size: 2em;
      position: relative;
      padding-bottom: 0.3em;
    }
    h3:after {
      position: absolute;
      width: 20vw;
      display: block;
      bottom: 0;
      height: 2px;
      border-bottom: solid 3px #ff03ff;
      content: "";
    }

    p {
      font-family: "Raleway", sans-serif;
      width: 80%;
      font-size: 1.5em;
    }
    @media ${device.laptop} {
      h3:after {
        width: 9vw;
      }
      p {
        width: 60%;
      }
    }
  `;
  return (
    <AboutWrapper>
      <h3>About</h3>
      <div>
        <img src={AboutPot} alt="" />
      </div>
      <p>
        I'm a self taught full stack developer. I have serious passion for
        creating intuitive, dynamic user experience and solve problems
        efficiently.
      </p>
      <div></div>
    </AboutWrapper>
  );
};
