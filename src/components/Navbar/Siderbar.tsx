import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

const Siderbar = () => {
  const [show, setShow] = useState(false);

  const showNav = () => setShow(!show);

  return (
    <Sidebar>
      {show ? (
        <RiCloseFill onClick={showNav} className="bar" />
      ) : (
        <FaBars className="bar" onClick={showNav} />
      )}
      <nav className="sidebar">
        {show && (
          <div className="sidelinks" onClick={showNav}>
            <Link className="colorgreen" to="#">
              Home
            </Link>
            <Link to="*">About</Link>
            <Link to="*">services</Link>
            <Link to="*">Instructors</Link>
            <a href="#">
              Courses
              <select name="" id="">
                <option value=""></option>
              </select>
            </a>
            <Link to="*">Blog</Link>
            <Link to="*">Contact</Link>
           
           
                  <Link to="" className="bton">Log in</Link>
             
                
                  <Link to="" className="bton">Register</Link>
             
            
             
          </div>
        )}
      </nav>
    </Sidebar>
  );
};

export default Siderbar;

const Sidebar = styled.div`
  .bar {
    position: absolute;
    right: 3%;
    display: flex;
    top: 26%;
    font-size: 2rem;
    color: white;
    display: none;
    @media (max-width: 850px) {
      display: block;
    }
  }
  .sidebar {
    display: none;

    @media (max-width: 850px) {
      display: block;
    }
    .sidelinks {
      position: absolute;
      left: 0;
      top: 90%;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 60vh;
      background-color: #003412;

      .close {
        font-size: 2.4rem;
        font-weight: bolder;
        color: white;
        position: absolute;
        left: 16%;
        margin-top: 5% 0;
      }

      a {
        display:inline-block;
        color: #ffffff;
        margin-top: 3%;
        margin-left: 15%;
        font-size: 1.3rem;
        text-decoration: none;

        &:hover {
          color: #038c33;
        }
        .bton{
          background-color: #add9bd;
      color: #038c33;
      padding: 0.8rem 2.5rem;
      border: none;
      border-radius: 5px;
        }
      }



      

    }
  }
`;
