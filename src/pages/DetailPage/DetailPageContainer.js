import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductInfo from './components/ProductInfo';
import BreadcrumbShopee from '../../components/Breadcrumb';
import ShopInfo from './components/ShopInfo';
import ProductDetail from './components/ProductDetail';
import ProductReview from './components/ProductReview';
import { fetchDetailProduct } from '../../redux/Products/products.actions';

import { fetchCart } from '../../redux/Cart/cart.actions';

const DetailPageContainer = (props) => {
  const {
    match: {
      params: { slug },
    },
  } = props;
  const product = useSelector((state) => state.product.detailProduct) || {};
  const currentUser = useSelector((state) => state.user.currentUser) || {};
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailProduct(slug));
    if (currentUser.id !== undefined) dispatch(fetchCart(currentUser.id));
  }, [slug, currentUser]);

  return (
    <div className="detail-page">
      <BreadcrumbShopee {...product} />
      <ProductInfo
        cart={cart}
        dispatch={dispatch}
        currentUser={currentUser}
        {...product}
      />
      <ShopInfo />
      <ProductDetail />
      <ProductReview />
    </div>
  );
};

export default DetailPageContainer;
