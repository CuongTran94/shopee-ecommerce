import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import CategoryFilter from './components/CategoryFilter';
import SortInfo from './components/SortInfo';
import { getIDFromUrl, getChildren } from '../../utils/cart';
import { fetchCategories } from '../../redux/Category/category.actions';
import {
  fetchProductsByCates,
  cleanProductsCategory
} from '../../redux/Products//products.actions';

const ProductCateContainer = props => {
  const { location = '' } = props;
  const id = getIDFromUrl(location.pathname);
  const categories = useSelector(state => state.category.categories);
  const cateIds = getChildren(id, categories);
  const products = useSelector(state => state.product.productsCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (cateIds.length !== 0) {
      dispatch(fetchProductsByCates(cateIds));
    } else {
      dispatch(cleanProductsCategory());
    }
  }, [categories]);

  return (
    <div
      className="shopee-filter-page"
      style={{
        marginTop: 118,
        overflow: 'hidden',
        marginBottom: 60
      }}
    >
      <div className="container">
        <Row>
          <CategoryFilter />
          <SortInfo products={products} />
        </Row>
      </div>
    </div>
  );
};

ProductCateContainer.propTypes = {
  location: PropTypes.object
};

export default ProductCateContainer;
