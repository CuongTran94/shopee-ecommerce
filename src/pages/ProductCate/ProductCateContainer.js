import React from 'react';
import { Row } from 'antd';
import CategoryFilter from './components/CategoryFilter';
import SortInfo from './components/SortInfo';

const ProductCateContainer = () => {
    return (
        <div
            className="shopee-filter-page"
            style={{
                marginTop: 118,
                overflow: 'hidden',
                marginBottom: 60
            }}
        >
            <div className="container">
                <Row>
                    <CategoryFilter />
                    <SortInfo />
                </Row>
            </div>
        </div>
    );
};

export default ProductCateContainer;