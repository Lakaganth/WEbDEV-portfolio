import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Tilt from "react-parallax-tilt";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

import "./HeroComp.scss";
import { device } from "./../device/device";
import Path from "../../images/headerpath1.svg";

export const HeroComp = () => {
  const HeroWrapper = styled.div`
    position: relative;
  `;

  const HeroDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;

    &::after {
      content: "";
      width: 100px;
      height: 200px;
      /* overflow: hidden; */
      background: url("../../images/path2.png");
      /* background-size: contain; */
      /* background-position: center;
      background-repeat: no-repeat; */
      display: inline-block;
      position: absolute;
      z-index: -5;
      top: 180px;
      left: 0;
    }

    @media ${device.laptop} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `;
  const HeadingDiv = styled.div`
    color: #fff;
    font-family: "Raleway", sans-serif;
    padding: 15vh 0 0 0;
    text-align: right;
    position: relative;
    h1 {
      font-size: 3em;
      padding-right: 4vw;
      position: relative;
    }
    h1::after {
      position: absolute;
      bottom: -1.5vh;
      right: 0vw;
      width: 60%;
      border-bottom: solid 3px #ff03ff;
      content: "";
    }
    h3 {
      font-size: 2em;
      width: 60%;
      padding-left: 35vw;
    }
    p {
      width: 60%;
      padding-left: 35vw;
      font-family: "Roboto", sans-serif;
      font-size: 1.2em;
    }
    @media ${device.laptop} {
      padding: 0 0 0 0;
      text-align: right;
      h1 {
        font-size: 3.5em;
        margin: 0;
        padding-left: 20vw;
        position: relative;
      }
      h1::after {
        position: absolute;
        bottom: -1.5vh;
        left: 31vw;
        width: 40%;
        border-bottom: solid 3px #ff03ff;
        content: "";
      }
      h3 {
        font-size: 2em;
        /* width: 100%; */
        /* padding-right: -35vw; */
        padding-left: 20vw;
      }
      p {
        /* width: 100%; */
        /* padding-left: -35vw; */
        padding-left: 20vw;
      }
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
      padding: 0 0 0 0;
      text-align: right;
      padding-top: 15vh;
      h1 {
        font-size: 3.5em;
        padding-right: 15vw;
      }
      h1::after {
        position: absolute;
        bottom: 0;
        left: 21vw;
        width: 40%;
        border-bottom: solid 3px #ff03ff;
        content: "";
      }
      h3 {
        font-size: 2em;
        /* width: 100%; */
        /* padding-right: -35vw; */
        padding-left: 20vw;
      }
      p {
        /* width: 100%; */
        /* padding-left: -35vw; */
        padding-left: 20vw;
      }
    }
  `;

  const ActionButton = styled(animated.button)`
    width: 150px;
    height: 45px;
    position: absolute;
    right: 0;
    margin-right: 5vw;
    border: none;
    background-color: #4e0046;
    border-radius: 10px;
    color: #fff;
    font-size: 1.2em;
    text-transform: uppercase;
    background: linear-gradient(145deg, #332b44, #2b243a);
    box-shadow: 6px 6px 12px #13101a, -6px -6px 12px #4d4066;
    z-index: 50;
    @media ${device.laptop} {
      left: 0;
      margin-top: 5vh;
      margin-left: 39vw;
    }
    @media ${device.tablet} and (max-device-width: 1023px) {
      right: 150px;
      margin-left: -30vw;
      margin-right: 0;
    }
  `;

  const buttonAnim = useSpring({
    from: { transform: "translate3d(-30px,0,0) scale(1) rotateX(0deg)" },
    to: {
      transform: "translate3d(0,0,0) scale(1) rotateX(0deg)"
    }
  });
  const titleAnim = useSpring({
    from: { transform: "translate3d(300px,0,0) scale(1) rotateX(0deg)" },
    to: {
      transform: "translate3d(0,0,0) scale(1) rotateX(0deg)"
    }
  });

  const sunAnim = useSpring({
    from: { transform: "translate3d(-300px,0,0) scale(1) rotateX(0deg)" },
    to: {
      transform: "translate3d(0,0,0) scale(1) rotateX(0deg)"
    }
  });

  return (
    <HeroWrapper className="hero-wrapper">
      <div className="path">
        <img src={Path} alt="" />
      </div>
      <animated.div style={sunAnim} className="sun-bg"></animated.div>
      <HeroDiv>
        <HeadingDiv>
          <animated.h1 style={titleAnim}>Lakshmi Mohan</animated.h1>

          <animated.h3 style={titleAnim}>Full Stack Developer</animated.h3>
          <animated.p style={titleAnim}>
            I'm a creative web developer based in Canada
          </animated.p>
          <animated.p style={titleAnim}>
            {" "}
            I Bring Ideas to Life through Minimalist Design and Clean Code
          </animated.p>
          <Link to="/projects">
            <ActionButton style={buttonAnim}>Projects</ActionButton>
          </Link>
        </HeadingDiv>
        <LazyLoad height={200} once>
          <div className="parallax-container">
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={false}
              glareMaxOpacity={0.2}
              scale={1.02}
              gyroscope={true}
              tiltReverse={true}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              trackOnWindow={true}
            >
              <div className="inner-element">
                <div className="laka-face"></div>
              </div>
            </Tilt>
          </div>
        </LazyLoad>
      </HeroDiv>
      <div className="path2">
        <img src={Path} alt="" />
      </div>
    </HeroWrapper>
  );
};
