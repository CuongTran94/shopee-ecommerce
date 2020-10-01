import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';

import CategoryFilter from './components/CategoryFilter';
import SortInfo from './components/SortInfo';
import {
  getChildren,
  getCateIds,
  getFathers,
  getSubCates
} from '../../utils/cart';
import { fetchCategories } from '../../redux/Category/category.actions';
import { fetchProductsByCates } from '../../redux/Products//products.actions';

const ProductCateContainer = props => {
  const { location = '' } = props;
  const { categoryid, order = 'asc', sortBy = undefined } = queryString.parse(
    location.search
  );
  const categories = useSelector(state => state.category.categories);

  let cates = getChildren(categoryid, categories);
  const cateIds = getCateIds(cates);
  const products = useSelector(state => state.product.productsCategory);
  const dispatch = useDispatch();

  if (categories.length > 1) {
    //
    const rootCate = getFathers(categoryid, categories);
    if (rootCate.length > 0) {
      const subCates = getSubCates(rootCate[0].id, categories);
      cates = subCates;
    }
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [location]);

  useEffect(() => {
    const addCurrentCate = [...cateIds, categoryid];
    dispatch(fetchProductsByCates(addCurrentCate, order, sortBy));
  }, [categories, location]);

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
          <CategoryFilter
            categoryIds={[...cateIds, categoryid]}
            order={order}
            parrentId={categoryid}
            cates={cates}
          />
          <SortInfo
            categoryid={categoryid}
            location={location}
            products={products}
          />
        </Row>
      </div>
    </div>
  );
};

ProductCateContainer.propTypes = {
  location: PropTypes.object
};

export default ProductCateContainer;
