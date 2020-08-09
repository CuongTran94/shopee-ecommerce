import React from 'react';
import { Card, Avatar, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import { CommentOutlined, ShopOutlined } from '@ant-design/icons';
import './styles.scss';
const { Meta } = Card;

const ShopInfo = () => {
    const renderShopName = () => {
        return (
            <React.Fragment>
                <div className="product-shop-name">phuoccuong</div>
                <div className="product-shop-time">Online 6 Giờ Trước</div>
            </React.Fragment>
        );
    }

    const renderShopAction = () => {
        return (
            <React.Fragment>
                <Button className="btn-chat" icon={<CommentOutlined />}>Chat ngay</Button>
                <Button className="btn-shop" icon={<ShopOutlined />}>Xem shop</Button>
            </React.Fragment>
        );
    }

    return (
        <div className="detail-product-shop">
            <div className="container">
                <div className="detail-page-inner product-shop">
                    <Row>
                        <Col span={9}>
                            <Card bordered={false}>
                                <Meta 
                                    avatar={
                                        <Avatar src="https://cf.shopee.vn/file/2dc5489c0622aefcd161ff6fd483ea9f_tn" />
                                    }
                                    title={renderShopName()}
                                    description={renderShopAction()}
                                />
                            </Card>
                        </Col>
                        <Col span={15}>
                            <div className="product-shop-info">
                                <div className="info-item">
                                    <span>Đánh giá <span className="info-hl">4,7k</span></span>
                                    <span>Sản phẩm <span className="info-hl">237</span></span>
                                </div>
                                <div className="info-item">
                                    <span>Tỉ lệ phản hồi <span className="info-hl">100%</span></span>
                                    <span>Thời gian phản hồi <span className="info-hl">Trong vài phút</span></span>
                                </div>
                                <div className="info-item">
                                    <span>Tham gia <span className="info-hl">1 ngày trước</span></span>
                                    <span>Sản phẩm <span className="info-hl">237</span></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

ShopInfo.propTypes = {
    
};

export default ShopInfo;