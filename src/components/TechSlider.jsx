import React from "react";
import Slider from "react-slick";
import "../css/reactSlick.css";

const TechSlider = ({ techIcons }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {techIcons.map((icon, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100%",
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              style={{
                maxWidth: "60px",
                maxHeight: "60px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TechSlider;
