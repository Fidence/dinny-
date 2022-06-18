import React from "react";
import styled from "styled-components";
import Ellipse from "../components/images/Ellipse 21.png";
import Yogendra from "../components/images/yogendra.png";
import James from "../components/images/james.png";
import FarmBoy from "../components/images/farmboy.png";

const SeventhComp = () => {
  return (
    <Seventh>
      <div className="stories">
        <div className="blureme"></div>
        <div className="stories_txt">
          <h1>Success Stroies</h1>
        </div>

        <div className="stories_imgs">
          <div className="story1">
            {" "}
            <img src={Ellipse} className="sucess1" alt="" />
          </div>
          <div className="story2">
            <img src={Yogendra} className="sucess2" alt="" />
          </div>
          <div className="story3">
            {" "}
            <img src={James} className="sucess3" alt="" />
          </div>
        </div>

        <p>
          <em>
            We have built hospitals, arranged doctor appointments have the
            diagnose and treat yourem ipsu r aol ad <br /> meniam, quis nostrud
            exercitation.We doctor appointments have the diagnose and treat
            yourem ipsu r <br /> exercitatranged docts have the diagnose and
            treat ipsu r aol{" "}
          </em>
        </p>
      </div>
    </Seventh>
  );
};

export default SeventhComp;

const Seventh = styled.div`
  .stories {
    margin-top: 100px;
    height: 413px;
    background-image: url(${FarmBoy});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.95;
    position: relative;
    @media (max-width: 768px) {
      height: 350px;
    }
    @media (max-width: 400px) {
      height: 350px;
    }

    .blureme {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(5, 150, 13, 0.3);
    }

    &_txt {
      text-align: center;
      h1 {
        color: #f2f2f2;
        padding-top: 3%;
        font-size: 2.5rem;
        font-weight: 700;
        @media (max-width: 400px) {
          padding-top: 5%;
          font-size: 1.5rem;
        }
        @media (max-width: 960px) {
          padding-top: 3%;
          font-size: 2.3rem;
        }
        @media (max-width: 768px) {
          padding-top: 3%;
        }
      }
    }

    &_imgs {
      margin-top: 1%;
      justify-content: center;
      padding-top: 1%;
      display: flex;
      @media (max-width: 960px) {
        margin-top: 3%;
      }
      @media (max-width: 400px) {
        margin-top: 5%;
      }

      .story1 {
        margin-top: 3%;
        margin-right: 3%;
        .sucess1 {
          opacity: 0.9;
        }
      }

      .story2 {
        .sucess2 {
          border-radius: 50%;
          border: 2px dotted #f2f2f2;
          opacity: 0.9;
        }
      }

      .story3 {
        margin-left: 3%;
        margin-top: 2.8%;
        border: 1px solid #038c33;

        .sucess3 {
          border-radius: 50%;
          opacity: 0.9;
        }
      }
    }
    p {
      text-align: center;
      color: #003412;
      padding: 2%;
    }
  }
`;
