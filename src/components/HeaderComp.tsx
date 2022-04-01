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
            @media (max-width: 400px) {
              padding: 2% 0;
            }

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
          display: inline-block;
          padding: 0 0.5rem;
          margin-left: 1rem;
          border: none;
          @media (max-width: 400px) {
            display: none;
          }

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
            display: inline-block;
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
      margin: 0 auto;
      padding-top: 0.5rem;

      .logo {
        margin-left: 1.3rem;
      }

      .links {
        margin-left: 5rem;

        a {
          margin-left: 5rem;
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
    @media (max-width: 1025px) {
      .links {
        display: none;
        margin-left: 4rem;
      }
    }
    @media (max-width: 768px) {
      .links {
        display: none;
        margin-left: 4rem;
      }
    }
    @media (max-width: 400px) {
    }
  }

  .showcase {
    width: 100%;
    height: 35.5rem;
    background-image: url(${Thiseng});
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;

    &_text {
      padding-top: 7.5rem;
      padding-left: 10rem;
      @media (max-width: 400px) {
        padding-top: 8rem;
        padding-left: 2rem;
      }

      h1 {
        font-family: "lato";
        font-weight: bold;
        font-style: normal;
        line-height: 4.2rem;
        font-size: 3rem;
        color: #038c33;
        @media (max-width: 400px) {
          font-size: 2.5rem;
          line-height: 3rem;
        }
      }

      p {
        padding: 0.6rem 0;
        color: #1f6036;
        line-height: 1.5rem;
        @media (max-width: 768px) {
          font-size: 1.1rem;
        }

        a {
          text-decoration: none;
          color: rgb(168, 196, 91);
        }
      }
    }

    .btn {
      display: inline-block;
      margin-right: 1.3rem;
      background-color: #038c33;
      color: #ffffff;
      padding: 0.8rem 2.5rem;
      border: none;
      border-radius: 5px;
      margin-top: 1.9rem;

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
      margin-top: 1.9rem;

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
    top: 39.1rem;
    background-color: rgba(0, 52, 18, 0.35);
    backdrop-filter: blur(30px);
  }
`;
