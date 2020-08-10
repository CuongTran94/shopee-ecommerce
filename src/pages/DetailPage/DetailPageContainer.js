import React, { useEffect } from 'react';
import ProductInfo from './components/ProductInfo';
import BreadcrumbShopee from '../../components/Breadcrumb';
import ShopInfo from './components/ShopInfo';
import ProductDetail from './components/ProductDetail';
import ProductReview from './components/ProductReview';
import { fetchDetailProduct } from '../../redux/Products/products.actions';
import { useDispatch, useSelector } from 'react-redux';

const DetailPageContainer = (props) => {
    const {match: {params: {slug}}} = props;
    const product = useSelector(state => state.product.detailProduct);
    const dispatch = useDispatch();
    
    useEffect(() => {        
        dispatch(fetchDetailProduct(slug));
    }, [slug]);

    return(
        <div className="detail-page">
            <BreadcrumbShopee {...product} />
            <ProductInfo {...product} />
            <ShopInfo />
            <ProductDetail />
            <ProductReview />
        </div>
    );
};

export default DetailPageContainer;