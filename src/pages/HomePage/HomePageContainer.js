import React from 'react';
import Slider from './components/Slider';
import HotDeal from './components/HotDeal';
import Banner from '../../components/Banner';
import Category from './components/Category';
import HotSearch from './components/HotSearch';
import { Row } from 'antd';
import FlashSale from './components/FlashSale';

const HomePageContainer = () => {
    return (
        <div>
            <div 
                className="home-box-slider" 
                style={{background: '#fff', boxShadow: '0 1px 1px 0 rgba(0,0,0,.04)'}}
            >
                <Slider />
                <HotDeal />
            </div>
            <div className="home-banner-wrap">
                <div className="container">
                    <Row>
                        <Banner classBanner="home-banner-one" />
                    </Row>
                </div>
            </div>
            <div className="home-product-category">
                <Category />
            </div>
            <div className="home-flash-sale">
                <FlashSale />
            </div>
            <div className="home-banner-wrap">
                <div className="container">
                    <Row>
                        <Banner classBanner="home-banner-one" />
                    </Row>
                </div>
            </div>
            <div className="home-hot-search">
                <HotSearch />
            </div>            
        </div>
    );
}

export default HomePageContainer;