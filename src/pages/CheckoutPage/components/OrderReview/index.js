import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './styles.scss';
import { getTotalPrice } from '../../../../utils/cart';


const OrderReview = props => {
  const { products = [], currentUser } = props;

  const ListProduct = products.map(product => {
    return (
      <div key={product.pro_id} className="order-review-product">
        <img src={product.pro_avatar} alt="" />
        <span className="order-review-product__name">{product.pro_name}</span>
        <div className="order-review-num">
          <span className="order-review-num__price">{product.pro_price}₫</span>
          <span style={{ width: '70px' }}>Số lượng</span>
          <span>{product.pro_quantity}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="order-review">
      <div className="order-review-head d-flex">
        <Link to="/">
          <LeftOutlined /> Tiếp tục mua hàng
        </Link>
        <span>Giỏ hàng (1)</span>
      </div>
      <div className="order-review-main">
        <div className="order-review-list__product">{ListProduct}</div>
        <div className="order-review-total">
          <div className="d-flex">
            <span>Tạm tính:</span>
            <span className="org-cl">{getTotalPrice(products)}đ</span>
          </div>
          <div className="d-flex">
            <span>Phí vận chuyển:</span>
            <span className="org-cl">0đ</span>
          </div>
          <div className="d-flex">
            <span>Tổng tiền:</span>
            <span className="org-cl">{getTotalPrice(products)}đ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderReview.propTypes = {};

export default OrderReview;
