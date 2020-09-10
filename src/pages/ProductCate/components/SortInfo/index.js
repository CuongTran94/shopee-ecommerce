import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Tag, Select } from 'antd';
import './styles.scss';
import ListProduct from '../../../../components/ListProduct';
import product1 from '../../../../assets/images/product_1.jpg';
import product2 from '../../../../assets/images/product_2.jpg';
import product3 from '../../../../assets/images/product_3.jpg';
import product4 from '../../../../assets/images/product_4.jpg';
import product5 from '../../../../assets/images/product_5.jpg';
import product6 from '../../../../assets/images/product_6.jpg';

const { Option } = Select;
const { CheckableTag } = Tag;
const sortData = ['Phổ biến', 'Mới nhất', 'Bán chạy'];
const data = [
    {
        id: 1,
        pro_name: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
        pro_avatar: product1,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 3,
        pro_name: "Kính cường lực iphone 6 6s 7 8 6 plus 6s plus 7 Plus 8 Plus X Xr XsMax 11 11 pro 11 pro max - 10D",
        pro_avatar: product2,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 4,
        pro_name: "Bộ ga giường và vỏ gối , Bộ ga trải giường chọn mẫu theo phân loại",
        pro_avatar: product3,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 5,
        pro_name: "Chống nắng serum 3 trong 1 Senka White Beauty CC 40g",
        pro_avatar: product4,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 6,
        pro_name: "[MKB Gift] Tặng Ba Mẹ Bí Quyết: Comfort Cho Da Nhạy Cảm, Nước Giặt Omo Dịu Nhẹ Trên Da, Nước Lau Sàn Sunlight Hương Hoa",
        pro_avatar: product5,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 7,
        pro_name: "Váy 2 dây, đầm xuông - chất đũi lụa trơn basic nữ - VDX",
        pro_avatar: product6,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 8,
        pro_name: "Bộ ga giường và vỏ gối , Bộ ga trải giường chọn mẫu theo phân loại",
        pro_avatar: product3,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 9,
        pro_name: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
        pro_avatar: product1,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 10,
        pro_name: "[MKB Gift] Tặng Ba Mẹ Bí Quyết: Comfort Cho Da Nhạy Cảm, Nước Giặt Omo Dịu Nhẹ Trên Da, Nước Lau Sàn Sunlight Hương Hoa",
        pro_avatar: product5,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 11,
        pro_name: "Kính cường lực iphone 6 6s 7 8 6 plus 6s plus 7 Plus 8 Plus X Xr XsMax 11 11 pro 11 pro max - 10D",
        pro_avatar: product2,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 12,
        pro_name: "Chống nắng serum 3 trong 1 Senka White Beauty CC 40g",
        pro_avatar: product4,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 13,
        pro_name: "Váy 2 dây, đầm xuông - chất đũi lụa trơn basic nữ - VDX",
        pro_avatar: product6,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 14,
        pro_name: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
        pro_avatar: product1,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 15,
        pro_name: "Kính cường lực iphone 6 6s 7 8 6 plus 6s plus 7 Plus 8 Plus X Xr XsMax 11 11 pro 11 pro max - 10D",
        pro_avatar: product2,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 16,
        pro_name: "Bộ ga giường và vỏ gối , Bộ ga trải giường chọn mẫu theo phân loại",
        pro_avatar: product3,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 17,
        pro_name: "Chống nắng serum 3 trong 1 Senka White Beauty CC 40g",
        pro_avatar: product4,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 18,
        pro_name: "[MKB Gift] Tặng Ba Mẹ Bí Quyết: Comfort Cho Da Nhạy Cảm, Nước Giặt Omo Dịu Nhẹ Trên Da, Nước Lau Sàn Sunlight Hương Hoa",
        pro_avatar: product5,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 19,
        pro_name: "Váy 2 dây, đầm xuông - chất đũi lụa trơn basic nữ - VDX",
        pro_avatar: product6,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 20,
        pro_name: "Bộ ga giường và vỏ gối , Bộ ga trải giường chọn mẫu theo phân loại",
        pro_avatar: product3,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 21,
        pro_name: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
        pro_avatar: product1,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 22,
        pro_name: "[MKB Gift] Tặng Ba Mẹ Bí Quyết: Comfort Cho Da Nhạy Cảm, Nước Giặt Omo Dịu Nhẹ Trên Da, Nước Lau Sàn Sunlight Hương Hoa",
        pro_avatar: product5,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 23,
        pro_name: "Kính cường lực iphone 6 6s 7 8 6 plus 6s plus 7 Plus 8 Plus X Xr XsMax 11 11 pro 11 pro max - 10D",
        pro_avatar: product2,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 24,
        pro_name: "Chống nắng serum 3 trong 1 Senka White Beauty CC 40g",
        pro_avatar: product4,
        pro_slug: 'boom',
        pro_price: 123
    },
    {
        id: 25,
        pro_name: "Váy 2 dây, đầm xuông - chất đũi lụa trơn basic nữ - VDX",
        pro_avatar: product6,
        pro_slug: 'boom',
        pro_price: 123
    },
];

const SortInfo = props => {
    const [selectTag, setSelectTag] = useState('Phổ biến');
    return (
        <Col lg={20}>
            <div className="shopee-sort-result">
                <div className="shopee-sort-bar">
                    <span>Sắp xếp theo</span>
                    <div className="shopee-sort-option">
                        {sortData.map(item => (
                            <CheckableTag
                                key={item}
                                checked={selectTag.indexOf(item) > -1}
                            >
                                {item}
                            </CheckableTag>
                        ))}
                    </div>
                    <Select
                        placeholder="Giá"
                    >
                        <Option value="high">Giá: Thấp đến Cao</Option>
                        <Option value="low">Giá: Cao đến Thấp</Option>
                    </Select>
                </div>
                <div className="shopee-sort-product">
                    <ListProduct
                        column={5}
                        listProduct={data}
                    />
                </div>
            </div>
        </Col>
    );
};

SortInfo.propTypes = {

};

export default SortInfo;