import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

// import SOSweb from "../../assets/sosweb.svg";
import SOSweb1 from "../../assets/SOSweb1.svg";
import SOS_1 from "../../assets/sos_1.mp4";
import SOS_2 from "../../assets/sos_2.mp4";
import SOS_3 from "../../assets/sos_3.mp4";
import { device } from "./../device/device";

export const SosWebsite = () => {
  const PageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 10vh;
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
      width: 380px;
      height: 380px;
    }
    @media ${device.mobileL} {
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
      width: 300px;
      height: 300px;
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

    // Tablet
    @media (min-width: 426px) and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      video {
        width: 400px;
        height: 400px;
      }
      p {
        color: #fff;
        font-size: 1.2rem;
        text-align: left;
      }
    }

    /* // Laptop */
    @media (min-width: 769px) and (max-width: 1024px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      video {
        width: 500px;
        height: 500px;
      }

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

    @media ${device.laptopL} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      video {
        width: 500px;
        height: 500px;
      }

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
      p {
        font-size: 1.8rem;
      }
      span {
        font-size: 1.4rem;
      }
    }
    /* // Desktop */
    @media (min-width: 1025px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      video {
        width: 500px;
        height: 500px;
      }

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
      <h2>School of Sports - Website</h2>
      <p>
        School of sports is a startup with the aim to improve sport education in
        schools by training students through specialized and proven coaches
      </p>
      <div>
        <a
          href="https://schoolofsports.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Live</button>
        </a>
        <a
          href="https://github.com/Lakaganth/SOS-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Code</button>
        </a>
      </div>
      <h4>Requirement</h4>
      <LazyLoad height={40}>
        <p>
          The stock website was not reflecting the energy of the company and
          unable to show what they offer on the whole. Also. there was no way
          for them to update the content and keep the website exciting for new
          and existing students
        </p>
        <img src={SOSweb1} alt="" />
        <Features>
          <h4>Features</h4>
          <VideoDiv>
            <div>
              <p>
                Website's frontend was developed using React and backend using
                NodeJs Express
              </p>
              <p>Animations done using React-spring.</p>
            </div>

            <video controls loop autoPlay muted>
              <source src={SOS_1} type="video/mp4" />> Your browser does not
              support the video tag.
            </video>
          </VideoDiv>
          <VideoDiv>
            <div>
              <p>
                80% of data is fetched from back-end though Apollo GraphQL
                server
              </p>
              <span>
                *Please note the data is just representational and doesn't
                resemble the original website data
              </span>
            </div>

            <video controls loop muted>
              <source src={SOS_2} type="video/mp4" />> Your browser does not
              support the video tag.
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
                Admin can will be able to add, modify and delete coaches info,
                gallery pictures, testimonials and new sport.
              </p>
              <p>
                Data is stored in MongoDB cloud server and connection is
                established through Mongoose.
              </p>
              <p>
                GraphQL is used to establish connection between server to
                simplify the multiple endpoints.
              </p>
            </div>
            <video controls loop muted>
              <source src={SOS_3} type="video/mp4" />> Your browser does not
              support the video tag.
            </video>
          </VideoDiv>
        </Features>
      </LazyLoad>
    </PageContainer>
  );
};
