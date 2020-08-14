import React from "react";
import PropTypes from "prop-types";
import { Table, Button, Input, Modal } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./styles.scss";
import { Link } from "react-router-dom";
import { getPrice } from "../../../../utils/cart";

const columns = [
  {
    title: "Sản Phẩm",
    dataIndex: "pro",
    width: 600,
    render: (pro) => (
      <div className="product-cart">
        <Link to="/">
          <img className="product-cart-img" src={pro.avatar} alt="" />
          <span>{pro.text}</span>
        </Link>
      </div>
    ),
  },
  {
    title: "Đơn Giá",
    dataIndex: "price",
    width: 150,
  },
  {
    title: "Số Lượng",
    dataIndex: "quantity",
    width: 150,
    render: (quantity) => (
      <div className="detail-quantity">
        <div className="detail-number">
          <Button icon={<MinusOutlined />} />
          <Input defaultValue={quantity} readOnly={true} />
          <Button icon={<PlusOutlined />} />
        </div>
      </div>
    ),
  },
  {
    title: "Số Tiền",
    dataIndex: "total",
    width: 150,
  },
  {
    title: "Thao Tác",
    dataIndex: "delete",
    width: 150,
    key: "x",
    render: (onDelete) => (
      <div onClick={onDelete} className="product-cart-del">
        Xóa
      </div>
    ),
  },
];

const ListCart = (props) => {
  const {
    cart: { products = [] },
    onDelete,
  } = props;

  const confirmDelete = (id, name) => {
    Modal.confirm({
      title: 'Bạn chắc chắn muốn bỏ sản phẩm này?',
      content: name,
      okText: 'Có',
      okType: 'danger',
      centered: true,
      keyboard: true,
      width: 540,
      icon: '',
      cancelText: 'Không',
      className: 'confirm-delete',
      onOk() {
        onDelete(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const newData = products.map((product) => {
    return {
      key: product.pro_id,
      pro: {
        text: product.pro_name,
        avatar: product.pro_avatar,
      },
      price: product.pro_price,
      quantity: product.pro_quantity,
      total: getPrice(product.pro_price, product.pro_quantity),
      delete: () => confirmDelete(product.pro_id, product.pro_name),
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
              type: "checkbox",
            }}
          />
        </div>
      </div>
    </div>
  );
};

ListCart.propTypes = {};

export default ListCart;
