import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import TestAnimation from '../../components/TestAnimation';
import {SimpleButton} from '../../components/Buttons';

const RootPage = () => {
  return (
    <div className='client'>
        <Navbar/>
        <div className='container'>
          <div style={{height:'200px',backgroundColor:'yellow'}} id='yellow'></div>
          <div style={{height:'200px',backgroundColor:'gold'}} id='gold'></div>
          <div style={{height:'200px',backgroundColor:'white'}} id='white'></div>
          <div style={{height:'200px',backgroundColor:'green'}} id='green'></div>
          <div style={{height:'200px',backgroundColor:'gray'}} id='gray'></div>
          <div style={{height:'200px',backgroundColor:'pink'}} id='pink'></div>
          {/* <TestAnimation /> */}
          <SimpleButton />
        </div>
        <Footer />
    </div>
  )
}

export default RootPage;