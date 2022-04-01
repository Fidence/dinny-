import EightComp from "../components/EightComp";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth/Fifthcomp";

import NinthComp from "../components/NinthComp";
import SecondComp from "../components/SecondComp";
import SeventhComp from "../components/SeventhComp";
import Sixthcomp from "../components/Sixthcomp";
import ThirdComp from "../components/ThirdComp";

const HomePage = () => {
  return (
    <div>
      <SecondComp />
      <ThirdComp />
      <Fourth />
      <Fifth />
      <Sixthcomp />
      <SeventhComp />
      <EightComp />
      <NinthComp />
    </div>
  );
};

export default HomePage;
