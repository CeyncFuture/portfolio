import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import bg_1 from "../../assets/images/background/bg_1.jpg";

const Home = () => {
  return (
    <ParallaxBanner layers={[{ image: bg_1, speed: -20 }]}>
      <div
        style={{ height: "700px", backgroundColor: "red", width: "100%" }}
      >
        
      </div>
    </ParallaxBanner>
  );
};

export default Home;
