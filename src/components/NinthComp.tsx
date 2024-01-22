import React from "react";
import styled from "styled-components";

const NinthComp = () => {
  return (
    <Ninth>
      <div className="contact">
        <h1>Contact us</h1>
        <div className="contact_form">
          <form action="#">
            <div className="inputs">
              <input type="text" name="" placeholder="Name" required></input>
              <input type="email" name="" placeholder="Email" required></input>

              <input type="phonet" name="" placeholder="Phone" required></input>
              <input
                type="subject"
                name=""
                placeholder="Subject"
                required
              ></input>
            </div>
            <br /> <br />
            <textarea
              className="textarea"
              typeof="message"
              placeholder="Message"
            ></textarea>
            <br />
            <button>
              <a href="">Send now</a>
            </button>
          </form>
        </div>
      </div>
    </Ninth>
  );
};

export default NinthComp;

const Ninth = styled.div`
  .contact {
    margin-top: 3rem;
    justify-content: center;
    background-color: #ffffff;

    h1 {
      text-align: center;
      color: #038c33;
      margin-bottom:1.5rem;
    }
    &_form {
      width: 100%;
      text-align: center;

      form {
        width: 100%;
        .inputs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          width: 90%;
          margin: 0 auto;
          input {
        width: 100%;
            padding: 1% 3%;
            height: 48px;
            border: 1.4px solid #c4c4c4;
            border-radius: 3px;
          }
        }

        .textarea {
          display: block;
          width: 90%;
          height: 9rem;
          margin: 0 auto;
          border-radius: 3px;
          border: 1.4px solid #c4c4c4;
        }
        button {
          margin-top: 0%;
          display: block;
          margin: 0 auto;
          background-color: #038c33;
          color: #ffffff;
          padding: 1% 3%;
          border: none;
          border-radius: 5px;
          
        }
      }
    }

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;
