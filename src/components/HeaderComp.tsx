import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/images/Group 61.png";
import Thiseng from "../components/images/thisiseng.png";
import Siderbar from "./Navbar/Siderbar";

const HeaderComp = () => {
  return (
    <Header>
      <div className="container">
        <div className="wapper">
          <div className="wapper_box">
            <div className="wapper_box1">
              <div className="info">
                <ul>
                  <li>
                    <span className="darkg">Call:</span> +234 9012624162
                  </li>
                  <li>
                    <span className="darkg">Support:</span>
                    <a href="mailtoinfo@yourcompany.com">
                      {" "}
                      info@yourcompany.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="butt">
                <button className="button">
                  <a href="">Log in</a>
                </button>
                <button className="button button-darkg">
                  <a href="">Register</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar section */}

      <nav>
        <div className="navbar">
          <div className="navbar_container">
            <div className="navbar_container2">
              <div className="logo">
                <img src={Logo} width="71px" height="58.64px" alt="" />
              </div>

              <Siderbar />
              <div className="links">
                <Link className="colorgreen" to="/">
                  Home
                </Link>
                <Link to="#">About</Link>
                <Link to="*">services</Link>
                <Link to="*">Instructors</Link>
                <Link to="#">
                  Courses
                  <select name="" id="">
                    <option value=""></option>
                  </select>
                </Link>
                <Link to="*">Blog</Link>
                <Link className="block" to="*">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* showcase section */}

      <div className="showcase">
        <div className="showcase_text">
          <h1>
            {" "}
            Give Your Child A <br />
            Chance To Be Unique
          </h1>
          <p>
            Experts agree that a child’s personality doesn’t fully form <br />{" "}
            until they are in elementary school. <br />
            <a href="">Sign in</a> to enroll your child
          </p>
          <div>
            <button className="btn">Sign Up</button>
            <button className="btn_light1">Learn More</button>
          </div>

          <div className="blury"></div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  .container {
    width: 100%;
    .wapper {
      color: #038c33;
      width: 100%;
      height: 2.8rem;
      background-color: #ffffff;

      &_box {
        height: 2.8rem;
      }

      &_box1 {
        display: flex;
        padding: 1.3rem;
        height: 2.8rem;
        align-items: center;
        justify-content: space-between;
        line-height: 1.1rem;
        font-size: 0.8rem;
        font: normal;
        margin: 0 auto;
        position: relative;

        .info {
          height: 2.8rem;
          font-weight: 400;
          position: sticky;
          top: 0;
          z-index: 1;

          ul {
            display: flex;
            padding: 3% 0;
            list-style: none;


            li {
              margin-right: 5rem;
              .darkg {
                color: #003412;
                font-weight: 500;
              }

              a {
                text-decoration: none;
                color: #038c33;
              }
            }
          }
        }

        .butt {
          display: inline;
          padding: 0 0.5rem;
          margin-left: 1rem;
          border: none;
         
       

          .button {
            border: none;
            background-color: #ffffff;

            a {
              text-decoration: none;
              color: #038c33;
              padding: 0.3rem 1.4rem;
              border: none;
              &:hover {
                background-color: #038c33;
                color: #ffffff;
                border-radius: 5px;
              }
            }
          }

          &_drakg {
            display: inline;
            border: none;
            background-color: #038c33;

            a {
              text-decoration: none;
              padding: 0.3rem 1.3rem;
              font-size: 0.8rem;
              font-weight: 300;
              &:hover {
                background-color: #038c33;
                padding: 0.3rem 1.3rem;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
     @media (max-width: 590px) {
    
        display: none;
        margin-left: 4rem;
    
    }
  }

  .navbar {
    height: 5.2rem;
    background-color: #003412;
    position: sticky;
    top: 0;
    z-index: 1;

    &_container {
      height: 3rem;
    }

    &_container2 {
      display: flex;
      align-items: center;
      justify-content:space-between;
      /* height: 100%; */
      padding: 1rem;

      .links {
  
        a {
          margin-left: 2rem;
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;

          &:hover {
            color: #038c33;
          }
        }

        .cologreen {
          color: #038c33;
        }
        .block {
          background-color: #038c33;
          padding: 0.5rem 2.5rem;
          border-radius: 5px;

          &:hover {
            color: white;
          }
        }
      }
    }
    @media (max-width: 850px) {
      .links {
        display: none;
        margin-left: 4rem;
      }
    }
    
  }

  .showcase {
    width: 100%;
    height:75vh;
    background-image: url(${Thiseng});
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;

    &_text {
     display: flex;
     flex-direction:column;
      justify-content:center;
      gap: 1rem;
      height: 100%;
      padding:1rem 3rem;
      h1 {
        font-family: "lato";
        line-height: 1.2;
        color: #038c33;

      }

      p {
        padding: 0.6rem 0;
        color: #1f6036;

       

        a {
          text-decoration: none;
          color: rgb(168, 196, 91);
        }
      }
    }

    .btn {
      margin-right: 1rem;
      background-color: #038c33;
      color: #ffffff;
      padding: 0.8rem 2.5rem;
      border: none;
      border-radius: 5px;
   

      &:hover {
        cursor: pointer;
        background-color: green;
      }
    }

    .btn_light1 {
      margin-right: 1.3rem;
      gap: 1rem;
      background-color: #add9bd;
      color: #038c33;
      padding: 0.8rem 2.5rem;
      border: none;
      border-radius: 5px;
    

      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }

  .blury {
    position: absolute;
    width: 100%;
    height: 4.8rem;
    left: 0px;
    top: 47rem;
    background-color: rgba(0, 52, 18, 0.35);
    backdrop-filter: blur(30px);
  }
`;
