import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';

import TablePrice from './tablePrice';
import { SHOPEE_ORANGE } from '../../../constants/color';
import { StyledLayout, StyledHeader, StyledContent } from '../components';
import { fetchOrderDetail } from '../../../redux/Order/order.actions';

import { getTotalPrice, sepratePriceNumber } from '../../../utils/cart';

const HeaderInfo = styled.div`
  height: 180px;
  display: flex;
`;

const ContainerDetail = styled.div``;

const LeftAddressInfo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const AddressTitle = styled.div`
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.8);
  height: 40px;
`;

const UserName = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const PhoneNumber = styled.div``;

const Address = styled.div``;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
`;

const StyledProduct = styled.div`
  display: flex;
`;

const StyleProductText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const StyleProductName = styled.div``;
const StyleProductQty = styled.div``;
const StylePrice = styled.div`
  color: ${SHOPEE_ORANGE};
`;

const columns = [
  {
    dataIndex: 'productItem',
    render: productItem => {
      return (
        <StyledProduct>
          <StyledImage src={productItem.image}></StyledImage>
          <StyleProductText>
            <StyleProductName>{productItem.name}</StyleProductName>
            <StyleProductQty>x{productItem.quantity} </StyleProductQty>
          </StyleProductText>
        </StyledProduct>
      );
    }
  },
  {
    dataIndex: 'price',
    render: price => {
      return <StylePrice> ₫{sepratePriceNumber(price)}</StylePrice>;
    }
  }
];

const OrderDetailPage = props => {
  const order = useSelector(state => state.order.orderDetail) || {};
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = props;

  const {
    name = '',
    phone_number,
    address,
    city,
    products = [],
    payment_method
  } = order;

  const totalPrice = getTotalPrice(products);
  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchOrderDetail(id));
    }
  }, [id]);

  const productOrder = products.map(product => {
    return {
      key: product.pro_id,
      productItem: {
        name: product.pro_name,
        image: product.pro_avatar,
        quantity: product.pro_quantity
      },
      price: product.pro_price
    };
  });

  return (
    <StyledLayout>
      <StyledHeader />
      <StyledContent>
        <HeaderInfo>
          <LeftAddressInfo>
            <AddressTitle>Địa Chỉ Nhận Hàng</AddressTitle>
            <UserName>{name}</UserName>
            <PhoneNumber>{phone_number}</PhoneNumber>
            <Address>
              {address}, {city}
            </Address>
          </LeftAddressInfo>
        </HeaderInfo>
        <ContainerDetail>
          <Table
            pagination={false}
            columns={columns}
            dataSource={productOrder}
          />
          <TablePrice
            payMethod={payment_method}
            totalPrice={totalPrice}
            sepratePriceNumber={sepratePriceNumber}
          />
        </ContainerDetail>
      </StyledContent>
    </StyledLayout>
  );
};

export default OrderDetailPage;
