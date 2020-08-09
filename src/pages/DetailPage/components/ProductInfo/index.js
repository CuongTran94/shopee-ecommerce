import React from 'react';
import { Row, Col, Typography, Button, Input, Divider } from 'antd';
import { StarFilled, MinusOutlined, PlusOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import './styles.scss';

const { Title } = Typography;

const ProductInfo = () => {
    return (
        <div className="detail-product-info">
            <div className="container">
                <div className="detail-page-inner product-info">
                    <Row>
                        <Col md={{span: 10}}>
                            <div className="detail-pro-media">
                                <div className="detail-pro-img">
                                    <div className="img-avatar">
                                        <img alt="" src="https://cf.shopee.vn/file/a54a2e1563e682785df599e6ea8c4878" />
                                    </div>
                                    <div className="img-thumbnail">
                                        <div className="img-item">
                                            <img src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn" alt="" />
                                        </div>
                                        <div className="img-item">
                                            <img src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn" alt="" />
                                        </div>
                                        <div className="img-item">
                                            <img src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn" alt="" />
                                        </div>
                                        <div className="img-item">
                                            <img src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn" alt="" />
                                        </div>
                                        <div className="img-item">
                                            <img src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-pro-share">
                                    <div className="detail-pro-social">
                                        <div>Chia sẽ:</div>
                                        <Button shape="circle" icon={<span className="icon-share icon-share-mes"></span>} />
                                        <Button shape="circle" icon={<span className="icon-share icon-share-fb"></span>} />
                                        <Button shape="circle" icon={<span className="icon-share icon-share-gp"></span>} />
                                        <Button shape="circle" icon={<span className="icon-share icon-share-pr"></span>} />
                                        <Button shape="circle" icon={<span className="icon-share icon-share-tw"></span>} />
                                    </div>
                                    <div className="detail-pro-liked">
                                        <HeartOutlined />
                                        <span>Đã thích (62)</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={{span: 14}}>
                            <div className="detail-pro-info">
                                <Title level={3} className="detail-pro-title">Giày nữ cao cổ đổi màu khi ra nắng mẫu hot nhất mùa hè 2020 mã A1</Title>
                                <div className="detail-pro-review">
                                    <div className="rv-text star-rate">
                                        <span className="rv-text-border star-rate-num">5</span>
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                    </div>
                                    <div className="rv-text">
                                        <span className="rv-num rv-text-border">4,2k</span>
                                        <span>Đánh giá</span>
                                    </div>
                                    <div className="rv-text">
                                        <span className="rv-num rv-text-border">5,4k</span>
                                        <span>Đã bán</span>
                                    </div>
                                </div>
                                <div className="detail-pro-price">
                                    <span className="old-price">
                                        <span className="small">đ</span>119.000
                                    </span>
                                    <span className="new-price">
                                        <span className="small">đ</span>105.000
                                    </span>
                                    <span className="discount-price">10% giảm</span>
                                </div>
                                <div className="detail-shipping">
                                    <div className="detail-shipping-meta">
                                        Vận chuyển
                                    </div>
                                    <div className="detail-shipping-main">
                                        <div className="detail-shipping-text free">
                                            <div className="text-black">Miễn Phí Vận Chuyển</div>
                                            <div>Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu</div>
                                        </div>
                                        <div className="detail-shipping-text delivery">
                                            <div className="text-black">Vận Chuyển Tới Đà Nẵng</div>
                                            <div>Phí Vận Chuyển đ45.000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-quantity">
                                    <span className="detail-shipping-meta">Số lượng</span>
                                    <div className="detail-number">
                                        <Button icon={<MinusOutlined />} />
                                        <Input defaultValue={1} readOnly={true} />
                                        <Button icon={<PlusOutlined />} />
                                    </div>
                                    <span>100 sản phẩm</span>
                                </div>
                                <div className="detail-btn-buy">
                                    <Button icon={<ShoppingCartOutlined />} className="btn-cart">Thêm vào giỏ hàng</Button>
                                    <Button className="btn-bought">Mua ngay</Button>
                                </div>
                                <Divider />
                                <div className="detail-policy">
                                    <span className="detail-policy-protect text-black">Shopee đảm bảo</span>
                                    <span>3 Ngày Trả Hàng / Hoàn Tiền</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>                                
            </div>
        </div>
    );
};

export default ProductInfo;