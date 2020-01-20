import React from "react";
import Email from "../../assets/email.svg";
import Linkedin from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import styled from "styled-components";

export const ContactPage = () => {
  const ContactWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    font-family: raleway;
    h2 {
      text-align: center;
      font-size: 2.5rem;
      color: #f26e6e;
      text-decoration:underline;
      
    }
    h4 {
      text-align: left;
      font-size: 1.5rem;
      color: #fff;
      font-weight: 400;
    }
  `;

  const SocialWrapper = styled.div`
    margin-top: 20vh;
    div {
      display: grid;
      grid-area: repeat(2, 1fr);
      grid-gap: 10px;
      /* grid-auto-rows: 50vw; */
      grid-template-areas:
        "a b "
        "a b";
      div {
        grid-area: a;
        align-self: center;
      }
      h4 {
        grid-area: b;
        align-self: center;
        justify-self: start;
      }
    }
  `;

  return (
    <ContactWrapper>
      <h2>Contact</h2>
      <SocialWrapper>
        <div>
          <div>
            <img src={Email} alt="Email" />
          </div>
          <h4>lakaganth89@gmail.com</h4>
        </div>
        <div>
          <div>
            <img src={Linkedin} alt="Linkedin" />
          </div>

          <h4>in/lakshmi-ganth</h4>
        </div>
        <div>
          <div>
            <img src={Twitter} alt="Twitter" />
          </div>
          <h4>@Lakaganth</h4>
        </div>
      </SocialWrapper>
    </ContactWrapper>
  );
};
