import React from "react";
import styled from "styled-components";

import Frontend from "../../images/frontend.svg";
import Backend from "../../images/backend.svg";
import { device } from "./../device/device";

export const Skills = () => {
  const SkillWrapper = styled.div`
    /* height: 100vh; */
    width: 100vw;

    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
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
    background-color: #5037b9;
    border-radius: 13px;
    margin-bottom: 25vh;
    position: relative;
    background-color: #a4508b;
    background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);

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
    background-color: #5037b9;
    border-radius: 13px;
    position: relative;
    background-color: #a4508b;
    background-image: linear-gradient(180deg, #a4508b 0%, #5f0a87 74%);

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
    color: #fff;
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
    p {
      font-size: 2rem;
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
          <p>ReactJs</p>
          <p>HTML5</p>
          <p>CSS/SASS</p>
          <p>Javascript/Typescript</p>
          <p>Redux</p>
          <p>Enzyme</p>
        </SkillList>
      </Frontbox>
      <Backbox>
        <BackSkillImage>
          <img src={Backend} alt="" />
        </BackSkillImage>
        <SkillList>
          <h4>Backend</h4>
          <p>Node.js/ Express</p>

          <p>MongoDB</p>
          <p>Postgres</p>
          <p>REST API</p>
          <p>GraphQL</p>
          <p>Firebase</p>
        </SkillList>
      </Backbox>
    </SkillWrapper>
  );
};
