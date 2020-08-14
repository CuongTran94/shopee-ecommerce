import React from 'react';
import PropTypes from 'prop-types';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';

const CheckoutSuccess = () => {
    return (
        <div className="checkout-success">
            <Result 
                status="success"
                title="Cảm ơn bạn đã đặt hàng!"
                subTitle="Chúng tôi sẽ liên hệ đến bạn để xác nhận việc đặt hàng. Xin vui lòng kiểm tra điện thoại của bạn"
                extra={[
                    <Link to="/" key="buy">
                        <Button className="btn-buy">
                            Tiếp tục mua hàng
                        </Button>
                    </Link>,
                    <Link to="/" key="order">
                        <Button>
                            Đơn hàng
                        </Button>
                    </Link>,
                ]}
            />
        </div>
    );
};

CheckoutSuccess.propTypes = {
    
};

export default CheckoutSuccess;