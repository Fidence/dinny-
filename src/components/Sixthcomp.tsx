import React from "react";
import styled from "styled-components";
import Mask5 from "../components/images/Mask Group (5).png";
import Dinnygren from "../components/images/dinnygreen.jpg";
import Group62 from "../components/images/Group 62.png";

const Sixthcomp = () => {
  return (
    <Sixth>
      <div className="help">
        <div className="help_txt">
          <h1>Find Out We Help Students </h1>
          <p>
            We have built hospitals, arranged doctor appointments have the
            diagnose and treat <br /> yourem ipsu r aol ad meniam, quis nostrud
            exercitation.
          </p>
        </div>

        <div className="help_bg">
          <div className="blurr"></div>
          <div className="top">
            <img src={Mask5} alt="" />
          </div>
          <div className="side">
            <img src={Mask5} alt="" />
          </div>

          <img src={Group62} className="image" alt="" />
        </div>
      </div>
    </Sixth>
  );
};

export default Sixthcomp;

const Sixth = styled.div`
  .help {
    margin-top: 2%;
    @media (width: 768px) {
      padding: 3% 0;
    }
    @media (width: 450px) {
      padding: 3% 0;
    }
    .help_txt {
      text-align: center;
      h1 {
        font-size: 40px;
        color: #038c33;
        padding: 2%;
        @media (width: 1024px) {
          font-size: 1.5rem;
        }
        @media (width: 768px) {
          font-size: 2rem;
        }
        @media (width: 400px) {
          font-size: 0.5rem;
        }
      }
    }
    p {
      color: #1f6036;
      @media (width: 768px) {
        font-size: 1.15rem;
      }
    }

    .help_bg {
      margin-top: 6%;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
      height: 30rem;
      background-image: url(${Dinnygren});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      position: relative;
      @media (width: 768px) {
        max-width: 100%;
        height: 20rem;
      }
      @media (width: 400px) {
        /* max-width: 100%; */
        height: 3rem;
        background-color: red;
      }

      .blurr {
        width: 100%;
        height: 100%;
        background: rgba(18, 152, 18, 0.35);
      }

      .image {
        width: 9rem;
        height: 9rem;
        position: absolute;
        top: 34%;
        left: 40%;
        display: block;
        margin: auto auto;
        @media (width: 768px) {
          width: 6rem;
          height: 6rem;
        }
        @media (width: 400px) {
          display: none;
        }
      }
    }
    @media (width: 1024px) {
      .help_bg {
        width: 50%;
        height: 20rem;
        @media (width: 400px) {
          display: none;
        }
      }
    }

    .top {
      width: 148.49px;
      height: 148.49px;
      position: absolute;
      bottom: 85%;
      right: -3%;
      z-index: -1;
      @media (width: 768px) {
        bottom: 0%;
        right: -3%;
      }
      @media (width: 400px) {
        display: none;
      }
    }

    .side {
      width: 148.49px;
      height: 148.49px;
      position: absolute;
      top: 25%;
      left: -13%;
      z-index: -1;
      @media (width: 400px) {
        display: none;
      }
    }
  }
`;
