import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardActionArea,Hidden } from '@mui/material';


import WebIcon from '../assets/images/Icons/Tech-web-development.png';
import MobileIcon from '../assets/images/Icons/Tech-mobile-development.png';
import GameIcon from '../assets/images/Icons/Tech-games-development.png';
import CloudIcon from '../assets/images/Icons/Tech-cloud-development.png';
import APIIcon from '../assets/images/Icons/Tech-API-development.png';
import ReactIcon from '../assets/images/Icons/techStacks/web/React.png';
import AngularIcon from '../assets/images/Icons/techStacks/web/Angular.png';
import WordpressIcon from '../assets/images/Icons/techStacks/web/Wordpress.png';
import Carousel from './Carousel';

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
    transition: { duration: .4 }
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: .4, staggerChildren: .1 }
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: .4 }
  }
}

const squareVariants = {
  initial: {
    opacity: 0,
    scale: .3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  }
}


const CardSlider = () => {
    const [selectedSquare, setSelectedSquare] = useState(null);

    const renderSquares = () => {

    const squares = [
      {id:'1', icon: WebIcon, name: 'Web Solution', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea neque quidem exercitationem possimus. 1', technology: [WordpressIcon,ReactIcon,AngularIcon]},
      {id:'2', icon: MobileIcon, name: 'Mobile Solution', description: '', technology: [WordpressIcon,ReactIcon,AngularIcon]},
      {id:'3', icon: APIIcon, name: 'API Solution', description: '', technology: ['https://picsum.photos/200','https://picsum.photos/id/237/200/300']},
      {id:'4', icon: CloudIcon, name: 'Cloud Solution', description: '', technology: ['https://picsum.photos/200','https://picsum.photos/id/237/200/300']},
      {id:'5', icon: GameIcon, name: 'Game Development', description: '', technology: ['https://picsum.photos/200','https://picsum.photos/id/237/200/300']}];

      return squares.map((square, i) => (
        <Card variant='outlined' style={{margin: '5px', borderWidth: '2px'}} key={i}>
          <CardActionArea>
            <motion.div 
              className={`square square--${square.id}`} 
              onClick={() => setSelectedSquare(square)}
              variants={squareVariants}
              transition={{ duration: .2, type: 'spring' }}
            >
              <img src={square.icon} alt='Icon'  style={{width: '70px', alignSelf: 'center'}} />
              <div className='text'>{square.name}</div>
            </motion.div>
          </CardActionArea>  
        </Card>  
      ));
    }

    const renderSquare = () => {
      return(
        <motion.div 
            className={`card card__wrapper card__wrapper--${selectedSquare.id}`}
            key="card"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="card__header">
              <Hidden mdUp> 
                <div className="card__img-placeholder" style={{alignContent:'center',justifyContent:'center', display:'flex' }}>
                  <motion.img 
                    src={selectedSquare.icon} 
                    alt='Web'  
                    style={{width: '100px', alignSelf: 'center'}}
                    animate={{
                      x: [-20, 0]
                    }}
                  />
                </div> 
              </Hidden> 
              <h2>{selectedSquare.name}</h2>
              <motion.button 
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0]
                }}
                onClick={() => setSelectedSquare(null)}>
                  <CloseIcon />
              </motion.button>
            </div>
            <div className="card__content" >
              <Hidden mdDown> 
                <div className="card__img-placeholder" style={{alignContent:'center',justifyContent:'center', display:'flex' }}>
                  <motion.img 
                    src={selectedSquare.icon} 
                    alt='Web'  
                    animate={{
                      x: [-20, 0]
                    }}
                  />
                </div> 
              </Hidden>
              <div className="card__text-placeholder">
                  {selectedSquare.description}
              </div>
            </div>
            <div style={{width: '50vw',justifySelf:'center'}}>
                <Carousel items={selectedSquare.technology}/>
            </div>
        </motion.div>
      )
    }


    return (
        <div className='card-slider'>
            <div className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}>
                <AnimatePresence mode='wait' initial={false}>
                {selectedSquare 
                    ? (
                      renderSquare()
                    )
                    : (
                    <motion.div 
                        className="cp-transition__squares-wrapper"
                        key="squares"
                        variants={wrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {renderSquares()}
                    </motion.div>
                    )
                }
                </AnimatePresence>
            </div>
        </div>
    )
  }

 
export default CardSlider;