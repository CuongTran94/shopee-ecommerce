import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Row, Col, Typography, Checkbox, Input, Button, List } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const data = [
    { id: 1, title: 'Thời trang nam' },
    { id: 2, title: 'Áo thun' },
    { id: 3, title: 'Áo sơ mi' },
    { id: 4, title: 'Áo khoác' },
    { id: 5, title: 'Áo nỉ' },
    { id: 6, title: 'Đồ bộ' },
];

const CategoryFilter = props => {
    return (
        <Col lg={4}>
            <div className="shopee-filter-pannel">
                <div className="shopee-cate-list">
                    <div className="shopee-cate-list__header">
                        <UnorderedListOutlined className="order" /> Tất cả danh mục
                    </div>
                    <div className="shopee-cate-list__body">
                        <List
                            dataSource={data}
                            bordered={false}
                            renderItem={item => (
                                <List.Item className="shopee-cate-list__item">
                                    <Link to="" className={item.id === 1 ? 'active' : ''}>{item.title}</Link>
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
                <div className="shopee-filter-title">
                    <Title level={3}>Bộ lọc tìm kiếm</Title>
                </div>
                <div className="shopee-filter-group">
                    <div className="shopee-filter-group__header">
                        Thương hiệu
                        </div>
                    <div className="shopee-filter-group__body">
                        <Checkbox>No brand</Checkbox>
                        <Checkbox>Bobo Bamboo</Checkbox>
                        <Checkbox>Taobao</Checkbox>
                        <Checkbox>Tik Tok</Checkbox>
                    </div>
                </div>
                <div className="shopee-filter-group">
                    <div className="shopee-filter-group__header">
                        Khoảng giá
                        </div>
                    <div className="shopee-filter-group__body">
                        <div className="shopee-price-range">
                            <Input placeholder="đ TỪ" />
                            <span className="shopee-price-line"></span>
                            <Input placeholder="đ ĐẾN" />
                        </div>
                        <Button className="shopee-price-btn">Áp dụng</Button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

CategoryFilter.propTypes = {

};

export default CategoryFilter;