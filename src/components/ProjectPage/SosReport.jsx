import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import SOSreport from "../../assets/sosreport.svg";
import SOS_report_app_1 from "../../assets/report_app.mp4";
import SOS_report_app_2 from "../../assets/report_app_2.mp4";
import SOS_report_app_3 from "../../assets/report_app_3.mp4";
import Report_whatsapp from "../../assets/sos_report_whatsapp.jpg";
import { device } from "./../device/device";

import "./Projects.scss";

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

  const Imgdiv = styled.div`
    display: flex;
    flex-direction: column;
    &:first-child {
      width: 550px;
      height: 550px;
      display: none;
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
    img {
      /* margin-top: 2vh; */
      width: 250px;
      height: 500px;
      padding-left: 10vw;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      img {
        /* margin: 2vh 0; */
        width: 250px;
        height: 500px;
        /* padding-left: 46vw; */
      }
    }
  `;

  const VideoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    p {
      color: #fff;
      font-size: 1.2rem;
      text-align: left;
      padding-left: 0px;
    }
    video {
      width: 350px;
      height: 500px;
    }
    span {
      color: #fff;
      font-size: 0.6rem;
      padding-top: 10px;
      text-align: left;
    }

    div {
      span {
        display: none;
      }
    }
    /* // Laptop */
    @media (min-width: 426px) and (max-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          display: flex;
        }
      }
      span {
        display: none;
      }
    }
    /* // Laptop */
    @media (min-width: 769px) and (max-width: 1024px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      video {
        width: 450px;
        height: 850px;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 2rem;
          display: flex;
        }
      }
      span {
        display: none;
      }
    }

    @media (min-width: 1025px)  {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      video {
        width: 500px;
        height: 800px;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 35%;
        span {
          display: flex;
        }
      }
      span {
        display: none;
      }
      p {
        font-size: 1.8rem;
      }
      span {
        font-size: 1.4rem;
      }
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
        <a
          href="https://sos-reporting-webpp.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Live</button>
        </a>
        <Link to="/">
          <button>Code</button>
        </Link>
      </div>
      <h4>Requirement</h4>
      <LazyLoad height={40}>
        <p>
          The report was done in WhatsApp group and was difficult to track 100's
          of such reports. An accessible and easy to track app was required that
          will can be analyzed at any time with some standard on reporting.
        </p>
        <div className="imgdiv">
          <img src={SOSreport} alt="" className="report_vector" />
          <img src={Report_whatsapp} className="report_Whatsapp" alt="" />
        </div>
        <Features>
          <h4>Features</h4>
          <VideoDiv>
            <div>
              <p>
                Simple and clean and ligh-weight interface is built using React
                with hooks.
              </p>
              <p>
                Site managers will need to spend quater of the time using the
                app compared to the previous method as shown{" "}
              </p>
            </div>

            <video controls loop autoPlay muted>
              <source src={SOS_report_app_1} type="video/mp4" />> Your browser
              does not support the video tag.
            </video>
          </VideoDiv>

          <VideoDiv>
            <div>
              <p>
                Admin will be able to access all the submitted reports and take
                managerial steps if required.
              </p>
              <p>
                An seperate email is sent to admin email for all the submitted
                reports{" "}
              </p>
              <span>
                *Please note the data is just representational and doesn't
                resemble the original website data
              </span>
            </div>

            <video controls loop muted>
              <source src={SOS_report_app_2} type="video/mp4" />> Your browser
              does not support the video tag.
            </video>
            <span>
              *Please note the data is just representational and doesn't
              resemble the original website data
            </span>
          </VideoDiv>
          <VideoDiv>
            {" "}
            <div>
              {" "}
              <p>
                Complete access is provided on adding, removing and modifying
                the different variables in this app.
              </p>
              <p>
                Apollo client is used to make connection between server and
                front-end
              </p>
              <p>
                GraphQL is used to establish connection between server to
                simplify the multiple endpoints.
              </p>
            </div>
            <video controls loop muted>
              <source src={SOS_report_app_3} type="video/mp4" />> Your browser
              does not support the video tag.
            </video>
          </VideoDiv>
        </Features>
      </LazyLoad>
    </PageContainer>
  );
};
