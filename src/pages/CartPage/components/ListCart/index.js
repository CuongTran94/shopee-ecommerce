import React, { useState, useEffect } from 'react';
import { Table, Button, Input } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ConfirmMessage from '../../../../components/ConfirmMessage';
import './styles.scss';
import { getPrice, sepratePriceNumber } from '../../../../utils/cart';
import {
  DELETE_MESSAGE,
  INVENTORY_NOT_ENOUGH_MESSAGE
} from '../../../../constants/messages';

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
    const totalPrice = sepratePriceNumber(
      getPrice(product.pro_price, product.pro_quantity)
    );
    return {
      key: product.pro_id,
      pro: {
        text: product.pro_name,
        avatar: product.pro_avatar
      },
      price: sepratePriceNumber(product.pro_price),
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
          if (productQuantity[product.pro_id] > product.pro_inventory) {
            ConfirmMessage(
              product.pro_id,
              product.pro_name,
              INVENTORY_NOT_ENOUGH_MESSAGE,
              () => {}
            );
            onBlur(product.pro_id, product.pro_inventory);
            return;
          }
          onBlur(product.pro_id, productQuantity[product.pro_id]);
        }
      },
      total: totalPrice,
      delete: () =>
        ConfirmMessage(
          product.pro_id,
          product.pro_name,
          DELETE_MESSAGE,
          onDelete
        )
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
