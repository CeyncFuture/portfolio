import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CardSlider from '../../components/CardSlider';

const RootPage = () => {
  return (
    <div className='client'>
        <Navbar/>
        <div className='container'>
          <CardSlider />
          {/* <motion.div style={{height:'500px',backgroundColor:'white'}} id='white'></motion.div> */}
        </div>
        <Footer />
    </div>
  )
}

export default RootPage;