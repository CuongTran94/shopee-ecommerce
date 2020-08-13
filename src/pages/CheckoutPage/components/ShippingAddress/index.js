import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Radio, Typography, Select } from 'antd';
import './styles.scss';

const { Title } = Typography;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const ShippingAddress = () => {
    const [state, setState] = useState('male');
    const handleChange = (e) => {
        setState(e.target.value);
    }

    return (
        <div className="checkout-address">
            <Title level={3}>Thông tin người mua</Title>
            <Form {...layout} name="form-shipping">
                <Form.Item name="gender">
                    <Radio.Group defaultValue={state} onChange={handleChange}>
                        <Radio value="male">Anh</Radio>
                        <Radio value="female">Chị</Radio>
                    </Radio.Group>                    
                </Form.Item>
                <Form.Item
                    label="Họ tên"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"                    
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ghi chú"
                    name="note"                    
                >
                    <Input.TextArea 
                        autoSize={{ minRows: 4, maxRows: 6 }}
                    />
                </Form.Item>
                <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!' }]}                    
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    label="Tỉnh/Thành phố"
                    name="country"
                    rules={[{ required: true, message: 'Please select your country!' }]}
                >
                    <Select placeholder="Chọn tỉnh/thành phố">
                        <Select.Option value="DN">Đà Nẵng</Select.Option>
                        <Select.Option value="HCM">Hồ Chí Minh</Select.Option>
                        <Select.Option value="HN">Hà Nội</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{span: 24}} style={{textAlign: "right"}}>
                    <Button htmlType="submit" className="btn-checkout">
                        Tiếp tục
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

ShippingAddress.propTypes = {
    
};

export default ShippingAddress;