import React from 'react';
import { SketchOutlined, DollarCircleOutlined  } from '@ant-design/icons';
import './styles.scss';
import { Checkbox, Button } from 'antd';

const CartTotal = () => {
    return (
        <div className="detail-cart-total">
            <div className="container">
                <div className="detail-cart-inner">
                    <div className="detail-cart-total-col detail-cart-voucher">
                        <span><SketchOutlined style={{ fontSize: '20px', color: '#21df21' }} /> Shopee Voucher</span>
                        <span className="detail-cart-voucher__code">Chọn hoặc nhập mã</span>
                    </div>
                    <div className="detail-cart-total-col__border"></div>
                    <div className="detail-cart-total-col__check"></div>    
                    <div className="detail-cart-total-col__title">
                        <span className="detail-cart-xu"><DollarCircleOutlined style={{ fontSize: '20px', color: '#21df21' }} /> Shopee Xu</span>
                        <span>Bạn chưa có Shopee Xu</span>
                    </div>
                    <div className="detail-cart-total-col__value">
                        <span>₫0</span>
                    </div>
                    <div className="detail-cart-total-col__border"></div>
                    <div className="detail-cart-total-col__checkout">
                        <Checkbox className="all-text">  Chọn tất cả (1)</Checkbox>
                        <div className="detail-cart-summary">
                            <span>Tổng tiền hàng (1 Sản phẩm):</span>
                            <span className="detail-cart-summary__total">₫1.800.000</span>
                            <Button className="detail-cart-summary__buy">Mua hàng</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;