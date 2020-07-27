import React from 'react';
import { Row, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import slider1 from '../../../../assets/images/slider_1.jpg';
import slider2 from '../../../../assets/images/slider_2.jpg';
import slider3 from '../../../../assets/images/slider_3.png';
import banner1 from '../../../../assets/images/banner_1.jpg';
import banner2 from '../../../../assets/images/banner_2.jpg';
import './styles.scss';

const Slider = () => {
    return (
        <div className="shopee-slider">
            <div className="container">
                <Row className="home-slider-wrap">
                    <div className="home-slider">
                        <Carousel autoplay>
                            <div>
                                <Link to="">
                                    <img src={slider1} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src={slider2} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src={slider3} alt="" />
                                </Link>
                            </div>
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
}

export default Slider;