import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Input } from 'antd';
import { MinusOutlined, PlusOutlined  } from '@ant-design/icons';
import './styles.scss';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'Sản Phẩm',
        dataIndex: 'name',
        width: 600,
        render: () => (
            <div className="product-cart">
                <Link to="/">
                    <img className="product-cart-img" src="https://firebasestorage.googleapis.com/v0/b/shopee-ad17d.appspot.com/o/images%2Fproduct_3.jpg?alt=media&token=e9c7fd43-7ea8-4dd2-b0f6-900250215607" alt="" />
                    <span>[Mã ELCLXU8 hoàn 150K xu đơn 500K] Laptop Core 2 Duo Các Hãng | Ram 3gb | Màn hình 14in - 15.6in | Máy Zin</span>
                </Link>                
            </div>
        )
    },
    {
        title: 'Đơn Giá',
        dataIndex: 'price',
        width: 150,
    },
    {
        title: 'Số Lượng',
        dataIndex: 'quantity',
        width: 150,
        render: () => (
            <div className="detail-quantity">
                <div className="detail-number">
                    <Button icon={<MinusOutlined />} />
                    <Input defaultValue={1} readOnly={true} />
                    <Button icon={<PlusOutlined />} />
                </div>
            </div>
        )
    },
    {
        title: 'Số Tiền',
        dataIndex: 'total',
        width: 150,
    },
    {
        title: 'Thao Tác',        
        dataIndex: '',
        width: 150,
        key: 'x',
        render: () => <a className="product-cart-del">Xóa</a>,
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
        <div className="detail-cart">
            <div className="container">
                <div className="detail-cart-discount">
                    Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!
                </div>
                <div className="detail-cart-list">
                    <Table 
                        pagination={false}
                        columns={columns}
                        dataSource={data}
                        rowSelection={{
                            type: 'checkbox',                        
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

ListCart.propTypes = {
    
};

export default ListCart;