import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import bg_1 from "../../assets/images/background/bg_1.jpg";
import RoundedButton from "../../components/buttons/elements/RoundedButton";

const Home = () => {
  return (
    <ParallaxBanner layers={[{ image: bg_1, speed: -20 }]}>
      <div
        style={{ height: "700px", backgroundColor: "red", width: "100%" }}
      >
        <RoundedButton />
      </div>
    </ParallaxBanner>
  );
};

export default Home;
