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
    height: 110vh;
    display: flex;
    flex-direction: column;
    /* align-items: space-between; */

    border-radius: 13px;
    margin-bottom: 25vh;
    /* position: relative; */
    background-color: #a4508b;
    background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);

    @media ${device.laptop} {
      width: 45vw;

      margin-bottom: 0vh;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
    }
    @media ${device.laptopL} {
      width: 25vw;
    }
    @media ${device.desktop} {
      width: 15vw;
    }
  `;
  const SkillImage = styled.div`
    img {
      height: 300px;
      width: 300px;
    }
  `;

  const Backbox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 110vh;
    background-color: #5037b9;
    border-radius: 13px;
    position: relative;
    background-color: #a4508b;
    background-image: linear-gradient(180deg, #a4508b 0%, #5f0a87 74%);

    @media ${device.laptop} {
      width: 45vw;

      margin-bottom: 0vh;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
    }
    @media ${device.laptopL} {
      width: 25vw;
    }
    @media ${device.desktop} {
      width: 15vw;
    }
  `;

  const BackSkillImage = styled.div`
    /* left: 0vw; */

    img {
      height: 300px;
      width: 300px;
    }

    /* @media ${device.laptop} {
      top: -24vh;
      left: 12vw;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
      top: -28vh;
      left: 22vw;
    }
    @media ${device.laptopL} {
      left: 0vw;
    }
    @media ${device.desktop} {
      left: 2vw;
      top: -25vh;
    } */
  `;

  const SkillList = styled.div`
    /* padding-top: 5vh; */
    color: black;
    color: #fff;
    h4 {
      font-size: 2em;
      text-transform: uppercase;
      position: relative;
      text-decoration: underline;
      text-decoration-color: #ff03ff;
    }

    p {
      font-size: 2rem;
    }
    @media ${device.laptopL} {
    }
  `;

  return (
    <SkillWrapper>
      <Frontbox>
        <div>
          <SkillImage>
            <img src={Frontend} alt="" />
          </SkillImage>
        </div>

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
