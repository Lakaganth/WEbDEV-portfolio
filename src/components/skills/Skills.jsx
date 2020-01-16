import React from "react";
import styled from "styled-components";

import Frontend from "../../images/frontend.svg";
import Backend from "../../images/backend.svg";
import { device } from "./../device/device";

export const Skills = () => {
  const SkillWrapper = styled.div`
    /* height: 100vh; */
    width: 100vw;
    color: #fff;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  `;
  const Frontbox = styled.div`
    width: 80vw;
    height: 80vh;
    background-color: #e6e6e6;
    border-radius: 13px;
    margin-bottom: 25vh;
    position: relative;
    @media ${device.laptop} {
      width: 45vw;
      height: 60vh;
      margin-bottom: 0vh;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
    }
  `;

  const Backbox = styled.div`
    width: 80vw;
    height: 80vh;
    background-color: #e6e6e6;
    border-radius: 13px;
    position: relative;
    @media ${device.laptop} {
      width: 45vw;
      height: 60vh;
      margin-bottom: 0vh;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
    }
  `;
  const SkillImage = styled.div`
    position: absolute;
    top: -22vh;
    left: 0vw;
    img {
      height: 300px;
      width: 300px;
    }
    @media ${device.laptop} {
      top: -22vh;
      left: 6vw;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
      top: -25vh;
      left: 20vw;
    }
  `;
  const BackSkillImage = styled.div`
    position: absolute;
    top: -24vh;
    left: 5vw;
    img {
      height: 300px;
      width: 300px;
    }

    @media ${device.laptop} {
      top: -24vh;
      left: 9vw;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
      top: -28vh;
      left: 22vw;
    }
  `;

  const SkillList = styled.div`
    padding-top: 5vh;
    color: black;
    h4 {
      font-size: 2em;
      text-transform: uppercase;
      position: relative;
    }

    h4::after {
      content: "";
      width: 25vw;
      height: 2px;
      display: block;
      left: 27vw;
      border-bottom: solid 3px #ff03ff;
      position: absolute;
    }
  `;

  return (
    <SkillWrapper>
      <Frontbox>
        <SkillImage>
          <img src={Frontend} alt="" />
        </SkillImage>
        <SkillList>
          <h4>FrontEnd</h4>
        </SkillList>
      </Frontbox>
      <Backbox>
        <BackSkillImage>
          <img src={Backend} alt="" />
        </BackSkillImage>
        <SkillList>
          <h4>Backend</h4>
        </SkillList>
      </Backbox>
    </SkillWrapper>
  );
};
