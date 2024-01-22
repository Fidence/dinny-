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
        <div className="blureme">

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

      </div>
    </Seventh>
  );
};

export default SeventhComp;

const Seventh = styled.div`
  .stories {
    margin-top:3rem;
    background-image: url(${FarmBoy});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.95;
  
    .blureme {
      padding:2rem 1rem;
      width: 100%;
      background: rgba(5, 150, 13, 0.3);
    }

    .stories_txt {
      text-align: center;
      h1 {
        color: #f2f2f2;
        font-weight: 700;
        margin-bottom:1rem;
        
      }
    }

    &_imgs {
      margin-top: 1%;
      justify-content: center;
      padding-top: 1%;
      display: flex;
       @media (max-width: 360px) {
        display:none;

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
          z-index:1;
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
