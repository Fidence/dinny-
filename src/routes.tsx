import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";
import HomePage from "./pages/index";

const RouterComp = () => {
  return (
    <Wrapper>
      <Router>
        <HeaderComp />

        <div className="main-app">
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <FooterComp />
      </Router>
    </Wrapper>
  );
};

export default RouterComp;

const Wrapper = styled.div`

@media (max-width: 500px) {
         h1{
          font-size:24px;
         }
         p{
          font-size:14px;
         }
       }
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  .main-app {
    flex: 1;
  }
`;
