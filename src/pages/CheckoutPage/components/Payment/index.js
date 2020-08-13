import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, Avatar, Typography, Radio, Button } from 'antd';
import './styles.scss';
import cod from '../../../../assets/images/checkout1.jpg';
import bank from '../../../../assets/images/checkout2.png';

const { Title } = Typography;
const data = [
    {
        img: cod,
        title: 'Thanh toán khi nhận hàng',
        description: 'Thanh toán khi nhận hàng (chỉ áp dụng cho khu vực giao hàng miễn phí)',
        action: 'cod'
    },
    {
        img: bank,
        title: 'Thẻ ATM/Internet Banking',
        description: 'Thanh toán nhanh với thẻ ATM nội địa có đăng ký Internet Banking',
        action: 'bank_transfer'
    }
];

const PaymentMethod = () => {
    const [state, setState] = useState('cod');

    const handleChange = (e) => {
        setState(e.target.value);
    };

    return (
        <div className="checkout-payment">
            <Title level={3}>Hình thức thanh toán</Title>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Radio 
                                checked={item.action === state ? true : false} 
                                name={item.action} 
                                value={item.action}
                                onChange={handleChange} 
                            />
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.img} />}
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )} 
            />
            <Button className="btn-checkout">Thanh toán</Button>
        </div>
    );
};

PaymentMethod.propTypes = {
    
};

export default PaymentMethod;