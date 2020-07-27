import React from 'react';
import { Carousel, Card } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import flashsale1 from '../../../../assets/images/flashsale_1.jpg';
import flashsale2 from '../../../../assets/images/flashsale_2.jpg';
import flashsale3 from '../../../../assets/images/flashsale_3.jpg';
import flashsale4 from '../../../../assets/images/flashsale_4.jpg';
import flashsale5 from '../../../../assets/images/flashsale_5.jpg';
import flashsale6 from '../../../../assets/images/flashsale_6.jpg';
import flashsale7 from '../../../../assets/images/flashsale_7.jpg';
import flashsale8 from '../../../../assets/images/flashsale_8.jpg';
import flashsale9 from '../../../../assets/images/flashsale_9.jpg';
import flashsale10 from '../../../../assets/images/flashsale_10.jpg';
import flashsale11 from '../../../../assets/images/flashsale_11.png';
import flashsale12 from '../../../../assets/images/flashsale_12.jpg';
import './styles.scss';
import { Link } from 'react-router-dom';
import ArrowCarousel from '../../../../components/ArrowCarousel';

const { Meta } = Card;

const FlashSale = () => {
    return (
        <div className="flash-sale">
            <div className="container">
                <div className="flash-sale-header">
                    <div className="flash-sale-wrap">
                        <div className="flash-sale-img"></div>
                    </div>
                    <Link to="/" className="flash-sale-link">
                        Xem tất cả <RightOutlined />
                    </Link>
                </div>
                <div className="flash-sale-content">
                    <Carousel
                        dots={false}
                        arrows={true} 
                        infinite={false}
                        slidesToShow={6} 
                        slidesToScroll={6}
                        nextArrow={<ArrowCarousel classname="slick-next" icon="inext" />}
                        prevArrow={<ArrowCarousel classname="slick-prev" icon="iprev" />}
                    >
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale1} alt="" />}
                                bordered={false}
                            >
                                
                                <Meta title="2.950.000đ"></Meta>
                            </Card>
                        </div>
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale2} alt="" />}
                                bordered={false}
                            >
                                <Meta title="80.000đ"></Meta>
                            </Card>
                        </div>
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale3} alt="" />}
                                bordered={false}
                            >
                                <Meta title="95.000đ"></Meta>
                            </Card>
                        </div>
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale4} alt="" />}
                                bordered={false}
                            >
                                <Meta title="50.000đ"></Meta>
                            </Card>
                        </div>
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale5} alt="" />}
                                bordered={false}
                            >
                                <Meta title="20.000đ"></Meta>
                            </Card>
                        </div>
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale6} alt="" />}
                                bordered={false}
                            >
                                <Meta title="29.000đ"></Meta>
                            </Card>
                        </div>
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale7} alt="" />}
                                bordered={false}
                            >
                                <Meta title="35.000đ"></Meta>
                            </Card>
                        </div>
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale8} alt="" />}
                                bordered={false}
                            >
                                <Meta title="35.000đ"></Meta>
                            </Card>
                        </div> 
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale9} alt="" />}
                                bordered={false}
                            >
                                <Meta title="35.000đ"></Meta>
                            </Card>
                        </div> 
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale10} alt="" />}
                                bordered={false}
                            >
                                <Meta title="35.000đ"></Meta>
                            </Card>
                        </div> 
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale11} alt="" />}
                                bordered={false}
                            >
                                <Meta title="35.000đ"></Meta>
                            </Card>
                        </div>
                        <div>
                            <Card 
                                style={{width: 200}}
                                cover={<img src={flashsale12} alt="" />}
                                bordered={false}
                            >
                                <Meta title="35.000đ"></Meta>
                            </Card>
                        </div>                                  
                    </Carousel>
                </div>                                
            </div>
        </div>
    );
}

export default FlashSale;