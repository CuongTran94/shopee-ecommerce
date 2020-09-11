import React from 'react';
import { Row, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import banner1 from '../../../../assets/images/banner_1.jpg';
import banner2 from '../../../../assets/images/banner_2.jpg';
import './styles.scss';




const Slider = ({ sliders }) => {
  const slidersRender = sliders.map(slider => {
    return (
      <div key={slider.title}>
        <Link to="/">
          <img src={slider.image} alt="" />
        </Link>
      </div>
    );
  });
  return (
    <div className="shopee-slider">
      <div className="container">
        <Row className="home-slider-wrap">
          <div className="home-slider">
            <Carousel arrows autoplay>
              {slidersRender}
            </Carousel>
          </div>
          <div className="home-banner">
            <Link to="/" className="banner">
              <img src={banner1} alt="" />
            </Link>
            <Link to="/" className="banner">
              <img src={banner2} alt="" />
            </Link>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Slider;
