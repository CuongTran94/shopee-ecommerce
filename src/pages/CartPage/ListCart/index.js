import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './styles.scss';

const columns = [
    {
        title: 'Sản Phẩm',
        dataIndex: 'name'
    },
    {
        title: 'Đơn Giá',
        dataIndex: 'price'
    },
    {
        title: 'Số Lượng',
        dataIndex: 'quantity'
    },
    {
        title: 'Số Tiền',
        dataIndex: 'total'
    },
    {
        title: 'Thao Tác',
        dataIndex: '',
        key: 'x',
        render: () => <a>Xóa</a>,
    }
];

const data = [
    {
        key: 1,
        name: '[Mã ELCLXU8 hoàn 150K xu đơn 500K] Laptop Core 2 Duo Các Hãng | Ram 3gb | Màn hình 14in - 15.6in | Máy Zin',
        price: 250000,
        quantity: 2,
        total: 500000,
    },
    {
        key: 2,
        name: '[Mã ELCLXU8 hoàn 150K xu đơn 500K] Laptop Core 2 Duo Các Hãng | Ram 3gb | Màn hình 14in - 15.6in | Máy Zin',
        price: 250000,
        quantity: 1,
        total: 250000,
    }
];

const ListCart = () => {
    return (
        <div className="detail-cart-wrap">
            <div className="container">
                <div className="detail-cart-discount">
                    Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!
                </div>
                <div className="detail-cart-list">
                    <Table 
                        columns={columns}
                        dataSource={data}
                        type={"checkbox"}
                    />
                </div>
            </div>
        </div>
    );
};

ListCart.propTypes = {
    
};

export default ListCart;