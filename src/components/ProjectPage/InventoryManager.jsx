import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Inventory from "../../assets/inventory.svg";
import IM_1 from "../../assets/im_1.mp4";
import IM_2 from "../../assets/im_2.mp4";
import IM_3 from "../../assets/im_3.mp4";
import IM_4 from "../../assets/im_4.mp4";

export const InventoryManager = () => {
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
    video {
      padding-left: 4vw;
    }
  `;
  return (
    <PageContainer>
      <h2>P&A STORES - Inventory Manager</h2>
      <p>
        A family run retail store with minimal usage of technology in
        Nottingham, United Kingdom.
      </p>
      <div>
        <a href="https://pastoreslist.herokuapp.com/" target="_blank">
          <button>Live</button>
        </a>
        <Link to="/">
          <button>Code</button>
        </Link>
      </div>
      <h4>Requirement</h4>
      <p>
        The inventory count takes up at least an hour before an purchase order
        is put up and have no records on studying any sort of historical data.
        The app must be fast and easy to use for any new employee with minimal
        training.
      </p>
      <img src={Inventory} alt="" />
      <Features>
        <h4>Features</h4>
        <p>
          Front-end developed using React along with Redux for state management.
        </p>

        <video width="320" height="540" controls loop autoPlay muted>
          <source src={IM_1} type="video/mp4" />> Your browser does not support
          the video tag.
        </video>
        <p>Order list is made for all the products before placing order.</p>

        <p>
          Once List is prepared, they can be checked off and on hitting complete
          an email is triggered to the store email on today's order.
        </p>
        <video width="320" height="540" controls loop autoPlay muted>
          <source src={IM_2} type="video/mp4" />> Your browser does not support
          the video tag.
        </video>
        <p>Inventory check is done and updated for each product</p>
        <video width="320" height="540" controls loop autoPlay muted>
          <source src={IM_3} type="video/mp4" />> Your browser does not support
          the video tag.
        </video>
        <p>
          New Product, category and store can be added and updated by the
          emplyoee
        </p>
        <video width="360" height="340" controls loop autoPlay muted>
          <source src={IM_4} type="video/mp4" />> Your browser does not support
          the video tag.
        </video>
        <p>Mobile first design, optimized for tablet and desktop version</p>
      </Features>
    </PageContainer>
  );
};
