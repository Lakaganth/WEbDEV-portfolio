import React from "react";
import styled from "styled-components";
import { device } from "./../device/device";
import Tilt from "react-parallax-tilt";

export const ProjectCard = () => {
  const [scale, setScale] = React.useState(1.1);

  const ProjCardWrapper = styled.div`
    /* overflow: hidden; */
    width: 80%;
    margin: 10vh auto;
    border-radius: 10px;
    color: #fff;
    font-family: raleway;
    h3 {
      font-family: "Raleway", sans-serif;
      font-size: 2em;
      position: relative;
      padding-bottom: 0.3em;
      text-decoration: underline;
      text-decoration-color: #ff03ff;
    }

    div {
      div {
        background-color: black;
        height: 60vh;
        border-radius: 20px;
        margin-bottom: 5vh;
        width: 100%;
        h4 {
          padding-top: 10vh;
          font-weight: 900;
          font-size: 2rem;
        }
        h5 {
          font-size: 1.6rem;
        }
        p {
          font-size: 1.2rem;
        }
        button {
          width: 30vw;
          height: 5vh;
          border-radius: 20px;
          border: none;
          margin-top: 5vh;
          color: #fff;
          font-family: "Raleway", sans-serif;
          font-weight: bold;
          font-size: 1.25rem;
        }
        @media ${device.laptop} {
          width: 40%;
          margin: 0 auto;
          button {
            width: 20vw;
          }
        }
      }
    }
  `;

  const ProjCard1 = styled.div`
    background: rgb(255, 109, 226);
    background: linear-gradient(
      212deg,
      rgba(255, 109, 226, 1) -20%,
      rgba(74, 55, 128, 1) 100%
    );
    transition: box-shadow 0.5s;
    will-change: transform;

    button {
      background: linear-gradient(145deg, #d24ab6, #b03e99);
      /* box-shadow: 8px 8px 16px #4d3374, -8px -8px 16px #68459e; */
      box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.5),
        -8px -8px 16px rgba(196, 69, 170, 0.5);
    }
    &:hover {
      box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }
  `;

  const ProjCard2 = styled.div`
    background: rgb(52, 232, 158);
    background: linear-gradient(
      167deg,
      rgba(52, 232, 158, 1) -20%,
      rgba(15, 53, 67, 1) 100%
    );
    transition: box-shadow 0.5s;
    will-change: transform;
    button {
      background: linear-gradient(145deg, #53dd80, #46ba6c);
      box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.5),
        -8px -8px 16px rgba(52, 232, 158, 0.5);
    }
  `;

  const ProjCard3 = styled.div`
    width: 50%;
    background: rgb(159, 114, 197);
    background: linear-gradient(
      60deg,
      rgba(159, 114, 197, 1) 0%,
      rgba(255, 144, 104, 1) 100%
    );
    transition: box-shadow 0.5s;
    will-change: transform;
    button {
      background: #ff9068;
      box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.5),
        -8px -8px 16px rgba(255, 144, 104, 0.5);
    }
  `;

  return (
    <ProjCardWrapper>
      <h3>Projects</h3>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <ProjCard1>
          <h4>School of Sports</h4>
          <h5>Website</h5>
          <p>React, NodeJS, Express, Redux, MongoDB, Firebase</p>
          <button>Read More</button>
        </ProjCard1>
      </Tilt>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <ProjCard2>
          <h4>P&A Stores- Inventory Manager</h4>
          <h5>Web App</h5>
          <p>React, NodeJS, Apollo Hooks, Materialize, MongoDB</p>
          <button>Read More</button>
        </ProjCard2>
      </Tilt>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <ProjCard3>
          <h4>School of Sports- Admin Reporting</h4>
          <h5>Web App</h5>
          <p>React, NodeJS, Apollo Hooks, Materialize, MongoDB</p>
          <button>Read More</button>
        </ProjCard3>
      </Tilt>
    </ProjCardWrapper>
  );
};
