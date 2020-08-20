import React from 'react';
import {
  Price,
  ActionCointaner,
  Delete,
  Span,
  Image
} from './styles/ComponentCart';
import { truncateString } from '../../utils/cart';

const getColumns = () => {
  const columns = [
    {
      title: 'Sản phẩm mới thêm',
      dataIndex: 'pro',
      key: 'name',
      width: 300,
      // eslint-disable-next-line react/prop-types
      render: ({ image, name }) => (
        <div>
          <Image src={image} />
          <Span>{truncateString(name)}</Span>
        </div>
      )
    },

    {
      key: 'action',
      dataIndex: 'action',
      // eslint-disable-next-line react/prop-types
      render: ({ price, quantity, onDelete }) => (
       
        <ActionCointaner>
          <Price>
            ₫{price} x {quantity}
          </Price>
          <Delete onClick={onDelete}>Xóa</Delete>
        </ActionCointaner>
      )
    }
  ];
  return columns;
};

export default getColumns;
