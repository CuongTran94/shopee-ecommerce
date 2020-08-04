import React from 'react';
import { Tabs, Button } from 'antd';
import './styles.scss';
import ListProduct from '../../../../components/ListProduct';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

const HotProduct = (props) => {
    return (
        <div className="container">
            <div className="hot-product">
                <Tabs defaultActiveKey="1" className="hot-product-tab">
                    <TabPane tab="Gợi ý hôm nay" key="1">
                        <ListProduct {...props} />
                    </TabPane>
                    <TabPane className="tab-sale" tab="" key="2">
                        <ListProduct {...props} />
                    </TabPane>
                </Tabs>
            </div>
            <div className="load-more">
                <Link to="/daily_discover">
                    <Button>Xem thêm</Button>
                </Link>
            </div>
        </div>
    );
};

export default HotProduct;