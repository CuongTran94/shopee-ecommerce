import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import './styles.scss';

const BreadcrumbShopee = (props) => {
    const { pro_name} = props;

    return (
        <div className="shopee-breadcrum">
            <div className="container">
                <Breadcrumb separator={<RightOutlined />}>
                    <Breadcrumb.Item>
                        <Link to="/">Shopee</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/">{pro_name}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    );
};

export default BreadcrumbShopee;