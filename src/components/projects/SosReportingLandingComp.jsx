import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export const SosReportingLandingComp = () => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 150, friction: 400, precision: 0.00001 }
  }));
  const ProjCard3 = styled(animated.div)`
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
    <ProjCard3
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <h4>School of Sports- Admin Reporting</h4>
      <h5>Web App</h5>
      <p>React, NodeJS, Apollo Hooks, Materialize, MongoDB</p>
      <button>Read More</button>
    </ProjCard3>
  );
};
