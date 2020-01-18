import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SOSreport from "../../assets/sosreport.svg";

export const SosReport = () => {
  const PageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    /* padding-top: 10vh; */
    font-family: raleway;
    h2 {
      text-align: left;
      font-size: 2rem;
      color: #f26e6e;
    }
    p {
      color: #fff;
      font-size: 1.5rem;
      text-align: left;
      padding-left: 50px;
    }
    /* Button div */
    div {
      display: flex;
      justify-content: space-around;
      align-content: center;
      button {
        width: 30vw;
        height: 5vh;
        border-radius: 20px;
        border: none;
        margin-top: 5vh;
        color: #fff;
        font-family: "Raleway", sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
        background: linear-gradient(145deg, #332b44, #2b243a);
        box-shadow: 6px 6px 12px #13101a, -5px -5px 12px #4d4066;
      }
    }
    /* Requirement  */
    h4 {
      text-align: left;
      font-size: 2rem;
      color: #f26e6e;
      font-weight: 400;
    }

    img {
      /* width: 450px;
      height: 450px; */
    }
  `;

  const Features = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
      text-align: left;
      font-size: 2rem;
      color: #f26e6e;
      font-weight: 400;
    }
    p {
      color: #fff;
      font-size: 1.2rem;
      text-align: left;
      padding-left: 50px;
    }
  `;
  return (
    <PageContainer>
      <h2>School Of Sports - Reporting Web App</h2>
      <p>
        Site managers supervise the coaches going to schools and will have to
        report back on fee payments, class durations and any feedback.
      </p>
      <div>
        <a href="https://sos-reporting-webpp.herokuapp.com/" target="_blank">
          <button>Live</button>
        </a>
        <Link to="/">
          <button>Code</button>
        </Link>
      </div>
      <h4>Requirement</h4>
      <p>
        The report was done in WhatsApp group and was difficult to track 100's
        of such reports. An accessible and easy to track app was required that
        will can be analyzed at any time with some standard on reporting.
      </p>
      <img src={SOSreport} alt="" />
      <Features>
        <h4>Features</h4>
        <p>
          Front-end developed using React along with Redux for state management.
        </p>
      </Features>
    </PageContainer>
  );
};
