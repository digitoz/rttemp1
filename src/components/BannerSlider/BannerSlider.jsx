// src/components/BannerSlider.js
import React from 'react';
import Slider from 'react-slick';
import './BannerSlider.css'; // Create this CSS file for custom styling

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        <div className="slide">
          <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
