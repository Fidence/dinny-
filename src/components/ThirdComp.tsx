import React from "react";
import styled from "styled-components";
import Dinny5 from "../components/images/dinny5.png";
import Circle from "../components/images/Ellipse 8.png";

const ThirdComp = () => {
  return (
    <Third>
      <div className="our">
        <div className="color"></div>
        <div className="our_features">
          <h1>Our Features</h1>
          <p className="ptag">
            Dinny Green International School is nurtured in grace and truth,
            raising green, <br /> flourishing and successful children.
          </p>
        </div>

        <div className="displayflx">
          <div className="displayflx1">
            <div className="img">
              <img src={Circle} alt="" width="70" />
            </div>
            <div className="awesome">
              <h4>Awesome Teachers</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod ukkf <br /> tempor incididunt u.
              </p>
            </div>
          </div>

          <div className="displayflx1">
            <div className="img">
              <img src={Circle} alt="" width="70"/>
            </div>
            <div className="awesome">
              <h4>Global Recognition</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod ukkf <br /> tempor incididunt u.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="displayflx1">
            <div className="img">
              <img src={Circle} alt="" width="70"/>
            </div>
            <div className="awesome">
              <h4>Extra activities</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod ukkf <br /> tempor incididunt u.
              </p>
            </div>
          </div>

          <div className="displayflx1">
            <div className="img">
              <img src={Circle} alt="" width="70"/>
            </div>
            <div className="awesome">
              <h4>Government Approved</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod ukkf <br /> tempor incididunt u.
              </p>
            </div>
          </div>
        </div>

        <div className="displayflx"></div>
      </div>
    </Third>
  );
};

export default ThirdComp;

const Third = styled.div`
  .our {
    background-image: url(${Dinny5});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    /* z-index: 1; */
    padding-bottom: 3%;

    .color {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(32, 126, 32, 0.8);
    }

    &_features {
      padding-top: 55px;
      text-align: center;
      color: #f2f2f2;
      opacity: 0.89;
      p {
        padding-top: 10px;
        padding-bottom: 20px;
        color: #f2f2f2;
        opacity: 0.8;
        
      }
    }
  }

  .displayflx {
   width:80%;
   margin:0 auto; 
   display:grid;
   grid-template-columns:repeat(2, 1fr);
   gap:1rem;
   .displayflx1 {
    display:flex;
    align-items:center;
     margin: 0 auto;
      padding: 1rem;
      background-color: #f2f2f2;
      border-radius: 5px;
      opacity: 0.95;
      gap: 1rem;
      / .img {
        margin-right: 30px;
       
      }

      .awesome {
        h4 {
          color: #038c33;
          font-weight: bold;
         
        }

        p {
          padding-top: 5px;
          color: #1f6036;
          line-height: 1.4;
          
        }
      }
    }
    @media (max-width: 768px) {
          grid-template-columns:repeat(1, 1fr);
      }

  }
`;
