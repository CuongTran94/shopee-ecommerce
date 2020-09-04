import React from 'react';
import styled from 'styled-components';
import { StylePrice } from '../components';

const StyleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-weight: 10;
  font-family: arial, sans-serif;
`;

const StyledTr = styled.tr`
  padding: 8px;
  border-bottom: 1px solid #dddddd;
  text-align: right;
  height: 70px;
`;

const StyledTh = styled.th`
  padding: 8px;
  border-bottom: 1px solid #dddddd;
  text-align: right;
  font-weight: normal;
`;

const TablePrice = ({ payMethod, totalPrice, sepratePriceNumber }) => {
  return (
    <StyleTable>
      <tbody>
        <StyledTr>
          <StyledTh>Tổng tiền hàng</StyledTh>
          <StyledTh>₫{sepratePriceNumber(totalPrice)}</StyledTh>
        </StyledTr>
        <StyledTr>
          <StyledTh>Vận chuyển-Giao Hàng Tiết Kiệm</StyledTh>
          <StyledTh>₫0</StyledTh>
        </StyledTr>
        <StyledTr>
          <StyledTh>Tổng số tiền</StyledTh>
          <StyledTh>
            <StylePrice fontSize={30}> ₫{sepratePriceNumber(totalPrice)}</StylePrice>
          </StyledTh>
        </StyledTr>
        <StyledTr>
          <StyledTh>Phương thức thanh toán</StyledTh>
          <StyledTh>{payMethod}</StyledTh>
        </StyledTr>
      </tbody>
    </StyleTable>
  );
};

export default TablePrice;
