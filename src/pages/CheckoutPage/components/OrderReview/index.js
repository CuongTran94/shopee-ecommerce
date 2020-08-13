import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './styles.scss';

const OrderReview = () => {
    return (
        <div className="order-review">
            <div className="order-review-head d-flex">
                <Link to="/"><LeftOutlined /> Tiếp tục mua hàng</Link>
                <span>Giỏ hàng (1)</span>
            </div>
            <div className="order-review-main">
                <div className="order-review-list__product">
                    <div className="order-review-product">
                        <img src="https://firebasestorage.googleapis.com/v0/b/shopee-ad17d.appspot.com/o/images%2Fproduct_36.jpg?alt=media&token=afe4c59c-ee80-41d8-8a49-78fad95e3932" alt="" />
                        <span className="order-review-product__name">Samsung Galaxy Tab A 10.1" (2019), 32Gb</span>
                        <div className="order-review-num">
                            <span className="order-review-num__price">7.990.000₫</span>
                            <span>Số lượng</span>
                            <span>1</span>
                        </div>
                    </div>
                    <div className="order-review-product">
                        <img src="https://firebasestorage.googleapis.com/v0/b/shopee-ad17d.appspot.com/o/images%2Fproduct_36.jpg?alt=media&token=afe4c59c-ee80-41d8-8a49-78fad95e3932" alt="" />
                        <span className="order-review-product__name">Samsung Galaxy Tab A 10.1" (2019), 32Gb</span>
                        <div className="order-review-num">
                            <span className="order-review-num__price">7.990.000₫</span>
                            <span>Số lượng</span>
                            <span>1</span>
                        </div>
                    </div>
                </div>
                <div className="order-review-total">
                    <div className="d-flex">
                        <span>Tạm tính:</span>
                        <span className="org-cl">7.990.000đ</span>
                    </div>
                    <div className="d-flex">
                        <span>Phí vận chuyển:</span>
                        <span className="org-cl">0đ</span>
                    </div>
                    <div className="d-flex">
                        <span>Tổng tiền:</span>
                        <span className="org-cl">7.990.000đ</span>
                    </div>
                </div>                
            </div>
        </div>
    );
};

OrderReview.propTypes = {
    
};

export default OrderReview;