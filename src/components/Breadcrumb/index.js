import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import './styles.scss';

const BreadcrumbShopee = () => {
    return (
        <div className="shopee-breadcrum">
            <div className="container">
                <Breadcrumb separator={<RightOutlined />}>
                    <Breadcrumb.Item>
                        <Link to="/">Shopee</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/">Laptop Dell Latitude E5500, Intel Core 2 Duo</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    );
};

export default BreadcrumbShopee;