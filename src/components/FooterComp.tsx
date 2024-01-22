import styled from "styled-components";
import Logo from "../components/images/Group 61.png";
import Vector10 from "../components/images/Vector (10).png";
import Vector11 from "../components/images/Vector (11).png";
import Vector12 from "../components/images/Vector (12).png";
import { FaMousePointer } from "react-icons/fa";

const FooterComp = () => {
  return (
    <Footer>
      <div className="footerr">
        <div className="foot">
          <div className="foot1">
            <img src={Logo} width="120.64px" height="99.64px" alt="" />
            <p>
              Replenish him third creature and meat  blessed void a fruit
              gathered you’re,  they’re two waters own morning 
              gathered greater.
            </p>
          </div>

          <div className="foot2">
            <h4>
              {" "}
              <span className="line">About</span> Us
            </h4>
            <li>Afficiates</li>
            <li>Partners</li>
            <li>Reviews</li>
            <li>Blogs</li>
          </div>

          <div className="foot2">
            <h4>
              <span className="line">Popular</span> Classes
            </h4>
            <li>Creche</li>
            <li>Primary</li>
            <li>Secondary</li>
            <li>Highschool</li>
          </div>

          <div className="foot2">
            <h4>
              {" "}
              <span className="line">News</span>letter
            </h4>
            <p className="news">
              Sign up to newsletter to get <br />
              Latest updates
            </p>
            <div className="Nletter">
              <input type="email" placeholder="Enter Email address" />
              <span className="mouse">
                <FaMousePointer />
              </span>
            </div>
            <div className="socials">
              <div>
                {" "}
                <a href="">
                  <img src={Vector10} alt="" />
                </a>
              </div>
              <div className="space">
                {" "}
                <a href="">
                  <img src={Vector11} alt="" />
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  {" "}
                  <img src={Vector12} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="underline"></div>
        <div className="align">
          {" "}
          <p>
            Copywrite @ DinnyGreen International Technology{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.footer`
  .footerr {
    margin-top:3rem;
    width: 100%;
    background-color: #003412;
      padding:2rem 0;
    .foot {
      padding:1rem;
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns:repeat(4,1fr);
      gap: 1rem;
      align-items: center;
     
      p,
      li {
        padding: 6% 0;
        font-size: 0.9rem;
        color: #f2f2f2;
       
      }
      h4 {
        color: #f2f2f2;
        padding-bottom: 1.6rem;
       
      }
      .foot1 {
  width: 15rem;
        padding-top: 6%;
       
        li {
          gap: 1.7rem;
          font-size: 0.9rem;
        }
      }

      .foot2 {
        margin-top: 7%;
        
        margin-left:2rem;
        .line {
          padding-bottom: 0.6rem;
          border-bottom: 2px solid #add9bd;
        }

        li {
          padding-bottom: 0.6rem;
          list-style: none;
          
        }

        .news {
          padding-bottom: 5%;
        }
        .Nletter {
          display: flex;
          align-items: center;
          width: 100%;
          height: 2.5rem;
          input {
            padding: 5% 10%;
          }
          input::placeholder {
            color: #038c33;
          }
          input:focus {
            outline: none;
          }
          .mouse {
            font-size: 19px;
            color: #ffffff;
            background-color: #038c33;
          }
        }

        .btnn {
          background-color: #038c33;
          color: white;
          border: none;
        }
      }
       @media (max-width: 1024px) {
           grid-template-columns:repeat(3,1fr);
           .foot2{
            margin-left:0;
           }
       }
       @media (max-width: 660px) {
           grid-template-columns:repeat(2,1fr);
       }
       @media (max-width: 580px) {
           grid-template-columns:repeat(1,1fr);
       }
    }

    .align {
      margin-top: 1%;
      /* height: 0.5rem; */
      color: #f2f2f2;
      text-align: center;
      font-size: 0.8rem;
      align-self: end;
     
    }
    .socials {
      padding-top: 15%;
      display: flex;
     
      .space {
        margin-left: 6%;
        margin-right: 6%;
      }
    }

    .underline {
      border-bottom: 1px solid #777777;
      width: 100%;
      margin: 0 auto;
      margin-top: 8%;

    }
  }
`;
