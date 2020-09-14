import PropTypes from 'prop-types';
import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCurrentCategory } from '../../../../redux/Category/category.actions';
import './styles.scss';

const { Title } = Typography;

const gridStyle = {
  width: '10%',
  textAlign: 'center'
};

const ListCategories = ({ categories }) => {
  const dispatch = useDispatch();

  const handleSetCurrentCate = cateID => {
    dispatch(setCurrentCategory(cateID));
  };

  const categoriesList = categories.map(category => {
    return (
      <Card.Grid key={category.c_slug} style={gridStyle}>
        <Link
          onClick={() => handleSetCurrentCate(category.id)}
          to={`/cat/${category.c_slug}.${category.id}`}
        >
          <div className="home-category-img">
            <img src={category.c_image} alt="" />
          </div>
          <div className="home-category-title">
            <Title level={4}>{category.c_name}</Title>
          </div>
        </Link>
      </Card.Grid>
    );
  });
  return categoriesList;
};

const Category = ({ categories = [] }) => {
  return (
    <div className="home-category-list home-category">
      <div className="container">
        <Card title="Danh mục" style={{ textTransform: 'uppercase' }}>
          <ListCategories categories={categories} />
        </Card>
      </div>
    </div>
  );
};

Category.propTypes = {
  categories: PropTypes.array
};

export default Category;
