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
              <img src={Circle} alt="" />
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
              <img src={Circle} alt="" />
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
              <img src={Circle} alt="" />
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
              <img src={Circle} alt="" />
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

      h1 {
        padding-bottom: 20px;
        font-size: 40px;
        font-weight: 700;
        @media (max-width: 768px) {
          font-size: 2rem;
        }
      }
      .ptag {
        @media (max-width: 768px) {
          font-size: 1.1rem;
          padding: 2%;
        }
      }

      p {
        padding-top: 10px;
        padding-bottom: 20px;
        color: #f2f2f2;
        opacity: 0.8;
        @media (max-width: 400px) {
          font-size: 1.2rem;
        }
        @media (max-width: 768px) {
          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }
      }
    }
  }

  .displayflx {
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    opacity: 0.89;
    color: #ffffff;
    width: 80%;
    margin: 0 auto;
    gap: 1rem;

    /* @media (max-width: 1024px) {
  
    } */
    @media (max-width: 960px) {
      gap: 1rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 768px) {
      gap: 1rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 400px) {
    }
    .displayflx1 {
      display: flex;
      align-items: center;
      width: 545px;
      height: 150px;
      background-color: #f2f2f2;
      padding: 20px 20px;
      border-radius: 5px;
      opacity: 0.95;
      z-index: -1;
      gap: 1rem;
      / .img {
        margin-right: 30px;
        @media (max-width: 768px) {
          /* /* padding-top: 2%;
          padding-left: 0.3%; */
        }
        @media (max-width: 400px) {
          padding-top: 6%;
        }
      }

      .awesome {
        h4 {
          color: #038c33;
          font-size: 1rem;
          font-weight: bold;
          @media (max-width: 768px) {
            font-size: 1.3rem;
          }
          @media (max-width: 400px) {
            font-size: 1rem;
          }
        }

        p {
          padding-top: 5px;
          color: #1f6036;
          line-height: 1.4;
          @media (max-width: 768px) {
            font-size: 1.3rem;
            padding-top: 3%;
          }
          @media (max-width: 400px) {
            line-height: 1.35;
            font-size: 1rem;
          }
        }
      }
    }
    @media (max-width: 1024px) {
      .displayflx1 {
        width: 450px;
        height: 150px;
      }
    }
    @media (max-width: 768px) {
      .displayflx1 {
        width: 600px;
        height: 180px;
        padding: 20px 20px;
        /* margin: 0 auto; */
      }
    }
    @media (max-width: 400px) {
      .displayflx1 {
        width: 300px;
        height: 170px;

        /* padding: 20px 20px;
        margin-right: 2rem; */
      }
    }

    /* .displayflx2 {
      display: flex;
      width: 545px;
      height: 150px;
      background-color: #f2f2f2;
      padding: 20px 20px;
      border-radius: 5px;
      opacity: 0.95;
      z-index: 1;

      .img {
        padding-right: 20px;
        @media (max-width: 768px) {
          padding-top: 1%;
        }
        @media (max-width: 400px) {
          padding-top: 6%;
        }
      }

      .awesome {
        color: #038c33;

        h4 {
          font-size: 16px;
          font-weight: bold;
          @media (max-width: 768px) {
            font-size: 1.3rem;
          }
          @media (max-width: 400px) {
            font-size: 1rem;
          }
        }
        p {
          padding-top: 5px;
          color: #1f6036;
          @media (max-width: 768px) {
            font-size: 1.3rem;
            padding-top: 3%;
          }
          @media (max-width: 400px) {
            line-height: 1.35;
            font-size: 1rem;
          }
        }
      }
    } */
    @media (max-width: 1024px) {
      .displayflx1 {
        width: 450px;
        height: 150px;
      }
    }
    @media (max-width: 768px) {
      .displayflx1 {
        width: 500px;
        height: 180px;
      }
    }
    @media (max-width: 400px) {
      .displayflx1 {
        padding: 10px 10px;
        width: 300px;
        height: 170px;
      }
    }
  }
`;
