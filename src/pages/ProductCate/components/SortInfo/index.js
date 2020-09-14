import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Tag, Select } from 'antd';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import ListProduct from '../../../../components/ListProduct';

const { Option } = Select;
const { CheckableTag } = Tag;
const sortData = ['Phổ biến', 'Mới nhất', 'Bán chạy'];

const SortInfo = ({ products = [], location, categoryid }) => {
  const [selectTag, setSelectTag] = useState('Phổ biến');
  const history = useHistory();

  const handleChange = value => {
    history.push(
      `${location.pathname}?categoryid=${categoryid}&order=${value}`
    );
  };
  return (
    <Col lg={20}>
      <div className="shopee-sort-result">
        <div className="shopee-sort-bar">
          <span>Sắp xếp theo</span>
          <div className="shopee-sort-option">
            {sortData.map(item => (
              <CheckableTag key={item} checked={selectTag.indexOf(item) > -1}>
                {item}
              </CheckableTag>
            ))}
          </div>
          <Select onChange={handleChange} placeholder="Giá">
            <Option value="asc">Giá: Thấp đến Cao</Option>
            <Option value="desc">Giá: Cao đến Thấp</Option>
          </Select>
        </div>
        <div className="shopee-sort-product">
          <ListProduct column={5} listProduct={products} />
        </div>
      </div>
    </Col>
  );
};

SortInfo.propTypes = {
  products: PropTypes.array
};

export default SortInfo;
