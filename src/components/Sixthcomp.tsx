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

          {/* <img src={Group62} className="image" alt="" /> */}
        </div>
      </div>
    </Sixth>
  );
};

export default Sixthcomp;

const Sixth = styled.div`
  .help {
    margin-top: 3rem;
    
    .help_txt {
      text-align: center;
      h1 {
        color: #038c33;
        padding: 2%;
        line-height: 1.2;
      
       
      }
    }
    p {
      color: #1f6036;
     
    }

    .help_bg {
    margin:0 auto;
    margin-top:2rem;
      width: 50%;
      height: 20rem;
      background-image: url(${Dinnygren});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
       @media (max-width: 768px) { 
        width: 70%;
        height: 15rem;
      }
       @media (max-width: 350px) {
        display: none;
      }
     

      .blurr {
        width: 100%;
        height: 100%;
        background: rgba(18, 152, 18, 0.35);
      }

    }

    .top {
      width: 148.49px;
      height: 148.49px;
      position: absolute;
      bottom: 85%;
      right: -3%;
      z-index: -1;

       @media (max-width: 500px) {
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
      @media (max-width: 500px) {
        display: none;
      }
    }
  }
`;
