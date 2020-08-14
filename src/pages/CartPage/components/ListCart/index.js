import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Input } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './styles.scss';
import { Link } from 'react-router-dom';
import { getPrice } from '../../../../utils/cart';

const columns = [
  {
    title: 'Sản Phẩm',
    dataIndex: 'pro',
    width: 600,
    render: pro => (
      <div className="product-cart">
        <Link to="/">
          <img className="product-cart-img" src={pro.avatar} alt="" />
          <span>{pro.text}</span>
        </Link>
      </div>
    )
  },
  {
    title: 'Đơn Giá',
    dataIndex: 'price',
    width: 150
  },
  {
    title: 'Số Lượng',
    dataIndex: 'quantity',
    width: 150,
    render: quantity => (
      <div className="detail-quantity">
        <div className="detail-number">
          <Button onClick={quantity.onDecrement} icon={<MinusOutlined />} />
          <Input
            onBlur={quantity.onBlur}
            onChange={quantity.onChange}
            value={quantity.value}
          />
          <Button onClick={quantity.onIncrement} icon={<PlusOutlined />} />
        </div>
      </div>
    )
  },
  {
    title: 'Số Tiền',
    dataIndex: 'total',
    width: 150
  },
  {
    title: 'Thao Tác',
    dataIndex: 'delete',
    width: 150,
    key: 'x',
    render: onDelete => (
      <div onClick={onDelete} className="product-cart-del">
        Xóa
      </div>
    )
  }
];

const ListCart = props => {
  const {
    cart: { products = [] },
    onDelete,
    onDecrement,
    onIncrement,
    onBlur
  } = props;

  const [productQuantity, setProductQuantity] = useState(products);
  useEffect(() => {
    const quantity = products.reduce(
      (obj, product) => ({ ...obj, [product.pro_id]: product.pro_quantity }),
      {}
    );
    setProductQuantity(quantity);
  }, [props]);

  const newData = products.map(product => {
    return {
      key: product.pro_id,
      pro: {
        text: product.pro_name,
        avatar: product.pro_avatar
      },
      price: product.pro_price,
      quantity: {
        value: productQuantity[product.pro_id] || 0,
        onDecrement: () => onDecrement(product.pro_id),
        onIncrement: () => onIncrement(product.pro_id),
        onChange: event => {
          setProductQuantity({
            ...productQuantity,
            [product.pro_id]: event.target.value
          });
        },
        onBlur: () => {
          onBlur(product.pro_id, productQuantity[product.pro_id]);
        }
      },
      total: getPrice(product.pro_price, product.pro_quantity),
      delete: () => onDelete(product.pro_id)
    };
  });

  return (
    <div className="detail-cart">
      <div className="container">
        <div className="detail-cart-discount">
          Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn
          nhé!
        </div>
        <div className="detail-cart-list">
          <Table
            pagination={false}
            columns={columns}
            dataSource={newData}
            rowSelection={{
              type: 'checkbox'
            }}
          />
        </div>
      </div>
    </div>
  );
};

ListCart.propTypes = {};

export default ListCart;
