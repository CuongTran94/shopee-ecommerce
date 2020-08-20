import styled from 'styled-components';
import { Table, Button } from 'antd';
import { SHOPEE_WHITE, SHOPEE_ORANGE } from '../../../constants/color';

const Container = styled.div`
  width: 400px;
`;

const StyleTable = styled(Table)`
  .ant-table-cell {
    padding: 10px;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Span = styled.span`
  margin-left: 6px;
`;

const BottomCart = styled.div`
  height: 44px;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
`;

const CartButton = styled(Button)`
  height: 36px;
  background: ${SHOPEE_ORANGE};
  color: ${SHOPEE_WHITE};
  text-transform: capitalize;
  &:hover,
  &:focus {
    color: ${SHOPEE_WHITE};
    background: ${SHOPEE_ORANGE};
    border-color: ${SHOPEE_ORANGE};
  }
`;

const Price = styled.div`
  color: ${SHOPEE_ORANGE};
  text-align: right;
`;

const Delete = styled.div`
  cursor: pointer;
  text-align: right;
`;

const ActionCointaner = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  Container,
  Span,
  Delete,
  ActionCointaner,
  Price,
  CartButton,
  StyleTable,
  BottomCart,
  Image
};
