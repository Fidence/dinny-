import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { students } from "./students";
import Group35 from "../images/Group 35.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Fifthcomp extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 450,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <Fifth>
        <div className="popular">

        <div className="popular_classes">
          <div className="pop_txt">
            <h1>Popular Classes</h1>
            <p>
              We have built hospitals, arranged doctor appointments have the
              diagnose and treat <br /> yourem ipsu r aol ad meniam, quis
              nostrud exercitation.
            </p>
          </div>

          <div className="pop_img">
            <img src={Group35} alt="" />
          </div>
        </div>

        <div className="slide">
          <Slider {...settings}>
            {students.map((student, id) => {
              return (
                <div className="instructors">
                  <img src={student.img}width="100" alt="Instructor1" />
                  <div className="date">
                    <div className="date_txt">
                      <FaStickyNote className="icon" />
                      <span className="dateno">{student.less}</span>
                    </div>
                    <div className="date_txt">
                      <AiTwotoneCalendar className="icon" />
                      <span className="dateno">{student.date}</span>
                    </div>
                  </div>
                  <h4>{student.date}</h4>
                  <p>{student.para}</p>
                  <div className="enroll">
                    <p className="enrolnow">Enroll Now</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="enroll_btn">
          <button className="view_btn">View More</button>
        </div>
        </div>
      </Fifth>
    );
  }
}

const Fifth = styled.div`
  background-color: #f9fcfe;
  width: 100%;
  /* height: 50rem; */
  .popular {
    padding:1rem 0;
    background-color: #f9fcfe;
    &_classes {
      display: flex;
      justify-content: flex-end;
       position: relative;
      .pop_txt {
        width: 80%;
        text-align: center;
        flex: 7;

        h1 {
        
          color: #038c33;
          font-weight: bold;
          line-height: 1.2;
         
        }

        p {
          color: #1f6036;
          padding: 1% 0;
          
        }
      }

      .pop_img {
      position:fixed;
       /* top: 70%; */
       /* z-index:1; */
        
       
      }
    }
  }
  .slide {
    max-width: 90%;
    margin: 1rem auto;
   
    .slick-prev:before,
    .slick-next:before {
      color: green;
      width: 15px;
    }
    .slick-prev {
      left: 1%;
      top: 50%;

      z-index: 1;
    }
    .slick-next {
      position: absolute;
      right: 1%;
      top: 50%;
    }

    .instructors {
      margin: 4% 0;
      width: 100%;
      background-color: #ffffff;
      padding: 1rem;
      margin-bottom: 5%;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      img {
        display: block;
        margin: auto;
        padding-top: 40px;
        margin-bottom: 4%;
      }

      .date {
        text-align: center;
        padding: 10px 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: #6c757d;
        .date_txt {
          display: flex;
          align-items: center;
          .dateno {
            margin-left: 5px;
          }
          .icon {
            color: #038c33;
          }
        }
      }

      h4 {
        color: #038c33;
        text-align: center;
        padding-bottom: 5px;
      }

      p {
        padding: 5%;
        color: #6c757d;
        text-align: center;
        opacity: 0.98;
        z-index: 1;
      }

      .enroll {

        .enrolnow {
          padding: 2%;
          padding .arrow {
          }
          border-radius: 0px 0 5px 5px;
          border-top: 1px solid #038c33;
          border-bottom: 5px solid #038c33;

          margin-right: 0;
          color: #038c33;

          &:hover {
            cursor: pointer;
            background-color: #038c33;
            color: #ffffff;
          }
        }
      }
    }
  }
  .enroll_btn {
    margin-top:2.5rem;
    .view_btn {
      display: block;
      margin: 0 auto;
      background-color: #038c33;
      color: #ffffff;
      padding: 13.5px 40px;
      border: none;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        background-color: green;
      }
    }
  }
`;
