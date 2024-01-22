import React from "react";
import styled from "styled-components";
import Woman from "../components/images/woman.png";
import Rectangle8 from "../components/images/Rectangle8.png";
import Trust from "../components/images/trust.png";
import { AiTwotoneCalendar } from "react-icons/ai";


const EightComp = () => {
  return (
    <Eighth>
      <div className="teacher">
        <div className="teacher_row">
          <h1>Our Instructors & Teachers</h1>
          <p>
            We have the best teachers and instructors that would be able to
            train your kids, making <br />
            them Creative, God fearing, Respectfull and Intelligent.{" "}
          </p>
        </div>

        <div className="flexwapper">
          <div className="teacher_section">
            <div className="section1">
              <div className="linear">
                <div className="bb">
                  <button>Full time</button>
                  <p>
                    {" "}
                    <strong>Masters in Geology</strong>{" "}
                  </p>

                  <div className="april">
                    <AiTwotoneCalendar />
                    <span> 28th April 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section2">
            <div className="linear2">
              <div className="bb2">
                <button>Full time</button>
                <p>
                  Doctor appointments have the  diagnose
                </p>

                <div className="april">
                  <AiTwotoneCalendar />
                  <span> 28th April 2021</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section3">
            <div className="linear3">
              <div className="bb3">
                <button>Full time</button>
                <p>
                  {" "}
                  Doctor appointments have the diagnose
                </p>
                <div className="april">
                  <AiTwotoneCalendar />
                  <span> 28th April 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="teacher_btn">See all</button>
      </div>
    </Eighth>
  );
};

export default EightComp;

const Eighth = styled.div`
  .teacher {
    /* width: 100%; */
    padding: 3rem;
    background-color: rgba(103, 191, 38, 0.08);
    &_row {
      text-align: center;
      h1 {
        color: #038c33;
        /* margin:1.3rem 0; */
        line-height:1.2;
        
      }
      p {
        margin: 1rem 0;
        text-align: center;
        color: #6c757d;
      }
    }

    .flexwapper {
      display: flex;
      justify-content: center;
      gap:1rem;
      margin:1.5rem 3rem 1rem 0;
     
      .teacher_section {
      
        .section1 {
          width: 18rem;
          height: 20rem;
          background-image: url(${Woman});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;

          .linear {
            width: 100%;
            height: 100%;
           
            border-radius: 0px 0px 5px 5px;
            background: linear-gradient(
              180deg,
              rgba(3, 140, 51, 0) 22.57%,
              rgba(3, 140, 51, 0.497159) 77.2%,
              #038c33 100%
            );

            .bb {
              position: absolute;
              top: 45%;
              left: 0px;
              font-size:14px;
              margin-top: 15%;
              margin-left: 8%;
              width: 14.5rem;
              height: 5.2rem;
              color: #ffffff;

              button {
                margin-bottom: 8%;
                padding: 3% 10%;
                background-color: #add9bd;
                border-radius: 0.2rem;
                color: #ffffff;
                border: none;
              }
              .april {
                display: flex;
                align-items: center;
                font-size: 0.9rem;

                span {
                  margin-left: 3%;
                }
              }
            }
          }
        }
         @media (max-width: 340px) {
          display: none;
        }
      }

      .section2 {
        width: 18rem;
          height: 20rem;
        background-image: url(${Trust});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        border-radius: 0.2rem;
       

        .linear2 {
          position: absolute;
          width: 100%;
          height: 100%;
        
          border-radius: 0px 0px 5px 5px;
          background: linear-gradient(
            180deg,
            rgba(3, 140, 51, 0) 22.57%,
            rgba(3, 140, 51, 0.497159) 77.2%,
            #038c33 100%
          );

          .bb2 {
            margin-top: 8%;
            margin-left: 6%;
            font-size:14px;
            width: 14.5rem;
            height: 5.2rem;
            color: #ffffff;
              position: absolute;
              top: 47%;
            left: 0px;

            button {
              margin-bottom: 8%;
              padding: 3% 10%;
              background-color: #add9bd;
              border-radius: 0.2rem;
              color: #ffffff;
              border: none;
            }
            .april {
              display: flex;
              align-items: center;
              font-size: 0.9rem;
              span {
                margin-left: 3%;
              }
            }
          }
        }
        @media (max-width: 340px) {
          display: none;
        }
      }

      .section3 {
        width: 18rem;
          height: 20rem;
        background-image: url(${Rectangle8});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        border-radius: 0.2rem;

        .linear3 {
          width: 100%;
          height: 100%;
          border-radius: 0px 0px 5px 5px;
          background: linear-gradient(
            180deg,
            rgba(3, 140, 51, 0) 22.57%,
            rgba(3, 140, 51, 0.497159) 77.2%,
            #038c33 100%
            );
            
            .bb3 {
            position: absolute;
              top: 47%;
            left: 0px;
            margin-top: 8%;
            margin-left: 6%;
            font-size:14px;
            width: 14.5rem;
            height: 5.2rem;
            color: #ffffff;

            button {
              margin-bottom: 8%;
              padding: 3% 10%;
              background-color: #add9bd;
              border-radius: 0.2rem;
              color: #ffffff;
              border: none;
            }
            .april {
              display: flex;
              align-items: center;
              font-size: 0.9rem;
              span {
                margin-left: 3%;
              }
            }
          }
        }
        @media (max-width: 1024px) {
          display: none;
        }
        @media (max-width: 340px) {
          display: none;
        }
      }
      @media (max-width: 650px) {
          flex-direction:column;
          align-items:center;
          
        }
    }

    .teacher_btn {
      display: block;
      background-color: #038c33;
      color: #ffffff;
      padding: 0.8rem 2.5rem;
      margin: 0 auto;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9rem;

      &:hover {
        background-color: green;
        cursor: pointer;
      }
      
    }
  }
`;
