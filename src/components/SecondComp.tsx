import styled from "styled-components";
import Frame3 from "../components/images/Frame 3.png";
import Mask from "../components/images/Mask Group (6).png";

const SecondComp = () => {
  return (
    <Wrapper>
      <div className="advances">
        <div className="adavance-learning">
          <img src={Frame3} className="dinny7" alt="" />
        </div>

        <div className=" advance-system">
          <h1>Advance Learning System Around The World</h1>

          <p>
            We have made a collaborative effort in bringing together scientific
            expertise from other countries, steered jointly by their governments
            on the basis of shared, policy-driven interests.
          </p>

          <table>
            <tr>
              <td className="up">
                <h1>
                  25k<sup>+</sup>
                </h1>
                <p>Teachers</p>
              </td>

              <td>
                <h1>
                  74k<sup>+</sup>
                </h1>
                <p>
                  Active <br /> Courses
                </p>
              </td>
              <td>
                <h1>250</h1>
                <p>
                  Extra <br /> Curricular{" "}
                </p>
              </td>
            </tr>
          </table>
          <button>Learn More</button>
        </div>
        <div className="yyy">
          <img src={Mask} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SecondComp;

const Wrapper = styled.div`
  .advances {
    display: flex;
    padding: 5% 3%;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    position: relative;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 2.5rem;
    }

    .adavance-learning {
      margin-left: 3%;
      .dinny7 {
        width: 115%;
      }
    }
    @media (max-width: 1024px) {
      .adavance-learning {
        margin-left: 5%;
        margin-bottom: 5%;

        .dinny7 {
          width: 150%;
        }
      }
    }
    @media (max-width: 768px) {
      .adavance-learning {
        margin-left: 5%;
        .dinny7 {
          width: 90%;
        }
      }
    }
    @media (max-width: 400px) {
      .adavance-learning {
        margin-left: 5%;
        display: none;
        .dinny7 {
          width: 90%;
        }
      }
    }

    .advance-system {
      margin-left: 12%;
      @media (max-width: 1024px) {
        margin-left: 20%;
      }
      @media (max-width: 768px) {
        margin-left: 10%;
      }
      @media (max-width: 400px) {
        margin-left: 6%;
      }

      h1 {
        line-height: 3rem;
        font-weight: bold;
        font-size: 2.2rem;
        color: #038c33;
        width: 60%;
        @media (max-width: 1024px) {
          font-size: 2.1rem;
          line-height: 2.4rem;
          width: 90%;
        }
        @media (max-width: 400px) {
          font-size: 1.9rem;
          line-height: 2.4rem;
          width: 90%;
        }
      }

      p {
        padding: 3% 0;
        color: #1f6036;
        width: 65%;
      }
      @media (max-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      @media (max-width: 768x) {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }

      button {
        margin-top: 40px;
        display: inline-block;
        margin-right: 20px;
        background-color: #038c33;
        color: #ffffff;
        padding: 13.5px 40px;
        border: none;
        border-radius: 5px;
        margin-top: 30px;

        &:hover {
          cursor: pointer;
          background-color: green;
        }
      }

      table {
        margin-top: 20px;
        p {
          text-align: center;
          padding: 0;
          color: #003412;
        }

        tr {
          td {
            padding: 0 10px 0 10px;
            border-right: 2px solid #ddd;
          }
          .up {
            padding: 0 10px 22px 5px;
          }
        }

        .down {
          padding-top: 2px;
          border-right: none;
        }
      }
    }

    .yyy {
      position: absolute;
      top: 40%;
      left: 90%;
    }
    @media (max-width: 1024px) {
      .yyy {
        display: none;
      }
    }
  }
  @media (max-width: 1024px) {
    .advances {
      padding: 2rem;
    }
  }
`;
