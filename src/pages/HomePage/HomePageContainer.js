import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row } from 'antd';

import Slider from './components/Slider';
import HotDeal from './components/HotDeal';
import Banner from '../../components/Banner';
import Category from './components/Category';
import HotSearch from './components/HotSearch';
import HotProduct from './components/HotProduct';
import FlashSale from './components/FlashSale';
import { fetchProducts } from '../../redux/Products/products.actions';
import { fetchCategories } from '../../redux/Category/category.actions';
import { fetchSliders } from '../../redux/Slider/slider.actions';

const HomePageContainer = () => {
  const products = useSelector(state => state.product.listProducts);
  const loading = useSelector(state => state.product.isLoading);
  const categories = useSelector(state => state.category.categories);
  const sliders = useSelector(state => state.slider.sliders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchSliders());
  }, []);

  return (
    <div className="homepage" style={{ marginBottom: 70 }}>
      <div
        className="home-box-slider"
        style={{ background: '#fff', boxShadow: '0 1px 1px 0 rgba(0,0,0,.04)' }}
      >
        <Slider sliders={sliders} />
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
        <Category categories={categories} />
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
      <div className="home-list-product">
        <HotProduct listProduct={products} isLoading={loading} />
      </div>
    </div>
  );
};

export default HomePageContainer;
