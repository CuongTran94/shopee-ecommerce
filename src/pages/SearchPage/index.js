import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';

import { searchProduct } from '../../redux/Products/products.actions';
import ListProduct from '../../components/ListProduct';

const Container = styled.div`
  margin-top: 118px;
`;

const SearchPage = ({ location }) => {
  const { keyword } = queryString.parse(location.search);
  const products = useSelector(state => state.product.listProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProduct(keyword));
  }, [keyword]);

  return (
    <Container>
      <ListProduct listProduct={products} />
    </Container>
  );
};

SearchPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.any
  })
};

export default SearchPage;
