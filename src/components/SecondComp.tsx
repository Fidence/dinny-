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
          <img src={Mask} alt=""  />
        </div>
      </div>
    </Wrapper>
  );
};

export default SecondComp;

const Wrapper = styled.div`
  .advances {
  margin:2rem 0;
    display: grid;
   grid-template-columns:repeat(3, 1fr);
    
    gap:1rem;
    background-color: #ffffff;
    position: relative;
     /* flex: 1; */
    

    .adavance-learning {
     
      .dinny7{
     
       width:400px;
     
      }
      @media (max-width: 800px) {
           display:none;
       }
    }
   

    .advance-system {
    
   

      h1 {
        line-height:1.2; 
        color: #038c33;  
      }

      p {
        padding: 3% 0;
        color: #1f6036;
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
            padding: 0 8px 0 8px;
            border-right: 2px solid #ddd;
          }
          /* .up {
            padding: 0 10px 22px 5px;
          } */
        }

        .down {
          padding-top: 2px;
          border-right: none;
        }
      }
    }

    .yyy {
      flex:1;
      position: absolute;
      top: 40%;
      left: 85%;
      @media (max-width: 1024px) {
        
          display: none;
        
      }
    }
  }
 
`;