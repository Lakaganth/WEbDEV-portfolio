import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export const InventoryLandingComp = () => {
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

  const ProjCard2 = styled(animated.div)`
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
  return (
    <ProjCard2
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <h4>P&A Stores- Inventry Manager</h4>
      <h5>Web App</h5>
      <p>React, NodeJS, Apollo Hooks, Materialize, MongoDB</p>
      <button>Read More</button>
    </ProjCard2>
  );
};
