import React from 'react'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

export default function App(props) {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div         
      className='carousel'
    >
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            display: 'none'
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            display: 'none'
          },
          children: <span>{`<`}</span>,
        }}

        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 450,
          },
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 900,
          },
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 1024,
          },
        ]}
        autoplay={true}
        speed={700}
        delay={700}
        easing="linear"
        centerMode={true}
        infinite={true}
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {props.items.map((item,key)=>
          (
            <div style={{ width: 200, height: 100}} key={key} className='item'>
                <img src={item} alt='icon' />
            </div>
          )
        )}
      </ReactSimplyCarousel>
    </div>
  );
}