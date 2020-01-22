import React from "react";
import styled from "styled-components";
import Email from "../../assets/email.svg";
import Linkedin from "../../assets/linkedin.svg";

export const Footer = () => {
  const FooterWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 3vh;
    height: 2vh;
    color: #fff;
    text-align: center;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
      }
    }
  `;

  return (
    <FooterWrapper>
      <div>
        <img src={Linkedin} alt="Linkedin" />
        <img src={Email} alt="Email" />
      </div>
      <p>&copy; Lakshmi Ganth Mohan 2020 </p>
    </FooterWrapper>
  );
};
