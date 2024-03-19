import React, {lazy} from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import bg_1 from '../../assets/images/background/bg_1.jpg';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const CardSlider = lazy(()=>import('../../components/CardSlider'));

const RootPage = () => {
  return (
    <ParallaxProvider>
      <div className='client'>
          <Navbar/>
          <div className='container'>
            <CardSlider />
            <ParallaxBanner 
              layers={[
                {image: bg_1, speed: -20}
              ]}>
                <CardSlider />
                <div style={{height:'700px',backgroundColor:'red', width: '100%'}} ></div>
            </ParallaxBanner>
          </div>
          <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default RootPage;