import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SOSweb from "../../assets/sosweb.svg";

export const SosWebsite = () => {
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
      <h2>School of Sports - Website</h2>
      <p>
        School of sports is a startup with the aim to improve sport education in
        schools by training students through specialized and proven coaches
      </p>
      <div>
        <a href="https://schoolofsports.herokuapp.com/" target="_blank">
          <button>Live</button>
        </a>
        <Link to="/">
          <button>Code</button>
        </Link>
      </div>
      <h4>Requirement</h4>
      <p>
        The stock website was not reflecting the energy of the company and
        unable to show what they offer on the whole. Also. there was no way for
        them to update the content and keep the website exciting for new and
        existing students
      </p>
      <img src={SOSweb} alt="" />
      <Features>
        <h4>Features</h4>
        <p>
          Front-end developed using React along with Redux for state management.
        </p>
      </Features>
    </PageContainer>
  );
};
