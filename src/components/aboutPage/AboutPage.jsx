import React from "react";

import Profile from "../../assets/profile.png";
import styled from "styled-components";

export const AboutPage = () => {
  // Wrapper
  const AboutWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    color: #fff;
    font-family: raleway;
    h3 {
      font-size: 2em;
      position: relative;
      padding-bottom: 0.3em;
      text-decoration: underline;
      text-decoration-color: #ff03ff;
    }
    h4 {
      font-weight: 900;
      font-size: 2rem;
      color: #f26e6e;
    }
    p {
      color: #fff;
      font-size: 1.3rem;
      text-align: left;
      width: 100%;
      /* padding-left: 50px; */
    }
  `;

  const ProfileImage = styled.div`
    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
  `;
  return (
    <AboutWrapper>
      <h3>About</h3>
      <ProfileImage>
        <img src={Profile} alt="Laka" />
      </ProfileImage>
      <h4>A bit more about my journey</h4>
      <p>
        Creating a photography portfolio website was what got me into HTML and
        CSS, but with printing "Hello World" on the screen with the click of a
        button using JavaScript is what made me love web development.
      </p>
      <div></div>
      <p>
        I went thorough a lot of videos on YouTube and started working on simple
        websites. but honestly I was not impressed by the designs and the layout
        until I got to know about React and other frameworks. Took several
        courses in Udemy and started building cooler and cleaner websites and
        fun web apps.
      </p>
      <div></div>
      <p>
        I was getting better and wanted a full stack project. I approached a
        friend who just created a start-up and was looking out for a better
        website, I took the opportunity and gave my best.{" "}
      </p>
      <div></div>
      <p>
        My entire backend knowledge was through this single project and got
        through MERN stack by Brad Traversy course. I made few other smaller web
        apps for better understanding.
      </p>
      <div></div>
      <p>
        The projects are something I'm very much proud of and enabled to
        showcase my skill in coding.
      </p>
    </AboutWrapper>
  );
};
