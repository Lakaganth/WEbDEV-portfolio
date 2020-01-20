import React, { useState } from "react";

import styled from "styled-components";

export const HelloWorld = () => {
  const [disp, setDisp] = useState(false);

  const HWdiv = styled.div`
    height: 25vh;
    text-align: center;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    p {
      font-family: sans-serif;
      padding-left: 28vw;
    }
  `;

  const Button = styled.button`
    margin-top: 5vh;
  `;

  const handleClick = () => {
    setDisp(!disp);
  };

  return (
    <HWdiv>
      <div>
        <Button onClick={handleClick}>Click me!</Button>
      </div>

      {disp ? <p>Hello World!</p> : null}
    </HWdiv>
  );
};
