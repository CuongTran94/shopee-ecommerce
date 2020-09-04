import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Layout } from 'antd';
import { Link } from 'react-router-dom';

import { fetchOrderManagement } from '../../../redux/Order/order.actions';
import {
  getTotalPrice,
  getStatus,
  sepratePriceNumber
} from '../../../utils/cart';

const { Header, Content } = Layout;

const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>
  },
  {
    title: 'Ngày đặt hàng',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Trạng thái đơn hàng',
    dataIndex: 'status',
    key: 'stat'
  },
  {
    title: 'Tổng tiền',
    key: 'totalPrice',
    dataIndex: 'totalPrice',
    render: totalPrice => {
      return <div>{totalPrice}đ</div>;
    }
  },
  {
    title: 'Hành động',
    key: 'action',
    dataIndex: 'action',

    render: action => (
      <Space size="middle">
        <Link to={`purchase/${action}`}>Chi tiết đơn hàng</Link>
      </Space>
    )
  }
];

const PerchasePage = () => {
  const currentUser = useSelector(state => state.user.currentUser) || {};
  const orders = useSelector(state => state.order.orderManagements) || {};
  const dispatch = useDispatch();

  const newData = orders.map(order => {
    const totalPrice = getTotalPrice(order.products);
    return {
      key: order.id,
      id: order.id,
      date: '20/1/2020',
      status: getStatus(order.status),
      totalPrice: sepratePriceNumber(totalPrice),
      action: order.id
    };
  });

  useEffect(() => {
    const { id } = currentUser;
    if (id !== undefined) {
      dispatch(fetchOrderManagement(id));
    }
  }, [currentUser]);

  return (
    <Layout>
      <Header style={{ height: '100px' }}>
        <h2>Quản lý đơn hàng</h2>
      </Header>
      <Content>
        <Table columns={columns} dataSource={newData} />
      </Content>
    </Layout>
  );
};

export default PerchasePage;