import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../../assets/styles/theme.jsx";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Navbar, Footer } from '../../components/drawers';
import Home from './Home';

const RootPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <div className='client'>
            <Navbar/>
            <div className='container'>
              <Home />
            </div>
            <Footer />
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default RootPage;