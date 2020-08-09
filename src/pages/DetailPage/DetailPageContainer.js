import React from 'react';
import ProductInfo from './components/ProductInfo';
import BreadcrumbShopee from '../../components/Breadcrumb';
import ShopInfo from './components/ShopInfo';
import ProductDetail from './components/ProductDetail';
import ProductReview from './components/ProductReview';

const DetailPageContainer = (props) => {
    console.log(props);
    return(
        <div className="detail-page">
            <BreadcrumbShopee />
            <ProductInfo />
            <ShopInfo />
            <ProductDetail />
            <ProductReview />
        </div>
    );
};

export default DetailPageContainer;