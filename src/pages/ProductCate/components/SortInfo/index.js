import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Tag, Select } from 'antd';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import ListProduct from '../../../../components/ListProduct';

const { Option } = Select;
const { CheckableTag } = Tag;
const sortData = [
  { name: 'Phổ biến', id: 0, value: 'pop' },
  { name: 'Mới nhất', id: 1, value: 'ctime' },
  { name: 'Bán chạy', id: 2, value: 'sales' }
];

const SortInfo = ({ products = [], location, categoryid }) => {
  const [current, setCurrent] = useState(0);
  const history = useHistory();

  const handleChange = value => {
    history.push(
      `${location.pathname}?categoryid=${categoryid}&order=${value}`
    );
  };

  const handleSortByOption = value => {
    history.push(
      `${location.pathname}?categoryid=${categoryid}&sortBy=${value}`
    );
  };

  return (
    <Col lg={20}>
      <div className="shopee-sort-result">
        <div className="shopee-sort-bar">
          <span>Sắp xếp theo</span>
          <div className="shopee-sort-option">
            {sortData.map(item => (
              <CheckableTag
                onClick={() => {
                  setCurrent(item.id);
                  handleSortByOption(item.value);
                }}
                key={item.id}
                checked={item.id === current}
              >
                {item.name}
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
